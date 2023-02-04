<template>
  <div class="activities">
    <form action="#" @submit.prevent="fetchActivities">
      <div>
        <label for="start">Start</label>
        <input type="date" name="start" id="start" v-model="start"/>
      </div>
      <div>
        <label for="end">End</label>
        <input type="date" name="end" id="end" v-model="end"/>
      </div>
      <div>
        <input type="submit" value="Fetch activities"/>
        <input type="submit" value="Caclculate selected activites" @click="getStreams">
      </div>
    </form>
    <table class="activities">
      <thead>
      <tr>
        <th><input type="checkbox" name="activities" id="select-all" @change="toggleAll"></th>
        <th>Date</th>
        <th>Name</th>
        <th>TSS</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="activity, id in activities" :key="id">
        <td><input type="checkbox" v-model="activity.checked" name="activities[]" id=""></td>
        <td>
          <a target="_blank" :href="'https://strava.com/activities/' + id">
            {{ new Date(activity.start_date).toISOString().split('T')[0] }}
          </a>
        </td>
        <td>
          <router-link :to="'/activities/' + activity.id">{{ activity.name }}</router-link>
        </td>
        <td v-if="activity.tss">
          {{ Math.round(activity.tss * 100) / 100 }}
        </td>
        <td v-else>
          <a @click.prevent="getStreams" href="#">Calculate</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <router-view/>
</template>
<script>
import StravaClient from "@/services/StravaClient";
import Importer from "@/services/Importer";
import Storage from "@/services/Storage";

export default {
  name: "Activities",
  data() {
    return {
      start: new Date().toISOString().split("T")[0],
      end: new Date().toISOString().split("T")[0],
      activities: {},
      streams: [],
      selectAll: false,
    };
  },
  methods: {
    async toggleAll() {
      this.selectAll = !this.selectAll;
      for (let id of Object.keys(this.activities)) {
        this.activities[id].checked = this.selectAll;
      }
    },
    async fetchActivities() {
      const start = new Date(this.start);
      const end = new Date(this.end);
      // Add a day because by default its 00:00.
      end.setTime(end.getTime() + 1000 * 60 * 60 * 24);

      const activities = await StravaClient.getActivities(start, end);
      const activitiesById = activities.reduce(
          (prev, curr) => {
            prev[curr.id] = curr;
            return prev;
          },
          {}
      );

      this.activities = {
        ...activitiesById,
        ...this.activities,
      };

      await this.save();
    },
    async save() {
      await Storage.setItem(
          "activities",
          JSON.parse(JSON.stringify(this.activities))
      );
    },
    async getStreams() {
      const ids = Object.values(this.activities).filter(activity => activity.checked && !activity.tss).map(activity => activity.id);
      const activities = await Importer.importStreams(ids);
      for (const activity of activities) {
        this.activities[activity.id] = activity;
      }
      this.streams = [];
    },
  },
  async created() {
    // Load the activities.
    let activities = (await Storage.getItem("activities")) || {};

    // Sort the activities.
    activities = Object.keys(activities)
        .sort()
        .reverse()
        .reduce((carry, value) => {
          carry[parseInt(value)] = activities[parseInt(value)];
          return carry;
        }, {});

    this.activities = activities;

    for (const id of Object.keys(activities)) {
      const activity = await Storage.getItem('activity.' + id);
      if (activity && activity.tss) {
        this.activities[id].tss = activity.tss;
      }
    }
  },
}
</script>

<style>
table.activities tbody tr:hover {
  background-color: var(--background);
}
</style>

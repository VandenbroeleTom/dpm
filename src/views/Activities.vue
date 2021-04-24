<template>
  <div class="activities">
    <form action="#" @submit.prevent="fetchActivities">
      <div>
        <label for="start">Start</label>
        <input type="date" name="start" id="start" v-model="start" />
      </div>
      <div>
        <label for="end">End</label>
        <input type="date" name="end" id="end" v-model="end" />
      </div>
      <div>
        <input type="submit" value="Fetch activities" />
      </div>
    </form>
    <form action="#" @submit.prevent="getStreams">
      <div>
        <input type="submit" value="Get streams" />
      </div>
      <div class="activity" v-for="activity in activities" :key="activity.id">
        <input
          type="checkbox"
          name="stream"
          :id="'stream-' + activity.id"
          :value="activity.id"
          v-model="streams"
        />
        <label :for="'stream-' + activity.id">
          {{ activity.start_date }}: {{ activity.name }}
          <router-link :to="'/activities/' + activity.id">View</router-link>
        </label>
      </div>
    </form>
  </div>

  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StravaClient from "@/services/StravaClient";
import Importer from "@/services/Importer";
import Storage from "@/services/Storage";

export default defineComponent({
  name: "Activities",
  data() {
    return {
      start: new Date().toISOString().split("T")[0],
      end: new Date().toISOString().split("T")[0],
      activities: {},
      streams: [],
    };
  },
  methods: {
    async fetchActivities() {
      const start = new Date(this.start);
      const end = new Date(this.end);
      // Add a day because by default its 00:00.
      end.setTime(end.getTime() + 1000 * 60 * 60 * 24);

      const activities: { id: number }[] = await StravaClient.getActivities(
        start,
        end
      );
      const activitiesById: { [key: number]: {} } = activities.reduce(
        (prev, curr) => {
          prev[curr.id] = curr;
          return prev;
        },
        {} as { [key: number]: {} }
      );

      this.activities = {
        ...this.activities,
        ...activitiesById,
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
      const ids = Object.values(this.streams);
      await Importer.importStreams(ids);
      this.streams = [];
    },
  },
  async created() {
    // Load the activities.
    let activities: { [key: number]: {} } =
      (await Storage.getItem("activities")) || {};

    // Sort the activities.
    activities = Object.keys(activities)
      .sort()
      .reverse()
      .reduce((carry, value) => {
        carry[parseInt(value)] = activities[parseInt(value)];
        return carry;
      }, {} as { [key: number]: {} });

    this.activities = activities;
  },
});
</script>

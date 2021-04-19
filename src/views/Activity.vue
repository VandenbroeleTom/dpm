<template>
  <div class="activity">
    <h1>{{ activity.name }}</h1>
    <dl>
      <dt>TSS</dt>
      <dd>{{ activity.tss }}</dd>
      <dt>Start date</dt>
      <dd>{{ activity.start_date }}</dd>
    </dl>
    <button @click="reload">Reload</button>
    <button @click="getStream(activity.id)">Get stream</button>
    <button v-if="activity.time" @click="showChart">Show chart</button>

    <div class="chart">
      <v-chart :option="option"></v-chart>
    </div>
  </div>
</template>
<script lang="ts">
import localforage from "localforage";
import StravaClient from "../services/StravaClient";
import Calculator from "../services/Calculator";
import VChart from "vue-echarts";
import "echarts";
import { defineComponent } from "vue";
import { Activity } from "@/types/Activity";
import Importer from "@/services/Importer";

export default defineComponent({
  name: "Activity",
  components: {
    VChart: VChart
  },
  data() {
    return {
      activity: {} as any,
      option: {}
    };
  },
  methods: {
    async calculateTSS() {
      this.activity.tss = await Calculator.getTss(this.activity);
    },
    async reload() {
      // const id = this.$route.params.id;
      // const activity = await StravaClient.getActivity(id);
      // await localforage.setItem("activity." + id, activity);
      // this.activity = activity;
    },
    async getStream(id: number) {
      await Importer.importStream(id);
    },
    showChart() {
      this.option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["HR"]
        },
        xAxis: {
          data: this.activity.time.data
        },
        yAxis: {},
        series: [
          {
            name: "HR",
            type: "line",
            data: this.activity.heartrate.data
          }
        ]
      };
    }
  },
  async created() {
    let id = this.$route.params.id;
    let activity = await localforage.getItem("activity." + id);

    if (Array.isArray(id)) {
      id = id[0];
    }

    if (!activity) {
      // Get it from strava.
      activity = await StravaClient.getActivity(parseInt(id));
      await localforage.setItem("activity." + id, activity);
    }
    this.activity = activity as Activity;
  }
});
</script>
<style scoped>
canvas {
  border: 1px solid black;
}

.chart {
  height: 600px;
}
</style>

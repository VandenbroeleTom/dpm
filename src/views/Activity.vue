<template>
  <div class="activity">
    <h1>{{ activity.name }}</h1>
    <dl>
      <dt>TSS</dt>
      <dd>{{ activity.tss }}</dd>
      <dt>Start date</dt>
      <dd>{{ activity.start_date }}</dd>
    </dl>
    <button @click="getStream(activity.id)">Get stream</button>
    <button v-if="activity.time" @click="showChart">Show chart</button>

    <div class="chart">
      <v-chart :option="option"></v-chart>
    </div>
  </div>
</template>
<script>
import StravaClient from "../services/StravaClient";
import Storage from "@/services/Storage";
import Calculator from "../services/calculators/tss-calculator";
import VChart from "vue-echarts";
import "echarts";
import {defineComponent} from "vue";
import Importer from "@/services/Importer";

export default defineComponent({
  name: "Activity",
  components: {
    VChart: VChart,
  },
  data() {
    return {
      activity: {},
      option: {},
    };
  },
  methods: {
    async getStream(id) {
      this.activity = await Importer.importStream(id);
    },
    showChart() {
      this.option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["HR"],
        },
        xAxis: {
          data: this.activity.time.data,
        },
        yAxis: {},
        series: [
          {
            name: "HR",
            type: "line",
            data: (this.activity.heartrate || {}).data || [],
          },
        ],
      };
    },
  },
  async created() {
    const id = this.$route.params.id;
    let activity = await Storage.getItem("activity." + id);

    if (!activity) {
      // Get it from strava.
      activity = await StravaClient.getActivity(id);
      await Storage.setItem("activity." + id, activity);
    }
    this.activity = activity;

    if (this.activity.time) {
      this.showChart()
    }
  },
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

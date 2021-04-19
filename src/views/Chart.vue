<template>
  <div class="chart">
    <form action="#" @submit.prevent="calculate">
      <div>
        <label for="start">Start</label>
        <input v-model="start" type="date" name="start" id="start" />
      </div>
      <div>
        <label for="end">End</label>
        <input v-model="end" type="date" name="end" id="end" />
      </div>
      <div>
        <input type="submit" value="Calculate" />
      </div>
    </form>
    <v-chart :option="option"></v-chart>
  </div>
</template>
<script>
import "echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { defineComponent } from "vue";
import * as localforage from "localforage";
import { Days } from "@/types/Days";
import TSBCalculator from "@/services/TSBCalculator";
import { Day } from "@/types/Day";
import { Activity } from "@/types/Activity";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "Chart",
  components: {
    VChart
  },
  data() {
    return {
      start: "2021-01-01",
      end: "2021-04-01",
      days: [],
      option: {}
    };
  },
  methods: {
    async calculate() {
      // Get all days.
      const days = this.getDays();

      // Add activities to days.
      const activities = await localforage.getItem("activities");
      for (const id in activities) {
        const activity = await localforage.getItem("activity." + id);

        if (!activity) {
          // Not yet loaded.
          // FIXME: Set an error message.
          continue;
        }

        console.log(activity);
        const activityDate = new Date(activity.start_date)
          .toISOString()
          .split("T")[0];

        if (!days[activityDate]) {
          continue;
        }

        if (!days[activityDate].tss) {
          days[activityDate].tss = 0;
        }

        days[activityDate].tss += activity.tss;
      }

      // Calculate form / fitness.
      let yesterday = {
        tss: 0
      };
      for (const date in days) {
        const today = days[date];

        days[date] = {
          ...today,
          ...TSBCalculator.getValue(yesterday, today)
        };

        // Next day.
        yesterday = days[date];
      }

      await localforage.setItem("days", days);
      this.days = days;
      this.setOptions(days);
    },
    getDays() {
      const date = new Date(this.start);
      const days = {};
      const end = new Date(this.end);

      while (date.getTime() <= end.getTime()) {
        days[date.toISOString().split("T")[0]] = {
          date: date.toISOString().split("T")[0]
        };

        // Next day.
        date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
      }

      return days;
    },
    setOptions(days) {
      this.option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["Atl", "Ctl", "Form", "TSS"]
        },
        xAxis: {
          data: Object.values(days).map(day => day.date)
        },
        yAxis: {},
        series: [
          {
            type: "line",
            markLine: {
              data: [
                {
                  name: "Today",
                  xAxis: new Date().toISOString().split("T")[0]
                }
              ]
            }
          },
          {
            name: "TSS",
            type: "scatter",
            data: Object.values(days)
              .filter(day => day.tss)
              .map(day => {
                  return {
                      value: [day.date, Math.round(day.tss)],
                      name: 'hoi',
                    }
                }),
            markLine: {
              data: [
                {
                  yAxis: 25
                }
              ]
            }
          },
          {
            name: "Form",
            type: "line",
            data: Object.values(days).map(day => [day.date, day.form])
          },
          {
            name: "Atl",
            type: "line",
            data: Object.values(days).map(day => [day.date, day.atl])
          },
          {
            name: "Ctl",
            type: "line",
            data: Object.values(days).map(day => [day.date, day.ctl])
          }
        ]
      };
    }
  },
  async created() {
    const days = (await localforage.getItem("days")) || {};
    this.setOptions(days);
  }
});
</script>
<style scoped>
.chart {
  height: 600px;
}
</style>

<template>
  <div class="chart">
    <form action="#" @submit.prevent="calculate">
      <div>
        <input type="radio" v-model="chart" name="chart" id="tsb" value="tsb">
        <label for="tsb">TSB</label>
      </div>
      <div>
        <input type="radio" v-model="chart" name="chart" id="bannister" value="bannister">
        <label for="bannister">Bannister</label>
      </div>
      <div>
        <input type="radio" disabled="disabled" v-model="chart" name="chart" id="busso" value="busso">
        <label for="busso">Busso</label>
      </div>
      <input type="submit" value="Calculate" />
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
import {tsb, values} from "@/services/calculators/tsb-calculator";
import Storage from '@/services/Storage';
import {bannister} from "@/services/calculators/bannister-calculator";

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
      chart: "tsb",
      days: [],
      option: {}
    };
  },
  methods: {
    async calculate() {
      const ids = Object.keys(await Storage.getItem("activities"));
      const activities = [];

      for (const id of ids) {
        const activity = await Storage.getItem("activity." + id);
        if (activity) {
          activities.push(activity);
        }
      }

      await Storage.setItem("tsb", tsb(activities));
      await Storage.setItem("bannister", bannister(activities));

      this.setOptions(await Storage.getItem(this.chart));
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
  watch: {
    chart: async function (chart) {
      const days = (await Storage.getItem(chart)) || {};
      this.setOptions(days);
    }
  },
  async created() {
    this.chart = (await Storage.getItem("config") || { chart: "tsb"}).chart;
    const days = (await Storage.getItem(this.chart)) || {};
    this.setOptions(days);
  }
});
</script>
<style scoped>
.chart {
  height: 600px;
}
</style>

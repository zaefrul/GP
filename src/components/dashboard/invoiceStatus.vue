<template>
  <div id="invoiceStatus" class="content-margin-top">
    <div class="card">
      <h5 class="card-header">Invoice Status</h5>
      <div class="card-body" style="position: relative; height: 500px;">
        <div class="chart-item" style="width: 600px;height:400px;position: absolute;left:-23%;">
          <canvas id="planet-chart"></canvas>
        </div>
        <div class="chartLegend">
          <div class="legendRow" v-for="(item, key, index) in projectsData" :key="index">
            <i class="fas fa-circle legendColorBlue"></i>
            <span class="legendStatus">{{ key }}</span>
            <span class="legendTotal">{{ item }}</span>
          </div>
          <!-- <div class="legendRow">
            <i class="fas fa-circle legendColorYellow"></i>
            <span class="legendStatus">In-Progress</span>
            <span class="legendTotal">231</span>
          </div>
          <div class="legendRow">
            <i class="fas fa-circle legendColorRed"></i>
            <span class="legendStatus">Completed</span>
            <span class="legendTotal">213</span>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chart-data.js";
import { ProjectLandingAdapter } from "../../classess/adapter";
let planetChart = { ...planetChartData };
export default {
  name: "invoiceStatus",
  props: {
    projects: []
  },
  data() {
    return {
      planetChartData: planetChart,
      projectsData: null
    };
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
    reformatData() {
      let data = this.projects.map(data => new ProjectLandingAdapter(data));
      let stage = {};
      data.map(d => {
        typeof stage[d.stage] !== "undefined"
          ? (stage[d.stage] += 1)
          : (stage[d.stage] = 1);
      });
      return stage;
    }
  },
  watch: {
    projects(val) {
      this.projectsData = this.reformatData();
      let keys = [];
      let values = [];

      for (let key in this.projectsData) {
        keys.push(key);
        values.push(this.projectsData[key]);
      }
      this.planetChartData.data.labels = [...keys];
      this.planetChartData.data.datasets[0].data = [...values];
      this.createChart("planet-chart", this.planetChartData);
    }
  }
};
</script>

<style>
.chartLegend {
  margin-top: 340px;
}
.legendColorBlue {
  color: #312de2;
}
.legendColorYellow {
  color: #ffb892;
}
.legendColorRed {
  color: #f3496e;
}
.legendRow {
  background: #f2f2f2;
  padding: 5px 25px;
  border-radius: 20px;
  margin-bottom: 8px;
}
span.legendTotal {
  font-weight: bold;
  text-align: right;
  float: right;
}
span.legendStatus {
  margin: 0 10px;
}
</style>

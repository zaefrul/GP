<template>
    <div id="invoiceStatus" class="content-margin-top">
      <div class="card">
        <h5 class="card-header">Invoice Status</h5>
        <div class="card-body" style="position: relative; height: 500px;">
          <div class="chart-item" style="width: 600px;height:400px;position: absolute;left:-23%;">
            <canvas id="planet-chart"></canvas>
          </div>
          <div class="chartLegend">
            <div class="legendRow">
              <i class="fas fa-circle legendColorBlue"></i>
              <span class="legendStatus">Completed</span>
              <span class="legendTotal">400</span>
            </div>
            <div class="legendRow">
              <i class="fas fa-circle legendColorYellow"></i>
              <span class="legendStatus">In-Progress</span>
              <span class="legendTotal">231</span>
            </div>
            <div class="legendRow">
              <i class="fas fa-circle legendColorRed"></i>
              <span class="legendStatus">Completed</span>
              <span class="legendTotal">213</span>
            </div>
          </div>
         </div>
      </div>
    </div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data.js';


export default {
  name: 'invoiceStatus',
  data() {
    return {
      planetChartData: planetChartData,
    }
  },
    methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  }
}
</script>

<style>
.chartLegend{
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
export const planetChartData = {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        // one line graph
        label: "Number of Moons",
        data: [],
        backgroundColor: [
          "#312de2cc", //Blue
          "#ffb892cc", //yellow
          "#f3496ecc" // Red
        ],
        borderColor: ["#312de2", "#ffb892", "#f3496e"],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    legend: false
  }
};

export default planetChartData;

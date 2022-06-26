<template>
  <div class="main">
    <h1>Аналитика</h1>
    <h2>Аналитика по визитам</h2>
    <div class="hello" ref="chartdiv"></div>

    <div class="button"><vs-button @click="exit()"> Выйти </vs-button></div>
  </div>
</template>


<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default {
  data() {
    return {};
  },
  name: "analytics",
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push("/auth");
      console.log(localStorage.length);
    },
  },
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );
    chart.get("colors").set("colors", [am5.color("#800080")]);
    // Define data
    let data = [
      { date: new Date(2020, 6, 1).getTime(), value: 213 },
      { date: new Date(2020, 6, 2).getTime(), value: 249 },
      { date: new Date(2020, 6, 3).getTime(), value: 179 },
      { date: new Date(2020, 6, 4).getTime(), value: 170 },
      { date: new Date(2020, 6, 5).getTime(), value: 184 },
      { date: new Date(2020, 6, 6).getTime(), value: 202 },
      { date: new Date(2020, 6, 7).getTime(), value: 198 },
      { date: new Date(2020, 6, 8).getTime(), value: 168 },
      { date: new Date(2020, 6, 9).getTime(), value: 176 },
      { date: new Date(2020, 6, 10).getTime(), value: 171 },
      { date: new Date(2020, 6, 11).getTime(), value: 190 },
      { date: new Date(2020, 6, 12).getTime(), value: 154 },
      { date: new Date(2020, 6, 13).getTime(), value: 246 },
      { date: new Date(2020, 6, 14).getTime(), value: 250 },
      { date: new Date(2020, 6, 15).getTime(), value: 227 },
      { date: new Date(2020, 6, 16).getTime(), value: 140 },
      { date: new Date(2020, 6, 17).getTime(), value: 170 },
      { date: new Date(2020, 6, 18).getTime(), value: 125 },
      { date: new Date(2020, 6, 19).getTime(), value: 106 },
      { date: new Date(2020, 6, 20).getTime(), value: 207 },
      { date: new Date(2020, 6, 21).getTime(), value: 222 },
      { date: new Date(2020, 6, 22).getTime(), value: 198 },
      { date: new Date(2020, 6, 23).getTime(), value: 204 },
      { date: new Date(2020, 6, 24).getTime(), value: 213 },
      { date: new Date(2020, 6, 25).getTime(), value: 145 },
      { date: new Date(2020, 6, 26).getTime(), value: 166 },
      { date: new Date(2020, 6, 27).getTime(), value: 163 },
      { date: new Date(2020, 6, 28).getTime(), value: 135 },
      { date: new Date(2020, 6, 29).getTime(), value: 45 },
    ];

    // Create Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 5 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
        }),
      })
    );

    // Create series
    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        connect: false,
      })
    );
    series.strokes.template.setAll({
      strokeWidth: 4,
    });
    series.fills.template.setAll({
      fillOpacity: 0.35,
      visible: true,
      fill: "#000000",
    });
   
    series.data.setAll(data);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));
  },
};
</script>
<style scoped>
.hello {
  width: 100%;
  height: 600px;
}
button {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  margin-top: 1%;
}
.main {
  margin-top: 1%;
  font-family: Alfa Slab -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  margin-top: 1%;
}

#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
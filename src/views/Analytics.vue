<template>
  <div class="main">
    <h1>Аналитика</h1>
    <h2>Аналитика по визитам</h2>
    <div id="chartdiv"></div>

    <div class="button"><vs-button @click="exit()"> Выйти </vs-button></div>
  </div>
</template>


<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
export default {
  data() {
    var chart = AmCharts.makeChart("chartdiv", {
      type: "serial",
      theme: "light",
      dataProvider: [
        {
          country: "USA",
          visits: 2025,
        },
        {
          country: "China",
          visits: 1882,
        },
        {
          country: "Japan",
          visits: 1809,
        },
        {
          country: "Germany",
          visits: 1322,
        },
        {
          country: "UK",
          visits: 1122,
        },
        {
          country: "France",
          visits: 1114,
        },
        {
          country: "India",
          visits: 984,
        },
      ],
      graphs: [
        {
          fillAlphas: 0.9,
          lineAlpha: 0.2,
          type: "column",
          valueField: "visits",
        },
      ],
      categoryField: "country",
    });
    return {};
  },
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push("/auth");
      console.log(localStorage.length);
    },
  },
};
</script>
<style scoped>
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
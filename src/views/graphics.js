import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
var root = am5.Root.new("chartdiv");

root.setThemes([am5themes_Animated.new(root)]);

var chart = AmCharts.makeChart("chartdiv",{
  "type": "serial",
  "categoryField": "category",
  "categoryAxis": {
  "gridPosition": "start"
  },
  "graphs": [
  {
  "title": "Graph title",
  "valueField": "column-1"
  }
  ],
  "valueAxes": [
  {
  "title": "Axis title"
  }
  ],
  "legend": {
  "useGraphSettings": true
  },
  "titles": [
  {
  "size": 15,
  "text": "Chart Title"
  }
  ],
  "dataProvider": [
  {
  "category": "category 1",
  "column-1": 8
  },
  {
  "category": "category 2",
  "column-1": 10
  },
  ]
 });
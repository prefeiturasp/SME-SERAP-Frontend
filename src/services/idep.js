import CONFIG from "../config";
import authService from "./auth";
import ecStat from "echarts-stat";
import echarts from "echarts";

const BASE_HEADER = {
  method: "GET",
  headers: {
    Authorization: `JWT ${authService.getToken()}`
  }
};

const rf = authService.getRF();

export const ANOS_META = {
  INICIAIS: "meta_ano_inicial",
  FINAIS: "final"
};

export const getMetaAnos = async (codEol, tipo = ANOS_META.INICIAIS) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/${codEol}`, header);
  const data = await response.json();
  return data.result[0];
};

export const getEscolas = async () => {
  let header = { ...BASE_HEADER };
  const response = await fetch(
    `${CONFIG.API_URL}/servidorescolas/${rf}`,
    header
  );
  const data = await response.json();
  return data.results;
};

export const getPorNivelSocioEconomico = async (
  nse,
  tipo = ANOS_META.INICIAIS
) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/?nse=${nse}`, header);
  const json = await response.json();
  return json;
};

export const getPorIndiceComplexidadeGestao = async (
  icg,
  tipo = ANOS_META.INICIAIS
) => {
  const header = { ...BASE_HEADER };
  const response = await fetch(`${CONFIG.API_URL}/${tipo}/?icg=${icg}`, header);
  const json = await response.json();
  return json;
};

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#c4c4c4"
      }
    }
  },
  toolbox: {
    orient: "vertical",
    feature: {
      saveAsImage: { show: true, title: "Baixar gráfico" }
    }
  },
  legend: {
    data: ["Alcançado", "Meta"]
  },
  xAxis: [
    {
      type: "category",
      data: [],
      axisPointer: {
        type: "shadow"
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "Meta",
      min: 0,
      max: 10,
      interval: 1
    }
  ],
  series: [
    {
      name: "Alcançado",
      type: "bar",
      data: [2.0, 4.9, 7.0, 5, 6, 4],
      color: "#d48265",
      barMaxWidth: 50
    },
    {
      name: "Meta",
      type: "line",
      data: [],
      color: "#91c7ae"
    }
  ]
};

var girth = [
  8.3,
  8.6,
  8.8,
  10.5,
  10.7,
  10.8,
  11.0,
  11.0,
  11.1,
  11.2,
  11.3,
  11.4,
  11.4,
  11.7,
  12.0,
  12.9,
  12.9,
  13.3,
  13.7,
  13.8,
  14.0,
  14.2,
  14.5,
  16.0,
  16.3,
  17.3,
  17.5,
  17.9,
  18.0,
  18.0,
  20.6,
  23,
  23,
  23
];

// See https://github.com/ecomfe/echarts-stat
var bins = ecStat.histogram(girth);

var interval;
var min = Infinity;
var max = -Infinity;

let data = echarts.util.map(bins.data, function(item, index) {
  var x0 = bins.bins[index].x0;
  var x1 = bins.bins[index].x1;
  interval = x1 - x0;
  min = Math.min(min, x0);
  max = Math.max(max, x1);
  return [x0, x1, item[1]];
});

function renderItem(params, api) {
  var yValue = api.value(2);
  var start = api.coord([api.value(0), yValue]);
  var size = api.size([api.value(1) - api.value(0), yValue]);
  var style = api.style();

  return {
    type: "rect",
    shape: {
      x: start[0] + 1,
      y: start[1],
      width: size[0] - 2,
      height: size[1]
    },
    style: style
  };
}

let option2 = {
  title: {
    text: "Girths of Black Cherry Trees",
    subtext: "By ecStat.histogram",
    sublink: "https://github.com/ecomfe/echarts-stat",
    left: "center",
    top: 10
  },
  color: ["rgb(25, 183, 207)"],
  grid: {
    top: 80,
    containLabel: true
  },
  xAxis: [
    {
      type: "value",
      min: min,
      max: max,
      interval: interval
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "height",
      type: "custom",
      renderItem: renderItem,
      label: {
        normal: {
          show: true,
          position: "insideTop"
        }
      },
      encode: {
        x: [0, 1],
        y: 2,
        tooltip: 2,
        label: 2
      },
      data: data
    }
  ]
};

export const getChartOption = async () => {
  const meta = await getMetaAnos(477);
  // option.xAxis[0].data = meta.anos;
  // option.series[1].data = meta.metas;
  return option2;
};

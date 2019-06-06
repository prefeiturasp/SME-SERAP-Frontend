import echarts from "echarts";
import ecStat from "echarts-stat";
import {
  ANOS_META,
  getIndicesAnoInicial,
  getMetaAnos
} from "../../services/idep";

const roundNumber = number => {
  return parseFloat(Number(number).toFixed(2));
};

export const getHistogramOption = async codEOL => {
  const meta = await getIndicesAnoInicial(codEOL);

  const { indices, indice_da_escola, erro } = meta;
  if (!indices && !indice_da_escola) {
    return `Erro: ${erro}`;
  }

  let bins = ecStat.histogram(indices);
  const colorAll = "#75BCFC";
  const colorSelected = "#FF6C7B";

  let interval;
  let min = Infinity;
  let max = -Infinity;

  let data = echarts.util.map(bins.data, (item, index) => {
    let x0 = roundNumber(bins.bins[index].x0);
    let x1 = roundNumber(bins.bins[index].x1);
    interval = roundNumber(x1 - x0);
    min = roundNumber(Math.min(min, x0));
    max = roundNumber(Math.max(max, x1));
    return [x0, x1, roundNumber(item[1])];
  });

  const renderItem = (params, api) => {
    let yValue = api.value(2);
    let start = api.coord([api.value(0), yValue]);
    let size = api.size([api.value(1) - api.value(0), yValue]);
    let style = api.style();

    if (indice_da_escola >= api.value(0) && indice_da_escola <= api.value(1)) {
      style.fill = colorSelected;
      style.textStroke = colorSelected;
    } else {
      style.fill = colorAll;
      style.textStroke = colorAll;
    }

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
  };

  // Aqui é a variavel que interessa...

  let histogramOption = {
    color: colorAll,
    grid: {
      top: 80,
      containLabel: true
    },
    xAxis: [
      {
        type: "value",
        min: min,
        max: max,
        interval: interval,
        name: "Meta",
        nameLocation: "middle",
        nameGap: 30
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "Número de escolas",
        nameLocation: "middle",
        nameGap: 30
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
  return histogramOption;
};

// const metaOption = {
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "cross",
//       crossStyle: {
//         color: "#c4c4c4"
//       }
//     }
//   },
//   toolbox: {
//     orient: "vertical",
//     feature: {
//       saveAsImage: { show: true, title: "Baixar gráfico" }
//     }
//   },
//   legend: {
//     data: ["Alcançado", "Meta"]
//   },
//   xAxis: [
//     {
//       type: "category",
//       data: [],
//       axisPointer: {
//         type: "shadow"
//       }
//     }
//   ],
//   yAxis: [
//     {
//       type: "value",
//       name: "Meta",
//       min: 0,
//       max: 10,
//       interval: 1
//     }
//   ],
//   series: [
//     {
//       name: "Alcançado inicial",
//       type: "bar",
//       data: [2.0, 4.9, 7.0, 5, 6, 4],
//       color: "#75BCFC",
//       barMaxWidth: 50
//     },
//     {
//       name: "Meta inicial",
//       type: "line",
//       data: [],
//       color: "#5E239D"
//     },
//     {
//       name: "Alcançado final",
//       type: "bar",
//       data: [2.0, 7.9, 2.0, 5, 6, 4],
//       color: "#1B80D4",
//       barMaxWidth: 50
//     }
//     // {
//     //   name: "Meta final",
//     //   type: "line",
//     //   data: [],
//     //   color: "#FF6C7B"
//     // }
//   ]
// };
let colors = ["#5793f3", "#d14a61", "#675bba"];

let metaOption = {
  color: colors,

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  grid: {
    right: "20%"
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ["Inicial", "Final", "Meta inicial", "Meta final"]
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true
      },
      data: ["2018", "2019", "2020", "2021", "2022", "2023"]
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "meta",
      min: 0,
      max: 250,
      position: "right",
      axisLine: {
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: "{value} ml"
      }
    },
    {
      type: "value",
      name: "Final",
      min: 0,
      max: 250,
      position: "right",
      offset: 80,
      axisLine: {
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: "{value} ml"
      }
    },
    {
      type: "value",
      name: "温度",
      min: 0,
      max: 25,
      position: "left",
      axisLine: {
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: "{value} °C"
      }
    }
  ],
  series: [
    {
      name: "Inicial",
      type: "bar",
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 4]
    },
    {
      name: "Meta inicial",
      type: "line",
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
    },
    {
      name: "Final",
      type: "bar",
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7]
    },

    {
      name: "Meta final",
      type: "line",
      data: [2.0, 2.2, 3.3, 4.5, 7.3, 9.2]
    }
  ]
};

export const getMetasIniciaisOption = async codEol => {
  getMetaAnos(parseInt(codEol), ANOS_META.INICIAIS).then(inicial => {
    metaOption.series[0].data = inicial.metas;
    metaOption.series[1].data = inicial.metas;
    metaOption.xAxis[0].data = inicial.anos;
  });
  // debugger;

  getMetaAnos(parseInt(codEol), ANOS_META.FINAIS).then(final => {
    metaOption.series[2].data = final.metas;
    metaOption.series[3].data = final.metas;
  });
  // console.log("finalll", final);
  return metaOption;
};

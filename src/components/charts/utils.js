import echarts from "echarts";
import ecStat from "echarts-stat";
import { getIncidesAnoInicial } from "../../services/idep";

const roundNumber = number => {
  return parseFloat(Number(number).toFixed(1));
};

export const getHistogramOption = async () => {
  const meta = await getIncidesAnoInicial(477);
  const { indices, indice_da_escola } = meta;
  console.log(indices, "xxxxxxxxxxxxxxx");
  let bins = ecStat.histogram(indices);

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

  let histogramOption = {
    title: {
      text: "Girths of Black Cherry Trees",
      subtext: "By ecStat.histogram",
      sublink: "https://github.com/ecomfe/echarts-stat",
      left: "center",
      top: 10
    },
    color: "#c65836",
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
  debugger;
  return histogramOption;
};

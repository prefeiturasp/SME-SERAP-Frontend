import React, { PureComponent } from 'react';
import { getMetaAnos, getPorIndiceComplexidadeGestao, getPorNivelSocioEconomico } from './idepService';
import EchartsReact from './ReactEcharts';

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    orient: 'vertical',
    feature: {
      saveAsImage: { show: true, title: 'Salvar' }
    }
  },
  legend: {
    data: ['Alcançado', 'Meta']
  },
  xAxis: [
    {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022', '2023'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Temp.',
      min: 0,
      max: 70,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Alcançado',
      type: 'bar',
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 24.7]
    },
    {
      name: 'Meta',
      type: 'line',
      data: [2.0, 2.2, 30.3, 4.5, 6.3, 10.2]
    }
  ]
};

export default class Simple extends PureComponent {
  componentDidMount() {
    const ret = getMetaAnos(191);
    ret.then(json => {
      console.log(json, 'xxxxxxxxxxxxxxxxx');
    });
    const fff = getPorNivelSocioEconomico(4);
    fff.then(json => {
      console.log(json, 'yyyy');
    });
    const kkk = getPorIndiceComplexidadeGestao(1);
    kkk.then(json => {
      console.log(json, 'zzzz');
    });
  }

  render() {
    return (
      <div className="examples">
        <div className="parent">
          <label>Grafico IDEB </label>
          <EchartsReact
            option={option}
            style={{ height: '400px', width: '100%' }}
            className="react_for_echarts"
          />
        </div>
      </div>
    );
  }
}

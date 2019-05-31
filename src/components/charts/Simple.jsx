import React, { PureComponent } from 'react';
import { getEscolas } from '../../services/idep';
import EchartsReact from './helpers/ReactEcharts';
import { getHistogramOption } from './utils';

export default class Simple extends PureComponent {
  state = { histogramOptions: {}, barOptions: {} };

  componentDidMount() {
    getHistogramOption().then(histogramOptions => {
      this.setState({ histogramOptions });
    });

    getEscolas().then(result => {
      console.dir(result);
    });
  }

  render() {
    return (
      <div>
        <EchartsReact
          option={this.state.histogramOptions}
          style={{ height: '400px', width: '100%' }}
          className="react_for_echarts"
        />
        <hr />
        <EchartsReact
          option={this.state.histogramOptions}
          style={{ height: '400px', width: '100%' }}
          className="react_for_echarts"
        />
      </div>
    );
  }
}

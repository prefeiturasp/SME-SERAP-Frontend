import React, { PureComponent } from 'react';
import EchartsReact from './helpers/ReactEcharts';

export default class ChartContainer extends PureComponent {

  render() {
    return (
      <EchartsReact
        option={this.props.histogramOptions}
        style={{ height: '400px', width: '100%' }}
        className="react_for_echarts"
      />
    );
  }
}

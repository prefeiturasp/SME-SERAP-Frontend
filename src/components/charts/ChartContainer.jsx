import React, { PureComponent } from 'react';
import EchartsReact from './helpers/ReactEcharts';

export default class ChartContainer extends PureComponent {
  render() {
    return (
      <EchartsReact
        option={this.props.options}
        style={{ height: '25em', width: '100%' }}
        className="react_for_echarts"
      />
    );
  }
}

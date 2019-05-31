import React, { PureComponent } from 'react';
import { getChartOption, getEscolas } from '../../services/idep';
import EchartsReact from './helpers/ReactEcharts';

export default class Simple extends PureComponent {
  state = { options: {} };

  componentDidMount() {
    getChartOption().then(options => {
      this.setState({ options });
    });

    getEscolas().then(result => {
      console.dir(result);
    });
  }

  render() {
    return (
      <EchartsReact
        option={this.state.options}
        style={{ height: '400px', width: '100%' }}
        className="react_for_echarts"
      />
    );
  }
}

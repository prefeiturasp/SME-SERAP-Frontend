import React, { PureComponent } from 'react';
import { getChartOption } from '../../services/idep';
import EchartsReact from './ReactEcharts';

export default class Simple extends PureComponent {
  state = { options: {} };

  componentDidMount() {
    getChartOption().then(response => {
      this.setState({ options: response });
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

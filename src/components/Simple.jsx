import React, { PureComponent } from 'react';
import { getChartOption } from './idepService';
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
      <div className="examples">
        <div className="parent">
          <label>Grafico IDEB </label>
          <EchartsReact
            option={this.state.options}
            style={{ height: '400px', width: '100%' }}
            className="react_for_echarts"
          />
        </div>
      </div>
    );
  }
}

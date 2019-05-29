import React, { PureComponent } from 'react';
import authService from '../../services/auth';
import { getChartOption } from '../../services/idep';
import EchartsReact from './ReactEcharts';

export default class Simple extends PureComponent {
  state = { options: {} };

  componentDidMount() {
    // authService
    //   .login('1150669', '57640459834', '1947')
    //   .then(response => {
    //     console.log(response, 'kkkkkk');
    //   })
    //   .catch(error => {
    //     console.log(error, 'error....');
    //   });
    getChartOption().then(options => {
      this.setState({ options });
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

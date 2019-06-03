import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './custom.css';

export default class CircleAndLabel extends Component {
  static propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    color: '#ff6c7c',
    style: {},
    topLabel: 'topLabel',
    bottomLabel: 'bottomLabel'
  };

  render() {
    const { label, topLabel, bottomLabel, color, style } = this.props;
    const customStyle = {
      color: color,
      border: `3px solid ${color}`,
      style
    };
    return (
      <div>
        <p className='topLabel' style={{ color: color }}>{topLabel}</p>
        <div className={'circle'} style={customStyle}>
          {label}
        </div>
        <p className='bottomLabel'>{bottomLabel}</p>
      </div>
    );
  }
}

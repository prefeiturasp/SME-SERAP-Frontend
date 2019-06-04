import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './custom.css';

export const CIRCLE_MODE = {
  NORMAL: 'NORMAL',
  FILLED: 'FILLED'
};

export default class CircleAndLabel extends Component {
  static propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    mode: PropTypes.string
  };

  static defaultProps = {
    color: '#ff6c7c',
    topLabel: 'topLabel',
    bottomLabel: 'bottomLabel',
    mode: CIRCLE_MODE.NORMAL
  };

  render() {
    const { label, topLabel, bottomLabel, color, mode } = this.props;
    let customStyle = {
      color: color,
      border: `3px solid ${color}`
    };
    let divClassName = 'circle';
    if (mode === CIRCLE_MODE.FILLED) {
      customStyle.color = '#FFFFFF';
      customStyle.background = color;
      divClassName = 'circleFilled';
    }
    return (
      <div>
        <p className="topLabel" style={{ color: color }}>
          {topLabel}
        </p>
        <div className={divClassName} style={customStyle}>
          <span>{label}</span>
        </div>
        <p className="bottomLabel">{bottomLabel}</p>
      </div>
    );
  }
}

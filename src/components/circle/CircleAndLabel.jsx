import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from '../Grid';
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
    let boxClassName = 'boxCircle';
    if (mode === CIRCLE_MODE.FILLED) {
      customStyle.color = '#FFFFFF';
      customStyle.background = color;
      divClassName = 'circleFilled';
      boxClassName = 'boxCircleFilled';
    }
    return (
      <Grid cols="12 12 12 12">
        <p className="topLabel" style={{ color: color }}>
          {topLabel}
        </p>
        <Grid cols="12 12 12 12" className={divClassName} style={customStyle}>
          <span>{label}</span>
        </Grid>
        <div className={`border text-center boxShadow ${boxClassName}`}>
          <p className="bottomLabel">{bottomLabel}</p>
        </div>
      </Grid>
    );
  }
}

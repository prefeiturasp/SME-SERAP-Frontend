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
    style: {}
  };

  render() {
    const { label, color, style } = this.props;
    const customStyle = {
      color: color,
      border: `3px solid ${color}`,
      style
    };
    return (
      <div className={'circle'} style={customStyle}>
        {label}
      </div>
    );
  }
}

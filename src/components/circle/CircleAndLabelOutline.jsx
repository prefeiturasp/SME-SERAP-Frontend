import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './custom.css';
import outlineAmareloCircle from './img/CirculoStrokeAmarelo.png';
import outlineAzulCircle from './img/CirculoStrokeAzul.png';
import outlineRosaCircle from './img/CirculoStrokeRosa.png';

export const CIRCLE_MODE = {
  NORMAL: 'NORMAL',
  FILLED: 'FILLED'
};

export const CIRCLE_COLOR = {
  ROSA: 'ROSA',
  AMARELO: 'AMARELO',
  AZUL: 'AZUL'
};

export default class CircleAndLabelOutline extends Component {
  static propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    mode: PropTypes.string
  };

  static defaultProps = {
    color: CIRCLE_COLOR.ROSA,
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

    let letterColor = '';
    let circleSelected = '';
    switch (color) {
      case CIRCLE_COLOR.ROSA:
        letterColor = '#FF6C7C';
        circleSelected = outlineRosaCircle;
        break;
      case CIRCLE_COLOR.AMARELO:
        letterColor = '#FFBC0A';
        circleSelected = outlineAmareloCircle;
        break;
      case CIRCLE_COLOR.AZUL:
        letterColor = '#1B80D4';
        circleSelected = outlineAzulCircle;
        break;
      default:
        break;
    }
    if (mode === CIRCLE_MODE.FILLED) {
      customStyle.color = '#FFFFFF';
      customStyle.background = color;
    }
    return (
      <div>
        <div className="label-cor-topo mb-1" style={{ color: letterColor }}>
          {topLabel}
        </div>
        <div className="text-center position-relative">
          <img src={circleSelected} alt="" className="circulo-outline" />
          <div
            className="texto-meio-circulo-outline"
            style={{ color: letterColor }}
          >
            {label}
          </div>
        </div>
        <div className="mt-3 cor-cinza bottom-label">{bottomLabel}</div>
      </div>
    );
  }
}

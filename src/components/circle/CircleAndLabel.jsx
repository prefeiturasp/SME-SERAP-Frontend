import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './custom.css';
import outlineAmareloCircle from './img/Shape_Criculo stroke_amarelo.png';
import outlineAzulCircle from './img/Shape_Criculo stroke_azul.png';
import outlineRosaCircle from './img/Shape_Criculo stroke_rosa.png';

export const CIRCLE_MODE = {
  NORMAL: 'NORMAL',
  FILLED: 'FILLED'
};

export const CIRCLE_COLOR = {
  ROSA: 'ROSA',
  AMARELO: 'AMARELO',
  AZUL: 'AZUL'
};

export default class CircleAndLabel extends Component {
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
      <div className="border">
        <div className="topColoredLabel" style={{ color: letterColor }}>
          <p>{topLabel}</p>
        </div>
        <div class="w-100" />
        <div className="container">
          <img
            src={circleSelected}
            alt="circuloOutline"
            style={{ position: 'relative' }}
            className="circuloOutline"
          />
          <span className="textoNoMeioDoCirculoOutline">Centered</span>
        </div>
        <div class="w-100" />
        <div>
          <span className="bottomLabel">{bottomLabel}</span>
        </div>
      </div>
    );
  }
}

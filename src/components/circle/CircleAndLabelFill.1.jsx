import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './custom.css';
import outlineAmareloCircle from './img/Shape_Circulo fill_amarelo.png';
import outlineAzulCircle from './img/Shape_Circulo fill_azul.png';
import outlineRosaCircle from './img/Shape_Circulo fill_rosa.png';
import outlineRoxoCircle from './img/Shape_Circulo fill_roxo.png';

export const CIRCLE_MODE = {
  NORMAL: 'NORMAL',
  FILLED: 'FILLED'
};

export const CIRCLE_COLOR = {
  ROSA: 'ROSA',
  AMARELO: 'AMARELO',
  AZUL: 'AZUL',
  ROXO: 'ROXO'
};

export default class CircleAndLabelFill extends Component {
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
    const { label, bottomLabel, color } = this.props;

    let circleSelected = '';
    switch (color) {
      case CIRCLE_COLOR.ROSA:
        circleSelected = outlineRosaCircle;
        break;
      case CIRCLE_COLOR.AMARELO:
        circleSelected = outlineAmareloCircle;
        break;
      case CIRCLE_COLOR.AZUL:
        circleSelected = outlineAzulCircle;
        break;
      case CIRCLE_COLOR.ROXO:
        circleSelected = outlineRoxoCircle;
        break;
      default:
        break;
    }

    return (
      <div className="border">
        <div className="container">
          <img src={circleSelected} alt="circuloFill" className="circuloFill" />
          <span
            className="textoNoMeioDocirculoFill"
            style={{ color: '#FFFFFF' }}
          >
            {label}
          </span>
        </div>
        <div class="w-100" />
        <div>
          <span className="bottomLabel">{bottomLabel}</span>
        </div>
      </div>
    );
  }
}

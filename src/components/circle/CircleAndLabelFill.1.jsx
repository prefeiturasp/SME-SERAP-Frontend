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
    let dotsColor = '';
    let circleSelected = '';
    switch (color) {
      case CIRCLE_COLOR.ROSA:
        dotsColor = '#FF6C7C';
        circleSelected = outlineRosaCircle;
        break;
      case CIRCLE_COLOR.AMARELO:
        dotsColor = '#FFBC0A';
        circleSelected = outlineAmareloCircle;
        break;
      case CIRCLE_COLOR.AZUL:
        dotsColor = '#1B80D4';
        circleSelected = outlineAzulCircle;
        break;
      case CIRCLE_COLOR.ROXO:
        dotsColor = '#422593';
        circleSelected = outlineRoxoCircle;
        break;
      default:
        break;
    }

    return (
      <div className="">
        <div className="container">
          <img src={circleSelected} alt="circuloFill" className="circuloFill" />
          <div className="textoNoMeioDocirculoFill text-center p-5">
            <span style={{ color: '#FFFFFF' }}>{label}</span>
          </div>
        </div>
        <div class="w-100" />
        <div className="pontos" style={{ color: dotsColor }}>
          .
        </div>
        <div className="pontos" style={{ color: dotsColor }}>
          .
        </div>
        <div className="pontos" style={{ color: dotsColor }}>
          .
        </div>
        <div class="w-100" />
        <div class="card infoCard">
          <span className="bottomLabel mt-4">{bottomLabel}</span>
        </div>
      </div>
    );
  }
}

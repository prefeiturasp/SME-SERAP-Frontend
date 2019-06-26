import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './custom.css';
import outlineAmareloCircle from './img/CirculoFillAmarelo.png';
import outlineAzulCircle from './img/CirculoFillAzul.png';
import outlineRosaCircle from './img/CirculoFillRosa.png';
import outlineRoxoCircle from './img/CirculoFillRoxo.png';

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
    const { label, bottomLabel, color, ano } = this.props;
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
      <div>
        <div className="container position-relative text-center">
          <img
            src={circleSelected}
            alt=""
            className="circulo-fill"
          />
          <div className="text-white font-weight-bold w-50 texto-meio-circulo-fill">
            {label}
            <div className="texto-meio-ano">{ano}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center pontos" style={{ color: dotsColor }}>
          .....
        </div>
        <div className="card border-0 shadow card-circulo card-texto-grupo">
          <div className="card-body d-flex justify-content-center align-items-center">
            {bottomLabel}
          </div>
        </div>
      </div>
    );
  }
}

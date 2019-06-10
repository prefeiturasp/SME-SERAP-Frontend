import React from 'react';
import Grid from '../../components/Grid';
import './custom.css';
import setaVermelha from './img/Icon_arrow_red.png';
import setaAmarela from './img/Image_5section_amarelo.png';

export const HEADER_OPT = {
  INICIAL: 'INICIAL',
  FINAL: 'FINAL'
};

export default function SeuGrupoHeader(props) {
  let imgSelected = setaVermelha;
  let alt = 'setaVermelha';
  let lbl = 'Anos iniciais';
  let lblStyle = { color: '#FF6C7B' };
  let imgClassname = 'ic-seta';

  if (props.headerTipo !== HEADER_OPT.FINAL) {
    imgSelected = setaAmarela;
    alt = 'setaAmarela';
    lbl = 'Anos finais';
    lblStyle = { color: '#FFBC0A' };
  }

  return (
    <div className="row mt-5">
      <Grid cols="7 7 7 7">
        <img className={imgClassname} src={imgSelected} alt={alt} />
      </Grid>
      <Grid cols="5 5 5 5">
        <div className="d-flex align-items-end flex-column">
          <span className="texto-azul-medio p-2">SEU GRUPO</span>
          <span className="texto-pequeno-cinza p-2">
            Confira como está a posição da sua escola comparadas às escolas do
            mesmo grupo e seus respectivos desempenhos
          </span>
        </div>
      </Grid>
      <h5 style={lblStyle}>{lbl}</h5>
    </div>
  );
}

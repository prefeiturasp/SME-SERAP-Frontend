import React from 'react';
import Grid from '../../components/Grid';
import './custom.css';
import setaVermelha from './img/Icon_arrow_red.png';

export default function SeuGrupoHeader(prps) {
  return (
    <div className="row mt-5">
      <Grid cols="7 7 7 7">
        <img className="iconeSeta" src={setaVermelha} alt="setaVermelha" />
      </Grid>
      <Grid cols="5 5 5 5">
        <div className="d-flex align-items-end flex-column">
          <span className="textoAzulMedio p-2">SEU GRUPO</span>
          <span className="textoPeqCinza p-2">
            Confira como está a posição da sua escola comparadas às escolas do
            mesmo grupo e seus respectivos desempenhos
          </span>
        </div>
      </Grid>
    </div>
  );
}

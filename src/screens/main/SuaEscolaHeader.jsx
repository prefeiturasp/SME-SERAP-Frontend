import React from 'react';
import Grid from '../../components/Grid';
import './custom.css';
import setaVermelha from './img/SetaVermelha.png';
import setaAmarela from './img/SetaAmarela.png';

export const HEADER_OPT = {
  INICIAL: 'INICIAL',
  FINAL: 'FINAL'
};

export default function SeuGrupoHeader(props) {
  const imgClassname = 'ic-seta';
  const imgSelected =
    props.headerTipo === HEADER_OPT.FINAL ? setaAmarela : setaVermelha;

  return (
    <div className="row mt-5">
      <Grid cols="7 7 7 7" className="text-left">
        <img
          className={`${imgClassname} h-auto w-25`}
          src={imgSelected}
          alt=""
        />
      </Grid>
      <Grid cols="5 5 5 5" className="">
        <div className="d-flex align-items-center flex-column pt-3 pb-3 pl-5 pr-5 text-white justify-content-center fundo-azul-transparente">
          <h2 className="text-uppercase p-0 m-0 font-weight-light secao-escola-titulo">
            Sua Escola
          </h2>
        </div>
        <img
          className={`${imgClassname} h-auto w-75 espelha-imagem float-right`}
          src={imgSelected}
          alt=""
        />
      </Grid>
    </div>
  );
}

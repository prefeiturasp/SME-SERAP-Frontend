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
  let imgSelected = setaVermelha;
  let alt = 'setaAmarela';

  const imgClassname = 'ic-seta';

  if (props.headerTipo === HEADER_OPT.FINAL) {
    imgSelected = setaAmarela;
    alt = 'setaVermelha';
  }

  return (
    <div className="row mt-5">
      <Grid cols="7 7 7 7" className="">
        <img className={imgClassname} src={imgSelected} alt={alt} />
      </Grid>
      <Grid cols="5 5 5 5" className="">
        <div className="d-flex align-items-end flex-column text-right">
          <span className="texto-azul-medio pb-5">SEU GRUPO</span>
          <span className="card-texto-grupo">
            O Seu Grupo é constituído pelas escolas que têm o mesmo Inse e fazem
            parte do mesmo agrupamento proposto para o ICG (Grupo 1 ou Grupo 2).
            O gráfico seguinte mostra a posição da escola no grupo, de acordo
            com o IDEP.
          </span>
        </div>
      </Grid>
    </div>
  );
}

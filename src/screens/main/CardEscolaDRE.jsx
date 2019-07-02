import React from 'react';
import Grid from '../../components/Grid';

export default function CardEscolaDRE(props) {
  const { escolaLabel, dreCount, anosLabel, anos, parametros = { nse: '', icg: '' } } = props;

  return (
    <Grid cols="4 4 4 4" className="text-left mt-n7">
      <div className="card border-0 shadow">
        <div className="card-body">
          <h5 className={`card-anos font-weight-bold text-uppercase ${(anos === "I" ? "cor-vermelho" : "cor-amarelo")}`}>{anosLabel}</h5>
          <h5 className="card-titulo mt-3 mb-3">{escolaLabel}</h5>
          <h5 className="card-texto-grupo">Sua escola está inserida em um grupo com os seguintes índices:</h5>
          <div className="border-bottom borda-dotted pb-4 mb-4">
            <button type="button" className="btn btn-outline-light btn-sm mr-2 font-weight-bold cor-azul">INSE: {parametros.nse}</button>
            <button type="button" className="btn btn-outline-light btn-sm font-weight-bold cor-azul">ICG: {parametros.icg}</button>
          </div>
          <h5 className="card-texto-grupo mb-3">Conheça quantas escolas compõem seu grupo:</h5>
          {dreCount.map((dre, key) => {
            return (
              <div className="row card-texto-grupo cor-cinza mb-1" key={key}>
                <div className="col">{`DRE ${dre[0]}:`}</div>
                <div className="col text-left">{`${dre[1]} escolas`}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Grid>
  );
}

import React from 'react';
import Grid from '../../components/Grid';

export default function CardEscolaMeta(props) {
  const { escolaLabel, anosLabel, anos, parametros = { nse: '', icg: '' } } = props;

  return (
    <Grid cols="4 4 4 4" className="text-right mt-n3">
      <div className="card border-0">
        <div className="card-body">
          <h5 className={`card-anos font-weight-bold text-uppercase ${(anos === "I" ? "cor-vermelho" : "cor-amarelo")}`}>{anosLabel}</h5>
          <h5 className="card-titulo mt-3 mb-3">{escolaLabel}</h5>
          <h5 className="card-texto-grupo">Sua escola está inserida em um grupo com os seguintes índices:</h5>
          <div className="border-bottom borda-dotted pb-4 mb-4">
            <button type="button" className="btn btn-outline-light btn-sm mr-2 font-weight-bold cor-azul">INSE: {parametros.nse}</button>
            <button type="button" className="btn btn-outline-light btn-sm font-weight-bold cor-azul">ICG: {parametros.icg}</button>
          </div>
          <div className="card-texto-grupo">O gráfico ao lado apresenta as metas estabelecidas para a SUA ESCOLA com base no seu grupo. Para o ano de 2018, o IDEP foi calculado utilizando as notas da Prova São Paulo — edições 2017 e 2018. As metas foram definidas para os próximos 5 anos, a partir do ano de 2019.</div>
        </div>
      </div>
    </Grid>
  );
}

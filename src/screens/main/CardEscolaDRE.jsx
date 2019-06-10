import React from 'react';
import Grid from '../../components/Grid';

export default function CardEscolaDRE(props) {
  const { escolaLabel, dreCount } = props;
  return (
    <Grid cols="4 4 4 4" className="card info-card">
      <div className="card-body">
        <h5 className="card-title card-titulo">{escolaLabel}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Conheça quantas escolas compõem seu grupo:
        </h6>
        {dreCount.map(e => {
          return (
            <div className="row card-text card-item">
              <div className="col">
                <p>{`DRE ${e[0]}:`}</p>
              </div>
              <div className="col text-left">
                <p>{`${e[1]} escolas`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Grid>
  );
}

import React from 'react';
import Grid from '../../components/Grid';

export default function AnosHeader(props) {
  return (
    <div className="fundo-azul-transparente pt-1 pb-1">
      <div className="container">
        <div className="row">
          <Grid cols="12 12 12 12" className="text-left">
            <h2 className="m-3 text-uppercase titulo-anos">{props.label}</h2>
          </Grid>
        </div>
      </div>
    </div>
  );
}

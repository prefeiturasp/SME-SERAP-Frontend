import React from 'react';
import Grid from '../../components/Grid';

export default function Quad1() {
  return (
    <Grid cols="5 5 5 5" className="conhecaINEP p-5">
      <div className="p-5">
        <span>Conheça o</span>
        <br />
        <span style={{ color: '#1B80D4' }}>IDEP</span>
        <p className="textoPeqCinza">
          Saiba mais sobre a importância do índice, como ele é calculado e as
          metas da sua escola
        </p>
      </div>
    </Grid>
  );
}

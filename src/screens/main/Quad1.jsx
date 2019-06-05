import React from 'react';
import Button, { ButtonIcon, ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';

export default function Quad1() {
  return (
    <Grid cols="4 4 4 4" className="text-left">
      <div>
        <span className="idepCinzaGrande">Conheça o</span>
        <br />
        <span className="idepAzulGrande">IDEP</span>
        <p className="textoPeqCinza">
          Saiba mais sobre a importância do índice, como ele é calculado e as
          metas da sua escola
        </p>
      </div>
      <Button
        style={ButtonStyle.OutlinePrimary}
        label=""
        icon={ButtonIcon.ANGLE_DOWN}
      />
    </Grid>
  );
}

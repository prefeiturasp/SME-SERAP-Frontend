import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabelOutline, { CIRCLE_COLOR } from '../../components/circle/CircleAndLabelOutline';
import Grid from '../../components/Grid';

export default function Quad4() {
  return (
    <Grid cols="7 7 7 7" className="row justify-content-between">
      <Grid cols="4 4 4 4">
        <CircleAndLabelOutline
          label="5,94"
          color={CIRCLE_COLOR.ROSA}
          topLabel="Aprendizado"
          bottomLabel="Quanto maior a nota, maior o aprendizado"
        />
      </Grid>
      <Grid cols="4 4 4 4">
        <CircleAndLabelOutline
          label="0,93"
          color={CIRCLE_COLOR.AMARELO}
          topLabel="Fluxo"
          bottomLabel="Quanto maior o valor, maior a aprovação"
        />
      </Grid>
      <Grid cols="4 4 4 4">
        <CircleAndLabelOutline
          label="5,2"
          color={CIRCLE_COLOR.AZUL}
          topLabel="IDEP"
          bottomLabel="Meta 5,2"
        />
      </Grid>
      <Grid cols="12 12 12 12" className="mt-3">
        <hr style={{ backgroundColor: '#C4C4C4' }} />
      </Grid>
      <Grid cols="12 12 12 12" className="mt-3 mb-3">
        <Button
          style={ButtonStyle.OutlinePrimary}
          label="confira mais detalhes na nota técnica"
        />
      </Grid>
    </Grid>
  );
}

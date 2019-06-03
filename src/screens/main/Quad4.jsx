import React from 'react'
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabel from '../../components/circle/CircleAndLabel';
import Grid from '../../components/Grid';

export default function Quad4() {
  return (
    <Grid cols="7 7 7 7" className="row">
    <Grid cols="3 3 3 3">
      <CircleAndLabel
        label="5,94"
        topLabel="Aprendizado"
        bottomLabel="Quanto maior a nota, maior o aprendizado"
      />
    </Grid>
    <Grid cols="1 1 1 1" className="bigX">
      <p>X</p>
    </Grid>
    <Grid cols="3 3 3 3">
      <CircleAndLabel
        label="0,93"
        color="#FFBC0A"
        topLabel="Fluxo"
        bottomLabel="Quanto maior o valor, maior a aprovação"
      />
    </Grid>
    <Grid cols="1 1 1 1" className="bigX">
      <p> = </p>
    </Grid>
    <Grid cols="3 3 3 3">
      <CircleAndLabel
        label="5,2"
        color="#1B80D4"
        topLabel="IDEP"
        bottomLabel="Meta 5,2"
      />
    </Grid>
    <div>
      <Button
        label="Confira mais detalhes na nota técnica"
        style={ButtonStyle.OutlinePrimary}
      />
    </div>
  </Grid>
  )
}

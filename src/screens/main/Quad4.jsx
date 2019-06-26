import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabelOutline, { CIRCLE_COLOR } from '../../components/circle/CircleAndLabelOutline';
import Grid from '../../components/Grid';

export default function Quad4() {
  return (
    <Grid cols="7 7 7 7" className="mt-5 mb-5 p-0">
      <div className="row mt-5 mb-5 ml-0 mr-0 d-flex flex-wrap justify-content-between d-flex align-items-start">
        <Grid cols="3 3 3 3" className="pl-0">
          <CircleAndLabelOutline
            label="5,94"
            color={CIRCLE_COLOR.ROSA}
            topLabel="Aprendizado"
            bottomLabel="Quanto maior a nota, maior o aprendizado"
          />
        </Grid>
        <Grid className="align-self-center operadores">X</Grid>
        <Grid cols="3 3 3 3" className="">
          <CircleAndLabelOutline
            label="0,93"
            color={CIRCLE_COLOR.AMARELO}
            topLabel="Fluxo"
            bottomLabel="Quanto maior o valor, maior a aprovação"
          />
        </Grid>
        <Grid className="align-self-center operadores">=</Grid>
        <Grid cols="3 3 3 3" className="pr-0">
          <CircleAndLabelOutline
            label="5,2"
            color={CIRCLE_COLOR.AZUL}
            topLabel="IDEP"
            bottomLabel="Meta 5,2"
          />
        </Grid>
      </div>
      <div className="row">
        <Grid cols="12 12 12 12" className="mt-3 mb-5 border-bottom borda-dotted"></Grid>
        <Grid cols="12 12 12 12" className="mt-2">
          <Button
            style={ButtonStyle.OutlinePrimary}
            label="Clique aqui para ver o cálculo"
            className="font-weight-bold text-uppercase pl-5 pr-5 cor-azul"
          />
        </Grid>
      </div>
    </Grid>
  );
}

import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabel, { CIRCLE_MODE } from '../../components/circle/CircleAndLabel';
import Grid from '../../components/Grid';

export default function Quad5() {
  return (
    <Grid cols="12 12 12 12" className="row">
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label="Média Ponderada 3º ano"
          mode={CIRCLE_MODE.FILLED}
          color="#FF6C7C"
          topLabel=""
          bottomLabel="DISCIPLINAS AVALIADAS: Língua Portuguesa Matemática Ciências"
        />
      </Grid>
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label="Média Ponderada 5º ano"
          mode={CIRCLE_MODE.FILLED}
          color="#FFBC0A"
          topLabel=""
          bottomLabel="DISCIPLINAS AVALIADAS: Língua Portuguesa Matemática Ciências"
        />
      </Grid>
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label="MP 3º ano + MP 5º ano ÷ 6"
          mode={CIRCLE_MODE.FILLED}
          color="#1B80D4"
          topLabel=""
          bottomLabel="MP (Média Ponderada) Soma das duas médias dividido por 6 (número de avaliações"
        />
      </Grid>
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label="Fluxo 1º ano ao 5º ano"
          mode={CIRCLE_MODE.FILLED}
          color="#422593"
          topLabel=""
          bottomLabel="CRITÉRIOS: Reprovação Abandono Aprovação"
        />
      </Grid>
      <Button label="Nota técnica" style={ButtonStyle.OutlinePrimary59} />
    </Grid>
  );
}

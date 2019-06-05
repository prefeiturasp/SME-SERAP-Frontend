import React from 'react';
import CircleAndLabelFill, { CIRCLE_COLOR } from '../../components/circle/CircleAndLabelFill.1';
import Grid from '../../components/Grid';


export default function CirculosAnos(props) {
  const { params } = props;
  return (
    <Grid cols="12 12 12 12" className="row p-5">
      <Grid cols="3 3 3 3" className="mt-2">
        <CircleAndLabelFill
          label={params.first.label}
          color={CIRCLE_COLOR.ROSA}
          topLabel=""
          bottomLabel={params.first.bottomLabel}
        />
      </Grid>
      <Grid cols="3 3 3 3" className="mt-2">
        <CircleAndLabelFill
          label={params.second.label}
          color={CIRCLE_COLOR.AMARELO}
          topLabel=""
          bottomLabel={params.second.bottomLabel}
        />
      </Grid>
      <Grid cols="3 3 3 3" className="mt-2">
        <CircleAndLabelFill
          label={params.third.label}
          color={CIRCLE_COLOR.AZUL}
          topLabel=""
          bottomLabel={params.third.bottomLabel}
        />
      </Grid>
      <Grid cols="3 3 3 3" className="mt-2">
        <CircleAndLabelFill
          label={params.forth.label}
          color={CIRCLE_COLOR.ROXO}
          topLabel=""
          bottomLabel={params.forth.bottomLabel}
        />
      </Grid>
    </Grid>
  );
}

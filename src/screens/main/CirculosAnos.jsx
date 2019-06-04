import React from 'react';
import CircleAndLabel, {
  CIRCLE_MODE
} from '../../components/circle/CircleAndLabel';
import Grid from '../../components/Grid';

export default function CirculosAnos(props) {
  const { params } = props;
  return (
    <Grid cols="12 12 12 12" className="row p-5">
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label={params.first.label}
          mode={CIRCLE_MODE.FILLED}
          color="#FF6C7C"
          topLabel=""
          bottomLabel={params.first.bottomLabel}
        />
      </Grid>
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label={params.second.label}
          mode={CIRCLE_MODE.FILLED}
          color="#FFBC0A"
          topLabel=""
          bottomLabel={params.second.bottomLabel}
        />
      </Grid>
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label={params.third.label}
          mode={CIRCLE_MODE.FILLED}
          color="#1B80D4"
          topLabel=""
          bottomLabel={params.third.bottomLabel}
        />
      </Grid>
      <Grid cols="3 3 3 3">
        <CircleAndLabel
          label={params.forth.label}
          mode={CIRCLE_MODE.FILLED}
          color="#422593"
          topLabel=""
          bottomLabel={params.forth.bottomLabel}
        />
      </Grid>
      {/* <Button label="Nota técnica" style={ButtonStyle.OutlinePrimary} /> */}
    </Grid>
  );
}

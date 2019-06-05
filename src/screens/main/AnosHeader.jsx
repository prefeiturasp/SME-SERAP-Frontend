import React from 'react';
import Grid from '../../components/Grid';

export default function AnosHeader(props) {
  return (
    <Grid cols="12 12 12 12" className="divComFundoAzul ml-3">
      <span className="fonteBrancaGrande">{props.label}</span>
    </Grid>
  );
}

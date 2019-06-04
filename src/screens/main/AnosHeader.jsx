import React from 'react';
import Grid from '../../components/Grid';

export default function AnosHeader(props) {
  return (
    <Grid cols="12 12 12 12" className="blueDiv ml-3">
      <span className="bigWhiteLabel align-middle">{props.label}</span>
    </Grid>
  );
}

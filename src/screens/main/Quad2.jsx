import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';
import livros from './img/livros.png';

export default function Quad2() {
  return (
    <Grid cols="7 7 7 7" className="col backCustom p-3">
      <Button label="HOME" style={ButtonStyle.OutlineLight} />
      <Button
        label="SEU GRUPO"
        style={ButtonStyle.OutlineLight}
        className="ml-3"
      />
      <Button
        label="SUA ESCOLA"
        style={ButtonStyle.OutlineLight}
        className="ml-3"
      />
      <Button label="METAS" style={ButtonStyle.OutlineLight} className="ml-3" />
      <img
        src={livros}
        style={{
          left: '51.46%',
          right: '7.87%',
          top: '4.06%',
          bottom: '89.57%',
          width: '440.00px',
          height: '370.13px'
        }}
        alt="Logo"
      />
      <Button
        label="CÁLCULO"
        style={ButtonStyle.OutlineLight}
        className="ml-3"
        buttonStyle={{ fontSize: '56px', lineheight: '80px' }}
      />
    </Grid>
  );
}

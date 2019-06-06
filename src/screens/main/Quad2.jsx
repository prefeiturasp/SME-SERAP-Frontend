import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';
import livros from './img/livros.png';

export default function Quad2(props) {
  return (
    <Grid cols="8 8 8 8" className="backGroundCustom">
      <Grid
        cols="12 12 12 12"
        className="row align-items-center justify-content-between p-4"
      >
        <Button
          label="HOME"
          style={ButtonStyle.OutlineLight}
          // onClick={() => this.props.onHomeButtonClicked()}
          className="ml-3"
        />
        <Button
          label="CÁLCULO"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onCalculoButtonClicked()}
          className="ml-3"
        />
        <Button
          label="SEU GRUPO"
          style={ButtonStyle.OutlineLight}
          className="ml-3"
        />
        <Button
          label="METAS"
          style={ButtonStyle.OutlineLight}
          className="ml-3"
        />
        <Button
          label="SUA ESCOLA"
          style={ButtonStyle.OutlineLight}
          className="ml-3"
        />
      </Grid>
      <img
        className="imagemPrincipal img-fluid mb-3 mt-1"
        src={livros}
        alt="Logo"
      />
    </Grid>
  );
}

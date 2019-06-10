import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';
import livros from './img/livros.png';

export default function Quad2(props) {
  return (
    <Grid cols="7 7 7 7" className="bg-azul-escuro">
      <Grid
        cols="12 12 12 12"
        className="d-flex flex-wrap justify-content-around p-3 mt-4"
      >
        <Button
          label="HOME"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onHomeButtonClicked()}
          className="btn-sm button-fixed-width"
        />
        <Button
          label="CÁLCULO"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onCalculoButtonClicked()}
          className="btn-sm button-fixed-width"
        />
        <Button
          label="SEU GRUPO"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onSeuGrupoButtonClicked()}
          className="btn-sm button-fixed-width"
        />
        <Button
          label="METAS"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onMetasButtonClicked()}
          className="btn-sm button-fixed-width"
        />
        <Button
          label="SUA ESCOLA"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onSuaEscolaButtonClicked()}
          className="btn-sm button-fixed-width"
        />
      </Grid>
      <Grid cols="12 12 12 12">
        <img className="imagem-principal p-3" src={livros} alt="Logo" />
      </Grid>
      <Grid cols="12 12 12 12">
        <Button
          label="CÁLCULO"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onCalculoButtonClicked()}
          className="btn-lg btn-block mb-4 mt-5 big-button"
        />
      </Grid>
    </Grid>
  );
}

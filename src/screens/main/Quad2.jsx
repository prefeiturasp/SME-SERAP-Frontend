import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';
import livros from './img/Livros.png';

export default function Quad2(props) {
  return (
    <Grid cols="7 7 7 7" className="pt-5 pb-5 position-relative fundo-azul-transparente">
      <Grid
        cols="12 12 12 12"
        className="d-flex justify-content-between"
      >
        <Button
          label="Home"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onHomeButtonClicked()}
          className="btn-sm btn-fw border-0 bg-transparent text-white text-uppercase"
        />
        <Button
          label="Cálculo"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onCalculoButtonClicked()}
          className="btn-sm btn-fw border-0 bg-transparent text-white text-uppercase"
        />
        <Button
          label="Seu Grupo"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onSeuGrupoButtonClicked()}
          className="btn-sm btn-fw border-0 bg-transparent text-white text-uppercase"
        />
        <Button
          label="Metas"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onMetasButtonClicked()}
          className="btn-sm btn-fw border-0 bg-transparent text-white text-uppercase"
        />
        <Button
          label="Sua Escola"
          style={ButtonStyle.OutlineLight}
          onClick={() => props.onSuaEscolaButtonClicked()}
          className="btn-sm btn-fw border-0 bg-transparent text-white text-uppercase"
        />
      </Grid>
      <Grid cols="12 12 12 12" className="d-block position-relative mt-5 mb-5 bloco-livros">
        <img className="position-absolute" src={livros} alt="" />
      </Grid>
      <Grid cols="12 12 12 12" className="mt-4">
        <Button
          label="Cálculo"
          onClick={() => props.onCalculoButtonClicked()}
          className="btn btn-lg btn-block text-uppercase text-white bg-transparent btn-calculo"
        />
      </Grid>
    </Grid>
  );
}

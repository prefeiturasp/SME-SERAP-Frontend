import React from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabelOutline, {
  CIRCLE_COLOR
} from '../../components/circle/CircleAndLabelOutline';
import Grid from '../../components/Grid';

function toggleAreaCalculo(event) {
  document.querySelectorAll('.btn-anos').forEach(btn => {
    btn.classList.remove('btn-primary', 'text-white');
  });
  event.target.classList.remove('btn-outline-primary');
  event.target.classList.add('btn-primary', 'text-white');

  document.querySelectorAll('.collapse').forEach(col => {
    col.classList.remove('d-flex');
    col.classList.add('d-none');
  });
  document
    .querySelector(`${event.target.getAttribute('data-target')}`)
    .classList.remove('d-none');
  document
    .querySelector(`${event.target.getAttribute('data-target')}`)
    .classList.add('d-flex');
}

export default function Quad4(props) {
  const { anosIniciais, anosFinais, onAnosButtonClicked } = props;
  let aprendizadoIniciais = '';
  let aprendizadoFinais = '';
  let fluxoIniciais = '';
  let fluxoFinais = '';
  let indiceIniciais = '';
  let indiceFinais = '';

  console.dir(
    `iniciais: ${anosIniciais.fluxo} ${anosIniciais.indice} ___
   finais: ${anosFinais.fluxo} ${anosFinais.indice}`,
    { depth: null }
  );

  if (anosIniciais.indice !== undefined && anosIniciais.fluxo !== undefined) {
    aprendizadoIniciais =
      parseFloat(anosIniciais.indice) /
      parseFloat(anosIniciais.fluxo.replace(',', '.'));
    aprendizadoIniciais = aprendizadoIniciais.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    fluxoIniciais = parseFloat(
      anosIniciais.fluxo.replace(',', '.')
    ).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    indiceIniciais = parseFloat(anosIniciais.indice).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  if (anosFinais.indice !== undefined && anosFinais.fluxo !== undefined) {
    aprendizadoFinais =
      parseFloat(anosFinais.indice) /
      parseFloat(anosFinais.fluxo.replace(',', '.'));
    aprendizadoFinais = aprendizadoFinais.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    fluxoFinais = parseFloat(anosFinais.fluxo.replace(',', '.')).toLocaleString(
      'pt-BR',
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
    indiceFinais = parseFloat(anosFinais.indice).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  return (
    <Grid cols="7 7 7 7" className="mb-5 p-0 text-center">
      <div className="row d-flex justify-content-center">
        <Button
          style={ButtonStyle.OutlinePrimary}
          label="Anos Iniciais"
          className="text-uppercase mt-5 mr-5 btn-anos cor-azul"
          dataToggle="collapse"
          dataTarget="#anosIniciais"
          ariaExpanded="false"
          ariaControls="anosIniciais"
          onClick={toggleAreaCalculo}
        />
        <Button
          style={ButtonStyle.OutlinePrimary}
          label="Anos Finais"
          className="text-uppercase mt-5 btn-anos cor-azul"
          dataToggle="collapse"
          dataTarget="#anosFinais"
          ariaExpanded="false"
          ariaControls="anosFinais"
          onClick={toggleAreaCalculo}
        />
      </div>
      <div
        className="row mt-5 mb-5 ml-0 mr-0 flex-wrap justify-content-between align-items-start collapse multi-collapse"
        id="anosIniciais"
      >
        <Grid cols="3 3 3 3" className="pl-0">
          <CircleAndLabelOutline
            label={aprendizadoIniciais}
            color={CIRCLE_COLOR.ROSA}
            topLabel="Aprendizado"
            bottomLabel="Quanto maior a nota, maior o aprendizado"
          />
        </Grid>
        <Grid className="align-self-center d-lg-block d-none operadores">
          X
        </Grid>
        <Grid cols="3 3 3 3" className="">
          <CircleAndLabelOutline
            label={fluxoIniciais}
            color={CIRCLE_COLOR.AMARELO}
            topLabel="Fluxo"
            bottomLabel="Quanto maior o valor, maior a aprovação"
          />
        </Grid>
        <Grid className="align-self-center d-lg-block d-none operadores">
          =
        </Grid>
        <Grid cols="3 3 3 3" className="pr-0">
          <CircleAndLabelOutline
            label={indiceIniciais}
            color={CIRCLE_COLOR.AZUL}
            topLabel="IDEP"
            bottomLabel="Meta"
          />
        </Grid>
      </div>
      <div
        className="row mt-5 mb-5 ml-0 mr-0 flex-wrap justify-content-between align-items-start collapse multi-collapse"
        id="anosFinais"
      >
        <Grid cols="3 3 3 3" className="pl-0">
          <CircleAndLabelOutline
            label={aprendizadoFinais}
            color={CIRCLE_COLOR.ROSA}
            topLabel="Aprendizado"
            bottomLabel="Quanto maior a nota, maior o aprendizado"
          />
        </Grid>
        <Grid className="align-self-center d-lg-block d-none operadores">
          X
        </Grid>
        <Grid cols="3 3 3 3" className="">
          <CircleAndLabelOutline
            label={fluxoFinais}
            color={CIRCLE_COLOR.AMARELO}
            topLabel="Fluxo"
            bottomLabel="Quanto maior o valor, maior a aprovação"
          />
        </Grid>
        <Grid className="align-self-center d-lg-block d-none operadores">
          =
        </Grid>
        <Grid cols="3 3 3 3" className="pr-0">
          <CircleAndLabelOutline
            label={indiceFinais}
            color={CIRCLE_COLOR.AZUL}
            topLabel="IDEP"
            bottomLabel="Meta"
          />
        </Grid>
      </div>
      <div className="row m-0">
        <Grid
          cols="12 12 12 12"
          className="mt-3 mb-5 border-bottom borda-dotted"
        ></Grid>
        <Grid cols="12 12 12 12" className="mt-2 pt-2">
          <Button
            style={ButtonStyle.OutlinePrimary}
            label="Clique aqui para ver o cálculo"
            className="font-weight-bold text-uppercase pl-5 pr-5 cor-azul"
            onClick={onAnosButtonClicked}
          />
        </Grid>
      </div>
    </Grid>
  );
}

import React, { Component } from 'react';
import { getHistogramOption } from '../../components/charts/utils';
import Grid from '../../components/Grid';
import AnosHeader from './AnosHeader';
import { anosFinal, anosInicial } from './aux';
import CirculosAnos from './CirculosAnos';
import './custom.css';
import Informativo from './Informativo';
import Quad1 from './Quad1';
import Quad2 from './Quad2';
import Quad3 from './Quad3';
import Quad4 from './Quad4';
import SeuGrupoHeader from './SeuGrupoHeader';

export class Main extends Component {
  state = {
    escolaSelecionada: '',
    histogramData: ''
  };

  onEscolaSelecionada(e) {
    console.log(e);
    const escolaSelecionada = e.value;
    this.setState({ escolaSelecionada });
    getHistogramOption(escolaSelecionada.cd_unidade_educacao_atual).then(
      response => {
        console.log('response', response);
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Quad1 onEscolaSelecionada={e => this.onEscolaSelecionada(e)} />
          <Quad2 />
        </div>
        <div className="row">
          <Quad3 />
          <Quad4 />
        </div>
        <div className="row">
          <AnosHeader label="Anos Iniciais" />
          <CirculosAnos params={anosInicial} />
        </div>
        <div className="row">
          <AnosHeader label="Anos Finais" />
          <CirculosAnos params={anosFinal} />
        </div>
        <div className="row fundoAzulEscuro">
          <Grid cols="4 4 4 4" />
          <Grid cols="8 8 8 8">
            <Grid cols="11 11 11 11">
              <span className="labelGrandeAmarelo">................. META</span>
            </Grid>
          </Grid>
        </div>
        <Informativo />
        <SeuGrupoHeader />
        <div className="row mt-3">
          <Grid cols="6 6 6 6" className="card infoCard">
            <div className="card-body">
              <h5 class="card-title cardTitulo">
                092797 EMEF Prof. Olavo Pezzotti
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Grupo 3</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </Grid>
          <Grid cols="6 6 6 6">teste</Grid>
        </div>
        {/* <Rodape /> */}
      </div>
    );
  }
}

export default Main;

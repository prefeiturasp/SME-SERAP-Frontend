import React, { Component } from 'react';
import ChartContainer from '../../components/charts/ChartContainer';
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
import If from '../../components/layout';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolaSelecionada: '',
      histogramOptions: ''
    };
    this.calculoRef = React.createRef();
  }

  onCalculoButtonClicked() {
    this.handleScrollToElement(this.calculoRef);
  }

  handleScrollToElement(ref) {
    window.scrollTo(0, ref.current.offsetTop);
  }

  onEscolaSelecionada(e) {
    console.log(e);
    const escolaSelecionada = e.value;
    this.setState({ escolaSelecionada });
    getHistogramOption(escolaSelecionada.cd_unidade_educacao_atual).then(
      response => {
        if (typeof response === 'object') {
          console.log('response ok', response);
          this.setState({ histogramOptions: response });
        } else {
          alert(response);
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Quad1 onEscolaSelecionada={e => this.onEscolaSelecionada(e)} />
          <Quad2 onCalculoButtonClicked={() => this.onCalculoButtonClicked()} />
        </div>
        <div className="row" ref={this.calculoRef}>
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
          <Grid cols="6 6 6 6">
            <If isVisible={this.state.histogramOptions}>
              <ChartContainer histogramOptions={this.state.histogramOptions} />
            </If>
          </Grid>
        </div>
        {/* <Rodape /> */}
      </div>
    );
  }
}

export default Main;

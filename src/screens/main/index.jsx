import React, { Component } from 'react';
import ChartContainer from '../../components/charts/ChartContainer';
import { getMetasIniciaisOption } from '../../components/charts/utils';
import Grid from '../../components/Grid';
import If from '../../components/layout';
import AnosHeader from './AnosHeader';
import { anosFinal, anosInicial } from './aux';
import CirculosAnos from './CirculosAnos';
import './custom.css';
import Informativo from './Informativo';
import Quad1 from './Quad1';
import Quad2 from './Quad2';
import Quad3 from './Quad3';
import Quad4 from './Quad4';
import Rodape from './Rodape';
import SeuGrupoHeader from './SeuGrupoHeader';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolaSelecionada: '',
      histogramOptions: '',
      metasIniciaisOptions: ''
    };
    this.calculoRef = React.createRef();
    this.seuGrupoRef = React.createRef();
    this.metasRef = React.createRef();
    this.homeRef = React.createRef();
    this.suaEscolaREf = React.createRef();
  }

  handleScrollToElement(ref) {
    window.scrollTo(0, ref.current.offsetTop);
  }

  onEscolaSelecionada(e) {
    // console.log(e, 'escolaa');
    const escolaSelecionada = e.value;
    const codEol = escolaSelecionada.cd_unidade_educacao_atual;
    // this.setState({ escolaSelecionada });
    // getHistogramOption(codEol).then(response => {
    //   if (typeof response === 'object') {
    //     console.log('response ok', response);
    //     this.setState({ histogramOptions: response });
    //   } else {
    //     alert(response);
    //   }
    // });

    getMetasIniciaisOption('017973').then(metasIniciaisOptions => {
      console.log('veiooo', metasIniciaisOptions);
      if (typeof metasIniciaisOptions === 'object') {
        console.log('response ok', metasIniciaisOptions);
        this.setState({ metasIniciaisOptions });
      } else {
        alert(metasIniciaisOptions);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row" ref={this.homeRef}>
          <Quad1 onEscolaSelecionada={e => this.onEscolaSelecionada(e)} />
          <Quad2
            onHomeButtonClicked={() => this.handleScrollToElement(this.homeRef)}
            onCalculoButtonClicked={() =>
              this.handleScrollToElement(this.calculoRef)
            }
            onSeuGrupoButtonClicked={() =>
              this.handleScrollToElement(this.seuGrupoRef)
            }
            onMetasButtonClicked={() => {
              this.handleScrollToElement(this.metasRef);
            }}
            onSuaEscolaButtonClicked={() =>
              this.handleScrollToElement(this.seuGrupoRef)
            }
          />
        </div>
        <div className="row" ref={this.calculoRef}>
          <Quad3 />
          <Quad4 />
        </div>
        <div className="row" ref={this.metasRef}>
          <AnosHeader label="Anos Iniciais" />
          <CirculosAnos params={anosInicial} />
        </div>
        <div className="row">
          <AnosHeader label="Anos Finais" />
          <CirculosAnos params={anosFinal} />
        </div>
        <div className="row fd-azl-esc pt-5">
          <Grid cols="11 11 11 11 " className="">
            <hr style={{ backgroundColor: '#FFBC0A' }} />
          </Grid>
          <Grid cols="1 1 1 1" className="d-flex align-items-end flex-column">
            <span className="lbl-gd-amr">META</span>
          </Grid>
        </div>
        <Informativo />
        <SeuGrupoHeader />
        <div className="row mt-3" ref={this.seuGrupoRef}>
          <Grid cols="4 4 4 4" className="card info-card">
            <div className="card-body">
              <h5 class="card-title card-titulo">
                {this.state.escolaSelecionada.label}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Grupo 3</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </Grid>
          <Grid cols="8 8 8 8">
            <If isVisible={this.state.histogramOptions}>
              <ChartContainer options={this.state.histogramOptions} />
            </If>
          </Grid>
        </div>
        <div className="row mt-3" ref={this.suaEscolaREf}>
          <Grid cols="8 8 8 8">
            <If isVisible={this.state.metasIniciaisOptions}>
              <ChartContainer options={this.state.metasIniciaisOptions} />
            </If>
          </Grid>
          <Grid cols="4 4 4 4" className="card info-card">
            <div className="card-body">
              <h5 class="card-title card-titulo">
                {this.state.escolaSelecionada.label}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Grupo 3</h6>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Grid>
        </div>
        <Rodape />
      </div>
    );
  }
}

export default Main;

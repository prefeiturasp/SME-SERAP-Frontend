import React, { Component } from 'react';
import ChartContainer from '../../components/charts/ChartContainer';
import { getHistogramOption, getMetasFinaisOption, getMetasIniciaisOption, HISTOGRAMTYPE } from '../../components/charts/utils';
import Grid from '../../components/Grid';
import If from '../../components/layout';
import { getIndicesAnos } from '../../services/idep';
import AnosHeader from './AnosHeader';
import { anosFinal, anosInicial } from './aux';
import CardEscolaDRE from './CardEscolaDRE';
import CirculosAnos from './CirculosAnos';
import './custom.css';
import Informativo from './Informativo';
import Quad1 from './Quad1';
import Quad2 from './Quad2';
import Quad3 from './Quad3';
import Quad4 from './Quad4';
import SeuGrupoHeader, { HEADER_OPT } from './SeuGrupoHeader';
import SuaEscolaHeader from './SuaEscolaHeader';
import CardEscolaMeta from './CardEscolaMeta';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolaSelecionada: '',
      histogramOptionsInicial: '',
      histogramOptionsFinal: '',
      metasIniciaisOptions: '',
      metasFinaisOptions: '',
      escolaLabel: '',
      dreCount: []
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
    const escolaSelecionada = e.value;
    this.setState({
      escolaLabel: `${escolaSelecionada.tipoesc} ${escolaSelecionada.nomesc}`
    });
    this.setState({ escolaSelecionada });

    getHistogramOption('017973', HISTOGRAMTYPE.INICIAL).then(
      histogramOptionsInicial => {
        if (typeof histogramOptionsInicial === 'object') {
          this.setState({ histogramOptionsInicial });
        } else {
          alert(histogramOptionsInicial);
        }
      }
    );

    getHistogramOption('017973', HISTOGRAMTYPE.FINAL).then(
      histogramOptionsFinal => {
        if (typeof histogramOptionsFinal === 'object') {
          this.setState({ histogramOptionsFinal });
        } else {
          alert(histogramOptionsFinal);
        }
      }
    );

    getMetasIniciaisOption('017973').then(metasIniciaisOptions => {
      if (typeof metasIniciaisOptions === 'object') {
        this.setState({ metasIniciaisOptions });
      } else {
        alert(metasIniciaisOptions);
      }
    });

    getMetasFinaisOption('017973').then(metasFinaisOptions => {
      if (typeof metasFinaisOptions === 'object') {
        this.setState({ metasFinaisOptions });
      } else {
        alert(metasFinaisOptions);
      }
    });

    getIndicesAnos('017973', HISTOGRAMTYPE.INICIAL).then(indices => {
      this.setState({ dreCount: indices.dre_count });
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

        <SeuGrupoHeader headerTipo={HEADER_OPT.INICIAL} />
        <div className="row mt-3" ref={this.seuGrupoRef}>
          <CardEscolaDRE
            escolaLabel={this.state.escolaLabel}
            dreCount={this.state.dreCount}
            anosLabel="Anos Iniciais"
            anos="I"
          />
          <Grid cols="8 8 8 8">
            <If isVisible={this.state.histogramOptionsInicial}>
              <ChartContainer options={this.state.histogramOptionsInicial} />
            </If>
          </Grid>
        </div>

        <SuaEscolaHeader headerTipo={HEADER_OPT.INICIAL} />
        <div className="row mt-3">
          <Grid cols="8 8 8 8" className="mt-n5">
            <If isVisible={this.state.metasIniciaisOptions}>
              <ChartContainer options={this.state.metasIniciaisOptions} />
            </If>
          </Grid>
          <CardEscolaMeta
            escolaLabel={this.state.escolaLabel}
            anosLabel="Anos Iniciais"
            anos="I"
          />
        </div>

        <SeuGrupoHeader headerTipo={HEADER_OPT.FINAL} />
        <div className="row mt-3">
          <CardEscolaDRE
            escolaLabel={this.state.escolaLabel}
            dreCount={this.state.dreCount}
            anosLabel="Anos Finais"
            anos="F"
          />
          <Grid cols="8 8 8 8">
            <If isVisible={this.state.histogramOptionsFinal}>
              <ChartContainer options={this.state.histogramOptionsFinal} />
            </If>
          </Grid>
        </div>

        <SuaEscolaHeader headerTipo={HEADER_OPT.FINAL} />
        <div className="row mt-3">
          <Grid cols="8 8 8 8" className="mt-n5">
            <If isVisible={this.state.metasFinaisOptions}>
              <ChartContainer options={this.state.metasFinaisOptions} />
            </If>
          </Grid>
          <CardEscolaMeta
            escolaLabel={this.state.escolaLabel}
            anosLabel="Anos Finais"
            anos="F"
          />
        </div>

        {/* <Rodape /> */}
      </div>
    );
  }
}

export default Main;

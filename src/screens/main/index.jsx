import React, { Component } from 'react';
import ChartContainer from '../../components/charts/ChartContainer';
import { getHistogramOption, getMetasFinaisOption, getMetasIniciaisOption, HISTOGRAMTYPE } from '../../components/charts/utils';
import Grid from '../../components/Grid';
import If from '../../components/layout';
import { getIndicesAnos } from '../../services/idep';
import AnosHeader from './AnosHeader';
import { anosFinal, anosInicial } from './Strings';
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
import Button from '../../components/Button';

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
    this.homeRef = React.createRef();
    this.calculoRef = React.createRef();
    this.metasRef = React.createRef();
    this.anosIniciaisRef = React.createRef();
    this.anosFinaisRef = React.createRef();
  }

  handleScrollToElement(ref) {
    window.scrollTo(0, ref.current.offsetTop - 10);
  }

  onEscolaSelecionada(e) {
    const escolaSelecionada = e.value;
    this.setState({
      escolaLabel: `${escolaSelecionada.tipoesc} ${escolaSelecionada.nomesc}`
    });
    this.setState({ escolaSelecionada });

    getHistogramOption(escolaSelecionada.cd_unidade_educacao_atual, HISTOGRAMTYPE.INICIAL).then(
      histogramOptionsInicial => {
        if (typeof histogramOptionsInicial === 'object') {
          this.setState({ histogramOptionsInicial });
        } else {
          console.log(histogramOptionsInicial);
        }
      }
    );

    getHistogramOption(escolaSelecionada.cd_unidade_educacao_atual, HISTOGRAMTYPE.FINAL).then(
      histogramOptionsFinal => {
        if (typeof histogramOptionsFinal === 'object') {
          this.setState({ histogramOptionsFinal });
        } else {
          alert(histogramOptionsFinal);
        }
      }
    );

    getMetasIniciaisOption(escolaSelecionada.cd_unidade_educacao_atual).then(metasIniciaisOptions => {
      if (typeof metasIniciaisOptions === 'object') {
        this.setState({ metasIniciaisOptions });
      } else {
        alert(metasIniciaisOptions);
      }
    });

    getMetasFinaisOption(escolaSelecionada.cd_unidade_educacao_atual).then(metasFinaisOptions => {
      if (typeof metasFinaisOptions === 'object') {
        this.setState({ metasFinaisOptions });
      } else {
        alert(metasFinaisOptions);
      }
    });

    getIndicesAnos(escolaSelecionada.cd_unidade_educacao_atual, HISTOGRAMTYPE.INICIAL).then(indices => {
      this.setState({ dreCount: indices.dre_count });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row" ref={this.homeRef}>
            <Quad1
              onEscolaSelecionada={e => this.onEscolaSelecionada(e)}
              onCalculoButtonClicked={() =>
                this.handleScrollToElement(this.calculoRef)
              }
            />
            <Quad2
              onHomeButtonClicked={() => this.handleScrollToElement(this.homeRef)}
              onCalculoButtonClicked={() =>
                this.handleScrollToElement(this.calculoRef)
              }
              onMetasButtonClicked={() => {
                this.handleScrollToElement(this.metasRef);
              }}
              onAnosIniciaisButtonClicked={() =>
                this.handleScrollToElement(this.anosIniciaisRef)
              }
              onAnosFinaisButtonClicked={() =>
                this.handleScrollToElement(this.anosFinaisRef)
              }
            />
          </div>
        </div>

        <div className="container" ref={this.calculoRef}>
          <div className="row mb-3">
            <Quad3 />
            <Quad4 />
          </div>
        </div>

        <AnosHeader label="Anos Iniciais" />
        <div className="container">
          <div className="row">
            <CirculosAnos params={anosInicial} />
          </div>
        </div>

        <AnosHeader label="Anos Finais" />
        <div className="container">
          <div className="row">
            <CirculosAnos params={anosFinal} />
          </div>
        </div>

        <div className="fundo-azul-escuro">
          <div className="container">
            <div className="row mb-5 pb-4" ref={this.metasRef}>
              <Grid cols="12 12 12 12" className="text-right mt-5 mb-5">
                <h2 className="m-0 mb-n4 p-0 pl-2 float-right fundo-azul-escuro cor-amarelo titulo-meta">META</h2>
                <div className="clearfix"></div>
                <div className="w-100 borda-meta"></div>
              </Grid>
              <Informativo />
            </div>
          </div>
        </div>

        <div className="container" ref={this.anosIniciaisRef}>
          <SeuGrupoHeader headerTipo={HEADER_OPT.INICIAL} />
          <div className="row mt-3">
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
          <div className="row mt-3" ref={this.anosFinaisRef}>
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

          <div className="row mt-3">
            <Grid cols="12 12 12 12" className="text-right pr-4 pb-4">
              <Button
                label="VOLTAR AO TOPO"
                className="btn-sm border-0 bg-transparent text-uppercase font-weight-bold cor-azul"
                onClick={() => this.handleScrollToElement(this.homeRef)}
              />
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

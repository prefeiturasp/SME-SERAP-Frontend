import React, { Component } from 'react';
import Select from 'react-select';
import Grid from '../../components/Grid';
import { getEscolas } from '../../services/idep';
import imgRolar from './img/Rolar.png';

export default class Quad1 extends Component {
  state = {
    options: []
  };

  componentDidMount() {
    getEscolas().then(escolas => {
      let options = this.transformData(escolas);
      this.setState({ options });
    });
  }

  transformData(escolas) {
    let options = [];
    escolas.map(escola => {
      const { cd_unidade_educacao_atual, tipoesc, nomesc } = escola;
      const option = {
        label: `${cd_unidade_educacao_atual} ${tipoesc} ${nomesc}`,
        value: escola
      };
      options.push(option);
      return null;
    });
    return options;
  }

  render() {
    return (
      <Grid
        cols="5 5 5 5"
        className="d-flex justify-content-center align-items-center text-left"
      >
        <Grid cols="12 12 12 12" className="mt-lg-0 mt-5">
          <div className="texto-cinza-inicio">
            Conheça o <span className="cor-azul font-weight-bolder">IDEP</span>
          </div>
          <p className="descricao-cinza-inicio mt-4 mb-0 p-0">
            Saiba mais sobre a importância do índice,
          </p>
          <p className="descricao-cinza-inicio mt-0 mb-4 p-0">
            como ele é calculado e as metas da sua escola
          </p>
          <Select
            placeholder="Selecione sua escola"
            options={this.state.options}
            onChange={e => this.props.onEscolaSelecionada(e)}
          />
          <img
            src={imgRolar}
            alt="Rolar"
            className="mt-5 mb-lg-0 mb-5"
            onClick={() => this.props.onCalculoButtonClicked()}
          />
        </Grid>
      </Grid>
    );
  }
}

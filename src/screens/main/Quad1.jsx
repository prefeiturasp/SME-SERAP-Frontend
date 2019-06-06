import React, { Component } from 'react';
import Select from 'react-select';
import Grid from '../../components/Grid';
import { getEscolas } from '../../services/idep';

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
      <Grid cols="4 4 4 4" className="text-left">
        <div>
          <span className="idepCinzaGrande">Conheça o</span>
          <br />
          <span className="idepAzulGrande">IDEP</span>
          <p className="textoPeqCinza">
            Saiba mais sobre a importância do índice, como ele é calculado e as
            metas da sua escola
          </p>
        </div>
        <div className="">
          <Select
            placeholder="Selecione sua escola"
            options={this.state.options}
            onChange={e => this.props.onEscolaSelecionada(e)}
          />
        </div>
        {/* <div>
          <Button
            style={ButtonStyle.OutlinePrimary}
            label=""
            icon={ButtonIcon.ANGLE_DOWN}
          />
        </div> */}
      </Grid>
    );
  }
}

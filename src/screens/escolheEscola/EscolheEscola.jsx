import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import BaseButton, { ButtonStyle, ButtonType } from '../../components/button';
import { Grid } from '../../components/grid';
import { getEscolas } from '../../services/idep';

export default class EscolheEscola extends Component {
  state = {
    escolas: []
  };

  componentDidMount() {
    getEscolas().then(escolas => {
      console.log(escolas);
      this.setState({ escolas });
    });
  }

  render() {
    return (
      <div className="align-items-center">
        <Grid cols="4 4 4 4" className="container">
          <div>
            <img
              src={logo}
              style={{ width: '170.00px', height: '70.13px' }}
              alt="Logo"
            />
          </div>
          <div>
            <p className="whiteFont">PORTAL IDEP</p>
          </div>
          <hr />
          <div>
            <p className="whiteFont">Olá, Fulano</p>
          </div>
          <div>
            <p className="whiteFont">Escolha a escola que deseja consultar</p>
          </div>

          <div className="">
            <div className="form-group" />
            {this.state.escolas.map(escola => {
              const { cd_unidade_educacao_atual, tipoesc, nomesc } = escola;
              return (
                <BaseButton
                  key={cd_unidade_educacao_atual}
                  type={ButtonType.SUBMIT}
                  style={ButtonStyle.OutlineDark}
                  onClick={() => console.log(cd_unidade_educacao_atual)}
                  label={`${cd_unidade_educacao_atual} ${tipoesc} ${nomesc}`}
                  className="btn-block"
                />
              );
            })}
          </div>
        </Grid>
      </div>
    );
  }
}

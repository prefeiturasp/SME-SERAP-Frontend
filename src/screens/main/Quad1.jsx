import React, { Component } from 'react';
import Button, { ButtonIcon, ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';
import { getEscolas } from '../../services/idep';

export default class Quad1 extends Component {
  state = {
    escolas: []
  };

  componentDidMount() {
    getEscolas().then(escolas => {
      this.setState({ escolas });
    });
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
          <div className="form-group" />
          {this.state.escolas.map(escola => {
            const { cd_unidade_educacao_atual, tipoesc, nomesc } = escola;
            return (
              <Button
                key={cd_unidade_educacao_atual}
                style={ButtonStyle.OutlineDark}
                onClick={() => alert(cd_unidade_educacao_atual)}
                label={`${cd_unidade_educacao_atual} ${tipoesc} ${nomesc}`}
                className="btn-block"
              />
            );
          })}
        </div>
        <div>
          <Button
            style={ButtonStyle.OutlinePrimary}
            label=""
            icon={ButtonIcon.ANGLE_DOWN}
          />
        </div>
      </Grid>
    );
  }
}

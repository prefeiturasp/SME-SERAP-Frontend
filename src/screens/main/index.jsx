import React, { Component } from 'react';
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
import Rodape from './rodape';

export class Main extends Component {
  state = {
    escolaSelecionada: ''
  };

  onEscolaSelecionada(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Quad1
            onEscolaSelecionada={e => this.onEscolaSelecionada(e)}
          />
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
        <Rodape />
      </div>
    );
  }
}

export default Main;

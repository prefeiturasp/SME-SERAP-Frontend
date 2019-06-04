import React, { Component } from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import Grid from '../../components/Grid';
import AnosHeader from './AnosHeader';
import { anosFinal, anosInicial } from './aux';
import CirculosAnos from './CirculosAnos';
import './custom.css';
import nse from './img/Icon_NSE.png';
import Quad1 from './Quad1';
import Quad2 from './Quad2';
import Quad3 from './Quad3';
import Quad4 from './Quad4';
import Rodape from './rodape';

export class Main extends Component {
  render() {
    return (
      <div className="row backNormal">
        <Quad1 />
        <Quad2 />
        <div className="w-100" />
        <Quad3 />
        <Quad4 />
        <div className="w-100" />
        <AnosHeader label="ANOS INICIAIS" />
        <div className="w-100" />
        <CirculosAnos params={anosInicial} />
        <AnosHeader label="ANOS FINAIS" />
        <div className="w-100" />
        <CirculosAnos params={anosFinal} />
        <div className="w-100" />
        <Grid cols="5 5 5 5">
          <img
            src={nse}
            alt="seta"
            style={{
              left: '0%',
              right: '65%',
              top: '55%',
              bottom: '41%',
              width: '440.00px',
              height: '200.13px'
            }}
          />
        </Grid>
        <Grid cols="5 5 5 5">
          <Button
            label="SEU GRUPO"
            style={ButtonStyle.OutlinePrimary}
            buttonStyle={{ fontSize: '56px', lineHeight: '80px' }}
          />
        </Grid>
        <div className="w-100" />
        <Rodape />
      </div>
    );
  }
}

export default Main;

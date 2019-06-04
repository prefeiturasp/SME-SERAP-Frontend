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
        <Grid cols="12 12 12 12" style={{ background: '#1B80D4' }}>
          <span
            style={{
              color: '#FFBC0A',
              fontWeight: 300,
              fontSize: '56px',
              lineHeight: '80px'
            }}
          >
            .....................................................................
            META
          </span>
        </Grid>
        <div className="w-100" />
        <Grid cols="4 4 4 4" style={{ background: '#1B80D4' }}>
          <p className="midWhiteHeader">
            Entenda como são definidas as metas da sua escola
          </p>
          <p className="littleWhiteText">
            As metas serão estabelecidas para os próximos cinco anos, a partir
            dos grupos formados considerando o Índice Sócio Econômico (NSE) e
            Indicador de Complexidade de Gestão (ICG), levando em conta somente
            as escolas que compõem cada grupo, objetivando, assim, a diminuição
            da desigualdade dos resultados ao longo dos anos. Dessa maneira, as
            diferenças entre os resultados das escolas serão minimizadas dentro
            do grupo ao qual cada uma faz parte, como também, entre os grupos
            estabelecidos.
          </p>
        </Grid>
        <Grid cols="8 8 8 8" style={{ background: '#1B80D4' }}>
            <p className="littleWhiteText">
              ÍNDICE SÓCIO-ECONÔMICO (NSE) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut.s.
            </p>
            <p className="littleWhiteText">
              ÍNDICE SÓCIO-ECONÔMICO (NSE) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut.s.
            </p>
        </Grid>

        <Rodape />
      </div>
    );
  }
}

export default Main;

import React from 'react';
import Grid from '../../components/Grid';
import icg from './img/Icon_ICG_1-01.png';
import nse from './img/Icon_NSE.png';

export default function Informativo() {
  return (
    <Grid cols="12 12 12 12" className="row fundoAzulEscuro text-justify">
      <Grid cols="4 4 4 4">
        <span className="headerBrancoItalico">
          Entenda como são definidas as metas da sua escola
        </span>
        <br />
        <br />
        <span className="fontePeqBranca">
          As metas serão estabelecidas para os próximos cinco anos, a partir dos
          grupos formados considerando o Índice Sócio Econômico (NSE) e
          Indicador de Complexidade de Gestão (ICG), levando em conta somente as
          escolas que compõem cada grupo, objetivando, assim, a diminuição da
          desigualdade dos resultados ao longo dos anos. Dessa maneira, as
          diferenças entre os resultados das escolas serão minimizadas dentro do
          grupo ao qual cada uma faz parte, como também, entre os grupos
          estabelecidos.
        </span>
      </Grid>

      <Grid cols="8 8 8 8" className="fontePeqBranca">
        <div className="row mt-4">
          <Grid cols="3 3 3 3">
            <img src={nse} alt="nse" className="iconePeq" />
          </Grid>
          <Grid cols="8 8 8 8">
            <span>
              <b>ÍNDICE SÓCIO-ECONÔMICO (NSE)</b> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut.s.
            </span>
          </Grid>
        </div>
        <div className="row mt-4">
          <Grid cols="3 3 3 3">
            <img src={icg} alt="icg" className="iconePeq" />
          </Grid>
          <Grid cols="8 8 8 8">
            <span>
              <b>ÍNDICE DE COMPLEXIDADE DE GESTÃO (ICG)</b> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut.s.
            </span>
          </Grid>
        </div>
        {/* <br />
        <br /> */}
        {/* <span className="border">
          <b>INDICADOR DE COMPLEXIDADE DE GESTÃO (ICG)</b> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut.s.
        </span> */}
      </Grid>
    </Grid>
  );
}

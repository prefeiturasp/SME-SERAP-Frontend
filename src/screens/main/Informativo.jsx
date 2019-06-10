import React from 'react';
import Grid from '../../components/Grid';
import icg from './img/Icon_ICG_1-01.png';
import nse from './img/Icon_NSE.png';

export default function Informativo() {
  return (
    <div className="row text-left">
      <Grid cols="4 4 4 4" className="fd-azl-esc p-5">
        <div>
          <span className="hd-bc-it">
            Entenda como são definidas as metas da sua escola
          </span>
        </div>
        <div className="mt-5">
          <span className="ft-pq-bc">
            As metas serão estabelecidas para os próximos cinco anos, a partir
            dos grupos formados considerando o{' '}
            <b>
              Índice Sócio Econômico (INSE) e Indicador de Complexidade de
              Gestão (ICG),
            </b>{' '}
            levando em conta somente as escolas que compõem cada grupo,
            objetivando, assim, a diminuição da desigualdade dos resultados ao
            longo dos anos. Dessa maneira, as diferenças entre os resultados das
            escolas serão minimizadas dentro do grupo ao qual cada uma faz
            parte, como também, entre os grupos estabelecidos.
          </span>
        </div>
      </Grid>
      <Grid cols="8 8 8 8" className="ft-pq-bc fd-azl-esc p-5">
        <div className="row mt-4">
          <Grid cols="3 3 3 3" className="d-flex align-items-center">
            <img src={nse} alt="nse" className="ic-pq" />
          </Grid>
          <Grid cols="9 9 9 9">
            <div className="border border-warning p-3">
              <p>
                <b>ÍNDICE SÓCIO-ECONÔMICO (INSE)</b>
              </p>
              <span>
                O Indicador do Nível Socioeconômico é considerado um constructo
                latente, que sintetiza de maneira unidimensional informações
                sobre a escolaridade dos pais e sobre a renda familiar, e o Inse
                objetiva contextualizar o desempenho das escolas nas avaliações
                e exames realizados pelo Inep, bem como o seu esforço na
                realização do trabalho educativo, ao caracterizar, de modo
                geral, o padrão de vida de seu público, relacionados à
                respectiva posição na hierarquia social.
              </span>
            </div>
          </Grid>
        </div>

        <div className="row mt-4">
          <Grid cols="3 3 3 3" className="d-flex align-items-center">
            <img src={icg} alt="icg" className="ic-pq" />
          </Grid>
          <Grid cols="9 9 9 9">
            <div className="border border-warning p-3">
              <p>
                <b>INDICADOR DE COMPLEXIDADE DE GESTÃO (ICG)</b>
              </p>
              <span>
                O Indicador de Complexidade de Gestão das escolas resume em uma
                única medida as informações de porte, turnos de funcionamento,
                nível de complexidade das etapas e quantidade de etapas
                ofertadas. A gestão da escola certamente envolve outros fatores
                e dimensões não contemplados aqui, entretanto, verifica-se que,
                mesmo com poucos aspectos contemplados na sua construção o
                indicador apresenta potencial para contextualização dos
                resultados das avaliações. O ICG é divulgado em 6 níveis, mas
                para utilizá-lo na constituição das metas, foram agrupados em
                dois grupos sendo: Grupo 1 formado pelos níveis 1, 2 e 3 e o
                Grupo 2 formados pelos níveis 4, 5 e 6.
              </span>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

import React from 'react';
import Grid from '../../components/Grid';
import icg from './img/IconeICG.png';
import nse from './img/IconeNSE.png';
import Button, { ButtonStyle } from '../../components/Button';
import NotaTecnicaCalculoMetasIDEP from '../../assets/files/Nota_Tecnica_Calculo_Metas_IDEP.pdf';
import { Link } from 'react-router-dom';

export default function Informativo() {
  return (
    <>
      <Grid cols="4 4 4 4" className="align-self-center">
        <h2 className="font-italic font-weight-bolder text-white">Entenda como são definidas as metas da sua escola</h2>
        <div className="mt-5 text-white card-texto-grupo">
          As metas serão estabelecidas para os próximos cinco anos, a partir dos grupos formados considerando o
          <strong>Índice Sócio Econômico (INSE) e Indicador de Complexidade de Gestão (ICG)</strong>, levando em
          conta somente as escolas que compõem cada grupo, objetivando, assim, a diminuição da desigualdade dos
          resultados ao longo dos anos. Dessa maneira, as diferenças entre os resultados das escolas serão
          minimizadas dentro do grupo ao qual cada uma faz parte, como também, entre os grupos estabelecidos.
        </div>
        <Link
          to={NotaTecnicaCalculoMetasIDEP}
          target="_blank"
          download
        >
          <Button
            style={ButtonStyle.OutlineLight}
            label="Nota técnica"
            className="font-weight-bold text-uppercase mt-5 mb-lg-0 mb-5"
          />
        </Link>
      </Grid>
      <Grid cols="8 8 8 8" className="">
        <div className="row">
          <Grid cols="4 4 4 4" className="d-lg-flex d-none align-items-center justify-content-end">
            <img src={nse} alt="" className="img-fluid w-50" />
          </Grid>
          <Grid cols="8 8 8 8">
            <div className="border border-warning rounded p-4">
              <h4 className="font-weight-bold text-white titulo-inse-icg">ÍNDICE SÓCIO-ECONÔMICO (INSE)</h4>
              <div className="text-white card-texto-grupo">
                O Indicador do Nível Socioeconômico (Inse) consiste em um construto latente que sintetiza,
                de forma unidimensional, informações a respeito da escolaridade dos pais e da renda familiar.
                O objetivo do Inse é contextualizar o desempenho da escolas nas avaliações e exames que realizam,
                bem como sua prática educativa, caracterizando, dessa forma, o padrão de vida dos estudantes e suas famílias.
              </div>
            </div>
          </Grid>
        </div>
        <div className="row mt-5">
          <Grid cols="4 4 4 4" className="d-lg-flex d-none align-items-center justify-content-end">
            <img src={icg} alt="" className="img-fluid w-50" />
          </Grid>
          <Grid cols="8 8 8 8">
            <div className="border border-warning rounded p-4">
              <h4 className="font-weight-bold text-white titulo-inse-icg">INDICADOR DE COMPLEXIDADE DE GESTÃO (ICG)</h4>
              <div className="text-white card-texto-grupo">
                O Indicador de Complexidade de Gestão (ICG) das escolas sintetiza, em uma única medida, informações de porte,
                turnos de funcionamento, nível de complexidade das etapas de ensino e quantidade de etapas ofertadas.
                Há vários fatores envolvidos na gestão de uma escola, porém, o ICG mostra, com validade, a contextualização
                dos resultados das avaliações. O ICG é divulgado em 6 níveis, mas para utilizá-lo na constituição das metas,
                eles foram reagrupados em dois grupos sendo: Grupo 1, formado pelos níveis 1, 2 e 3; e Grupo 2, formado pelos níveis 4, 5 e 6.
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

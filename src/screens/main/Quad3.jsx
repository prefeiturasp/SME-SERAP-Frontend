import React from 'react';
import Grid from '../../components/Grid';

export default function Quad3() {
  return (
    <Grid cols="5 5 5 5" className="p-3 text-justify">
      <p className="txt-ng-it">
        Todos os estudantes tem direito não só à educação, mas à educação de
        qualidade.
      </p>
      <p className="texto-pequeno-cinza mt-3">
        <b>O Índice de Desenvolvimento da Educação (IDEP)</b> foi criado para
        medir o desempenho das escolas da Rede Municipal de Ensino, levando em
        conta os componentes curriculares avaliados na Prova São Paulo e o fluxo
        escolar. O IDEP, portanto, combina aspectos pedagógicos e sociais,
        permitindo que a escola seja avaliada a partir da sua realidade. A
        combinação dessas informações traça um perfil da Rede que ajudará a
        identificar boas práticas e a planejar estratégias pedagógicas.
      </p>
    </Grid>
  );
}

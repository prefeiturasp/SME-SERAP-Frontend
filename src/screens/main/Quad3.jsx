import React from 'react';
import Grid from '../../components/Grid';

export default function Quad3() {
  return (
    <Grid cols="5 5 5 5" className="p-3 text-left">
      <p className="txt-ng-it p-5">
        Todos os estudantes tem direito não só à educação, mas à educação de
        qualidade.
      </p>
      <div className="texto-pequeno-cinza p-5 mt-3 text-left">
        <p>
          <b>O Índice de Desenvolvimento da Educação (IDEP)</b> foi criado para
          medir o desempenho das escolas da Rede Municipal de Ensino, levando em
          conta os componentes curriculares avaliados na Prova São Paulo e o
          fluxo escolar.
        </p>
        <p>
          O IDEP, portanto, combina aspectos pedagógicos e sociais, permitindo
          que a escola seja avaliada a partir da sua realidade.
        </p>
        <p>
          A combinação dessas informações traça um perfil da Rede que ajudará a
          identificar boas práticas e a planejar estratégias pedagógicas.
        </p>
      </div>
    </Grid>
  );
}

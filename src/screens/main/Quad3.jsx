import React from 'react';
import Grid from '../../components/Grid';
import Button, { ButtonStyle } from '../../components/Button';

export default function Quad3() {
  return (
    <>
      <Grid cols="4 4 4 4" className="text-left pr-0">
        <h2 className="font-italic font-weight-bolder d-block mb-5 pb-4 cor-azul card-anos">Todos os estudantes tem ireito não só à educação, mas à educação de qualidade</h2>
        <div className="text-left card-texto-grupo">
          <p><strong>O Índice de Desenvolvimento da Educação (IDEP)</strong> foi criado para
            medir o desempenho das escolas da Rede Municipal de Ensino, levando em
            conta os componentes curriculares avaliados na Prova São Paulo e o
            fluxo escolar.</p>
          <p>O IDEP, portanto, combina aspectos pedagógicos e sociais, permitindo
            que a escola seja avaliada a partir da sua realidade.</p>
          <p>A combinação dessas informações traça um perfil da Rede que ajudará a
            identificar boas práticas e a planejar estratégias pedagógicas.</p>
        </div>
        <Button
          style={ButtonStyle.OutlinePrimary}
          label="Nota técnica"
          className="font-weight-bold text-uppercase mt-4 pl-3 pr-3 cor-azul"
        />
      </Grid>
      <Grid cols="1 1 1 1" className="d-none d-lg-block"></Grid>
    </>
  );
}

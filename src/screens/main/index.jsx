import React, { Component } from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabel from '../../components/circle/CircleAndLabel';
import Grid from '../../components/Grid';
import './custom.css';
import livros from './img/livros.png';
import Rodape from './rodape';

export class Main extends Component {
  render() {
    return (
      <div className="row backNormal">
        <Grid cols="5 5 5 5" className="conhecaINEP p-5">
          <div className="p-5">
            <span>Conheça o</span>
            <br />
            <span style={{ color: '#1B80D4' }}>IDEP</span>
            <p className="textoPeqCinza">
              Saiba mais sobre a importância do índice, como ele é calculado e
              as metas da sua escola
            </p>
          </div>
        </Grid>
        <Grid cols="7 7 7 7" className="col backCustom p-3">
          <Button label="HOME" style={ButtonStyle.OutlineLight} />
          <Button
            label="SEU GRUPO"
            style={ButtonStyle.OutlineLight}
            className="ml-3"
          />
          <Button
            label="SUA ESCOLA"
            style={ButtonStyle.OutlineLight}
            className="ml-3"
          />
          <Button
            label="METAS"
            style={ButtonStyle.OutlineLight}
            className="ml-3"
          />
          <img
            src={livros}
            style={{
              left: '51.46%',
              right: '7.87%',
              top: '4.06%',
              bottom: '89.57%',
              width: '440.00px',
              height: '370.13px'
            }}
            alt="Logo"
          />
          <Button
            label="CÁLCULO"
            style={ButtonStyle.OutlineLight}
            className="ml-3"
            buttonStyle={{ fontSize: '56px', lineheight: '80px' }}
          />
        </Grid>
        {/*  quebra de linha aqui */}
        <div className="w-100" />
        <Grid cols="5 5 5 5" className="p-3">
          <p className="textoAzulNegritoItalico">
            Todos os estudantes tem direito não só à educação, mas à educação de
            qualidade.
          </p>
          <p className="textoPeq2">
            <b>O Índice de Desenvolvimento da Educação (IDEP)</b> foi criado
            para medir o desempenho das escolas da Rede Municipal de Ensino,
            levando em conta os componentes curriculares avaliados na Prova São
            Paulo e o fluxo escolar. O IDEP, portanto, combina aspectos
            pedagógicos e sociais, permitindo que a escola seja avaliada a
            partir da sua realidade. A combinação dessas informações traça um
            perfil da Rede que ajudará a identificar boas práticas e a planejar
            estratégias pedagógicas.
          </p>
        </Grid>
        <Grid cols="7 7 7 7" className="row">
          <Grid cols="3 3 3 3">
            <CircleAndLabel
              label="5,94"
              topLabel="Aprendizado"
              bottomLabel="Quanto maior a nota, maior o aprendizado"
            />
          </Grid>
          <Grid cols="1 1 1 1" className="bigX">
            <p>X</p>
          </Grid>
          <Grid cols="3 3 3 3">
            <CircleAndLabel
              label="0,93"
              color="#FFBC0A"
              topLabel="Fluxo"
              bottomLabel="Quanto maior o valor, maior a aprovação"
            />
          </Grid>
          <Grid cols="1 1 1 1" className="bigX">
            <p> = </p>
          </Grid>
          <Grid cols="3 3 3 3">
            <CircleAndLabel
              label="5,2"
              color="#1B80D4"
              topLabel="IDEP"
              bottomLabel="Meta 5,2"
            />
          </Grid>
          <div>
            <Button
              label="Confira mais detalhes na nota técnica"
              style={ButtonStyle.OutlinePrimary}
            />
          </div>
        </Grid>
        <div className="w-100" />
        <Rodape />
      </div>
    );
  }
}

export default Main;

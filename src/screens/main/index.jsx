import React, { Component } from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabel from '../../components/circle/CircleAndLabel';
import Grid from '../../components/Grid';
import './custom.css';
import img from './img.png';

export class Main extends Component {
  render() {
    return (
      <div className="row backNormal">
        <Grid cols="5 5 5 5" className="p-5">
          <p
            className="ml-3"
            align="left"
            style={{
              color: '#828282',
              fontSize: '80px',
              lineHeight: '80px',
              width: '390px'
            }}
          >
            Conheça o
          </p>
          <p
            className="ml-3"
            align="left"
            style={{ color: '#1B80D4', fontSize: '80px', lineHeight: '80px' }}
          >
            IDEP
          </p>
          <br />
          <p
            className="ml-3"
            align="left"
            style={{ color: '#828282', width: '415.61px' }}
          >
            Saiba mais sobre a importância do índice, como ele é calculado e as
            metas da sua escola
          </p>
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
            src={img}
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
        <div class="w-100" />
        <Grid cols="5 5 5 5" className="p-3">
          <p style={{ color: '#1B80D4', fontSize: '26px' }}>
            Todos os estudantes tem direito não só à educação, mas à educação de
            qualidade.
          </p>
          <p style={{ color: '#828282', fontSize: '14px' }}>
            O Índice de Desenvolvimento da Educação (IDEP) foi criado para medir
            o desempenho das escolas da Rede Municipal de Ensino, levando em
            conta os componentes curriculares avaliados na Prova São Paulo e o
            fluxo escolar. O IDEP, portanto, combina aspectos pedagógicos e
            sociais, permitindo que a escola seja avaliada a partir da sua
            realidade. A combinação dessas informações traça um perfil da Rede
            que ajudará a identificar boas práticas e a planejar estratégias
            pedagógicas.
          </p>
        </Grid>
        <Grid cols="7 7 7 7">
          <CircleAndLabel label="5,94" />
          <CircleAndLabel label="0,93" color="#FFBC0A" />
          <CircleAndLabel label="5,2" color="#1B80D4" />
        </Grid>
      </div>
    );
  }
}

export default Main;

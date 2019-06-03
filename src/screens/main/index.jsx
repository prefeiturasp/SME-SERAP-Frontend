import React, { Component } from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import CircleAndLabel from '../../components/circle/CircleAndLabel';
import Grid from '../../components/Grid';
import './custom.css';
import byncsa from './img/by-nc-sa.png';
import livros from './img/livros.png';
import logoSP from './img/Logo_SP.png';

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
        </Grid>
        <div className="w-100" />
        <Grid cols="12 12 12 12">
          <div className="w-100" />
          <div className="bg-cinza-escuro p-5 text-white area-rodape fonte-doze">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-xs-12 mb-xs-4 d-flex align-items-end">
                  <img src={logoSP} alt="Prefeitura de SP" />
                </div>
                <div className="col-lg-2 col-xs-12 border-left mb-xs-4">
                  <ul className=" list-unstyled mb-0">
                    <li className="text-uppercase font-weight-bold">
                      Governo Municipal
                    </li>
                  </ul>
                  <ul className="list-unstyled mb-0 mt-0">
                    <li>Prefeito Bruno Covas</li>
                    <li>Equipe de Governo</li>
                    <li>Agenda do Prefeito</li>
                    <li>Agenda do Secretário</li>
                  </ul>
                </div>
                <div className="col-lg-2 col-xs-12 mb-xs-4">
                  <ul className="list-unstyled mb-3">
                    <li className="text-uppercase font-weight-bold">
                      Mapa do Site
                    </li>
                  </ul>
                  <ul className="list-unstyled mb-1">
                    <li className="text-uppercase font-weight-bold">
                      Canais Oficiais
                    </li>
                  </ul>
                  <ul className="list-inline mb-3">
                    <li className="list-inline-item">
                      <a className="text-white" href="">
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white" href="">
                        <i className="fab fa-twitter-square" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white" href="">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                  <img src={byncsa} alt="Copyright" />
                </div>
                <div className="col-lg-4 col-xs-12">
                  <div className="form-group mb-2">
                    <select className="form-control fonte-doze rounded-pill text-secondary bg-transparent border border-secondary text-white">
                      <option>Secretarias</option>
                    </select>
                  </div>
                  <div className="form-group mb-2">
                    <select className="form-control fonte-doze rounded-pill text-secondary bg-transparent border border-secondary text-white">
                      <option>Prefeituras Regionais</option>
                    </select>
                  </div>
                  <div className="form-group mb-0">
                    <select className="form-control fonte-doze rounded-pill text-secondary bg-transparent border border-secondary text-white">
                      <option>Órgãos e Autarquias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xs-12 text-center fonte-doze mt-2 mb-2">
                SECRETARIA MUNICIPAL DE EDUCAÇÃO — Rua Borges Lagoa, 1230 — Vila
                Clementino — CEP: 04038-003
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Main;

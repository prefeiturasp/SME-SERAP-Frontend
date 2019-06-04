import React from 'react';
import Grid from '../../components/Grid';
import byncsa from './img/by-nc-sa.png';
import logoSP from './img/Logo_SP.png';

export default function Rodape() {
  return (
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
  )
}

import React, { Component } from 'react';
import AnosHeader from './AnosHeader';
import './custom.css';
import Informativo from './Informativo';
import Quad1 from './Quad1';
import Quad2 from './Quad2';
import Quad3 from './Quad3';

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Quad1 />
          <Quad2 />
        </div>
        <div className="row">
          <Quad3 />
        </div>
        <div className="row">
          <AnosHeader label="Anos Iniciais" />
        </div>
        <div className="row">
          <AnosHeader label="Anos Finais" />
        </div>
        <div className="row">
          <Informativo />
        </div>
      </div>
    );
  }
}

export default Main;

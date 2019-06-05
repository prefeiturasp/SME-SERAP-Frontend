import React, { Component } from 'react';
import './custom.css';
import Quad1 from './Quad1';
import Quad2 from './Quad2';
export class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Quad1 />
          <Quad2 />
        </div>
      </div>
    );
  }
}

export default Main;

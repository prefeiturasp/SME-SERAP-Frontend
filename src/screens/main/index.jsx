import React, { Component } from 'react';
import Button, { ButtonStyle } from '../../components/Button';
import './custom.css';
import img from './img.png';

export class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col" style={{ background: '#E5E5E5' }}>
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
        </div>

        <div className="col backCustom">
          <Button label="HOME" style={ButtonStyle.OutlineLight} />
          <Button
            label="CÁLCULO"
            style={ButtonStyle.OutlineLight}
            className="ml-3"
          />
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
        </div>
      </div>
    );
  }
}

export default Main;

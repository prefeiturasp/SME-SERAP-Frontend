import React, { Component } from 'react';
import BaseButton, { ButtonStyle, ButtonType } from '../components/button';
import DatePickerXXX from '../components/datepicker';
import { Grid } from '../components/grid';
import './custom.css';
import logo from './logo.png';

export class Login extends Component {
  state = { rf: '', idade: '', cpf: '' };

  handleSubmit = values => {
    console.log(values, 'zxxxx');
    // const { email, password } = values;
    // if (email && password) {
    //   authService.login(email, password);
    // }
  };

  onRfChanged(e) {
    this.setState({ rf: e.target.value });
    console.log(this.state.rf);
  }

  onCPFChanged(e) {
    this.setState({ cpf: e.target.value });
    console.log(this.state.cpf);
  }

  render() {
    return (
      <div className="align-items-center">
        <Grid cols="4 4 4 4" className="container">
          <div>
            <img src={logo} alt="Logo" />
            <p className="blueFont">SERAp</p>
          </div>
          <div>
            <p className="whiteFont">PORTAL IDEP</p>
          </div>
          <div className="card card-login mx-auto card-width mt-4">
            <div className="card-body">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="rf"
                    id="rf"
                    onChange={e => this.onRfChanged(e)}
                    placeholder={'RF'}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="cpf"
                    id="cpf"
                    onChange={e => this.onCPFChanged(e)}
                    placeholder={'CPF'}
                  />
                </div>
                <div className="form-group">
                  <DatePickerXXX
                    className="form-control"
                    name="dn"
                    id="dn"
                    placeholder={'Data de nascimento'}
                  />
                </div>
                <div className="form-group" />
                <BaseButton
                  type={ButtonType.SUBMIT}
                  style={ButtonStyle.Primary}
                  label="Acessar"
                  className="btn-block"
                />
              </form>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Login;

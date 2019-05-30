import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import BaseButton, { ButtonStyle, ButtonType } from '../../components/Button';
import Grid from '../../components/Grid';
import MonthPicker from '../../components/MonthPicker';
import authService from '../../services/auth';
import './custom.css';

export class Login extends Component {
  state = {
    rf: '',
    cpf: '',
    dateSelected: '',
    disabled: true
  };

  handleSubmit(event) {
    const { rf, cpf, dateSelected } = this.state;
    authService
      .login(
        rf,
        cpf,
        dateSelected.getYear() + 1900,
        dateSelected.getMonth() + 1
      )
      .then(response => {
        if (!response.isValid) alert(`Erro ao entrar: ${response.detail}`);
      });
    event.preventDefault();
  }

  canSubmit() {
    const disabled = this.state.rf && this.state.cpf;
    disabled
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
  }

  onRfChanged(e) {
    this.setState({ rf: e.target.value });
    this.canSubmit();
  }

  onCPFChanged(e) {
    this.setState({ cpf: e.target.value });
    this.canSubmit();
  }

  onDateSelected(date) {
    this.setState({ dateSelected: date });
    this.canSubmit();
  }

  render() {
    return (
      <div className="align-items-center">
        <Grid cols="4 4 4 4" className="container">
          <div>
            <img
              src={logo}
              style={{ width: '170.00px', height: '70.13px' }}
              alt="Logo"
            />
          </div>
          <div>
            <p className="whiteFont">PORTAL IDEP</p>
          </div>
          <hr />
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
                  <MonthPicker
                    className="form-control"
                    name="dn"
                    id="dn"
                    autoComplete="off"
                    placeholder="Mês/Ano de nascimento"
                    onSelect={date => this.onDateSelected(date)}
                  />
                </div>
                <div className="form-group" />
                <BaseButton
                  type={ButtonType.SUBMIT}
                  style={ButtonStyle.Primary}
                  disabled={this.state.disabled}
                  label="Entrar"
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

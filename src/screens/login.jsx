import React, { Component } from 'react';
import BaseButton, { ButtonStyle, ButtonType } from '../components/button';
import authService from '../services/auth';

export class Login extends Component {
  state = { rf: '', idade: '', cpf: '' };
  handleSubmit = values => {
    const { email, password } = values;
    if (email && password) {
      authService.login(email, password);
    }
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
      <div>
        <div className="container">
          <div className="card mb-5 mt-5 mx-auto card-width bg-dark">
            <div className="card-body">
              <div className="card-body text-center text-white">LOGO</div>
            </div>
          </div>
          <div className="card card-login mx-auto mt-5 card-width">
            <div className="card-body">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group" />
                <div className="form-group">
                  <label htmlFor="rf" className={'col-form-label'}>
                    RF:{' '}
                  </label>
                  <input
                    className="form-control"
                    name="rf"
                    id="rf"
                    onChange={e => this.onRfChanged(e)}
                    placeholder={'RF'}
                  />

                  <label htmlFor="cpf" className={'col-form-label'}>
                    CPF:{' '}
                  </label>
                  <input
                    className="form-control"
                    name="cpf"
                    id="cpf"
                    onChange={e => this.onCPFChanged(e)}
                    placeholder={'CPF'}
                  />
                </div>
                <BaseButton
                  type={ButtonType.SUBMIT}
                  style={ButtonStyle.Primary}
                  label="Acessar"
                  className="btn-block"
                />

                <p className="text-center mt-3">
                  <a href="#teste" className="text-primary">
                    Ainda não sou cadastrado
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

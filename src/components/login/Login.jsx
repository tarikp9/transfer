import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      code: '',
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, code } = this.state;
    return (
      <div className="Login">
        {' '}
        <form>
          <div>
            <p>Some on</p>
            <p>On line </p>
            <label htmlFor="email">
              Email
              <input
                value={email}
                id="email"
                name="email"
                type="email"
                onChange={this.onChange}
              />
            </label>
            <label htmlFor="code">
              Code
              <input
                value={code}
                id="code"
                name="code"
                type="code"
                onChange={this.onChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';

export default class Login extends Component {
    handleLoginUser = (e) => {
        e.preventDefault();

        var email =e.target.elements.email.value.trim();
        var password = e.target.elements.password.value.trim();
    
        var login = {
          email: email,
          password: password
        }

        this.props.handleLoginUser(login);
    }

    render() {
        return (
          <div>
            <h2>Hello</h2>
            <h4>Let's login</h4>
              <form onSubmit={this.handleLoginUser}>
                <table>
                <tbody>
                  <tr><th>Name:</th><td><input type="text" name="email" size="15" required="true"/></td></tr>
                  <tr><th>Password:</th><td><input type="password" name="password" size="15" required="true"/></td></tr>
                  <tr><td><button>Login</button></td><td><button>Sign up</button></td></tr>
                </tbody>
                </table>
              </form>
          </div>
        );
      }
}
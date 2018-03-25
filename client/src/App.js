import React, { Component } from 'react';

import Login from './components/login';
import Me from './components/me';

import './App.css';

class App extends Component {
  state= {
    user: {
      _id: '',
      email: '',
      token: undefined
    },
    error: undefined
  }
  
  componentDidMount = () => {
    fetch('/test', {
      method: 'post',
      headers: {
        "content-type": "application/json" 
      },
      body: JSON.stringify({"item" : "A big one"})     
    }).then(res => console.log(res.headers))
  };
  
  handleLoginUser = (login) => {
    var token= '';

    fetch('users/login', {
      method: 'post',
      headers: {
        "content-type": "application/json" 
      },
      body: JSON.stringify(login)
    }).then(res => {
        if(res.ok){
          token= res.headers.get('x-auth');
          return res.json()
          .then(data => {
            if(data){
              this.setState(() => ({
                user: {
                  _id: data._id,
                  email: data.email,
                  token: token
                },
                error: undefined
              }));
            }  
          })
        }
        else {
          this.setState((prevState) => ({error: 'Something is wrong'}))
        }      
    }).catch((e) => {});
  }

  render() {
    return (
      <div>
        {this.state.user.email ? <Me data={this.state.user}/> : <Login handleLoginUser= {this.handleLoginUser}/>}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default App;

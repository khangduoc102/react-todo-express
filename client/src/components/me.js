import React, { Component } from 'react';
import Todo from './todo';

export default class Me extends Component {
  state= {
    todos: []
  }

  componentDidMount = () => {
    fetch('todos', {
      headers: {
        "content-type": "application/json",
        "x-auth": this.props.data.token
      }
    }).then(res => {
      if(res.ok){
        res.json()
          .then(res => {
            this.setState(() => ({todos: res.todos}));
            console.log(this.state);
          });
      }
      else {
        console.log("something happend");
      }
    })
  }

    render() {
        return (
          <div>
            <h2>Hello {this.props.data.email}</h2>
            <form>
              <input size="10"/>
              <button>Find by Name</button>
            </form>
            <ol>
            {this.state.todos.map((todo, index) => (
              <Todo
                key={index} 
                value={this.state.todos[index]}
              />
            ))}
            </ol>
          </div>
        );
      }
}
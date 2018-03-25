import React, { Component } from 'react';

export default class Todo extends Component {

  componentDidMount = () => {

  }

    render() {
        return (
          <li>{this.props.value.text}</li>
        );
      }
}
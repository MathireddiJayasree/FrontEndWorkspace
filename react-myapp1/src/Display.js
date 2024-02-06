import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2>I am from Display Component</h2>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

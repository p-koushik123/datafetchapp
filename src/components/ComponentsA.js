import React, { Component } from 'react'

export default class ComponentsA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Chethan"
      }
    }
    
  render() {
    return (
      <div>
        <h2> Hai My Name is :{this.state.name}</h2>
      </div>
    )
  }
}

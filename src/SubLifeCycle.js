import React, { Component } from 'react'

export default class SubLifeCycle extends Component {

    componentWillUnmount() {
        this.props .UbahMakanan("Sate")
    }


  render() {
    return (
      <div>
        <h2>Isi SubLifeCycle</h2>
      </div>
    )
  }
}

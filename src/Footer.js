import React, { Component } from 'react'

export default class Footer extends Component {
        constructor(props) {
            super([props]);
        }


  render() {
    return (
      <div>
          <h1>
              Ngab Ngapain lu disni {this.props.foot()}
          </h1>
      </div>
    )
  }
}

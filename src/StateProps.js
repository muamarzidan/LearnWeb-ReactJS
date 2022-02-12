import React, { Component } from 'react'
import OperanProps from './OperanProps';

//fun state sendiri buat keluarin
export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Makanan : 'Bakso'
        }
    }
        //   {/* caraganti v1 */}
        //var ganti makanan ke yang baru yang di button (sate)
    gantiMakanan = (makanan_baru) => {
        this.setState ({
            Makanan: makanan_baru
        })
    }

  render() {
    return (
      <div>
          <h2>
              {this.state.Makanan}
          </h2>

          <button onClick={() => this.gantiMakanan("Sate")}>
              Ganti Makanan
          </button>
          <OperanProps Makanan={this.state.Makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    )
  }
}

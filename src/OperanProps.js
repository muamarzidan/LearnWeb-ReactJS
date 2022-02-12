import React, { Component } from 'react'

export default class 
 extends Component {
  
//   gantiMakanan(makanan_baru) {
//     this.setState ({
//         Makanan: makanan_baru
//     })
// }

  render() {
    //cara 2/trik cepat
    const { Makanan, gantiMakanan } = this.props
    return (
      <div>
          <h3>
            Operan State yang menjadi Props : {this.props.Makanan}
          </h3>

          <button onClick={() => gantiMakanan("Sate")}>
              Ganti Makanan
          </button>
      </div>
    )
  }
}

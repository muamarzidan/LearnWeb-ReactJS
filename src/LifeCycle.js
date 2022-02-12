import React, { Component } from 'react'
import SubLifeCycle from './SubLifeCycle';

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          Makanan : 'Bakso',
          data: {   },
          tampilHalamanSubLife: false,
      };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then(json => {
            this.setState({
                data : json
            });
        });
    };

    //fun buat ubah makanannya
    UbahMakanan(value) {
        this.setState({
            Makanan : value
        });
    };

  render() {
    //   console.log("Data : ", this.state.data);
    return (
      <div>
        <h2>{this.state.Makanan}</h2>
        {/* cod for show halam yang disublife jika true dan keubah */}
        {this.state.tampilHalamanSubLife && <SubLifeCycle UbahMakanan={(value) => this.UbahMakanan(value)} />}
        {/* button untuk nampilin isi dari tampilHalamanSubLife */}
        <button onClick={() => this.setState({tampilHalamanSubLife: !this.state.tampilHalamanSubLife})}>Ubah Makanannya</button>
    </div>
    );
  };    
};
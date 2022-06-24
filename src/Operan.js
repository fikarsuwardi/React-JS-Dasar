import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    return (
      <div>
        <h2>Operan state yang menjadi props: {this.props.makanan}</h2>
        <button onClick={() => this.props.gantiMakanan("Soto")}>
            Ganti Makanan   
        </button>
      </div>
    )
  }
}

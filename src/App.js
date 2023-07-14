import './App.css'
import React, { Component } from 'react'

export default class Timer extends Component {

  constructor(props){
      super(props)
      this.state = {seconds: 0}
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

   componentDidMount() {
    this.inerval = setInterval(() =>
    this.tick(),1000);
   }

   componentWillUnmount () {
    clearInterval(this.inerval)
   }

  render() {
    return (
      <div>
          Ceкунды: {this.state.seconds}
      </div>
    )
  }
}


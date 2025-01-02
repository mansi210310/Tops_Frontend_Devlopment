import React, { Component } from 'react'

class ComponentUpdateUnmount extends Component {
    constructor(){
        super()
        this.state = {
            count:0,
            color:"White"
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component updated! Previous state:', prevState)
    }
    componentWillUnmount(){
        console.log('Component will unmount!')
    }
    incrementCount = () =>{
        const colors = ['Red','Green','Yellow','Blue','Pink','Purple','Orange']
        this.setState((prevState)=>({
            count: prevState.count + 1,
            color: colors[(prevState.count + 1)]
        }));
    };
  render() {
    // console.log("Render called....")
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Color: {this.state.color}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}
export default ComponentUpdateUnmount
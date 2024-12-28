import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    incrementCount = () => {
        this.setState({ 
            count: this.state.count + 1 
        });
    };
    decrementCount = () => {
        this.setState({ 
            count: this.state.count - 1 
        });
    };
    render() {
    return (
        <div>
            <h1 className='welcome'>Current Count: {this.state.count}</h1>
            <button onClick={this.incrementCount} className='name'>Increment</button>
            <br /><br />
            <button onClick={this.decrementCount} className='name'>Decrement</button>
        </div>
    )
    }
}
export default  Counter
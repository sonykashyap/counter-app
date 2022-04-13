import React,{ Component } from 'react';

class Counter extends Component{
    state = {
        counterValue : this.props.value
    }
    valueCounter = () =>{
        console.log("Value is ", this.state.counterValue);
        this.setState({
            counterValue : this.state.counterValue + 1,
        })
    }
    valueDecrement = () => {
        console.log("Value decrement function()", this.state.counterValue - 1);
        this.setState({
           counterValue: this.state.counterValue - 1,
        })
        // console.log("Value is ", this.state.counterValue);
    }
    render(){
        return(
            <div className="counter-container">
                <button className='btn-decrement' onClick={this.valueDecrement}> - </button>
                <input className='Counter-value' value={this.state.counterValue}/>
                <button className='btn-increment' onClick={ this.valueCounter }> + </button>
            </div>
        )
    }
}

export default Counter;
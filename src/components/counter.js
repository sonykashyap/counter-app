import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counterValue: 1, isLoader: false};
        console.log("State is ", this.state.counterValue);
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount(){
        // console.log("Yes Counted component mounted");
        this.handleChange();
        
    }
    handleChange = (event) =>{
        if(event === undefined){
            this.props.parentCallBack(this.state.counterValue);
        }else{
            console.log("IF else part");
            if(event.target.id === "counterIncrement"){
                this.setState({
                    counterValue : this.state.counterValue + 1,
                });
                this.counterValueChange(this.state.counterValue);

            } else if(event.target.id === "counterDecrement"){
                this.setState({
                    counterValue: this.state.counterValue - 1,
                });
                this.counterValueChange(this.state.counterValue);

            } else{
                this.setState({counterValue : event.target.value});
                // this.props.parentCallBack(event.target.value, this.state.isLoader);
                this.counterValueChange(this.state.counterValue);
                event.preventDefault();
            }
            
        }
        
    }
    counterValueChange = (value) =>{
        // this.setState({counterValue : event.target.value});
        console.log("Valuers is ", value);
        this.props.parentCallBack(value);
    }
    // valueCounter = (event) =>{
    //     console.log("event target is ", event.target.id);
    //     this.setState({
    //         counterValue : this.state.counterValue + 1,
    //     })
    //     // console.log("Changed  value is ", this.state.counterValue);
    // }
    // valueDecrement = (event) => {
    //     console.log("event target is ", event.target.id);
    //     this.setState({
    //        counterValue: this.state.counterValue - 1,
    //     })
    // }
    
    render(){
        return(
            <div className="counter-container">
                <button className='btn-decrement' id="counterDecrement" onClick={ this.handleChange} > - </button>
                <input className='Counter-value' value={ this.state.counterValue} onChange={this.handleChange} />
                <button className='btn-increment' id="counterIncrement" onClick={ this.handleChange }> + </button>
            </div>
        )
    }
}

export default Counter;
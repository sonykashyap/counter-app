// import logo from './logo.svg';
import { Component } from 'react';
import Counter from './components/counter';


import './App.css';

class App extends Component {
  state = {
    btn_color : "button-red",
    name      : "Counter-app",
    counterValue: 1
  };
  
  onClick = (event) =>{
    this.setState({
      btn_color:'button-grey'
    });
  }
  render() {
    return(
      <div className="App">
      <span className='saved-text'>Saving Counter value</span>
        <Counter value={this.state.counterValue}></Counter>
        <div>Counter value: { this.state.counterValue }</div>
      </div>
    )
  }
}

export default App;

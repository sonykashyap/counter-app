// import logo from './logo.svg';
import React from 'react';
import Counter from './components/counter';
import Loader from './components/loader';
import axios from 'axios';

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {counterValue: 1, isCounter: false, isLoader: false};
    axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json")
    .then(response =>{
      if(response.data){
        this.setState({isCounter:true});
        if('debanjan' in response.data)
        // this.setState({isCounter:true});
        this.setState({counterValue: response.data.debanjan});
      }else{
        this.setState({isCounter:true});
      }
    })
  }
  handleCallBack = (childData) =>{
    console.log("Child data is ", childData);
    this.setState({counterValue: childData});
  }
  render() {
    return(
      <div className="App">
      {
        this.state.isLoader ? <div className='Loader-container'>
          <Loader ></Loader>
          <span className='saved-text'>Saving Counter value</span>
        </div> : ''
      }
        
        <Counter parentCallBack={this.handleCallBack} ></Counter>
        <div>Counter value: { this.state.counterValue }</div>
      </div>
    )
  }
}

export default App;

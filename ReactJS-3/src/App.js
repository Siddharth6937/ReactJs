import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ChildComponent1 from './components/ChildComponent1';
class App extends Component {
  constructor(props){
    super(props)

    this.state={
      count : 0,
      show : true,
    }

    console.log("I am parent constructor");
  }

  componentDidMount(){
    console.log("component Did Mount");
    console.log("----------------component Did Mount is Finished-----------");
  }

  componentDidUpdate(){
    console.log("component Did Update");
    console.log("----------------component Did Update is Finished-----------");
  }



  render() {
    console.log("I am render");
    return (
      <div className='App'>
        <h1>App</h1>

        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState(prevState => ({ count : prevState.count + 1})) }> Increment</button> <br />

        {this.state.show && (<ChildComponent1 />) }
        <button onClick={() => this.setState(prevState => ({ show : !prevState.show})) }> Show/Hide</button>
      </div>
    );

  }
}

export default App;
/*
Component of LifeCycle phase :-
  1. Mounting (constructor => render => componentDidMount)
  2. Updating
  ([Listens to props/state updates] render (re-render) => componentDidUpdate)
  3. Unmounting
  ([Just before unmounting] componentWillUnmount)

  Component LifeCycle Methods :- 
  1. componentDidMount
    - API Calls
  2. componentDidUpdate
    - Code that needs to be executed whenever the component has re-rendered
  3. componentWillUnmount 
    - Reset states, reset form fields
*/

/*
import Navbar from './components/Navbar';
import Products from './components/Products';

        <Navbar />
        <Products />
        */
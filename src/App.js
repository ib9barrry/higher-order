import React, { Component } from 'react';
import './App.css';
import Goku from './Goku';
import Vegeta from './Vegeta';

class App extends Component{

  state = {
    Goku: 100,
    Vegeta: 100
  }

  render(){
    return (
      <div className="container text-center ">
        <h1> Goku VS  Vegeta </h1>
        <hr />
        Quand je finis apres tu peux regarder !
        <div className='row'>
          <Goku name= "Goku" life={this.state.Goku} />
          <Vegeta name= "Vegeta" life={this.state.Vegeta} />
        </div>

      </div>
    );
  }
}

export default App;

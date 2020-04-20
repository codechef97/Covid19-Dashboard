import React, { Component } from 'react';
import './App.css';

import CovidState from './Components/CovidState/CovidState';
import CovidData from './Components/Covid-Data/CovidData';
class App extends Component{

  states =[
    {statename :"Maharashtra", confirmed : 90, deaths : 40, recovered :10},
    {statename :"Goa", confirmed : 71, deaths : 30, recovered: 12},
    {statename :"Delhi", confirmed : 190,deaths : 60,recovered : 20} 
  ];
    render(){

  return(
  <div>
  <CovidState confirmed={this.states[0].confirmed} deaths={this.states[0].deaths} recovered={this.states[0].recovered} />
  <CovidData />
  </div>
  )
}

}

export default App;

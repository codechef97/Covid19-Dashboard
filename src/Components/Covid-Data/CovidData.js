import React, { Component } from 'react';
import axios from 'axios';

import CovidCards from '../Covid-Cards/CovidCards';


class CovidData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Data: []
    }
  }

  

  componentDidMount() {
    axios.get(`https://api.rootnet.in/covid19-in/stats/latest`)
      .catch(error => { console.log(error) })
      .then(response => {
        console.log(response.data.data.regional)
        this.setState({ Data: response.data.data.regional })
      })
  }



  render() {

    return (
      <div>
        {
          this.state.Data.sort((b, a) => a.totalConfirmed - b.totalConfirmed).map(((item, i) => (
            <div key={item.loc}>

              <center> <h4> {item.loc}</h4></center>
              <CovidCards Confirmed={item.totalConfirmed} Recovered={item.discharged} Deaths={item.deaths} />
            </div>)))
        }
      </div>
    )
  }
}

export default CovidData;
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './CovidGraph.css';
export class CovidGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ['Confirmed Infected', 'Confirmed Recovered', 'Confirmed Deaths'],
                datasets: [
                    {
                        label: 'Covid Counts',
                        data: [
                            98,
                            20,
                            2
                        ],
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(0, 0, 255, 0.5)'
                        ]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div className='container'> 
                <div className='CovidGraph'>
                    <Bar data={this.state.data} width='750' />
                </div>
            </div>
        );
    }
}

export default CovidGraph;
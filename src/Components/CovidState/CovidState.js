import React from 'react';

import CovidCards from '../Covid-Cards/CovidCards';
import CovidGraph from '../Covid-Graph/CovidGraph';
import './StateStyle.css';


const name = (props) => {
    
    const [states,setStates] = useState('');
    const [confirmed,setConfirmed] = useState('');
    const [Deaths, setDeaths] = useState('');
    const [Recovered, setRecovered] = useState('');

    useEffect(()=>{
            
    });
    return (
        <div>
            <div className='StateStyle'>
                <h3>Covid Dashboard</h3>
            </div>
            <CovidCards 
            Confirmed = {props.confirmed}
            Deaths = {props.deaths}
            Recovered = {props.recovered}
            />
            <CovidGraph />
        </div>
    )
};

export default name;   
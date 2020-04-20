import React from 'react';
import './CovidCards.css';
import CountUp from 'react-countup';


const CovidCard = (props) => {

return (

  <div className='container-1'>
    
    <div className='box-1'>
      <h5 className='infectedBold'>Infected</h5>
      <h4>
        <CountUp
          start={0}
          end={props.Confirmed}
          durantion={2.5}
        />
      </h4>
      <p>Update On  {new Date('04-12-2020').toDateString()}</p>
      <p>Number of active cases of COVID-19</p>
    </div>
    <div className='box-2'>
      <h5 className='recoveredBold'>Recovered</h5>
      <h4>
        <CountUp
          start={0}
          end={props.Recovered}
          durantion={2.5}
        />
      </h4>
      <p>Update On  {new Date('04-12-2020').toDateString()}</p>
      <p>Number of recoveries from COVID-19</p>
    </div>
    <div className='box-3'><h5 className='deathsBold'>Deaths</h5>
      <h4>
        <CountUp
          start={0}
          end={props.Deaths}
          durantion={2.5}
        />
      </h4>
      <p>Update On  {new Date('04-12-2020').toDateString()}</p>
      <p>Number of deaths due to COVID-19</p>
    </div>
  </div>

)
}
export default CovidCard;

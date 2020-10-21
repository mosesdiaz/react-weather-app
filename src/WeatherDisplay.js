import React from 'react';
import DayForecast from './DayForecast'

function WeatherDisplay(props) {
  const weather = props.weather
  //const icon = `owf owf-${weather.weather[0].id} owf-5x`
  //obtains day of week
  const dayOfWeek = (date) =>{
    /*
    the Date constructor uses the UNIX Timestamp with milliseconds, but OpenWeatherAPI call uses it without.
    So we multiply the given timestamp date by 1000 to add the milliseconds.
    */
    const d = new Date(date * 1000).toString().split(" ")
    console.log(d)
    return `${d[0]}, ${d[1]} ${d[2]}`
  }
  const weekForecast = props.weather.map( (w,index) => <DayForecast key={index} forecast={w}/> )
  return (
    <div>
      <br/>
      <h1 className='title' >Weather forecast for {props.location.name}, {props.location.country}</h1>
      <hr/>
      <div className="columns is-6">
        {weekForecast}
      </div>
    </div>
  );
}

export default WeatherDisplay;
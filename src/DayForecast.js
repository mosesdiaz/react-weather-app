import React from 'react';

function DayForecast(props) {
  const forecast = props.forecast
  //icons from owfont - symbol font for Open Weather Map API
  const icon = `owf owf-${forecast.weather[0].id} owf-5x`
  //obtains day of week
  const dayOfWeek = (date) =>{
    /*
    the Date constructor uses the UNIX Timestamp with milliseconds, but OpenWeatherAPI call uses it without.
    So we multiply the given timestamp date by 1000 to add the milliseconds.
    */
    const d = new Date(date * 1000).toString()
    return `${d.substring(0,3)}, ${d.substring(4,11)}`
  }
  
  return (
    <div className="column">
        <div className="box" >
            <h3 className="subtitle">{dayOfWeek(forecast.dt)}</h3>
            <i className={icon}></i>
            <p className="subtitle">{forecast.weather[0].description}</p>
            <h3>{Math.round(forecast.main.temp)} °C | {Math.round(forecast.main.temp * 9/5 + 32)} °F </h3>
        </div>
    </div>
  );
}

export default DayForecast;
import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay'


function App() {

  const [apiData, setApiData] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=3492908&appid=f8cccb4dbfc14738615a10fa33bfdf42&units=metric')
    .then(res => res.json())
    .then(res => {
      const weatherLocation = res.city //country name, city name, etc
      const weekWeather = res.list.filter(r => r.dt_txt.includes('15:00:00')) //forecast array for the next 5 days
      setLocation(weatherLocation)
      setApiData(weekWeather)
    })
  }, [])


  return (
    <div className="App"> 
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title" style={{fontSize:50}}>
              Weather Forecasting App Made in React 
            </h1>
            <h2 className="subtitle">
              made by <a href="https://github.com/mosesdiaz" target="_blank" style={{textDecoration: "underline"}}>Moises Diaz</a>
            </h2>
          </div>
        </div>
      </section>
      {/*Renders when api call sets weather State */}
      {apiData != null && location != null ? <WeatherDisplay location={location} weather={apiData}/> : <h3>loading...</h3>}
      
    </div>
  );
}

export default App;

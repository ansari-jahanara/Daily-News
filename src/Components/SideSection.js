import React, { useContext, useEffect } from 'react'
import { getQuotes ,getWeatherInfo} from '../context/NewsActions.js'
import NewsContext from '../context/NewsContext.js';
import Weatherinfo from './Weatherinfo.js';

function SideSection() {
  const { showquotes, dispatch, weatherInfo } = useContext(NewsContext)
  const fetchQuotes = async () => {
    const data = await getQuotes();

    dispatch(
      {
        type: "GET_QUOTES",
        payload: data
      }
    )
  }

//   const  getWeatherInfo = async()=>{
//     const response = await fetch('http://api.weatherapi.com/v1/current.json?key=1629c1299dfb4d33839185948221012&q=indore&aqi=yesResponse Code')
//     const data = await response.json()
//     const city = data.location.name
//     const icon = data.current.condition.icon
//     const country = data.location.country
//     const temp = data.current.temp_c
//     const weather_data = {data,city,icon,country}
//     return weather_data

// }

  // const fetchWeatherInfo = async () => {
  //   const data = await getWeatherInfo();
  //   dispatch({
  //     type: "GET_WEATHERINFO",
  //     payload: data
  //   })
  // }

 useEffect(() => {
    fetchQuotes();
    // setTimeout(() => {
    //   fetchWeatherInfo()
     
    // }, 1000)
    //getWeatherInfo()
  }, [])

   
  return (
    <>
      {/* start of side section */}

      <div className="col-lg-3 p-3 border-start border-dark border-4">
        <div className="card mb-2">
          <div className="card-header bg-secondary">
            Today's Quote
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{showquotes.content}</p>
              <footer className="blockquote-footer"><cite title="Source Title">{showquotes.author}</cite></footer>
            </blockquote>
          </div>
        </div>
        <Weatherinfo weatherInfo={weatherInfo}/>
        {/* <div className="card mb-2">
          <div className="card-header bg-success">
            Weather
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <h3>{},{}</h3>
              <p>
                <img src="" height="80px" width="80px" alt='' />
                {}°C
              </p>
            </blockquote>
          </div>
        </div> */}
      </div>
      {/* end of side section */}
    </>
  )
}

export default SideSection
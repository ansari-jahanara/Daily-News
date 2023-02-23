import React from 'react'

function Weatherinfo({weatherInfo}) {
    const obj  = async()=>{
        const data = await fetch('http://api.weatherapi.com/v1/current.json?key=1629c1299dfb4d33839185948221012&q=indore&aqi=yesResponse Code')
        const res = await data.json()
        console.log(res)
        return res
    }
    obj()
  return (
    <div>
         <div className="card mb-2">
          <div className="card-header bg-success">
            Weather
          </div>
          <div className="card-body">
            {/* <blockquote className="blockquote mb-0">
              <h3>{weatherInfo.location.name},{weatherInfo.location.region}</h3>
              <p>
                <img src={weatherInfo.current.condition.icon} height="80px" width="80px" alt='' />
                {weatherInfo.current.temp_c}°C
              </p>
            </blockquote> */}
          </div>
        </div>
    </div>
  )
}

export default Weatherinfo
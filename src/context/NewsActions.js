 export const getNews = async  (API)=>{
    const response = await fetch(API)
    const data = await response.json();
    return data.articles
}
export const getQuotes = async () => {
 const response =  await fetch(`https://api.quotable.io/random?category=inspirational`)
 const data = await response.json()
 return data
}

export const  getWeatherInfo = async ()=>{
    const response=await fetch('http://api.weatherapi.com/v1/current.json?key=1629c1299dfb4d33839185948221012&q=indore&aqi=yesResponse Code')
    const data = await response.json()
    return data

}
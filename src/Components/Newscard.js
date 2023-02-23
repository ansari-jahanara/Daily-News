import React from 'react'
import Cards from './Cards'
import NewsContext from '../context/NewsContext'
import { useEffect ,useContext} from 'react'
import { getNews } from '../context/NewsActions'
function Newscard() {
   const {news , dispatch} = useContext(NewsContext)
  const getData = async() => {
    const data = await getNews(`https://newsapi.org/v2/everything?q=India&from=${Date.now()}&sortBy=popularity&apiKey=bbf87cc6417841b085042682795837d2`)
    dispatch({
      type : "GET_NEWS",
      payload : data
    })
  }
  
  useEffect(()=>{
      getData()
  },[])
   
  return (
   <>
   {/* start of news section */}
   <div className="container-fluid col-lg-12">
         <div className="row p-2 mx-auto g-2">
         {
        news.map((item , index)=> <Cards key={index} item={item}/>)
        }            
         </div>
     </div>
     {/* end of news section*/} 
   </>
  )
}

export default Newscard
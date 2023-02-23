import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { getNews } from '../context/NewsActions';
import NewsContext from '../context/NewsContext';
function Nav() {
  const [searchString , setsearchString] = useState("") 
  const {dispatch} = useContext(NewsContext)
  const getData = async() => {
      const data = await getNews(`https://newsapi.org/v2/everything?q=${searchString}&from=${Date.now()}&sortBy=popularity&apiKey=bbf87cc6417841b085042682795837d2`)
      dispatch({
        type : "GET_NEWS",
        payload : data
      })
    }

    const getByCategory = async(val)=>{
      const data = await getNews(`https://newsapi.org/v2/everything?q=${val}&from=${Date.now()}&sortBy=popularity&apiKey=bbf87cc6417841b085042682795837d2`)
      dispatch({
        type : "GET_NEWS",
        payload : data
      })
    }
 
  const handleSubmit = (e)=>{
    e.preventDefault()
    getData()
  }
  
  return (
   <>
   <div className="container-fluid bg-dark">
    {/* Nav bar  */}
     <div className="container">
         <nav className="navbar navbar-expand-lg bg-white">
             <div className="container-fluid">
               <Link className="navbar-brand" href="news.html"><h3 className="fw-bolder fst-italic"  onClick={()=>getByCategory("India")}>DAILY NEWS</h3></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse " id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                   <form className="d-flex" role="search" onSubmit={(e)=>{handleSubmit(e)}}>
                     <input value={searchString} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setsearchString(e.target.value)}/>
                     <button className="btn btn-success" type="submit">Search</button>
                   </form>
               </div>
             </div>
           </nav>
          
         {/* categories */}
         <nav className="navbar navbar-expand-lg bg-white border-bottom border-dark border-4 ">
             <div className="container-fluid">
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                   <li className="nav-item">
                     <Link  className="nav-link"  to="" onClick={()=>getByCategory("cricket")}>Cricket</Link>
                   </li>
                   <li className="nav-item">
                   <Link  className="nav-link" to=""  onClick={()=>getByCategory("sports")}>Sports</Link>
                   </li>
                   <li className="nav-item">
                    <Link  className="nav-link" to=""  onClick={()=>getByCategory("business")}>Business</Link>
                   </li>
                   <li className="nav-item">
                   <Link  className="nav-link" to=""  onClick={()=>getByCategory("technology")}>Technology</Link>
                   </li>
                   
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("bollywood")}>Bollywood</Link>
                   </li>
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("world")}>World</Link>
                   </li>
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("mobility")}>Mobility</Link>
                   </li>
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("lifestyle")}>LifeStyle</Link>
                   </li>
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("science")}>Science</Link>
                   </li>
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("health")}>Health</Link>
                   </li>
                   <li className="nav-item">
                     <Link  className="nav-link" to=""  onClick={()=>getByCategory("education")}>Education</Link>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
     </div>
 </div>
   </>
  )
}

export default Nav
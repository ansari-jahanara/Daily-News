import React from 'react'
import noImage from '../Images/no-image.png'
function Cards({item}) {
    const {title , description, url, urlToImage}= item;
  return (
    <>
     <div className="card col-lg-3 col-md-6 col-12 h-auto">
                 <img src={urlToImage ? urlToImage : noImage} className="card-img-top" alt="..." height="180px"/>
                 <div className="card-body d-flex flex-column">
                   <h5 className="card-title">{title}</h5>
                   <p className="card-text" style={{"height":"100px","overflow":"hidden"}}>{description}</p>
                   <a href={url} target="_blank" className="btn btn-info btn-sm d-block mt-auto">Read More...</a>
                 </div>
               </div>
    </>
  )
}

export default Cards
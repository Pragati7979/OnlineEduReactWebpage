import React from "react"
import tut from "./../assets/tut1.jpeg"
const Card = (props) => {
    return <>
        <div className="card container col-3" style={{"display":"inline-block","margin":"18px","width":"25rem"}}>
        <img src={tut} className="card-img-top" alt="..."/>
  <div className="card-body">
                <p className="card-text">{props.name}</p>
                <a href={props.url}>Start Watching...</a>
  </div>
        </div>
    </>
}

export default Card
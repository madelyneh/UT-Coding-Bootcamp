import React from "react";
import './style.css';


function Card(props) {
  console.log(props.image)
  return (
    <div className="container">
      <div className="card"
          style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
          }}
        >
        <div className="buttons">
          <button className="btn btn-info"
          type="button" 
          onClick={props.onClickHandler} 
          id="like"
          >Like</button>
          <button className="btn btn-info" type="button" onClick={props.onClickHandler} id="dislike">Dislike</button>
        </div>
      </div>
      <div className="text-center">
      <h1>You have made friends with <span>{props.friends}</span> dogs so far.</h1> 
      </div>
    </div>
  )
}

export default Card;
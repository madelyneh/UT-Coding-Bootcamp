import React from "react";


function CardBody(props) {
  
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {props.state.count}</p>
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
          </button>
          <hr/>
          <button className="btn btn-primary" onClick={props.handleDecrement}>
            Decrement
          </button>

        </div>
      </div>
    );

}

export default CardBody;
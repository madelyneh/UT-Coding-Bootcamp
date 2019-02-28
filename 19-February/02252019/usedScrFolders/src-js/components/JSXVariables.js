import React from "react";

function JSXVariables(props) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {props.name}</h1>
          <h2>My name has {props.name.length} letters.</h2>
          <h2>I think React {props.thoughtsOnReact}</h2>
          <h2>I can generate random numbers: { Math.floor(Math.random() * 10) + 1}</h2>
          <h2>I can do math: 834849 + 9394389 = {834849 + 9394389}.</h2>
          <h2>I can reverse my name: "{props.name.split("").reverse()}"</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;

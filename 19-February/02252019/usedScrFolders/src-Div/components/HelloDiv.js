import React from 'react';


function HelloDiv(props) {
  return (
      <div>
        <h1>Hello! My name is {props.name}</h1>
        <h4>I love animals. Here are a couple of my favorites:</h4>
        <ul>
          <li>{props.firstAnimal}</li>
          <li>Cats</li>
          <li>Bearded Dragons</li>
          <li>Fish</li>
          <li>Snakes</li>
        </ul>
      </div>
  );
}

export default HelloDiv;

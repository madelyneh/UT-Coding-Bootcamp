import React from "react";

function AllBreeds(props) {

  return (
    <datalist id="breeds">
        {props.dogList.map(result => (
          <option key={result} value={result} />
        ))}
      </datalist>
  );
}

export default AllBreeds;
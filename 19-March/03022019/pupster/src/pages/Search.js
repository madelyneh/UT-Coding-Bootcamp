import React, {Component} from "react";
import API from "../utilities/API";
import AllBreeds from "../components/AllBreeds";

class Search extends Component {
  state= {
    value: "",
    search: "",
    dogList: []
  };

  componentDidMount() {
    API.getAllDogs()
    .then(res => {
      if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
      this.setState({
        dogList: res.data.message
      });
    }).catch(error => {
        console.log(error)
    });
  };

  onClickHandler = event => {
    event.preventDefault();
  }

  loadDogBreed() {
    API.getAllDogs()
    .then(res =>{
      if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
      this.setState({
        value: res.data.message
      }) 
      console.log(this.state.dogList)
    }).catch(error => {
        console.log(error)
    });
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Search for your favorite dog breed!</h1>
          <h2>Their images will show up bellow.</h2>
        </div>
        <hr/>
          <AllBreeds dogList={this.state.dogList} />
      </div>
    );
  };
};

export default Search;
import React, {Component} from "react";
import API from "../utilities/API";
import Card from "../components/Card"

class Discover extends Component {
  state = {
    image: "",
    match: false,
    friends: 0
  }

  componentDidMount() {
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
    .then(res =>{
      this.setState({
        image: res.data.message
      });
    }).catch(error => {
        console.log(error)
    });
  };

  onClickHandler = event => {

    const newState = {...this.state};

   if (event.target.id === "like") {
    newState.match = 1 === Math.floor(Math.random() * 5) +1;
  
    newState.friends = newState.match
        ? newState.friends + 1 : newState.friends;

   }else if (event.target.id === "dislike") {
      newState.match = false;
   };
   this.setState(newState);
   this.loadNextDog();
  };



  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Make New Friends</h1>
          <h2>Like the dogs you want to befriend!</h2>
        </div>
        <hr/>
          <Card image={this.state.image} onClickHandler={this.onClickHandler} friends={this.state.friends} />
      </div>

    );
  };
};

export default Discover;
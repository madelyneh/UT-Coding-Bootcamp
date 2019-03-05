import axios from "axios";

export default {

  getRandomDog: function() {
    return axios.get('https://dog.ceo/api/breeds/image/random');
  },
  getAllDogs: function() {
    return axios.get('https://dog.ceo/api/breeds/list');
  },
  getBreedList: function(search) {
    console.log(search)
   let url="https://dog.ceo/api/breed/"+search+"/images";
    return axios.get(url);
  }
}
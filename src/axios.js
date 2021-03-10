
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //so you dont have to type the entire url everytime
});

export default instance; 
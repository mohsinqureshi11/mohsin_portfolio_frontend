import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',  // locally chal raha hai 
});
export default API;

 


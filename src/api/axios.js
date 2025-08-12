import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:8000/api',  // locally chal raha hai 
// });
// export default API;

 

// const API = axios.create({
//   baseURL: "https://mohsin-portfolio-backend.vercel.app", // 🔹 yaha apna deployed backend ka URL do
// });

// export default API;

await axios.post('https://localhost:8000/api/contact',FormData);


import axios from "axios";

export default axios.create({
  baseURL: "https://mohsin-portfolio-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});


import axios from "axios";

const Api = axios.create({
    baseURL: 'https://http://localhost:5000',
  });

  export default Api;
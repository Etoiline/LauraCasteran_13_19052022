import axios from "axios";

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
})

export default instanceAxios
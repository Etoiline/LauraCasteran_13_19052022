import axios from "axios";

/**
 * Instance axios
 */
const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  //baseURL: process.env.BASE_URL,
})

instanceAxios.interceptors.request.use(config => {
  config.headers.accept = 'application/json'
  return config
})

export default instanceAxios
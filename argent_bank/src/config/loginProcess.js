import instanceAxios from "./axiosConfig"


export const LoginProcess = (username, password) => {
  const logInfo = {
    email: username,
    password: password
  }
  const headers = {
    'accept':'application/json',
    'Content-Type':'application/json'
  }

  return instanceAxios.post('user/login', logInfo, {headers})


}
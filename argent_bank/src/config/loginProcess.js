import instanceAxios from "./axiosConfig"

/**
 * 
 * @param username : nom d'utilisateur 
 * @param password : mot de passe 
 * @returns la réponse de l'instance axios
 */
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
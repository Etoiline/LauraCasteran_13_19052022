import { getToken } from "./tokenManager"
import instanceAxios from "./axiosConfig"

/**
 * 
 * @param firstname : nouveau prénom
 * @param lastname : nouveau nom 
 * @returns le retour de l'instance axios
 */
export async function setProfile(firstname, lastname) {
  const dataRequest = {
    firstName:firstname, 
    lastName:lastname}
  const configAxios = {
    headers:{
    'Authorization':'Bearer '+getToken()
    }
  }
      return instanceAxios.put('user/profile',dataRequest, configAxios)

}
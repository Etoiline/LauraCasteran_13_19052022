import { getToken } from "./tokenManager"
import instanceAxios from "./axiosConfig"

export async function setProfile(firstname, lastname) {
  const dataRequest = {
    firstName:firstname, 
    lastName:lastname}
  const configAxios = {
    headers:{
    'accept':'application/json',
    'Authorization':'Bearer '+getToken()
    }
  }
      return instanceAxios.put('user/profile',dataRequest, configAxios)

}
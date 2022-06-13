import { getToken } from "./tokenManager"
import instanceAxios from "./axiosConfig"

/**
 * function getProfile
 * @returns les données de profil
 */
export async function getProfile() {
  const dataRequest = {}
  const configAxios = {
    headers:{
    //'accept':'application/json',
    'Authorization':'Bearer '+getToken()
    }
  }
  console.log('instnce', instanceAxios)

      return instanceAxios.post('user/profile',dataRequest, configAxios)

}
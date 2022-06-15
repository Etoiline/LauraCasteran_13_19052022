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

      return instanceAxios.post('user/profile',dataRequest, configAxios)

}
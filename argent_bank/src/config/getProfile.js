import { getToken } from "./tokenManager"
import instanceAxios from "./axiosConfig"
import { useDispatch } from "react-redux"
import { userProfile } from "../features/profile/profileSlice"
import { useState, useEffect } from "react"

export async function useProfile() {
  const dispatch = useDispatch()
  const dataRequest = {}
  const configAxios = {
    headers:{
    'accept':'application/json',
    'Authorization':'Bearer '+getToken()
    }
  }

  const [loadingProfile, setLoadingProfile] = useState(true)
  const [dataProfile, setDataProfile] = useState([]) 
  const [errorProfile, setErrorProfile] = useState(undefined)


    useEffect(()=> {
      const load = async () => {
        try {
          const response = await instanceAxios.post('user/profile',dataRequest, configAxios)
          let data = response.data
          setDataProfile(data.body)
          setLoadingProfile(data.body)
          dispatch(userProfile(data.body))
          // if (data.status===200){
          //   console.log('ok', data.body)
          //   dispatch(userProfile(data.body))
          // }
          // else {
          //   console.log('pas ok')
            
          // }
          
        } catch (err) {
          setErrorProfile(err)
          setLoadingProfile(false)
          console.log('erreur useProfile',err)

        }
      }
    load()
    }, [])

  return {
    loadingProfile,
    dataProfile,
    errorProfile
  }

}
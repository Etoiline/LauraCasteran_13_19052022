import instanceAxios from "./axiosConfig"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { userLogin } from "../features/login/loginSlice"

export async function LoginProcess(username, password) {
  const dispatch = useDispatch()
  const logInfo = {
    email: username,
    password: password
  }
  const headers = {
    'accept':'application/json',
    'Content-Type':'application/json'
  }

  const [loadingLogin, setLoadingLogin] = useState(true)
  //const [dataLogin, setDataLogin] = useState([]) 
  const [errorLogin, setErrorLogin] = useState(undefined)
  console.log('useLogin')


    useEffect(()=> {
      const load = async () => {
        try {
          const response = await instanceAxios.post('user/login', logInfo, {headers})
          let data = response.data
          //setDataLogin(data.body.token)
          setLoadingLogin(false)
          dispatch(userLogin(data.body.token))
          
        } catch (err) {
          setErrorLogin(err)
          setLoadingLogin(false)
          console.log('erreur useLogin',err)

        }
      }
    load()
    }, [])

  return {
    loadingLogin,
    //dataLogin,
    errorLogin
  }

}
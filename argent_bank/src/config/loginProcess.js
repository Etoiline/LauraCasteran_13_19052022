import instanceAxios from "./axiosConfig"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../features/login/loginSlice"
import { useNavigate } from "react-router-dom"

export const useLoginProcess = (username, password) => {
  const logInfo = {
    email: username,
    password: password
  }
  const headers = {
    'accept':'application/json',
    'Content-Type':'application/json'
  }
  const [loadingLogin, setLoadingLogin] = useState(true)
  const [dataLogin, setDataLogin] = useState([]) 
  const [errorLogin, setErrorLogin] = useState(undefined)
  console.log('useLogin')

  const dispatch = useDispatch()
  const navigate = useNavigate()


    useEffect(()=> {
      const load = async () => {
        try {
          const response = await instanceAxios.post('user/login', logInfo, {headers})
          let data = response.data
          console.log('useLogin', data)
          setDataLogin(data.body.token)
          setLoadingLogin(false)
          dispatch(userLogin(data.body.token))
          navigate('/dashboard')
          
        } catch (err) {
          setErrorLogin(err)
          setLoadingLogin(false)
          //console.log('erreur useLogin',err)

        }
      }
    load()
    }, [])

  return {
    loadingLogin,
    dataLogin,
    errorLogin
  }

}
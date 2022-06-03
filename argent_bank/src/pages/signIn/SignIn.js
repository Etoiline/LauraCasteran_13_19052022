import signin from './SignIn.module.css'
import propTypes from 'prop-types'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../features/login/loginSlice'
import { useSelector, useDispatch } from 'react-redux'


        /**
         * SignIn component
         * 
         * @param props 
         * 
         * @return SignIn component
         *    
         */
function SignIn(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  async function LoginProcess(e){
    e.preventDefault()
    const logInfo = {
      email: username,
      password: password
    }
    const headers = {
      'accept':'application/json',
      'Content-Type':'application/json'
    }
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', logInfo, {headers})
      let data = response.data
      console.log('data', data, data.status)
      if (data.status===200){
        console.log('ok')
        console.log(data.body.token)
        dispatch(userLogin(data.body.token))
        navigate('/dashboard')
      }
      else {
        console.log('pas ok')
        
      }
      
    } catch (err) {
      console.log('errrrr',err)
  
    }
    return <SignIn />


  }

 
 

    return (
      <div className={signin.main}>
        <div className={signin.signin}>
        <i className="fa fa-user-circle"></i>
        <h1>Sign in</h1>
        <form>
          <div className={signin.formWrapper}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
          </div>
          <div className={signin.formWrapper}>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <div className={signin.formRemember}>
          <input id='remember-me' type='checkbox' checked={remember} onChange={(e)=>{setRemember(e.target.checked)}} />
            <label htmlFor='checkbox'>Remember me</label>
          </div>
          <button className={signin.button} onClick={LoginProcess}>Sign In</button>
        </form>

        </div>
        
      </div>
    )
  }

  SignIn.propTypes = {

  }

export default SignIn
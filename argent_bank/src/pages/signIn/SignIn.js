import signin from './SignIn.module.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../features/login/loginSlice'
import { useDispatch } from 'react-redux'
import { getProfile } from '../../config/getProfile'
import { userProfile } from '../../features/profile/profileSlice'
import { LoginProcess } from '../../config/loginProcess'


        /**
         * SignIn component
         *  
         * 
         * @return SignIn component
         *    
         */
function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)



  async function LoginProcessForm(e){
    e.preventDefault()
    try {
      const response = await LoginProcess(username,password)
      let data = response.data
      console.log('data', data, data.status)
      if (data.status===200){
        dispatch(userLogin(data.body.token))
        const responseProfile = await getProfile()
        dispatch(userProfile(responseProfile.data.body))

        navigate('/dashboard')
      }
      
    } catch (err) {
      console.log('error get login infos',err)
  
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
      <button className={signin.button} onClick={LoginProcessForm}>Sign In</button>
    </form>

    </div>
    
  </div>
    )
  }



export default SignIn
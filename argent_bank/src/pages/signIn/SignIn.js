import signin from './SignIn.module.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../features/login/loginSlice'
import { useDispatch } from 'react-redux'
import instanceAxios from '../../config/axiosConfig'
import { useProfile } from '../../config/getProfile'
import { useLoginProcess } from '../../config/loginProcess'
import { Link } from 'react-router-dom'


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
  const {loginUser}= useLoginProcess(username, password);
  
  // function LoginProcessClic(e){
  //   e.preventDefault()
  //   const {loadingLogin, dataLogin, errorLogin} = useLoginProcess(username,password)
  //     if (loadingLogin===false) {
  //       console.log('loginprocess', loadingLogin)
  //       if (errorLogin){
          
  //       }
  //       else {
  //         dispatch(userLogin(dataLogin))
  //         navigate('/dashboard')
  //       }
  //     }
  //     return <SignIn />
  // }



  // async function LoginProcess(e){
  //   e.preventDefault()
  //   const logInfo = {
  //     email: username,
  //     password: password
  //   }
  //   const headers = {
  //     'accept':'application/json',
  //     'Content-Type':'application/json'
  //   }
  //   try {
  //     const response = await instanceAxios.post('user/login', logInfo, {headers})
  //     let data = response.data
  //     console.log('data', data, data.status)
  //     if (data.status===200){
  //       // console.log('ok')
  //       // console.log(data.body.token)
  //       dispatch(userLogin(data.body.token))

  //       navigate('/dashboard')
  //     }
      
  //   } catch (err) {
  //     console.log('error get login infos',err)
  
  //   }
  //   const {a,b,c}= useProfile()
  //   //return <SignIn />


  // }

  const handleLogout = (e) =>
  {
      if(e) e.preventDefault();

  };
 

    return (
      <div className={signin.main}>
    <div className={signin.signin}>
    <i className="fa fa-user-circle"></i>
    <h1>Sign in</h1>
    <form onSubmit={function(){ loginUser(); handleLogout()}}>
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
      <button className={signin.button} type='submit'>Sign In</button>
    </form>

    </div>
    
  </div>
    )
  }



export default SignIn
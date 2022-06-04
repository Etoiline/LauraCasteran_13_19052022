import header from './Header.module.css'
import propTypes from 'prop-types'
import bankLogo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { userLogoff } from '../../features/login/loginSlice'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { userProfile } from '../../features/profile/profileSlice'

/**
         * HeaderLogged component
         * 
         * @param props 
         * 
         * @return headerlogged component
         *    
         */
function HeaderLogged(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [firstName, setfirstName] = useState([])
  const token = localStorage.getItem('tokenSessionBank_')



  async function ProfileProcess(e){
    const configAxios = {
      headers:{
      'accept':'application/json',
      'Authorization':'Bearer '+token
    }
  }

      console.log('headers profile',configAxios)
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {configAxios})
      let data = response.data
      console.log('data', data, data.status)
      if (data.status===200){
        console.log('ok')
        console.log(data.body.token)
        dispatch(userProfile())
      }
      else {
        console.log('pas ok')
        
      }
      
    } catch (err) {
      console.log('errrrr',err)
  
    }



  }

  ProfileProcess()



  function Logout () {
    //console.log("logouttt")
    
    dispatch(userLogoff())
    console.log('logout', localStorage.getItem('tokenSessionBank_'))
    navigate('/')

  }
  
    return (
      <div className={header.header}>
        <Link to={'./'}><img src={bankLogo} alt="Bank logo" className={header.header__logo}/></Link>
        <div className={header.logged}>
        <div className={header.logged__user}><i className="fa fa-user-circle"></i>
        <p>NOM</p></div>
          <div onClick={Logout} className={header.signout}>
          <i className="fa fa-sign-out"></i>
            Sign Out
          </div   >
        </div>
      </div>
    )
  }

  HeaderLogged.propTypes = {

  }

export default HeaderLogged
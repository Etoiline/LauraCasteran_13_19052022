import header from './Header.module.css'
import propTypes from 'prop-types'
import bankLogo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useProfileApi } from '../../services/useProfileApi'
import { useEffect, useState } from "react"
import { userLogoff } from '../../features/login/loginSlice'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

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

  const { loadingProfile, dataProfile, errorProfile } = useProfileApi (localStorage.getItem('tokenSessionBank_'))
  
  const [firstName, setfirstName] = useState([])


  useEffect(() => {
    if (loadingProfile === false) {
      setfirstName(dataProfile.data)
      console.log("dataprofile", dataProfile)
    }
  }, [loadingProfile, dataProfile])



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
import header from './Header.module.css'
import bankLogo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogoff } from '../../features/login/loginSlice'
import { getFirstName } from '../../config/profileManager'
import { useState } from 'react'

/**
         * Header component
         * 
         * 
         * @return header component
         *    
         */
function Header() {
  const dispatch = useDispatch()

  const logged = useSelector((state)=>state.login.isLoggedBool)
  const name = useSelector((state)=>state.profile.firstName)
  // let name
  // if (logged){
  //   name = getFirstName()
  // }

  function Logout () {
    
    dispatch(userLogoff())
    return <Link to={'/'} />

  }
  
    return (
      <div className={header.header}>
        <Link to={'./'}><img src={bankLogo} alt="Bank logo" className={header.header__logo}/></Link>
        {!logged?
        <Link to={'/sign-in'} className={header.sign}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        :
        <div className={header.logged}>
        <div className={header.logged__user}><i className="fa fa-user-circle"></i>
        <p>{name}</p></div>
          <div onClick={Logout} className={header.signout}>
          <i className="fa fa-sign-out"></i>
            Sign Out
          </div   >
        </div>}
      </div>
    )
  }


export default Header
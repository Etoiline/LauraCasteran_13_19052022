import header from './Header.module.css'
import propTypes from 'prop-types'
import bankLogo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import SignIn from '../../pages/signIn/SignIn'

/**
         * Header component
         * 
         * @param props 
         * 
         * @return header component
         *    
         */
function Header(props) {
  
    return (
      <div className={header.header}>
        <Link to={'./'}><img src={bankLogo} alt="Bank logo" className={header.header__logo}/></Link>
        <Link to={'/sign-in'} className={header.sign}>
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    )
  }

  Header.propTypes = {

  }

export default Header
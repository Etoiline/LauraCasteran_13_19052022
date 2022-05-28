import signin from './SignIn.module.css'
import propTypes from 'prop-types'


/**
         * SignIn component
         * 
         * @param props 
         * 
         * @return SignIn component
         *    
         */
function SignIn(props) {
  
    return (
      <div className={signin.main}>
        <div className={signin.signin}>
        <i class="fa fa-user-circle"></i>
        <h1>Sign in</h1>
        <form>
          <div className={signin.formWrapper}>
            <label for='username'>Username</label>
            <input id='username' type='text' />
          </div>
          <div className={signin.formWrapper}>
            <label for='password'>Password</label>
            <input id='password' type='password' />
          </div>
          <div className={signin.formRemember}>
          <input id='remember-me' type='checkbox' />
            <label for='checkbox'>Remember me</label>
          </div>
          <button className={signin.button}>Sign In</button>
        </form>

        </div>
        
      </div>
    )
  }

  SignIn.propTypes = {

  }

export default SignIn
import accounts from './Accounts.module.css'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


/**
         * Account component
         * 
         * @param props 
         * 
         * @return account component
         *    
         */


function Account(props) {
  
    return (
      <div className={accounts.content}>
        <div className={accounts.main}>
          <p className={accounts.main__name}>{props.name}</p>
          <p className={accounts.main__balance}>{props.balance}</p>
          <p className={accounts.main__description}>{props.description}</p>
        </div>
        <button className={accounts.button}>View transactions</button>
      </div>
    )
  }

  Account.propTypes = {

  }

export default Account
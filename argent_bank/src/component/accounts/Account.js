import accounts from './Accounts.module.css'
import PropTypes from 'prop-types'



/**
         * Account component
         * 
         * @param props.name nom du compte
         * @param props.balance balance du compte
         * @param props.description description du compte
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
    name : PropTypes.string,
    balance : PropTypes.string,
    description :PropTypes.string,

  }

export default Account
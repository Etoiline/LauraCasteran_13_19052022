import accounts from './Accounts.module.css'
import Account from './Account'


//accounts array. In the future, these data will be load from server
  const accountsArray = [
    {id:1, name: "Argent Bank Checking (x8349)", balance: "$2,082.79", description: "Available"},
    {id:2, name: "Argent Bank Savings (x6712)", balance: "$10,928.42", description: "Available"},
    {id:3, name: "Argent Bank Credit Card (x8349)", balance: "$184.30", description: "Current"},
  ]


/**
         * Accounts component
         * 
         * 
         * @return accounts component
         *    
         */


function Accounts() {
  
    return (
      <div className={accounts.all}>
        {accountsArray.map((account)=> (
          <Account key={account.id}
          name = {account.name}
          balance = {account.balance}
          description = {account.description}
          />
      ))}
      </div>
    )
  }

export default Accounts
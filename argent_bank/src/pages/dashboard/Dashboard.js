import dashboard from './Dashboard.module.css'
import propTypes from 'prop-types'
import Accounts from '../../component/accounts/Accounts'
import DashboardHeader from '../../component/dashboardHeader/DashboardHeader'



/**
         * Dashboard component
         * 
         * @param props 
         * 
         * @return dashboard component
         *    
         */
function Dashboard(props) {
  
    return (
      <div className={dashboard.header}>
        <DashboardHeader />
        <Accounts />
      </div>
    )
  }

  Dashboard.propTypes = {

  }

export default Dashboard
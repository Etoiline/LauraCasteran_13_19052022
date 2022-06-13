import dashboard from './Dashboard.module.css'
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
function Dashboard() {

  
    return (
      <div className={dashboard.header}>
      <DashboardHeader />
      <Accounts />
    </div>
    )
  }

export default Dashboard
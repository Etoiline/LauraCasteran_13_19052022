import dashboard from './Dashboard.module.css'
import propTypes from 'prop-types'
import Accounts from '../../component/accounts/Accounts'
import DashboardHeader from '../../component/dashboardHeader/DashboardHeader'
import { isLogged } from '../../features/login/login'



/**
         * Dashboard component
         * 
         * @param props 
         * 
         * @return dashboard component
         *    
         */
function Dashboard(props) {

  //const logged = isLogged()

  // const DashboardContent = () => {
  //   if(logged){
  //   return <div className={dashboard.header}>
  //     <DashboardHeader />
  //     <Accounts />
  //   </div>
  // }
  // else return (<div className={dashboard.header}>
  //   You must be logged

  // </div>)
  // }
  
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
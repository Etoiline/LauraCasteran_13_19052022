import dashboardHeader from './DashboardHeader.module.css'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'




/**
         * DashboardHeader component
         * 
         * @param props 
         * 
         * @return dashboardHeader component
         *    
         */
function DashboardHeader(props) {

  const name = useSelector((state)=>state.profile.firstName)
  const lastname = useSelector((state)=>state.profile.lastName)


  
    return (
      <div className={dashboardHeader.header}>
        <h1>Welcome back <br />
        {name} {lastname} !</h1>

      </div>
    )
  }

  DashboardHeader.propTypes = {

  }

export default DashboardHeader
import dashboard from './Dashboard.module.css'
import propTypes from 'prop-types'



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
        WELCOME ON DASHBOARD
      </div>
    )
  }

  Dashboard.propTypes = {

  }

export default Dashboard
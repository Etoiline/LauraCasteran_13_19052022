import dashboardHeader from './DashboardHeader.module.css'
import { useSelector } from 'react-redux'




/**
         * DashboardHeader component
         * 
         * 
         * @return dashboardHeader component
         *    
         */
function DashboardHeader() {

  const name = useSelector((state)=>state.profile.firstName)
  const lastname = useSelector((state)=>state.profile.lastName)

  function editProfile() {
    console.log('editProfile')

  }


  
    return (
      <div className={dashboardHeader.header}>
        <h1>Welcome back <br />
        {name} {lastname} !</h1>
        <button className={dashboardHeader.button} onClick={editProfile}>Edit Name</button>

      </div>
    )
  }


export default DashboardHeader
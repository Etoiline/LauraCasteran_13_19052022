import dashboardHeader from './DashboardHeader.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userProfile } from '../../features/profile/profileSlice'
import { setProfile } from '../../config/setProfile'
import { getProfile } from '../../config/getProfile'

/**
         * DashboardHeader component
         * 
         * 
         * @return dashboardHeader component
         *    
         */
function DashboardHeader() {
  const dispatch = useDispatch()

  const name = useSelector((state)=>state.profile.firstName)
  const lastname = useSelector((state)=>state.profile.lastName)

  const [username, setUsername] = useState('')
  const [userLastName, setUserLastName] = useState('')

  const [editingProfile, setEditingProfile] = useState(false)

  function editProfile() {
    setEditingProfile (true)
    console.log('editProfile')

  }

  function cancelEditProfile() {
    setEditingProfile (false)
  }

  async function saveEditProfile(e) {
    e.preventDefault()
    console.log('before',name, lastname)
    //dispatch(setNames({firstName:username, lastName:userLastName}))
    setProfile(username, userLastName)
    const responseProfile = await getProfile()
    dispatch(userProfile(responseProfile.data.body))
    setEditingProfile (false)
    //window.location.reload()
    console.log(name, lastname)
  }
  
    return (
      <>
      {!editingProfile? 
        <div className={dashboardHeader.header}>
        <h1>Welcome back <br />
        {name} {lastname} !</h1>
        <button className={dashboardHeader.formButton} onClick={editProfile}>Edit Name</button>
        </div>
      
      :
      <div className={dashboardHeader.header}>
      <h1>Welcome back </h1>
      <form className={dashboardHeader.form}>
        <div className={dashboardHeader.formWrappers}>
          <div className={dashboardHeader.formWrapper}>
            <input id='username' type='text' value={name} onChange={(e)=>{setUsername(e.target.value)}} />
          </div>
          <div className={dashboardHeader.formWrapper}>
            <input id='userLastName' type='text' value={lastname} onChange={(e)=>{setUserLastName(e.target.value)}} />
          </div>
        </div>
        <div className={dashboardHeader.formButtons}>
          <button className={dashboardHeader.formButton} onClick={saveEditProfile}>Save</button>
          <button className={dashboardHeader.formButton} onClick={cancelEditProfile}>Cancel</button>
        </div>
      </form>
      
      </div>
    }
     </>
    )
  }


export default DashboardHeader
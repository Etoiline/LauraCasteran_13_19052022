import dashboardHeader from './DashboardHeader.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userProfile } from '../../features/profile/profileSlice'
import { setProfile } from '../../config/setProfile'
import { getProfile } from '../../config/getProfile'
import { getFirstName } from '../../config/profileManager'
import { getLastName } from '../../config/profileManager'

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

  }

  function cancelEditProfile() {
    setEditingProfile (false)
  }

  async function saveEditProfile(e) {
    e.preventDefault()
    console.log('before',username, userLastName, getFirstName(),getLastName())
    //dispatch(setNames({firstName:username, lastName:userLastName}))
    if (username===''){
      setUsername(getFirstName())
    }
    if (userLastName===''){
      console.log('pas de nom de famille')
      setUserLastName(getLastName())
    }
    console.log('after', username, userLastName)
    const responseSetProfile = await setProfile(username, userLastName)
    if (responseSetProfile.status===200){
      const responseProfile = await getProfile()
      console.log('http', responseProfile.data.body)
      dispatch(userProfile(responseProfile.data.body))
      setEditingProfile (false)
      //window.location.reload()
  }

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
            <input id='username' type='text' placeholder={name} onChange={(e)=>{setUsername(e.target.value)}} />
          </div>
          <div className={dashboardHeader.formWrapper}>
            <input id='userLastName' type='text' placeholder={lastname} onChange={(e)=>{setUserLastName(e.target.value)}} />
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
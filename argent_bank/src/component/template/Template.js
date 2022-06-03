import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import HeaderLogged from '../header/HeaderLogged'
import Footer from '../footer/Footer'
import { useSelector } from 'react-redux'


function Template() {
  const logged = useSelector((state)=>state.login.isLoggedBool)
  return (
    <div>
      {logged?<HeaderLogged />:<Header />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Template
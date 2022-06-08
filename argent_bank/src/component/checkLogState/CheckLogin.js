import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function CheckLogin (props) {
  const logged = useSelector((state)=>state.login.isLoggedBool)

  if (logged) {
    return <>{props.children}</>
  }

  else {
    return <Navigate to='/sign-in' />
  }


}

export default CheckLogin
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function CheckLogoff (props) {
  const logged = useSelector((state)=>state.login.isLoggedBool)

  if (logged) {
    return <Navigate to='/dashboard' />
  }

  else {
    return <>{props.children}</>
  }


}

export default CheckLogoff
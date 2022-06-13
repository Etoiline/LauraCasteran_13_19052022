import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * 
 * @param props.children le composant depuis lequel est appelé la fonction 
 * @returns l'élément enfant si l'utilisateur est connecté, sinon la page de connexion
 */
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
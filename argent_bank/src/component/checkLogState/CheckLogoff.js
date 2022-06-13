import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * 
 * @param props.children le composant depuis lequel est appelé la fonction 
 * @returns l'élément enfant si l'utilisateur n'est pas connecté, sinon la page de l'utilisateur
 */
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
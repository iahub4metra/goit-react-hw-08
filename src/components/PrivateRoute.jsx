import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectLoggedIn} from "../redux/auth/selectors"

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLoggedIn = useSelector(selectLoggedIn)
    return isLoggedIn ? Component : <Navigate to={redirectTo}/>
}
 
export default PrivateRoute;
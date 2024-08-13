import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
const Navigation = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return ( 
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            {loggedIn && <NavLink to="/contacts">
                Contacts
            </NavLink>}
        </nav>
    );
}
export default Navigation;
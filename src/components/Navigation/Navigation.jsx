import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
import s from "./Navigation.module.css"
import clsx from "clsx";



const Navigation = () => {
    const loggedIn = useSelector(selectLoggedIn)

    const buildingClass = ({ isActive }) => {
        return clsx(s.linkNav, isActive && s.activeNavLink)
    }
    return ( 
        <nav>
            <Button variant="contained" sx={{mr:1,}}>
                <NavLink className={buildingClass} to="/">
                        Home
                    </NavLink>
            </Button>
            
            {loggedIn && <Button variant="contained">
                    <NavLink className={buildingClass}  to="/contacts">
                    Contacts
                </NavLink>
                </Button>}
        </nav>
    );
}
export default Navigation;
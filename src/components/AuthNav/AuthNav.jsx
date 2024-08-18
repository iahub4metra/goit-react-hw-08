import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import s from "./AuthNav.module.css"
import clsx from "clsx";

const buildingClass = ({ isActive }) => {
       return clsx(s.authLink, isActive && s.activeAuthLink)
    }

const AuthNav = () => {
    return ( 
        <nav>
            <Button variant="contained" sx={{mr:1,}}>
                <NavLink className={buildingClass} to="/register">
                    Register
                </NavLink>
            </Button>
            <Button variant="contained">
                <NavLink className={buildingClass} to="/login">
                    Log In
                </NavLink>
            </Button>
        </nav>
    );
}
 
export default AuthNav;
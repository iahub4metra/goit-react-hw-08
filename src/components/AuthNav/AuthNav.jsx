import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import s from "./AuthNav.module.css"

const AuthNav = () => {
    return ( 
        <nav>
            <Button variant="contained" sx={{mr:1,}}>
                <NavLink className={s.authLink} to="/register">
                    Register
                </NavLink>
            </Button>
            <Button variant="contained">
                <NavLink className={s.authLink} to="/login">
                    Log In
                </NavLink>
            </Button>
        </nav>
    );
}
 
export default AuthNav;
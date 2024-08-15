import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
import s from "./Navigation.module.css"
const Navigation = () => {
    const loggedIn = useSelector(selectLoggedIn)
    return ( 
        <nav>
            <Button variant="contained" sx={{mr:1,}}>
                <NavLink className={s.linkNav} to="/">
                        Home
                    </NavLink>
            </Button>
            
            {loggedIn && <Button variant="contained">
                    <NavLink className={s.linkNav}  to="/contacts">
                    Contacts
                </NavLink>
                </Button>}
        </nav>
    );
}
export default Navigation;
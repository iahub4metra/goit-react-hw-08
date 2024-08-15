import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css"
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { UserMenu } from "../UserMenu/UserMenu";
import { AppBar as TopBar } from "@mui/material";
import {Toolbar} from "@mui/material";

const AppBar = () => {
    const isLoggedIn = useSelector(selectLoggedIn)
    return ( 
        <TopBar position="static">
            <Toolbar sx={{justifyContent: "space-between"}}>
                <Navigation />
                {isLoggedIn ? <UserMenu/>:<AuthNav/>}
            </Toolbar>
        </TopBar>
    );
}
export default AppBar;
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css"
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { UserMenu } from "../UserMenu/UserMenu";

const AppBar = () => {
    const isLoggedIn = useSelector(selectLoggedIn)
    return ( 
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu/>:<AuthNav/>}
        </header>
    );
}
export default AppBar;
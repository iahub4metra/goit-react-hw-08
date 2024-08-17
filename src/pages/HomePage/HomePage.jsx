import { Button } from "@mui/material";
import s from "./HomePage.module.css"
import { NavLink } from "react-router-dom";
const HomePage = () => {
    return (
        <>
            <div className={s.homeContainer}>
                <div>
                    <h1 className={s.mainTitle}>PhoneBook</h1>
                    <p>Keep your connections close and your contacts closer—manage them all in one place with ease.</p>
                    <Button variant="contained"><NavLink className={s.homeNavLink} to="/register">Get Started</NavLink></Button>
                </div>
            </div>
        </>
    );
}
 
export default HomePage;
import { Button } from "@mui/material";
import s from "./HomePage.module.css"
import { NavLink } from "react-router-dom";
import { AiOutlineSchedule, AiOutlineBook, AiOutlineAudit } from "react-icons/ai";
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
            <section className={s.sectionAbout}>
                <ul className={s.aboutList}>
                    <li>
                        <div className={s.contIcon}>
                            <AiOutlineSchedule className={s.aboutIcon}/>
                        </div>
                        <div className={s.contItem}>
                            <h3 className={s.aboutTitle}>Our Mission</h3>
                            <p>At ContactKeeper, we believe that every connection matters. Our mission is to make it easier for you to manage and organize your personal and professional contacts in one secure and
                            user-friendly platform. Whether you're keeping track of family, friends, or colleagues, we've got you covered.</p>
                        </div>
                        
                    </li>
                    <li>
                        <div className={s.contIcon}>
                            <AiOutlineBook className={s.aboutIcon}/>
                        </div>
                        <div className={s.contItem}>
                            <h3 className={s.aboutTitle}>What We Offer</h3>
                            <p>With a focus on simplicity and efficiency, our team is dedicated to providing a seamless experience that allows you to stay connected without the hassle. We understand that your time is valuable, which is why we've designed our app to be intuitive and straightforward, giving you more time to nurture your relationships.</p>
                        </div>
                    </li>
                    <li>
                        <div className={s.contIcon}>
                            <AiOutlineAudit className={s.aboutIcon}/>
                        </div>
                        <div className={s.contItem}>
                            <h3 className={s.aboutTitle}>Our Commitment</h3>
                            <p>At the heart of ContactKeeper is a commitment to your privacy and security. We prioritize protecting your data so that you can trust us to keep your contact information safe. Join us, and let's keep your connections strong and lasting.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
}
 
export default HomePage;
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import s from "./Footer.module.css"
const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.upperContFooter}>
                <h2>Connecting people, one contact at a time.</h2>
                <div className={s.linksCont}>
                    <div>
                        <h3>Social media</h3>
                        <ul className={s.socialList}>
                            <li>
                                <a href="" className={s.socialLink}>
                                    <IoLogoInstagram className={s.socialIcon} />
                                </a>
                            </li>
                            <li>
                                <a href="" className={s.socialLink}>
                                    <IoLogoFacebook className={s.socialIcon}/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/artem-buhai/" className={s.socialLink}>
                                    <IoLogoLinkedin className={s.socialIcon}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contacts</h3>
                        <address>
                            <ul>
                                <li>
                                    <a className={s.addressLink} href="tel:380684439426">
                                        +380 (68) 443-94-26
                                    </a>
                                </li>
                                <li>
                                    <a className={s.addressLink} href="mailto:contactkeep@gmail.com">
                                        contactkeep@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>
            </div>
            <div className={s.lowerContFooter}>
                <ul>
                    <li>Privacy Policy</li>
                    <li>/</li>
                    <li>Cookie settings</li>
                </ul>
                <div>
                    <p>&#169;ContactKeeper 2024</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
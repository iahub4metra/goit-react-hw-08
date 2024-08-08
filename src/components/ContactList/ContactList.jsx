import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"
import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contactsSlice.js"




const ContactList = () => {
    const visibleContacts = useSelector(selectFilteredContacts)
    return (
        <ul className={css.contactList}>
            {visibleContacts.map((contact) => (
                    <li className={css.contactListItem} key={contact.id}>
                    <Contact contact={contact} />
                    </li>
                )    
            )}
        </ul>
    )
}
export default ContactList 
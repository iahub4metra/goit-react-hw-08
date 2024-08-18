import ContactList from "../../components/ContactList/ContactList.jsx"
import ContactForm from "../../components/ContactForm/ContactForm.jsx"
import SearchBox from "../../components/SearchBox/SearchBox.jsx"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations.js"
import { Box } from "@mui/material"
import s from "./ContactsPage.module.css"
const ContactsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    return (
        <Box component="section" sx={{py:3}} className={s.contactsSection}>
            <ContactForm />
            <SearchBox/>
            <ContactList/>
        </Box>
        
    );
}
 
export default ContactsPage;
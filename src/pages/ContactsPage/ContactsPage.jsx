import ContactList from "../../components/ContactList/ContactList.jsx"
import ContactForm from "../../components/ContactForm/ContactForm.jsx"
import SearchBox from "../../components/SearchBox/SearchBox.jsx"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations.js"
const ContactsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div>
            <ContactForm />
            <SearchBox/>
            <ContactList/>
        </div>
        
    );
}
 
export default ContactsPage;
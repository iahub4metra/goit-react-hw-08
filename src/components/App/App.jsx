import { useDispatch, useSelector } from "react-redux"
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contactsOps"
import Loader from "../Loader/Loader"
import { selectError, selectLoading } from "../../redux/contactsSlice"

function App() {
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {error && <p>Someting went wrong!</p>}
      
    </>
  )
}

export default App

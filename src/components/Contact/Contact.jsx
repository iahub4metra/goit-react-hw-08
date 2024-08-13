import { IoCall, IoPerson } from "react-icons/io5"
import css from "./Contact.module.css"
import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"
const Contact = ({ contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id))
    return (
        <div className={css.mainContainerContact}>
            <div>
                <div className={css.containerWithData}>
                    <IoPerson className={css.iconContact} /> <span>{contact.name}</span>
                </div>
                <div className={css.containerWithData}>
                    <IoCall className={css.iconContact} /> <span>{contact.number}</span>
                </div>
            </div>
            <button onClick={handleDelete} className={css.btnDel}>Delete</button>
        </div>
    )
}
export default Contact
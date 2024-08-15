import { IoCall, IoPerson } from "react-icons/io5"
import css from "./Contact.module.css"
import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"
import { Button} from "@mui/material"
const Contact = ({ contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id))
    return (
        <div className={css.mainContainerContact}>
            <div>
                <div className={css.containerWithData}>
                    <IoPerson className={css.iconContact} /> <span className={css.contactName}>{contact.name}</span>
                </div>
                <div className={css.containerWithData}>
                    <IoCall className={css.iconContact} /> <span className={css.contactNumber}>{contact.number}</span>
                </div>
            </div>
            <Button variant="contained" onClick={handleDelete} className={css.btnDel}>Delete</Button>
        </div>
    )
}
export default Contact
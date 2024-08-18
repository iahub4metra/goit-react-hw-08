import { IoCall, IoPerson, IoExpand } from "react-icons/io5"
import css from "./Contact.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Button} from "@mui/material"
import { openDeleteModal, openModal } from "../../redux/contacts/slice"
import { selectContactForModal } from "../../redux/contacts/selectors"
import DeleteModal from "../DeleteModal/DeleteModal"
const Contact = ({ contact}) => {
    const dispatch = useDispatch();
    const contactModal = useSelector(selectContactForModal)

    return (
        <>
        <div className={css.mainContainerContact}>
            <div>
                <div className={css.containerWithData}>
                    <IoPerson className={css.iconContact} /> <span className={css.contactName}>{contact.name}</span>
                </div>
                <div className={css.containerWithData}>
                    <IoCall className={css.iconContact} /> <span className={css.contactNumber}>{contact.number}</span>
                </div>
            </div>
            <div className={css.btnContainer}>
                <Button variant="contained" onClick={()=> dispatch(openDeleteModal(contact.id))} className={css.btnDel}>Delete</Button>
                <button className={css.btnIconExpand} onClick={() => dispatch(!contactModal && openModal(contact))}><IoExpand className={css.iconExpand} /></button>
            </div>
            </div>
            <DeleteModal/>
        </>
    )
}
export default Contact
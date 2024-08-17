import { useDispatch, useSelector } from "react-redux";
import { selectContactForModal, selectModalIsOpen } from "../../redux/contacts/selectors";
import { IoMdBrush } from "react-icons/io";
import { closeModal, openDeleteModal } from "../../redux/contacts/slice";
import { Button } from "@mui/material";
import ReactModal from "react-modal";
import s from "./ContactInfoModal.module.css"
import { IoCall, IoPerson, IoClose } from "react-icons/io5";
import { useRef } from "react";
import { deleteContact, editContact } from "../../redux/contacts/operations";

ReactModal.setAppElement('#root')

const ContactInfoModal = () => {
    const open = useSelector(selectModalIsOpen)
    const contact = useSelector(selectContactForModal)
    const dispatch = useDispatch()
    const inputEl = useRef()
    const inputNumberEl = useRef()
    const changedValue = {
        name: contact?.name,
        number:contact?.number,
    };

    const handleClick = () => {
        inputEl.current.style.display = "block";
        inputEl.current.focus()
    }

    const handleClickNumber = () => {
        inputNumberEl.current.style.display = 'block',
        inputNumberEl.current.focus()
    }

    const handleBlurInput = () => {
        changedValue.name = inputEl.current.value
        dispatch(editContact({ contactId: contact.id, values: changedValue }))
        inputEl.current.style.display = 'none'
    }

    const handleBlurInputNumber = () => {
        changedValue.number = inputNumberEl.current.value
        dispatch(editContact({contactId: contact.id, values: changedValue}))
        inputNumberEl.current.style.display = 'none'
    }

    return (
        <div>
            <ReactModal
                isOpen={open}
                onRequestClose={() => dispatch(closeModal())}
                style={{
                    content:{
                        width: '400px',
                        height: '250px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1)',
                        padding: "16px",
                        borderRadius:"10px",
                    },
                    overlay:{
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        zIndex:"2",
                        
                    }
                }}
            >   
                <div className={s.mainContainerModal}>
                    <button onClick={() => dispatch(closeModal())} className={s.btnClose}><IoClose className={s.iconClose} /></button>
                    <div className={s.contactBox}>
                        <div className={s.contactInfoBox}>
                            <IoPerson className={s.iconContact} /> 
                            <h3>{contact?.name}</h3>
                            <input
                                onBlur={() => handleBlurInput()}
                                type="text"
                                className={s.editContactName}
                                ref={inputEl}
                                defaultValue={contact?.name}
                            />
                        </div>
                        <button onClick={()=> handleClick()} className={s.btnEdit}><IoMdBrush className={s.iconEdit}/></button>
                    </div>
                    <div className={s.contactBox}>
                        <div className={s.contactInfoBox}>
                            <IoCall className={s.iconContact} /> 
                            <p>{contact?.number}</p>
                            <input
                                type="text"
                                className={s.editContact }
                                onBlur={() => handleBlurInputNumber()}
                                ref={inputNumberEl}
                                defaultValue={contact?.number}
                            />
                        </div>
                        <button onClick={()=>handleClickNumber()} className={s.btnEdit}><IoMdBrush className={s.iconEdit}/></button>
                    </div>
                    <Button variant="contained" sx={{mt:"60px", display:"block", mx:"auto"}} onClick={()=> dispatch(openDeleteModal(contact?.id))}>Delete Contact</Button>
                </div>
            </ReactModal>
        </div>
    );
}
 
export default ContactInfoModal;
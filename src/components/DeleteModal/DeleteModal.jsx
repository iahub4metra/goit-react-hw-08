import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { selectContactId, selectDeleteModal } from "../../redux/contacts/selectors";
import { closeDeleteModal, closeModal } from "../../redux/contacts/slice";
import { Button } from "@mui/material";
import { deleteContact } from "../../redux/contacts/operations";

const DeleteModal = () => {
    const open = useSelector(selectDeleteModal)
    const dispatch = useDispatch()
    const id = useSelector(selectContactId)

    const handleDelete = () => {
        dispatch(deleteContact(id));
        dispatch(closeDeleteModal())
        dispatch(closeModal())
    }

    return (
        <ReactModal
            isOpen={open}
            onRequestClose={() => dispatch(closeDeleteModal())}
            style={{
                content: {
                    width: "300px",
                    height: "300px",
                    position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1)',
                        padding: "16px",
                        borderRadius:"10px",
                },
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.1)",
                    zIndex:2,
                }
            }}
        >
            <p>Are you sure you want to delete this contact?</p>
            <Button variant="contained" onClick={() => handleDelete()}>
                Delete
            </Button>
            <Button variant="contained" onClick={()=> dispatch(closeDeleteModal())}>
                Close
            </Button>
        </ReactModal>
    );
}
 
export default DeleteModal;
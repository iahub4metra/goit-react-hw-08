import { Backdrop } from "@mui/material";
import { useState } from "react";

const ContactInfoModal = ({ contact }) => {
    return (
        <div>
            <Backdrop
            >
                <p>{contact.name}</p>
            </Backdrop>
        </div>
    );
}
 
export default ContactInfoModal;
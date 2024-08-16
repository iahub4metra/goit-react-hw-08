import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact, editContact } from "./operations"
const initialContacts = {
    items: [],
    loading: false,
    error: null,
    modalIsOpen: false,
    contactForModal: null,
    deleteModalIsOpen: false,
    selectedContactId: null,
}

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        openModal: (state, action) => {
            state.modalIsOpen = true;
            state.contactForModal = action.payload
        },
        closeModal: (state) => {
            state.modalIsOpen = false;
            state.contactForModal = null
        },
        openDeleteModal: (state, action) => {
            state.deleteModalIsOpen = true;
            state.selectedContactId = action.payload
        },
        closeDeleteModal: (state) => {
            state.deleteModalIsOpen = false;
            state.selectedContactId = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(
                    contact => contact.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(editContact.fulfilled, (state, action) => {
                const updatedContact = action.payload;
                const index = state.items.findIndex(contact => contact.id === updatedContact.id)
                state.contactForModal = updatedContact
                state.items[index] = updatedContact
                
            })
    }
})

export const {openModal, closeModal, openDeleteModal, closeDeleteModal} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer;
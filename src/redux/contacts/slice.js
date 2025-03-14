import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, editContact, fetchContacts } from "./operations";
import toast from "react-hot-toast";
import { logout } from "../auth/operations";


const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const INITIAL_STATE = {
    items: null,
    isLoading: false,
    error: null,
    currentContact: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    reducers: {setCurrentContact(state, action) {
        state.currentContact = action.payload}},
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        toast.success("Contact added successfully!");
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.error = null;
        toast.success("Contact delete successfully!");
    })
    .addCase(deleteContact.rejected, handleRejected)
    .addCase(editContact.pending, handlePending)
    .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentContact = action.payload;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
        state.items[index] = action.payload;
    }
        state.error = null;
        toast.success("Contact update successfully!");
    })
    .addCase(editContact.rejected, handleRejected)
    .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
});

export const contactsReducer = contactsSlice.reducer;
export const {setCurrentContact} = contactsSlice.actions;
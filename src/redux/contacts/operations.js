import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const {data} = await authInstance.get('/contacts');
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (fromData, thunkApi) => {
        try {
            const {data} = await authInstance.post('/contacts', fromData);
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            const {data} = await authInstance.delete(`/contacts/${contactId}`); 
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const editContact = createAsyncThunk(
    "contacts/editContact",
    async (updateContact, thunkApi) => {
        try {
            const {id, ...contact} = updateContact;
            const {data} = await authInstance.patch(`/contacts/${id}`, contact);
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
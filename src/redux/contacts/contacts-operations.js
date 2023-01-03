import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContacts = createAsyncThunk(
    'contacts/getAllContacts',
    async (_, thunkAPI)=>{
        try {
            const {data} = await axios.get('/contacts');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createNewContact = createAsyncThunk(
    'contacts/createNewContact',
    async (contact, thunkAPI)=>{
        try {
            const {data} = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId, thunkAPI)=>{
        try {
             await axios.delete(`/contacts/${contactId}`);
            return contactId;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async(contact, thunkAPI)=>{
        try {
            const {id, name, number} = contact;
            await axios.patch(`/contacts/${id}`, {name, number});
             return contact;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);


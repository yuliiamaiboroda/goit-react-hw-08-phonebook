import { createSlice } from "@reduxjs/toolkit";
import { getAllContacts, createNewContact, deleteContact, updateContact } from "./contacts-operations";

const initialState = {
    items: [],
    isLoading:false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers:{
        [getAllContacts.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [getAllContacts.fulfilled](state, action){
            state.isLoading= false;
            state.items = action.payload;
        },
        [getAllContacts.rejected](state, action){
            state.isLoading = false;
            state.error= action.payload;
        },
        [createNewContact.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [createNewContact.fulfilled](state,action){
            state.isLoading = false;
            state.items = [...state.items, action.payload];
        },
        [createNewContact.rejected](state, action){
            state.isLoading = false;
            state.error= action.payload;
        },
        [deleteContact.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [deleteContact.fulfilled](state,action){
            state.isLoading= false;
            const index = state.items.findIndex(
                contact => contact.id === action.payload
              );
            state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, action){
            state.isLoading = false;
            state.error= action.payload;
        },
        [updateContact.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [updateContact.fulfilled](state, action){
            state.isLoading= false;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
              );
            state.items[index] = action.payload;
        },
        [updateContact.rejected](state,action){
            state.isLoading = false;
            state.error= action.payload;
        },
    }
});

export default contactsSlice.reducer;
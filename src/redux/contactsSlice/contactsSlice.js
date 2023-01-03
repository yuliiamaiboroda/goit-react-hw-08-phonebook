import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact , deleteContact } from "redux/operations/operations";

const initialState ={
    items: [],
    isLoading: false,
    error: null
}

const handlePanding = (state)=>{
    state.isLoading = true;
}

const handleRejected = (state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const contactList = createSlice({
    name: "contacts",
    initialState,
    extraReducers:{
        [fetchContacts.pending]: handlePanding,
        [fetchContacts.fulfilled](state, action){
            state.isLoading= false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePanding,
        [addContact.fulfilled](state, action){
            state.isLoading= false;
            state.error = null;
            state.items.push(action.payload);
            },   
        [addContact.rejected]:handleRejected,
        [deleteContact.pending]:handlePanding,
        [deleteContact.fulfilled](state, action){
            state.isLoading= false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
              );
              state.items.splice(index, 1);
        },
        [deleteContact.rejected]:handleRejected,
    }
})

export const contactsReducer = contactList.reducer;

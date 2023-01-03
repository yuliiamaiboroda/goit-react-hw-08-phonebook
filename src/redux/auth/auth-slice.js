import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
    token:null,
    user:{
        name:'',
        email:'',
    },
    isLoggedIn: false,
    isFetchingCurrentUser:false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [authOperations.register.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [authOperations.register.fulfilled](state, action){
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.register.rejected](state, action){
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error= action.payload;
        },
        [authOperations.login.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [authOperations.login.fulfilled](state, action){
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [authOperations.login.rejected](state, action){
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error= action.payload;
        },
        [authOperations.logout.pending](state){
            state.isLoading = true;
            state.error= null;
        },
        [authOperations.logout.fulfilled](state){
            state.isLoading = false;
            state.token = null;
            state.isLoggedIn = false;
            state.user = {name:'', email:'',};
        },
        [authOperations.logout.rejected](state, action){
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error= action.payload;
        },
        [authOperations.current.pending](state){
            state.isLoading = true;
            state.error= null;
            state.isFetchingCurrentUser = true;
        },
        [authOperations.current.fulfilled](state, action){
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isFetchingCurrentUser = false;
        },
        [authOperations.current.rejected](state, action){
            state.isLoading = false;
            state.isFetchingCurrentUser = false;
            state.error = action.payload;
        },
    }
});

export default authSlice.reducer;
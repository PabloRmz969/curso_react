import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //'checking', 'not-authenticated' 'authenticated'
        uid: null,
        email: null,
        displayNme: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
        },
        logout: (state, action) => {
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;
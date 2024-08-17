import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";


const initialValue = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialValue,
    reducers: {
        clearError: (state) => {
            state.error = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(register.rejected, (state) => {
                state.error = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(login.rejected, (state) => {
                state.error = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null, };
                state.token = null;
                state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
            }
})

export const {clearError} = authSlice.actions
export const authReducer = authSlice.reducer
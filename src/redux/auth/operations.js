import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";


// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk("auth/register",
    async (values, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", values)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }   
    }
)

export const login = createAsyncThunk("auth/login",
    async (values, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", values)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }   
    }
)

export const logout = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }   
    }
)

export const refreshUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        
        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)
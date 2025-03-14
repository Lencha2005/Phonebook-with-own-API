import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
    baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    authInstance.defaults.headers.common.Authorization = '';
  };

export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
        try {
            const {data} = await authInstance.post('/users/signup', formData);
            setToken(data.token)
            console.log('data: ', data);
            
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (formData, thunkApi) => {
        try {
            const {data} = await authInstance.post('/users/login', formData);
            setToken(data.token)
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            const {data} = await authInstance.post('/users/logout');
            console.log('data: ', data);

            clearToken();
            return data;
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh", 
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
    
        if (token === null) {
          return thunkAPI.rejectWithValue('No token provided to refresh user data');
        }
    
        try {
            setToken(token);
          const { data }= await authInstance.get('/users/current');
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
)
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null,
        loading : false,
        error : false
    },
    reducers : {
        setUser : (state,action) => {
            state.user = action.payload
        },
        setLoading : (state,action) => {
            state.user = action.payload
        },
        setError : (state,action) => {
            state.error = action.payload
        }
    }
});

export const {setUser,setLoading,setError} = authSlice.reducers;
export default authSlice.reducer;
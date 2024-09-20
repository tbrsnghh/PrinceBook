import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/auth';

export const login= createAsyncThunk('user/login',async (userAdd,thunkAPI)=>{
    const url = BASE_URL;
    try{
            const response=await axios.post(url,userAdd);
            return response.data;
    }
    catch (error){
            return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
})
// Config Books Store
const UserSlice = createSlice({
  name: 'user',
  
  initialState: {  
    error:null,
    message: "",
    status: "idle",
  },  
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder
  
       .addCase(login.fulfilled,(state,action)=>{
            state.status=action.payload.status;
            state.message=action.payload.message;
            state.user=action.payload.data;
            localStorage.setItem('user',JSON.stringify(action.payload.data));

       })
       .addCase(login.rejected,(state,action)=>{
            state.status=action.payload.status;
            state.message=action.payload.message;
            state.error=action.payload.data;
       })
    }
})
export const {  } = UserSlice.actions;
export default UserSlice.reducer;
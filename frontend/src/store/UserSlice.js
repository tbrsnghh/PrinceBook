import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api';
const BASE_URL = 'http://ec2-18-136-203-0.ap-southeast-1.compute.amazonaws.com:8080/api';

export const login= createAsyncThunk('user/login',async (userAdd,thunkAPI)=>{
    const url = BASE_URL+"/auth";
    try{
            const response=await axios.post(url,userAdd);
            return response.data;
    }
    catch (error){
            return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
});

export const register= createAsyncThunk('user/register',async (userRes,thunkAPI)=>{
    const url = BASE_URL+"/user/register";
    try{
            const response=await axios.post(url,userRes);
            return response.data;
    }
    catch (error){
            return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
});
/// list
export const ListUser = createAsyncThunk('user/ListUser',async (thunkAPI)=>{
  const url = BASE_URL+"/user";
  try{
      const response=await axios.get(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const ListRetore = createAsyncThunk('user/ListRetore',async (thunkAPI)=>{
        const url = BASE_URL+"/user/delete";
        try{
            const response=await axios.get(url);
            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
        }
});

/// xoa user
export const deleteUser = createAsyncThunk('user/deleteUser',async (id,thunkAPI)=>{
  const url = BASE_URL+"/user/"+id;
  try{
      const response=await axios.delete(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const deleteMUser = createAsyncThunk('user/deleteMUser',async (id,thunkAPI)=>{
  const url = BASE_URL+"/user/delete/"+id;
  try{
      const response=await axios.put(url);
      return response.data;
  }
  catch (error){
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
})
export const restoreUser = createAsyncThunk('user/restoreUser',async (id,thunkAPI)=>{
  const url = BASE_URL+"/user/restore/"+id;
  try{
      const response=await axios.put(url);
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
    user:null,
    error:null,
    listUser:null,
    listRestore:null,
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
       .addCase(register.fulfilled,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
    

       })
       .addCase(register.rejected,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
        state.error=action.payload.data;
       })
       .addCase(ListUser.fulfilled,(state,action)=>{
   
        
        state.status=action.payload.status;
        state.listUser=action.payload.data;
       })
       .addCase(ListUser.rejected,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
        state.error=action.payload.data;
       })
       .addCase(ListRetore.fulfilled,(state,action)=>{
        state.status=action.payload.status;
        state.listRestore=action.payload.data;
       })
       .addCase(ListRetore.rejected,(state,action)=>{   
        state.status=action.payload.status;
        state.message=action.payload.message;
        state.error=action.payload.data;
       })
       .addCase(deleteUser.fulfilled,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
       })
       .addCase(deleteUser.rejected,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
        state.error=action.payload.data;
       })
       .addCase(restoreUser.fulfilled,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
       })
       .addCase(restoreUser.rejected,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
        state.error=action.payload.data;
       })
       .addCase(deleteMUser.fulfilled,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
       })
       .addCase(deleteMUser.rejected,(state,action)=>{
        state.status=action.payload.status;
        state.message=action.payload.message;
        state.error=action.payload.data;
       })
    }
})
export const {  } = UserSlice.actions;
export default UserSlice.reducer;
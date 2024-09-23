import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://ec2-18-136-203-0.ap-southeast-1.compute.amazonaws.com:8080/api/book/getAllImages/';

export const getImages = createAsyncThunk('images/getImages', async (id, thunkAPI) => {
    const url = `${BASE_URL}${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
});

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        images: [],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getImages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getImages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = action.payload.data;
            })
            .addCase(getImages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { } = imagesSlice.actions;
export default imagesSlice.reducer;

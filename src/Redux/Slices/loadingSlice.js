import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    reducers: {
        startLoading: (state, action) => {
            return true;
        },
        finishLoading: (state, action) => {
            return false;
        }
    }
});

export const {
    startLoading,
    finishLoading
} = loadingSlice.actions;

export default loadingSlice.reducer;
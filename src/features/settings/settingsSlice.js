import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "serverUrl": ""
};

export const getServerUrl = state => state.settings.serverUrl;

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: {
        "settings/get/fulfilled": (state, action) => {
            state.serverUrl = action.payload.serverUrl;
        }
    }
});

export default settingsSlice.reducer;
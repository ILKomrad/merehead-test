import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "serverUrl": "",
    "maxItemsOnPage": 5
};

export const getServerUrl = state => state.settings.serverUrl;
export const getMaxPage = state => state.settings.maxItemsOnPage;

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: {
        "settings/get/fulfilled": (state, action) => {
            state.serverUrl = action.payload.serverUrl;
            state.maxItemsOnPage = action.payload.maxItemsOnPage;
        },
        "settings/get/rejected": (state, action) => {}
    }
});

export default settingsSlice.reducer;
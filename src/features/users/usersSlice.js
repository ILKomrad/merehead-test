import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
    error: null,
    state: "idle"
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {}
});

export default usersSlice.reducer;
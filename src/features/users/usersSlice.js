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
    extraReducers: {
        "users/fetchUsers/fulfilled": (state, action) => {
            console.log( action )
        },
        "users/fetchUsers/rejected": (state, action) => {
            state.state = "error";
            state.error = action.payload;
            console.log( state.error )
        }
    }
});

export default usersSlice.reducer;
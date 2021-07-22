import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
    error: null,
    state: "idle"
});

export const {
    selectIds: selectUsersIds,
    selectById: selectUserById,
} = usersAdapter.getSelectors(state => state.users);

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        "users/fetchUsers/fulfilled": (state, action) => {
            console.log( action )
            state.state = 'succeeded';
            state.error = null;
            usersAdapter.upsertMany(state, action.payload);
        },
        "users/fetchUsers/rejected": (state, action) => {
            state.state = "error";
            state.error = action.payload;
            console.log( state.error )
        }
    }
});

export default usersSlice.reducer;
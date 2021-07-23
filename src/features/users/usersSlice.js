import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.id - a.id
});
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
            state.state = 'succeeded';
            state.error = null;
            usersAdapter.upsertMany(state, action.payload);
        },
        "users/fetchUsers/rejected": (state, action) => {
            state.state = "error";
            state.error = action.payload;
        },
        "users/addUser/fulfilled": (state, action) => {
            usersAdapter.addOne(state, action.payload);
        },
        "users/addUser/rejected": (state, action) => {},
        "users/editUser/fulfilled": (state, action) => {
            const { id } = action.payload;
            const user = state.entities[id];
            
            if (user) {
                for (let i in action.payload) {
                    user[i] = action.payload[i];
                }
            }
        },
        "users/deleteUser/fulfilled": (state, action) => {
            usersAdapter.setAll(state, action.payload);
        },
        "users/deleteUser/rejected": (state, action) => {}
    }
});

export default usersSlice.reducer;
import User from '@/shared/interfaces/user.interface';
import { getUsers, putUserById } from '@/shared/services/APIService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the type for the initial state
interface UsersState {
    data: User[] | null;
    loading: boolean;
    error: string | null;
}

// Define the initial state
const initialState: UsersState = {
    data: null,
    loading: false,
    error: null,
};


// Define an async actions to make API calls
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => getUsers());
export const updateUser = createAsyncThunk(
    'users/updateUser',
    (newUserData: User) => {
        const { id, email, first_name, last_name } = newUserData;
        const body = {
            email,
            first_name,
            last_name,
        };

        return putUserById({ id, body });
    }
);

// Create the slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
            const { id } = action.payload;
            const userIndex = state.data?.findIndex((user) => user.id === id);

            if (userIndex !== undefined && userIndex !== -1 && state.data) {
                state.data[userIndex] = {
                    ...state.data[userIndex],
                    ...action.payload
                };
            }
        });

        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        });
    },
});


// Export the slice and the thunk
export const { actions: apiActions } = usersSlice;
export default usersSlice.reducer;

import User from '@/shared/interfaces/user.interface';
import { getUsers } from '@/shared/services/APIService';
import { createSlice, createAsyncThunk, createAction, PayloadAction } from '@reduxjs/toolkit';

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

// Define an async action to make an API call
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => getUsers());

// Create the slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle the API call start action
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        // Handle the action when the API call is successful
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });

        // Handle the action when an error occurs in the API call
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        });

        // Update the reducer to handle the action of updating a user
        builder.addCase(updateUser, (state, action: PayloadAction<Partial<User>>) => {
            const { id } = action.payload;
          
            const userIndex = state.data?.findIndex((user) => user.id === id);
          
            if (userIndex !== undefined && userIndex !== -1 && state.data) {
              state.data[userIndex] = { ...state.data[userIndex], ...action.payload };
            }
          });
    },
});

// Add an action to update a user
export const updateUser = createAction<Partial<User>>('users/updateUser');

// Export the slice and the thunk
export const { actions: apiActions } = usersSlice;
export default usersSlice.reducer;

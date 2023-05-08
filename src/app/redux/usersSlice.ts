import User from '@/shared/interfaces/user.interface';
import { usersAPI } from '@/shared/services/APIService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// types & initial state for the slice
interface UsersState {
    data: User[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    data: null,
    loading: false,
    error: null,
};

// async actions
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    () => usersAPI.getUsers()
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    (newUserData: User) => {
        const { id, email, first_name, last_name } = newUserData;
        const body = {
            email,
            first_name,
            last_name,
        };

        return usersAPI.putUserById({ id, body });
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

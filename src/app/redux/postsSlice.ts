import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "@/shared/services/APIService";
import Post from "@/shared/interfaces/post.interface";

interface PostsState {
    data: { [userId: number]: Post[] } | null;
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    (id: number) => postsAPI.getPostsByUserId(id)
);

export const updatePost = createAsyncThunk(
    "posts/updatePost",
    (updatedPostData: Post) => {
        const { id, title, body } = updatedPostData;
        const updatedData = {
            title,
            body,
        };

        return postsAPI.updatePostById(id, updatedData);
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                // Update the data property using the user ID as the key
                const { userId } = action.payload[0];
                state.data = {
                    ...state.data,
                    [userId]: action.payload,
                };
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                /*  
                TODO: update post logic
                const { id } = action.payload;
                 const postIndex = state.data?.findIndex((post) => post.id === id);
         
                 if (postIndex !== undefined && postIndex !== -1 && state.data) {
                   state.data[postIndex] = {
                     ...state.data[postIndex],
                     ...action.payload,
                   };
                 } */
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    },
});

export const { actions: postsActions } = postsSlice;
export default postsSlice.reducer;

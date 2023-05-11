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

export const deletePost = createAsyncThunk(
    "posts/deletePost",
    (post: Post) => postsAPI.deletePostById(post)
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
            .addCase(deletePost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                const { post } = action.payload;
                const { userId, id } = post;
                // Update the data property using the user ID as the key
                state.data = {
                    ...state.data,
                    [userId]: state.data![userId].filter(
                        (post) => post.id !== id
                    ),
                };

            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    },
});

export const { actions: postsActions } = postsSlice;
export default postsSlice.reducer;

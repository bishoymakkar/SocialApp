import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post, Comment } from '../../types';

interface PostsState {
  posts: Post[];
  post: Post | null;
  comments: Comment[];
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  post: null,
  comments: [],
  loading: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get<Post[]>('https://gorest.co.in/public/v2/posts');
  return response.data;
});

export const fetchComments = createAsyncThunk('posts/fetchComments', async (postId: number) => {
  const response = await axios.get<Comment[]>(`https://gorest.co.in/public/v2/posts/${postId}/comments`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;

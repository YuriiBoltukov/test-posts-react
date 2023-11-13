import { createSlice } from '@reduxjs/toolkit'

/**
 * Represents a post in the application
 */
export interface Post {
  /** The unique identifier for the post */
  id: number
  /** The user ID associated with the post */
  userId: number
  /** The body content of the post */
  body: string
  /** The title of the post */
  title: string
}

/**
 * Represents the state related to posts in the application
 */
interface PostsState {
  posts: Post[]
  selectedPost?: Post['id']
}

/**
 * The initial state for the posts module
 */
const initialState: PostsState = {
  posts: [],
}

/**
 * Redux toolkit slice for managing posts
 */
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    /**
     * Clears all posts in the state
     */
    clean: (state) => {
      state.posts = []
    },
    /**
     * Adds or updates a post in the state
     *
     * @param state - The current state
     * @param payload - The payload containing the post to add or update
     */
    add: ({ posts }, { payload }: { payload: Post }) => {
      const idx = posts.findIndex((post) => post.id === payload.id)
      if (!posts[idx]) posts.push(payload)
      else posts[idx] = payload
    },
    /**
     * Sets the posts in the state
     *
     * @param state - The current state
     * @param payload - The payload containing the array of posts
     */
    set: (state, { payload }) => {
      state.posts = payload
    },
    /**
     * Sets the selected post ID in the state
     *
     * @param state - The current state
     * @param payload - The payload containing the ID of the selected post
     */
    selectPost: (state, { payload }) => {
      state.selectedPost = payload
    },
  },
})

/** Actions generated by the posts slice */
export const { clean, add, set, selectPost } = postsSlice.actions

/** The reducer function for the posts module */
export default postsSlice.reducer
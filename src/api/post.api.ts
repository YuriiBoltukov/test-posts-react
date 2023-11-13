import axios from 'axios'
import {
  handleAxiosError,
  handleUnexpectedError,
} from '../shared/utils/axios.helper'
import { Post } from '../store/reducers/postReducer'

/** The base URL for the external API */
const URL = 'https://jsonplaceholder.typicode.com'

/**
 * Retrieves all posts from the external API
 */
export async function getAllPosts(): Promise<Post[]> {
  let result: Post[] = []
  try {
    result = (await axios.get(`${URL}/posts`))?.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error)
    } else {
      handleUnexpectedError(error)
    }
  } finally {
    return result
  }
}

/**
 * Retrieves a post by its ID from the external API
 */
export async function getPostById(postId: string): Promise<Post | undefined> {
  let result: Post | undefined
  try {
    result = (await axios.get(`${URL}/posts/${postId}`))?.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error)
    } else {
      handleUnexpectedError(error)
    }
  } finally {
    return result
  }
}

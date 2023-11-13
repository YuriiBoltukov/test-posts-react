import React, { useEffect } from 'react'
import { set } from '../../store/reducers/postReducer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { PostUI } from './components/PostTable/postTable.model'
import { PostTableComponent } from './components/PostTable'
import { getAllPosts } from '../../api/post.api'
import Title from 'antd/es/typography/Title'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'

export function PostsPage() {
  const posts: PostUI[] = useAppSelector((state) => state.posts.posts).map(
    (post) => {
      return { ...post, key: post.id }
    }
  )
  const dispatch = useAppDispatch()

  /**
   * Fetches and sets the list of posts in the state
   */
  async function getPosts() {
    const posts = await getAllPosts()
    dispatch(set(posts))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Title level={3} type="success">
          Posts
        </Title>
      </Header>
      <Content>
        <PostTableComponent posts={posts}></PostTableComponent>
      </Content>
    </Layout>
  )
}

export {}

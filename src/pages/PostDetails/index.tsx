import { useAppDispatch, useAppSelector } from '../../store/hooks'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Post, add, selectPost } from '../../store/reducers/postReducer'
import { PostComponent } from './components/Posts'
import { getPostById } from '../../api/post.api'
import Title from 'antd/es/typography/Title'
import { Layout, Space } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'

export function PostDetailsPage() {
  const navigate = useNavigate()
  const { postId } = useParams()
  const selectedPost: Post['id'] | undefined = useAppSelector((state) => state.posts.selectedPost)
  const post: Post | undefined = useAppSelector((state) =>
    state.posts.posts.find((post) => {
      return String(post.id) === String(selectedPost)
    })
  )
  const dispatch = useAppDispatch()

  /**
   * Fetches and adds the post with the specified ID to the state
   */
  async function getPost(postId: string) {
    const data = await getPostById(postId)
    if (!data) return navigate('/')
    dispatch(add(data))
  }

  useEffect(() => {
    // Redirect to the home page if postId is not provided or invalid
    if (!postId) {
      navigate('/')
      return
    }

    dispatch(selectPost(postId))
    getPost(postId)
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Title level={3} type="success">
          Details of post
        </Title>
      </Header>
      <Content>
        <Space align="center">
          <PostComponent post={post}></PostComponent>
        </Space>
      </Content>
    </Layout>
  )
}

export {}

import React from 'react'
import { Card, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Post } from '../../../store/reducers/postReducer'

export function PostComponent({ post }: { post?: Post }) {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      extra={<a href="/">Go back</a>}
    >
      {post ? (
        <Meta title={post?.title} description={post?.body} />
      ) : (
        <Skeleton active></Skeleton>
      )}
    </Card>
  )
}
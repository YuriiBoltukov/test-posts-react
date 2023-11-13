import { Post } from '../../../../store/reducers/postReducer'
import React from 'react'
import { ColumnsType } from 'antd/es/table'

export type PostUI = Post & { key: React.Key }
export type PostTableUI = ColumnsType<PostUI>
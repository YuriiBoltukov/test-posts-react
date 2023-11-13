import { Button, Table, Tooltip } from 'antd'
import { PostTableUI, PostUI } from './postTable.model'
import { Link } from 'react-router-dom'
import { ExportOutlined } from '@ant-design/icons'

/** Columns configuration for the post table */
const columns: PostTableUI = [
  {
    title: 'Post id',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    render: (id) => <Link to={`/posts/${id}`}>{id}</Link>,
},
{
  title: 'User ID',
    dataIndex: 'userId',
  width: 80,
  sorter: (a, b) => a.userId - b.userId,
},
{
  title: 'Title',
    dataIndex: 'title',
  key: 'title',
  filters: [],
  filterSearch: true,
  ellipsis: {
  showTitle: false,
},
  onFilter: (searchStr, { title }) => {
    return title.startsWith(String(searchStr))
  },
    render: (title) => (
  <Tooltip title={title}>
    <b>{title}</b>
    </Tooltip>
),
},
{
  title: 'Content',
    dataIndex: 'body',
  ellipsis: {
  showTitle: false,
},
  render: (content) => <Tooltip title={content}>{content}</Tooltip>,
},
{
  title: 'Action',
    width: 130,
  fixed: 'right',
  render: (_, { id }) => (
  <Link to={`/posts/${id}`}>
  <Button type="primary" icon={<ExportOutlined />} size="small">
  Details
  </Button>
  </Link>
),
},
]

export function PostTableComponent({ posts }: { posts: PostUI[] }) {
  // Populate filters for the 'Title' column based on available post titles
  const filters = posts.map((post) => ({
    text: post.title,
    value: post.title,
  }))
  columns[2].filters = filters

  return (
    <Table
      columns={columns}
  pagination={{ position: ['topRight', 'bottomRight'] }}
  dataSource={posts}
  />
)
}

export {}

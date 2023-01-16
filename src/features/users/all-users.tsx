import { Button, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import api from 'common/axios/axios'
import { useEffect, useState } from 'react'

interface DataType {
  key: React.Key
  id: number
  password: string
  email: string
}

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: 1,
    email: `Edward King ${i}`,
    password: `London, Park Lane no. ${i}`,
  })
}

const ALLUsers: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllUsres = async () => {
      const response = await api.get('accounts')
      setUsers(response.data)
    }
    getAllUsres()
  }, [])
  const columns: ColumnsType<DataType> = users.map((item: any, index) => {
    return {
      key: index,
      id: item.id,
      email: item.email,
      password: item.password,
    }
  })

  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type='primary' onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default ALLUsers

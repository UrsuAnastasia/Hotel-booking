import { Table } from 'antd'

import api from 'common/axios/axios'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect, useState } from 'react'

// interface DataType {
//   key: React.Key
//   id: number
//   password: string
//   email: string
// }
const UserReservation: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllUsres = async () => {
      const response = await api.get('accounts')
      setUsers(response.data)
    }
    getAllUsres()
  }, [])

  const dataSource = users.map((item: any) => {
    return {
      key: item.id,
      email: item.email,
      accountType: item.accountType,
    }
  })

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
    },
  ]

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <LayoutContaier>
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
      </div>
    </LayoutContaier>
  )
}

export default UserReservation

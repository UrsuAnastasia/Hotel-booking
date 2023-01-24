import { Table } from 'antd'
import api from 'common/axios/axios'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect, useState } from 'react'

const UserReservation: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [users, setUsers] = useState([])
  const userId = localStorage.getItem('userId')
  useEffect(() => {
    const getAllUsres = async () => {
      const response = await api.get(`reservations/owner/${userId}`)
      setUsers(response.data)
    }
    getAllUsres()
  }, [])

  const dataSource = users.map((item: any) => {
    return {
      key: item.id,
      dateFrom: item.dateFrom,
      dateTo: item.dateTo,
      price: item.price + ' lei',
      title: item.rooms.map((room: any) => room.title),
      capacity: item.rooms.map((room: any) => room.capacity),
    }
  })

  const columns = [
    {
      title: 'Date From',
      dataIndex: 'dateFrom',
      key: 'dateFrom',
    },
    {
      title: 'Date To',
      dataIndex: 'dateTo',
      key: 'dateTo',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Capacity',
      dataIndex: 'capacityle',
      key: 'capacity',
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

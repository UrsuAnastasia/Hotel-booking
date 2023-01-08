import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Pencil, Plus, Trash } from 'react-bootstrap-icons'
import { AddRoomModal } from './add-room/add-room'

export const RoomRezervation = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false)
  const tableBody = [
    {
      roomNumber: '2',
      capacity: '2',
      bedNumber: '2',
      price: '100 $',
      cleaningStatus: 'Clean',
      facilities: 'Upgrade',
      availability: 'Reserved',
    },
    {
      roomNumber: '2',
      capacity: '2',
      bedNumber: '2',
      price: '100 $',
      cleaningStatus: 'Clean',
      facilities: 'Upgrade',
      availability: 'Reserved',
    },
  ]
  return (
    <LayoutContaier>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: '24px',
        }}>
        {showAddModal ? (
          <AddRoomModal showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
        ) : null}
        <Button
          size='sm'
          variant='info'
          onClick={() => {
            setShowAddModal(true)
          }}>
          <Plus /> Add item
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Capacity</th>
            <th>Bed Number</th>
            <th>Price</th>
            <th>Cleaning Status</th>
            <th>Facilities</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item, index) => {
            return (
              <tr>
                <td>{item.roomNumber}</td>
                <td>{item.capacity}</td>
                <td>{item.bedNumber}</td>
                <td>{item.price}</td>
                <td>{item.cleaningStatus}</td>
                <td>{item.facilities}</td>
                <td>{item.availability}</td>
                <td>
                  <Button size='sm' variant='warning'>
                    <Pencil />
                  </Button>
                  <Button style={{ marginLeft: '12px' }} size='sm' variant='danger'>
                    <Trash />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </LayoutContaier>
  )
}

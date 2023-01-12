import { Radio, RadioChangeEvent } from 'antd'
import { cleanStatus, roomType } from 'features/hotel-rooms/constants/hotel.constants'

import { useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import Select from 'react-select'
import style from './add-room.module.scss'
interface Props {
  showAddModal: boolean
  setShowAddModal: (showAddModal: boolean) => any
}
export const AddRoomModal: React.FC<Props> = ({ ...props }) => {
  // const [formData,setFormData]=useState({
  //   cleanStatus:'',
  //   roomType:'',
  //   facilities:''
  // })
  const [value, setValue] = useState(1)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Modal
      show={props.showAddModal}
      onHide={() => {
        props.setShowAddModal(false)
      }}>
      <Modal.Header closeButton>
        <Modal.Title>Add a room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Room number:</Form.Label>
                <Form.Control type='text' placeholder='Enter room number' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Capocity:</Form.Label>
                <Form.Control type='text' placeholder='' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Bed number:</Form.Label>
                <Form.Control type='text' placeholder='' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Description:</Form.Label>
                <Form.Control type='text' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Price:</Form.Label>
                <Form.Control type='text' placeholder='Password' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <span>Clean Status </span>
                <Select name='cleanStatus' className={style.addRoom_Select} options={cleanStatus} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <span>Room Type </span>
                <Select name='roomType' className={style.addRoom_Select} options={roomType} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <span>Facilities </span>
                <Select name='facilities' className={style.addRoom_Select} options={roomType} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ marginBottom: '10px' }}>Pet Friendly </span>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>True</Radio>
                    <Radio value={2}>False</Radio>
                  </Radio.Group>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={() => {
            props.setShowAddModal(false)
          }}>
          Close
        </Button>
        <Button variant='primary' onClick={() => {}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

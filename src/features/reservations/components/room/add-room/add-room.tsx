import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
interface Props {
  showAddModal: boolean
  setShowAddModal: (showAddModal: boolean) => any
}
export const AddRoomModal: React.FC<Props> = ({ ...props }) => {
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
                <Form.Control type='text' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Bed number:</Form.Label>
                <Form.Control type='text' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Capocity:</Form.Label>
                <Form.Control type='text' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Availability:</Form.Label>
                <Form.Control type='text' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Description:</Form.Label>
                <Form.Control type='text' placeholder='Password' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Price:</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Facilities:</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Smoking:</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Pet Friendly:</Form.Label>
                <Form.Control type='password' placeholder='Password' />
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

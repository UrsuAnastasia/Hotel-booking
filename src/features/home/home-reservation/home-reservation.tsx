import { Button, Col, Row } from 'react-bootstrap'
import { DatePicker } from 'antd'
import { Search } from 'react-bootstrap-icons'
import style from './home-reservation.module.scss'
export const HomeReservation = () => {
  return (
    <div className={style.homeReservation}>
      <div className={style.homeReservation_Container}>
        <Row>
          <Col>
            <h3>Book now your ideal stay</h3>
          </Col>
          <Col></Col>
          <Col>
            <DatePicker
              showTime
              format='YYYY-MM-DD HH:mm:ss'
              //   value={10}
              placeholder='Start'
              onChange={() => {}}
              onOpenChange={() => {}}
            />
          </Col>
          <Col>
            <DatePicker
              showTime
              format='YYYY-MM-DD HH:mm:ss'
              //   value={10}
              placeholder='End'
              onChange={() => {}}
              onOpenChange={() => {}}
            />
          </Col>
          <Col>
            <Button className={style.homeReservation_Button} variant='light' onClick={() => {}}>
              <Search />
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

import { DatePicker, Modal } from 'antd'
import style from '../single-room/single-room.module.scss'
import * as Icon from 'react-bootstrap-icons'
import { useState } from 'react'
import dayjs from 'dayjs'
import { ModalConfirmReservation } from '../modal-confirm-reservation/modal-confirm-reservation'

import { RangePickerProps } from 'antd/es/date-picker'
import { UserRezervationForm } from 'features/reservations/models/reservation.module'
import api from 'common/axios/axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

export const UserReservation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errorDateFrom, setErrorDateFrom] = useState<any>('')
  const [errorDateTo, setErrorDateTo] = useState<any>('')
  const [values, setValues] = useState<UserRezervationForm>({
    dateFrom: '',
    dateTo: '',
  })

  const success = () => {
    Modal.success({
      content: 'Your booking was confirmed',
    })
  }
  const { id } = useParams()
  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'Something went wrong please try again later',
    })
  }
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day')
  }
  const handleError = (e: any) => {
    if (values.dateFrom === '') {
      setErrorDateFrom(true)
    }
    if (values.dateTo === '') {
      setErrorDateTo(true)
    }
    if (errorDateFrom === false && errorDateTo === false) {
      setIsModalOpen(true)
    }
  }
  const handleReserveRoom = async () => {
    const payload: any = {
      ownerId: 1,
      dateFrom: moment(values.dateFrom).format('YYYY-MM-DD'),
      dateTo: moment(values.dateTo).format('YYYY-MM-DD'),
      rooms: [
        {
          id: +id!,
        },
      ],
    }
    const response = await api.post('reservations', payload)
    if (response.status === 200) {
      setIsModalOpen(false)
      setValues({ dateFrom: '', dateTo: '' })
      success()
    } else {
      setIsModalOpen(false)
      error()
    }
  }

  return (
    <>
      {isModalOpen && (
        <ModalConfirmReservation
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleReserveRoom={handleReserveRoom}
        />
      )}
      <div className={style.singleRoom_CheckIn}>
        <span>Check - in</span>
        <DatePicker
          disabledDate={disabledDate}
          showTime
          name='dateFrom'
          format='YYYY-MM-DD'
          value={values.dateFrom}
          placeholder='Start'
          onChange={(dateObj: any) => {
            if (dateObj !== '') {
              setErrorDateFrom(false)
              setValues({ ...values, dateFrom: dateObj })
            }
          }}
        />
        <span style={{ color: 'red', fontSize: '12px', marginTop: '6px' }}>
          {errorDateFrom ? 'Please select a date' : null}
        </span>
      </div>
      <div className={style.singleRoom_CheckIn}>
        <span>Check - out</span>

        <DatePicker
          disabledDate={(current: any) => current < values.dateFrom}
          format='YYYY-MM-DD'
          showTime
          name='dateTo'
          value={values.dateTo}
          placeholder='Start'
          onChange={(dateObj: any) => {
            if (dateObj !== '') {
              setErrorDateTo(false)
              setValues({ ...values, dateTo: dateObj })
            }
          }}
        />
        <span style={{ color: 'red', fontSize: '12px', marginTop: '6px' }}>
          {errorDateTo ? 'Please select a date' : null}
        </span>
      </div>
      <div className={style.singleRoom_Payment}>
        <div>Total Payment</div> <div>350$</div>
      </div>
      <div className={style.singleRoom_ButtonContainer}>
        <button
          onClick={(e) => {
            handleError(e)
          }}
          className={style.singleRoom_Button}>
          <Icon.CalendarCheckFill />
          <span>Reserve now</span>
        </button>
      </div>
    </>
  )
}

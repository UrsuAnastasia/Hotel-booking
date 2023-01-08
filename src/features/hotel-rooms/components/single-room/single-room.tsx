import { LayoutContaier } from 'layout/layout-container/layout-container'
import style from './single-room.module.scss'
import * as Icon from 'react-bootstrap-icons'
import DatePicker from 'react-date-picker'
import { useState } from 'react'

const amenities = [
  { text: 'Air Conditioning' },
  { text: 'Closet' },
  { text: 'Flat Screen TV' },
  { text: 'Music' },
  { text: 'Free WiFi' },
  { text: 'Mini - Fridge' },
  { text: 'Telephone' },
  { text: 'Bathroom with shower cabin or walk-in shower' },
]

export const SingleRoom = () => {
  const [value, setValue] = useState(new Date())
  return (
    <LayoutContaier>
      {/* image Container */}
      <div className={style.singleRoom_Container}>
        <div className={style.singleRoom_Right}>
          <img alt='' src={'https://thumbs.dreamstime.com/b/hotel-room-26001164.jpg'} />
        </div>
        <div className={style.singleRoom_Left}>
          <img
            alt=''
            src={'https://media-cdn.tripadvisor.com/media/photo-s/14/06/83/b9/bathroom.jpg'}
          />
          <img
            alt=''
            src={
              'https://media.gettyimages.com/id/154945734/photo/breakfast-in-hotel-room.jpg?s=612x612&w=gi&k=20&c=MZ6TI8afQkARV9wp-PWc09UvPGpg7X9izQ-Q9j26iEE='
            }
          />
        </div>
        {/* Details Container */}
      </div>
      <div className={style.singleRoom_DetailsContainer}>
        <div className={style.singleRoom_DetailsInfo}>
          <h1>Description</h1>
          <p>
            Double Room This is a two-person spacious room of 24 square meters, featuring a private
            balcony or terrace. Modern furnishings and earthly tones are combined to create a
            relaxing setting for you and your loved ones in our Double Room. It is spacious and
            bright and features elegant decor ensuring a stylish and comfortable stay.
          </p>
          <h2>View below the Amenities in detail</h2>
          <ul>
            {amenities.map((item, index) => {
              return <li key={index}>{item.text}</li>
            })}
          </ul>
        </div>
        <div className={style.singleRoom_DetailsReservation}>
          <div className={style.singleRoom_DetailsPrice}>
            50$ <span>/night</span>
          </div>
          <div className={style.singleRoom_CheckIn}>
            <span>Check - in</span>
            <DatePicker className={style.singleRoom_Calendar} onChange={() => {}} value={value} />
          </div>
          <div className={style.singleRoom_CheckIn}>
            <span>Check - out</span>
            <DatePicker
              onChange={(e: any) => {
                console.log(e)
                setValue(e)
              }}
              value={value}
            />
          </div>
          <div className={style.singleRoom_Payment}>
            <div>Total Payment</div> <div>350$</div>
          </div>
          <div className={style.singleRoom_ButtonContainer}>
            <button className={style.singleRoom_Button}>
              <Icon.CalendarCheckFill />
              <span>Reserve now</span>
            </button>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}

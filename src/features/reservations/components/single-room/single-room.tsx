import { LayoutContaier } from 'layout/layout-container/layout-container'
import style from './single-room.module.scss'
import { UserReservation } from '../user-reservation/user-reservation.module'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from 'common/axios/axios'
export const SingleRoom = () => {
  const [formData, setFormData] = useState<any>({
    title: '',
    roomNumber: null,
    capacity: null,
    bedNumber: null,
    description: '',
    pricePerNight: null,
    cleanStatus: '',
    roomType: '',
    petFriendly: false,
    facilities: [],
  })
  const { id } = useParams()
  useEffect(() => {
    const getRooms = async () => {
      const response = await api.get(`/rooms/${id}`)
      setFormData({
        title: response.data.title,
        roomNumber: response.data.roomNumber,
        capacity: response.data.capacity,
        bedNumber: response.data.bedNumber,
        description: response.data.description,
        pricePerNight: response.data.pricePerNight,
        cleanStatus: response.data.cleanStatus,
        roomType: response.data.roomType,
        petFriendly: response.data.petFriendly,
        facilities: response.data.facilities,
      })
    }
    getRooms()
  }, [id])
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
          <p>{formData.description}</p>
          <h2>View below the Amenities in detail</h2>
          <ul>
            {formData.facilities.map((item: any, index: number) => {
              return <li key={index}>{item.name}</li>
            })}
          </ul>
        </div>
        <div className={style.singleRoom_DetailsReservation}>
          <div className={style.singleRoom_DetailsPrice}>
            {formData.pricePerNight}$ <span>/night</span>
          </div>
          <UserReservation />
        </div>
      </div>
    </LayoutContaier>
  )
}

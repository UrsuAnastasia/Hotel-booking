import { Bed } from 'common/assets/icons/Bed'
import { Wifi } from 'common/assets/icons/Wifi'
import { useNavigate } from 'react-router-dom'
import style from './ShowroomCard.module.scss'
import { EyeOutlined } from '@ant-design/icons'
import { Trash } from 'react-bootstrap-icons'
import { useState } from 'react'
import { DeleteRoom } from 'features/hotel-rooms/components/modal/modal-confirm-reservation'
interface Props {
  date: Array<any>
  setRoomId: (id: number) => void
  roomId: number
}
export const CardShowroom: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate()
  const [opeModal, setOpenModal] = useState(false)
  const accountType = localStorage.getItem('accountType')
  const handleDelete = async () => {}
  return (
    <div className=''>
      {opeModal ? (
        <DeleteRoom
          isModalOpen={opeModal}
          setIsModalOpen={setOpenModal}
          handleReserveRoom={handleDelete}
        />
      ) : null}
      <div className={style.cardShowroom_Container}>
        {props.date.map((item, index) => {
          return (
            <div key={index} className={style.cardShowroom_Card}>
              <div className={style.cardShowroom_Image}>
                <img alt='room' src={item.imageUrl} />
              </div>
              <div className={style.cardShowroom_Status}>
                <span>AVAILABLE NOW</span>
              </div>
              <div className={style.cardShowroom_Fascility}>
                <span>PREMIUM</span>
              </div>
              <div className={style.cardShowroom_Action}>
                {accountType === 'ADMIN' && (
                  <>
                    <div onClick={() => navigate(`/edit-room/${item.id}`)}>
                      <EyeOutlined />
                    </div>
                    <div
                      onClick={() => {
                        props.setRoomId(item.id)
                        setOpenModal(true)
                      }}>
                      <Trash />
                    </div>
                  </>
                )}
              </div>
              <div
                className={style.cardShowroom_Content}
                onClick={() => {
                  navigate(`/single-room/${item.id}`)
                }}>
                <p className={style.cardShowroom_Price}>
                  $ {item.pricePerNight} <span> per night</span>
                </p>
                <h3 className={style.cardShowroom_Title}>{item.title}</h3>
                <div className={style.cardShowroom_IconMainContainer}>
                  <div className={style.cardShowroom_IconContainer}>
                    <span className={style.cardShowroom_Icon}>
                      <Bed />
                    </span>
                    <span className={style.cardShowroom_IconTitle}>{item.bedNumber} bd.</span>
                  </div>
                  <div className={style.cardShowroom_IconContainer}>
                    <span className={style.cardShowroom_Icon}>
                      <Wifi />
                    </span>
                    <span className={style.cardShowroom_IconTitle}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

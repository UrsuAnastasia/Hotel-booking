import { Input } from 'antd'
import { CardShowroom } from 'common/components/ShowroomCard/ShowRoomCard'
import { PAGES_PATHS } from 'common/constants/constant'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './hotel-rooms.module.scss'
const rooms = [
  {
    id: 1,
    image:
      'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
    title: 'Dreamy Treehouse Above Park City asdsa',
    price: '400 ',
  },
  {
    id: 2,
    image:
      'https://www.kayak.com/rimg/himg/67/ce/c1/revato-597916-12578001-391478.jpg?width=720&height=576&crop=true',
    title: 'Mother Eve tiny house near Zion NAtioal',
    price: '400 ',
  },
  {
    id: 3,
    image:
      'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
    title: 'Dreamy Treehouse Above Park City asdsa',
    price: '400 ',
  },
  {
    id: 4,
    image:
      'https://www.kayak.com/rimg/himg/67/ce/c1/revato-597916-12578001-391478.jpg?width=720&height=576&crop=true',
    title: 'Mother Eve tiny house near Zion NAtioal',
    price: '400 ',
  },
  {
    id: 6,
    image:
      'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
    title: 'Dreamy Treehouse Above Park City asdsa',
    price: '400 ',
  },
  {
    id: 5,
    image:
      'https://www.kayak.com/rimg/himg/67/ce/c1/revato-597916-12578001-391478.jpg?width=720&height=576&crop=true',
    title: 'Mother Eve tiny house near Zion NAtioal',
    price: '400 ',
  },
  {
    id: 7,
    image:
      'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
    title: 'Dreamy Treehouse Above Park City asdsa',
    price: '400 ',
  },
  {
    id: 8,
    image:
      'https://www.kayak.com/rimg/himg/67/ce/c1/revato-597916-12578001-391478.jpg?width=720&height=576&crop=true',
    title: 'Mother Eve tiny house near Zion NAtioal',
    price: '400 ',
  },
]
export const HotelRooms = () => {
  // const [showAddModal, setShowAddModal] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const navigate = useNavigate()
  const { Search } = Input
  //search item
  const searchRoomArray = rooms.filter((room) =>
    room.title.toLowerCase().includes(searchValue.toLowerCase()),
  )
  return (
    <div>
      {/* {' '}
      {showAddModal ? (
        <AddRoomModal showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
      ) : null} */}
      <LayoutContaier>
        <div className={style.hotelRooms_Header}>
          <Search
            className={style.hotelRooms_Search}
            allowClear
            value={searchValue}
            placeholder='input search text'
            onChange={(event: any) => {
              setSearchValue(event.target.value)
            }}
            style={{ width: 200 }}
          />
          <button
            className={style.hotelRooms_Button}
            onClick={() => {
              navigate(PAGES_PATHS.ADD_ROOM)
            }}>
            Add new room
          </button>
        </div>
        <CardShowroom date={searchRoomArray} />
      </LayoutContaier>
    </div>
  )
}

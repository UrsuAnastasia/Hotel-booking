import { DatePicker, DatePickerProps, Input, Select } from 'antd'
import api from 'common/axios/axios'
import { CardShowroom } from 'common/components/ShowroomCard/ShowRoomCard'
import { PAGES_PATHS } from 'common/constants/constant'
import { roomType } from 'features/hotel-rooms/constants/hotel.constants'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './hotel-rooms.module.scss'

export const HotelRooms = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [rooms, setRooms] = useState<Array<any>>([])
  const [roomId, setRoomId] = useState<any>()
  const [filter, setFilter] = useState<any>({
    type: '',
    price: '',
    dateTo: '',
    dateFrom: '',
  })
  const navigate = useNavigate()
  const { Search } = Input

  //search item
  const searchRoomArray = rooms.filter((room) =>
    room.title.toLowerCase().includes(searchValue.toLowerCase()),
  )
  const accountType = localStorage.getItem('accountType')
  useEffect(() => {
    const getAllRooms = async () => {
      const response = await api.get(
        `rooms/view-list?type=${filter.type}&price=${filter.price}&dateFrom=${
          filter.dateFrom === '' ? '' : filter.dateTo
        }&dateTo=${filter.dateTo === '' ? '' : filter.dateFrom}`,
      )
      setRooms(response.data)
    }
    getAllRooms()
  }, [filter.type, filter.price, filter.dateTo, filter.dateFrom])

  const onChangeDateFrom: DatePickerProps['onChange'] = (date, dateString: any) => {
    setFilter({ ...filter, dateFrom: dateString })
  }
  const onChangeDateTo: DatePickerProps['onChange'] = (date, dateString: any) => {
    setFilter({ ...filter, dateTo: dateString })
  }

  return (
    <div>
      <LayoutContaier>
        <>
          <div className={style.hotelRooms_Header}>
            <div className={style.hotelRooms_FilterContainer}>
              <span>Filter by:</span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '30px',
                  justifyContent: 'center',
                }}>
                <span style={{ marginBottom: '8px' }}>Room type:</span>
                <Select
                  placeholder='Room type'
                  style={{ width: '150px' }}
                  value={filter.type}
                  onChange={(e) => {
                    setFilter({ ...filter, type: e })
                  }}
                  options={roomType}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '30px',
                  justifyContent: 'center',
                }}>
                <span style={{ marginBottom: '8px' }}>Price:</span>
                <Input
                  placeholder='Room type'
                  style={{ width: '150px' }}
                  value={filter.price}
                  onChange={(e) => {
                    setFilter({ ...filter, price: e.target.value })
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '30px',
                  justifyContent: 'center',
                }}>
                <span style={{ marginBottom: '8px' }}>Date from:</span>
                <DatePicker
                  showTime
                  name='dateFrom'
                  format='YYYY-MM-DD'
                  // value={filter.dateFrom}
                  placeholder='Start'
                  onChange={onChangeDateFrom}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '30px',
                  justifyContent: 'center',
                }}>
                <span style={{ marginBottom: '8px' }}>Date to:</span>
                <DatePicker
                  format='YYYY-MM-DD'
                  showTime
                  name='dateTo'
                  // value={filter.dateTo}
                  placeholder='Start'
                  onChange={onChangeDateTo}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
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
              {accountType === 'ADMIN' && (
                <button
                  className={style.hotelRooms_Button}
                  onClick={() => {
                    navigate(PAGES_PATHS.ADD_ROOM)
                  }}>
                  Add new room
                </button>
              )}
            </div>
          </div>
          <div className={style.hotelRooms_Container}>
            {rooms.length === 0 ? (
              'Aww, there is nothing'
            ) : (
              <CardShowroom setRoomId={setRoomId} roomId={roomId} date={searchRoomArray} />
            )}
          </div>
        </>
      </LayoutContaier>
    </div>
  )
}

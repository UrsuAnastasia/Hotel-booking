import { Route, Routes } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { HotelRooms } from 'features/hotel-rooms/components/hotel-rooms'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.DASHBOARD} element={<HotelRooms />} />
    </Routes>
  )
}

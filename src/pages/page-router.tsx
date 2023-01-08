import { Route, Routes } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { HotelRooms } from 'features/hotel-rooms/components/hotel-rooms'
import { SingleRoom } from 'features/hotel-rooms/components/single-room/single-room'
import { Login } from 'features/auth/components/login/login'
import { SignUp } from 'features/auth/components/login/signUp'
import { MainContent } from 'layout/layout-main-container/layout-main-container'
import { RoomRezervation } from 'features/reservations/components/room/room-reservation'
import { Home } from 'features/home/home-landing-page/home-landing-page'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.LOGIN} element={<Login />} />
      <Route path={PAGES_PATHS.SIGN_UP} element={<SignUp />} />
      <Route element={<MainContent />}>
        <Route path={PAGES_PATHS.HOME} element={<Home />}></Route>
        <Route path={PAGES_PATHS.HOTEL_ROOMS} element={<HotelRooms />} />
        <Route path={PAGES_PATHS.SINGLE_ROOM} element={<SingleRoom />} />
        <Route path={PAGES_PATHS.RESERVATION} element={<RoomRezervation />} />
      </Route>
    </Routes>
  )
}

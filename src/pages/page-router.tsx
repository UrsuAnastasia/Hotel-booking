import { Route, Routes } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { HotelRooms } from 'features/hotel-rooms/components/home-rooms/hotel-rooms'
import { SingleRoom } from 'features/reservations/components/single-room/single-room'
import { Login } from 'features/auth/components/login/login'
import { SignUp } from 'features/auth/components/login/signUp'
import { MainContent } from 'layout/layout-main-container/layout-main-container'

import { Home } from 'features/home/home-landing-page/home-landing-page'
import { AddRoomModal } from 'features/hotel-rooms/components/add-room/add-room'
import { Facility } from 'features/facility/components/facility-landing-page/facility'
import ALLUsers from 'features/users/all-users'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.LOGIN} element={<Login />} />
      <Route path={PAGES_PATHS.SIGN_UP} element={<SignUp />} />
      <Route element={<MainContent />}>
        <Route path={PAGES_PATHS.HOME} element={<Home />}></Route>
        <Route path={PAGES_PATHS.HOTEL_ROOMS} element={<HotelRooms />} />
        <Route path={PAGES_PATHS.SINGLE_ROOM} element={<SingleRoom />} />
        <Route path={PAGES_PATHS.RESERVATION} element={<Facility />} />
        <Route path={PAGES_PATHS.ADD_ROOM} element={<AddRoomModal />} />
        <Route path={'/edit-room/:id'} element={<AddRoomModal />} />
        <Route path={PAGES_PATHS.ALL_USERS} element={<ALLUsers />} />
      </Route>
    </Routes>
  )
}

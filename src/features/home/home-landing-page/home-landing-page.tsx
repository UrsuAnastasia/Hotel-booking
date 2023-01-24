// import { CardShowroom } from 'common/components/ShowroomCard/ShowRoomCard'
import { LayoutContaier } from 'layout/layout-container/layout-container'
// import { useState } from 'react'
import { BestApartaments } from '../home-best-apartaments/home-best-apartaments'
import { BestPrice } from '../home-best-price/home-best-price'
import { MainPage } from '../home-main-page/home-main-page'
import style from './home-landing-page.module.scss'

export const Home = () => {
  // const [roomId, setRoomId] = useState<any>()
  // const rooms = [
  //   {
  //     id: 1,
  //     image:
  //       'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  //     title: 'Dreamy Treehouse Above Park City asdsa',
  //     price: '400 ',
  //   },
  //   {
  //     id: 2,
  //     image:
  //       'https://www.kayak.com/rimg/himg/67/ce/c1/revato-597916-12578001-391478.jpg?width=720&height=576&crop=true',
  //     title: 'Mother Eve tiny house near Zion NAtioal',
  //     price: '400 ',
  //   },
  //   {
  //     id: 3,
  //     image:
  //       'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  //     title: 'Dreamy Treehouse Above Park City asdsa',
  //     price: '400 ',
  //   },
  //   {
  //     id: 3,
  //     image:
  //       'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  //     title: 'Dreamy Treehouse Above Park City asdsa',
  //     price: '400 ',
  //   },
  // ]
  return (
    <div>
      <MainPage />
      {/* <HomeReservation /> */}
      <LayoutContaier>
        <BestApartaments />
        <BestPrice />
        <h4 className={style.home_SubTitle}>Homes guests love</h4>
        {/* <CardShowroom setRoomId={setRoomId} roomId={roomId} date={rooms} /> */}
      </LayoutContaier>
    </div>
  )
}

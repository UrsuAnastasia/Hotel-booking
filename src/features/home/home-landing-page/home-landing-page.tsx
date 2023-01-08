import { CardShowroom } from 'common/components/ShowroomCard/ShowRoomCard'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { MainPage } from '../home-main-page/home-main-page'
import { HomeReservation } from '../home-reservation/home-reservation'
import style from './home-landing-page.module.scss'
export const Home = () => {
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
      id: 3,
      image:
        'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
      title: 'Dreamy Treehouse Above Park City asdsa',
      price: '400 ',
    },
  ]
  return (
    <div>
      <LayoutContaier>
        <MainPage />
        <HomeReservation />
        <div className={style.home_Title}>
          <h1>The best hotels from all the top sites, all in one place</h1>
          <h6>
            We believe finding a hotel should be easy. We’ve partnered with the top sites to help
            you find the perfect hotel. We’ve designed VacationRenter from the ground up for the
            next generation of travelers.
          </h6>
        </div>
        <CardShowroom date={rooms} />
      </LayoutContaier>
    </div>
  )
}

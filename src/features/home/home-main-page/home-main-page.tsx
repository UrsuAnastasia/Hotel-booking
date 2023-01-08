import style from './home-main-page.module.scss'
export const MainPage = () => {
  return (
    <div className={style.mainPage_ImageContainer}>
      <img
        alt='img'
        src={
          'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg'
        }
      />
    </div>
  )
}

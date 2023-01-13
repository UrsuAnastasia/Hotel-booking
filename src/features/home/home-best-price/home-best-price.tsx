import style from './home-best-price.module.scss'
export const BestPrice = () => {
  const fistContainerImages = [
    {
      img: 'https://www.tablebed.com/wp-content/uploads/2022/03/Hotellihuoneen-sisustus_.png',
      name: 'Residhome  Gare de Lyon - Jacqueline de Romilly',
      price: '300',
    },

    {
      img: 'https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=',
      name: 'Appart City Paris La Villette',
      price: '250',
    },
    {
      img: 'https://media.cntraveler.com/photos/5c7567b6b36948415881db22/16:9/w_2560%2Cc_limit/Hotel-Ottilia-Junior-Suite.jpg',
      name: 'Residhome Paris Rosa ParksOpens in new window',
      price: '280',
    },
  ]

  return (
    <div className={style.bestPrice}>
      <h2>Best Price</h2>
      <div className={style.bestPrice_FirstContainer}>
        {fistContainerImages.map((item, index) => {
          return (
            <div key={index} className={style.bestPrice_Image}>
              <img alt='best' src={item.img} />
              <div className={style.bestPrice_Overlay}>
                <span>{item.name}</span>
                <span>{item.price} lei</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className={style.bestPrice_SecondContainer}>
        <div className={style.bestPrice_ImageSecond}>
          <img
            alt='best'
            src='https://media.istockphoto.com/id/1141951033/photo/luxury-bedroom-interior.jpg?s=612x612&w=0&k=20&c=As_kym3CEkAVqB9NZHoXiEciWPMo1SRUO0YXLSTTiME='
          />
          <div className={style.bestPrice_OverlaySecond}>
            <span>{'Studio Residence MilitariOpens in new window'}</span>
            <span>{320} lei</span>
          </div>
        </div>
        <div className={style.bestPrice_ImageSecond}>
          <img
            alt='best'
            src='https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/12/22/1040/LAXTH-P0071-Thompson-Suite-Bedroom-Night.jpg/LAXTH-P0071-Thompson-Suite-Bedroom-Night.4x3.jpg'
          />
          <div className={style.bestPrice_OverlaySecond}>
            <span>{'Downtown Victoria ApartmentsOpens in new window'}</span>
            <span>{200} lei</span>
          </div>
        </div>
      </div>
    </div>
  )
}

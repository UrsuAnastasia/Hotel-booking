import style from './home-best-apartaments.module.scss'
export const BestApartaments = () => {
  return (
    <div className={style.bestApartaments}>
      <div className={style.bestApartaments_Container}>
        <div className={style.bestApartaments_ImageContainer}>
          <div className={style.bestApartaments_Image}>
            <img
              alt='hotel-room'
              src={
                'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2016/03/mandarin-oriental-las-vegas1.jpg?fit=1300%2C732&ssl=1'
              }
            />
          </div>
          <div className={style.bestApartaments_Details}>
            <span>Best luxury appartment</span>
          </div>
        </div>
        <div className={style.bestApartaments_Description}>
          <h2> NOBU ROOM AT CAESARS PALACE</h2>
          <p>
            The Cosmopolitan is one of the Strip’s older luxury resorts, but it still delivers.
            Here, guests enjoy oversized residential-styled living spaces with private terraces and
            breathtaking views of the Las Vegas skyline. Dining is reinvented with a one-of-a-kind
            restaurant collection featuring world-class chefs making their Vegas debut including
            David Myers, Scott Conant, and José Andrés.
          </p>
        </div>
      </div>
      <div className={style.bestApartaments_Container}>
        <div className={style.bestApartaments_Description}>
          <h2> Luxury Condo</h2>
          <p>
            Featuring top-of-the-line amenities, fine architectural design, and lush greenery,
            luxury condominiums offer a lifestyle of opulence and exclusivity. While there are many
            private condos in Singapore, only a handful offer high-end services and amenities that
            make them the perfect luxury homes.
          </p>
        </div>
        <div className={style.bestApartaments_ImageContainer}>
          <div className={style.bestApartaments_Image}>
            <img
              alt='hotel-room'
              src={
                'https://uploads-ssl.webflow.com/61e69f744cbbcbe6373dfad2/6209d8045361da008c63edd6_12-best-luxury-condos.jpeg'
              }
            />
          </div>
          <div className={style.bestApartaments_Details}>
            <span>Best luxury appartment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

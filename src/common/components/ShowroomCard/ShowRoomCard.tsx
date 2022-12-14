import { Bed } from 'common/assets/icons/Bed'
import { Wifi } from 'common/assets/icons/Wifi'
import style from './ShowroomCard.module.scss'
interface Props {
  date: Array<any>
}
export const CardShowroom: React.FC<Props> = ({ ...props }) => {
  return (
    <div className=''>
      <div className={style.cardShowroom_Container}>
        {props.date.map((item, index) => {
          return (
            <div key={index} className={style.cardShowroom_Card}>
              <div className={style.cardShowroom_Image}>
                <img alt='room' src={item.image} />
              </div>
              <div className={style.cardShowroom_Status}>
                <span>AVAILABLE NOW</span>
              </div>
              <div className={style.cardShowroom_Fascility}>
                <span>PREMIUM</span>
              </div>
              <div className={style.cardShowroom_Content}>
                <p className={style.cardShowroom_Price}>
                  $ {item.price} <span> per night</span>
                </p>
                <h3 className={style.cardShowroom_Title}>{item.title}</h3>
                <div className={style.cardShowroom_IconMainContainer}>
                  <div className={style.cardShowroom_IconContainer}>
                    <span className={style.cardShowroom_Icon}>
                      <Bed />
                    </span>
                    <span className={style.cardShowroom_IconTitle}>2 bd.</span>
                  </div>
                  <div className={style.cardShowroom_IconContainer}>
                    <span className={style.cardShowroom_Icon}>
                      <Wifi />
                    </span>
                    <span className={style.cardShowroom_IconTitle}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

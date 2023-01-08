import { Link, useNavigate } from 'react-router-dom'
import style from './layout-header.module.scss'
import { PAGES_PATHS } from 'common/constants/constant'
import { Logo } from 'common/assets/icons/Logo'

export const LayoutNavigation = () => {
  const navigate = useNavigate()
  return (
    <nav className={style.navbar}>
      <div>
        <Logo />
      </div>
      <ul className={style.navbar_List}>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.HOME}>
            Home
          </Link>
        </li>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.SINGLE_ROOM}>
            Hotel Rooms
          </Link>
        </li>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.RESERVATION}>
            Reservations
          </Link>
        </li>
        <li className={style.navbar_ItemButton}>
          <button onClick={() => navigate(PAGES_PATHS.LOGIN)} className={style.navbar_Button}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  )
}

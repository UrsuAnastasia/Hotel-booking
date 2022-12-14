import { Link } from 'react-router-dom'
import style from './layout-header.module.scss'
import { PAGES_PATHS } from 'common/constants/constant'
import { Logo } from 'common/assets/icons/Logo'

export const LayoutNavigation = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <Logo />
      </div>
      <ul className={style.navbar_List}>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.DASHBOARD}>
            Home
          </Link>
        </li>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.ACTIVITIES}>
            Hotel Rooms
          </Link>
        </li>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.TODO_LIST}>
            Reservations
          </Link>
        </li>
        <li className={style.navbar_ItemButton}>
          <button className={style.navbar_Button}>Login</button>
        </li>
      </ul>
    </nav>
  )
}

import { Link, useNavigate } from 'react-router-dom'
import style from './layout-header.module.scss'
import { PAGES_PATHS } from 'common/constants/constant'
import { Logo } from 'common/assets/icons/Logo'

export const LayoutNavigation = () => {
  const navigate = useNavigate()
  const accountType = localStorage.getItem('accountType')
  const email = localStorage.getItem('email')
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_Logo}>
        <Logo />
      </div>
      <ul className={style.navbar_List}>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.HOME}>
            Home
          </Link>
        </li>
        <li className={style.navbar_Item}>
          <Link className={style.navbar_Link} to={PAGES_PATHS.HOTEL_ROOMS}>
            Hotel Rooms
          </Link>
        </li>
        {accountType === 'ADMIN' && (
          <>
            <li className={style.navbar_Item}>
              <Link className={style.navbar_Link} to={PAGES_PATHS.RESERVATION}>
                Facility
              </Link>
            </li>
            <li className={style.navbar_Item}>
              <Link className={style.navbar_Link} to={PAGES_PATHS.ALL_USERS}>
                Users
              </Link>
            </li>
          </>
        )}
        {accountType === 'USER' && (
          <>
            <li className={style.navbar_Item}>
              <Link className={style.navbar_Link} to={PAGES_PATHS.USER_RESERVATION}>
                My reservation
              </Link>
            </li>
          </>
        )}
        <li className={style.navbar_ItemButton}>
          {accountType === 'ADMIN' || accountType === 'USER' ? (
            <>
              <div style={{ marginRight: '10px' }} className={style.navbar_Link}>
                {email}
              </div>
              <button
                onClick={() => {
                  window.localStorage.removeItem('accountType')
                  window.localStorage.removeItem('email')
                  window.localStorage.removeItem('userId')
                  navigate(PAGES_PATHS.LOGIN)
                }}
                className={style.navbar_Button}>
                Log out
              </button>
            </>
          ) : (
            <button onClick={() => navigate(PAGES_PATHS.LOGIN)} className={style.navbar_Button}>
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}

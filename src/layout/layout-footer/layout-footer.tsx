import { LayoutContaier } from 'layout/layout-container/layout-container'
import style from './layout-footer.module.scss'
export const LayoutFooter = () => {
  return (
    <footer className={style.footer}>
      <LayoutContaier>
        <span>Copyright © 1996–2023 Booking.com™. All rights reserved.</span>
      </LayoutContaier>
    </footer>
  )
}

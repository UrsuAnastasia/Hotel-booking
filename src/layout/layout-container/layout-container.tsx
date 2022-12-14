/* eslint-disable prettier/prettier */
import styles from './layout-container.module.scss'
export const LayoutContaier = ({ ...props }: any) => {
  return <div className={styles.container}>{props.children}</div>
}

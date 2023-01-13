import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import { LayoutNavigation } from 'layout/layout-navbar/layout-navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './main-content.module.scss'
export const MainContent = () => {
  return (
    <React.Fragment>
      <LayoutNavigation />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <LayoutFooter />
    </React.Fragment>
  )
}

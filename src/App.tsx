import { PageRouter } from 'pages/page-router'
import { LayoutNavigation } from './layout/layout-header/layout-navigation'

import './index.scss'
function App() {
  return (
    <main>
      <LayoutNavigation />
      <PageRouter />
    </main>
  )
}

export default App

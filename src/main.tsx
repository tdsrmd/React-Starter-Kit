import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import '@/assets/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

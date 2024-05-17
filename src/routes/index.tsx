import { Routes as Router, Route } from 'react-router-dom'

import { AuthRoutesPath, DashboardRoutesPath } from './path'

import DashboardRoutes from './dashboard-routes'
import AuthRoutes from './auth-routes'

export default function Routes() {
  return (
    <Router>
      <Route path={AuthRoutesPath} element={<AuthRoutes />} />
      <Route path={DashboardRoutesPath} element={<DashboardRoutes />} />
    </Router>
  )
}

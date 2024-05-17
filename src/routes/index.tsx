import { Routes as Router, Route } from 'react-router-dom'

import DashboardRoutes from './dashboard-routes'
import AuthRoutes from './auth-routes'

export default function Routes() {
  return (
    <Router>
      <Route path="/*" element={<DashboardRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Router>
  )
}

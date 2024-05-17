import { Route, Routes } from 'react-router-dom'

import DashboardLayout from '@/pages/(user)/layout'
import HomePage from '@/pages/(user)/home'
import { DashboardLayoutPathPath } from './path'

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path={DashboardLayoutPathPath} element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'

import DashboardLayout from '@/pages/(user)/layout'
import HomePage from '@/pages/(user)/home'

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

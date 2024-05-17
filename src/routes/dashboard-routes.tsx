import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import DashboardLayout from '@/pages/(user)/layout'
import { DashboardLayoutPathPath } from './path'

const HomePage = lazy(() => import('@/pages/(user)/home'))

export default function DashboardRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={DashboardLayoutPathPath} element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

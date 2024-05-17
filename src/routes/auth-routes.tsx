import { Routes, Route } from 'react-router-dom'

import AuthLayout from '@/pages/(auth)/layout'
import SignInPage from '@/pages/(auth)/sign-in'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/sign-in" element={<AuthLayout />}>
        <Route index element={<SignInPage />} />
      </Route>
    </Routes>
  )
}

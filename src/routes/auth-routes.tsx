import { Routes, Route } from 'react-router-dom'

import { AuthLayoutPathPath, SignInPathPath } from './path'

import AuthLayout from '@/pages/(auth)/layout'
import SignInPage from '@/pages/(auth)/sign-in'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path={AuthLayoutPathPath} element={<AuthLayout />}>
        <Route index element={<SignInPage />} />
        <Route path={SignInPathPath} element={<SignInPage />} />
      </Route>
    </Routes>
  )
}

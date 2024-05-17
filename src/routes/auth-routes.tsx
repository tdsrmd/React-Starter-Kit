import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthLayoutPathPath, SignInPathPath } from './path'

import AuthLayout from '@/pages/(auth)/layout'

const SignIn = lazy(() => import('@/pages/(auth)/sign-in'))

export default function AuthRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={AuthLayoutPathPath} element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path={SignInPathPath} element={<SignIn />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

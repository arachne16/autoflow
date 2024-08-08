import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from '@/lib/auth-util'

import { Faq } from '@/pages/Faq'
import { Home } from '@/pages/Home'
import { ContactUs } from '@/pages/ContactUs'
import { TermsAndConditions } from '@/pages/TermsAndConditions'

import UserLayout from '@/layouts/UserLayout'

import DashboardPage from '@/pages/user/DashboardPage'
import FleetPage from '@/pages/user/FleetPage'

export const HomepageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route
        exact
        path="/terms-and-conditions"
        element={<TermsAndConditions />}
      />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export const UserRoutes = () => {
  return (
    <AuthProvider>
      <UserLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/bookings" element={<DashboardPage />} />
          <Route path="/analytics" element={<DashboardPage />} />
          <Route path="/support" element={<DashboardPage />} />
          <Route path="/settings" element={<DashboardPage />} />
        </Routes>
      </UserLayout>
    </AuthProvider>
  )
}

import { Routes, Route } from 'react-router-dom'

import { Faq } from '@/pages/Faq'
import { Home } from '@/pages/Home'
import { ContactUs } from '@/pages/ContactUs'
import { TermsAndConditions } from '@/pages/TermsAndConditions'
import LoginPage from '@/pages/LoginPage'

// import Navbar from '@/components/Navbar'

export const HomepageRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
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

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

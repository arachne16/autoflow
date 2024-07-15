import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Faq } from "@/pages/Faq";
import { ContactUs } from "@/pages/ContactUs";
import { TermsAndConditions } from "@/pages/TermsAndConditions";


export const HomepageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};


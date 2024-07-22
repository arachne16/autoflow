import { Routes, Route } from "react-router-dom";
import { SignUp } from "@/pages/SignUp";
import { ContinueSignUpPage } from "@/pages/ContinueSignUpPage";
import { Payment } from "@/pages/Payment";
import { Activation } from "@/pages/Activation";


export const SignUpRoutes = () => {


  return (
    <Routes>
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/pricing" element={<ContinueSignUpPage />} />
      <Route exact path="/payment" element={<Payment />} />
      <Route exact path="/activation" element={<Activation />} />
      <Route path="/*" element={<SignUp />} />
    </Routes>
  );
};


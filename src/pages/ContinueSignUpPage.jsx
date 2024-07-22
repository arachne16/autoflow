// export const Pricing = () => {
//   return (
//     <div>
//       Pricing
//     </div>
//   )
// };
// import React from 'react';
import { Pricing } from '@/components/Pricing'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';

export const ContinueSignUpPage = () => {
  return (
    <div className="continue-sign-up-page">
      <h2 className="text-center my-8">Select Your Plan</h2>
      <Pricing />
      <div className="flex justify-center mt-8">
        <Link to="/signup-details" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Continue to Sign Up
        </Link>
      </div>
    </div>
  );
};

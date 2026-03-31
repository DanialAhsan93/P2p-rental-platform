// import React, { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { FcGoogle } from "react-icons/fc";
// import { AiOutlineApple } from "react-icons/ai";
// import { england } from "../index.js";
// import { countryData } from "../countrydata.js";
// import { Alert, Button, Label, Spinner } from 'flowbite-react';


// function Onboard({ isOpen, setIsOpen, handleOnboarding, handleOnboardingSubmit, onboarding, loading, errorMessage}) {
//     if (!isOpen) return null;
//     return (
//         <div>
//             {/* Login Button */}
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className="text-white bg-brand px-4 py-2 rounded"
//             >
//                 Login
//             </button>

//             {/* Modal */}
//             {isOpen && (
//                 <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full  bg-black/50">
//                     <div className="bg-white p-6 rounded shadow-lg max-w-md md:w-[100%] w-[90%] h-auto overflow-y-auto">

//                         {/* Header */}

//                         <div className="flex justify-between items-center pb-3">
//                             <button onClick={() => setIsOpen(false)} className="text-gray-500" disabled={true}>
//                                 <IoCloseSharp className="text-[22px]" />
//                             </button>
//                         </div>

//                         <div className="text-center">
//                             <h3 className="mb-4 text-xl font-medium text-gray-900">Where did you hear about us?</h3>

//                             <div className="mb-4 text-left">
//                                 <Label value="Where did you hear about us?" />
//                                 <select
//                                     id="referralSource"
//                                     onChange={handleOnboarding}
//                                     value={onboarding.referralSource}
//                                     className="w-full p-2 border rounded"
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="classifiedmarketplace">Classified marketplace</option>
//                                     <option value="tipfromafriend">Tip from a friend</option>
//                                     <option value="newspaper">Newspaper</option>
//                                     <option value="adsinpublictransport">Ads in public transport</option>
//                                     <option value="Other">Other</option>
//                                 </select>
//                             </div>
//                             <h3 className="mb-4 text-xl font-medium text-gray-900">What do you want to do?</h3>


//                             <div className="mb-4 text-left">
//                                 <Label value="What do you want to do?" />
//                                 <select
//                                     id="userRole"
//                                     onChange={handleOnboarding}
//                                     value={onboarding.userRole}
//                                     className="w-full p-2 border rounded"
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="lend">Lend my things</option>
//                                     <option value="borrow">Borrow from others</option>
//                                     <option value="both">Both rent and renting out</option>
//                                 </select>
//                             </div>

//                             <Button onClick={handleOnboardingSubmit} disabled={loading} className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 
//                                  hover:bg-gradient-to-bl font-medium text-sm px-4 py-2.5 
//                                 rounded-lg focus:outline-none focus:ring-0 cursor-pointer">
//                                 {loading ? <> <Spinner size='sm' /> <span className='pl-3 text-gray-900'>Saving...</span> </> : 'Continue'}
//                             </Button>

//                             {
//                                 errorMessage && (
//                                     <Alert className='mt-5' color={'failure'}>
//                                         {errorMessage}
//                                     </Alert>
//                                 )
//                             }
//                         </div>


//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Onboard;

import React from "react";
import { Button, Spinner, Alert, Label, TextInput } from 'flowbite-react';
import { IoCloseSharp } from "react-icons/io5";

function Onboard({ isOpen, setIsOpen, onboarding, handleOnboarding, seterrorMessage, setLoading, navigate }) {
  if (!isOpen) return null;

//   const handleSubmit = async () => {
//     const { referralSource, userRole, phone, otp } = onboarding;
//     console.log('onboard submit', typeof otp);
//     if (!referralSource || !userRole || !phone || !otp) {
//       return seterrorMessage('Please fill all fields and enter OTP.');
//     }

//     setLoading(true);
//     seterrorMessage(null);

//     try {
//       const res = await fetch('http://localhost:3000/api/auth/onboarding', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ referralSource, userRole, phone, otp }),
//         credentials: 'include'
//       });

//       const data = await res.json();
//       console.log('onboard',data);
//       setLoading(false);

//       if (!res.ok) return seterrorMessage(data.message || 'Failed to save onboarding info');

//       // ✅ Close modal and navigate to dashboard or signin
//       setIsOpen(false);
//       navigate('/signin');

//     } catch (err) {
//       setLoading(false);
//       seterrorMessage(err.message);
//     }
//   };
const handleSubmit = async () => {
  const { referralSource, userRole, phone, otp } = onboarding;

  // safer validation
  if (![referralSource, userRole, phone, otp].every(f => f?.toString().trim() !== '')) {
    return seterrorMessage('Please fill all fields and enter OTP.');
  }

  setLoading(true);
  seterrorMessage(null);

  try {
    const res = await fetch('http://localhost:3000/api/auth/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referralSource, userRole, phone, otp }),
      credentials: 'include', // cookies for auth
    });

    const data = await res.json();
    console.log('onboard', data);

    setLoading(false);

    if (!res.ok) {
      return seterrorMessage(data.message || 'Failed to save onboarding info');
    }

    // ✅ Success: close modal & navigate
    setIsOpen(false);
    navigate('/signin');

  } catch (err) {
    setLoading(false);
    seterrorMessage(err.message);
  }
};
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-[90%]">
        <div className="flex justify-between items-center pb-3">
          <button onClick={() => setIsOpen(false)} disabled={!onboarding.otp}>
            <IoCloseSharp className="text-[22px]" />
          </button>
        </div>

        <div className="text-center">
          <div className="mb-4 text-left">
            <Label value="Where did you hear about us?" />
            <select
              id="referralSource"
              value={onboarding.referralSource}
              onChange={handleOnboarding}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="classifiedmarketplace">Classified marketplace</option>
              <option value="tipfromafriend">Tip from a friend</option>
              <option value="newspaper">Newspaper</option>
              <option value="adsinpublictransport">Ads in public transport</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4 text-left">
            <Label value="What do you want to do?" />
            <select
              id="userRole"
              value={onboarding.userRole}
              onChange={handleOnboarding}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="lend">Lend my things</option>
              <option value="borrow">Borrow from others</option>
              <option value="both">Both rent and renting out</option>
            </select>
          </div>

          <div className="mb-4 text-left">
            <Label value="Enter OTP" />
            <TextInput
              id="otp"
              placeholder="Enter OTP"
              value={onboarding.otp}
              onChange={handleOnboarding}
            />
          </div>

          <Button onClick={handleSubmit} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-sm px-4 py-2.5 
                                rounded-lg focus:outline-none focus:ring-0 cursor-pointer w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Onboard;
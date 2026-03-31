// import React, { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { Alert, Button, Label, Spinner } from 'flowbite-react';
// import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import countryList from "react-phone-number-input/locale/en.json";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import { useEffect } from "react";


// function Phonemodal({ isOpen, setIsOpen, handleOnboarding, handleOnboardingSubmit, onboarding, loading, errorMessage}) {
//     if (!isOpen) return null;
//     const [phone, setPhone] = useState("");
//     const [country, setCountry] = useState("PK");

//     // Prepare options for Autocomplete
//     const options = Object.entries(countryList).map(([code, name]) => ({
//         code,
//         label: name,
//     }));

//     useEffect(() => {
//         const code = getCountryCallingCode(country);
//         setPhone(`+${code}`);
//     }, [country]);
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
//                              <Autocomplete
//                                             options={options}
//                                             value={options.find((opt) => opt.code === country)}
//                                             onChange={(event, newValue) => {
//                                                 if (newValue) setCountry(newValue.code);
//                                             }}
//                                             getOptionLabel={(option) => option.label}
//                                             renderInput={(params) => <TextField {...params} label="Select country" />}
//                                             isOptionEqualToValue={(option, value) => option.code === value.code}
//                                             disableClearable
//                                         />

//                                         <PhoneInput
//                                             key={country}
//                                             defaultCountry={country}
//                                             value={phone}
//                                             onChange={setPhone}
//                                             international
//                                         />


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

// export default Phonemodal;

import React, { useState, useEffect } from "react";
import { Button, Spinner, Alert } from 'flowbite-react';
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import countryList from "react-phone-number-input/locale/en.json";
import { IoCloseSharp } from "react-icons/io5";

function PhoneModal({ isOpen, setIsOpen, onboarding, setOnboarding, setShowOnboardModal, setErrorMessage }) {
    if (!isOpen) return null;

    const [phone, setPhone] = useState(onboarding.phone || '');
    const [country, setCountry] = useState("PK");
    const [loading, setLoading] = useState(false);

    const options = Object.entries(countryList).map(([code, name]) => ({ code, label: name }));

    useEffect(() => {
        const code = getCountryCallingCode(country);
        setPhone(`+${code}`);
    }, [country]);

    const handleSendOtp = async () => {
        if (!phone) return setErrorMessage('Please enter phone number.');

        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone }),
                credentials: 'include'
            });

            const data = await res.json();
            console.log('phone', data);

            setLoading(false);

            if (!res.ok) return setErrorMessage(data.message || 'Failed to send OTP');

            // ✅ Save phone in parent state and open Onboard modal
            setOnboarding({ ...onboarding, phone });
            setIsOpen(false);
            setShowOnboardModal(true);

        } catch (err) {
            setLoading(false);
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-[90%]">
                <div className="flex justify-between items-center pb-3">
                    <button onClick={() => setIsOpen(false)} disabled={!country || !onboarding.otp}>
                        <IoCloseSharp className="text-[22px]" />
                    </button>
                </div>

                <div className="text-center">
                    <Autocomplete
                        options={options}
                        value={options.find((opt) => opt.code === country)}
                        onChange={(e, newVal) => newVal && setCountry(newVal.code)}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => <TextField {...params} label="Select country" />}
                        isOptionEqualToValue={(option, value) => option.code === value.code}
                        disableClearable
                    />

                    <PhoneInput
                        key={country}
                        defaultCountry={country}
                        value={phone}
                        onChange={setPhone}
                        international
                    />

                    <Button onClick={handleSendOtp} disabled={loading} className="mt-4 w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-sm px-4 py-2.5 
                                rounded-lg focus:outline-none focus:ring-0 cursor-pointer">
                        {loading ? <Spinner size="sm" /> : 'Send OTP'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PhoneModal;
// import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import { getCountryCallingCode } from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// function Countryselector() {
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("PK");

//   console.log(PhoneInput)

//   return (
//     <>
//       <div>
//         code: +{getCountryCallingCode(country)}
//       </div>

//       <PhoneInput
//         defaultCountry="PK"
//         value={phone}
//         onChange={setPhone}
//         onCountryChange={setCountry}
//       />
//     </>
//   );
// }

// export default Countryselector;


import React, { useEffect, useState } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countryList from "react-phone-number-input/locale/en.json";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function CountrySelector() {
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("PK");

    // Prepare options for Autocomplete
    const options = Object.entries(countryList).map(([code, name]) => ({
        code,
        label: name,
    }));

    useEffect(() => {
        const code = getCountryCallingCode(country);
        setPhone(`+${code}`);
    }, [country]);

    return (
        <div style={{ maxWidth: 300 }}>
            {/* <div>
        Code: +{getCountryCallingCode(country)}
      </div> */}

            <Autocomplete
                options={options}
                value={options.find((opt) => opt.code === country)}
                onChange={(event, newValue) => {
                    if (newValue) setCountry(newValue.code);
                }}
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
        </div>
    );
}

export default CountrySelector;
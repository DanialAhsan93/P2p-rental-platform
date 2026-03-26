import React, { useState } from "react";
import CountrySelector from "./Countryselector";

function Profile({ goBack }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Validate all fields
  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.phone.trim() &&
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword &&
    form.image;

  return (
    <div className="space-y-4">

      {/* Avatar Upload */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border mb-2">
          {preview ? (
            <img
              src={preview}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {/* First Name */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      {/* Last Name */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      {/* Phone with static +92 code */}
      <div className="flex">
        {/* <span className="flex items-center px-3 bg-gray-200 border rounded-l">
          +92
        </span>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-r"
        /> */}
        <CountrySelector />
      </div>

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      {/* Confirm Password */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      {/* Continue Button */}
      <button
        disabled={!isValid}
        className={`w-full py-3 rounded text-white ${
          isValid ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Continue
      </button>

      {/* Back Button */}
      <button onClick={goBack} className="text-blue-500">
        ← Back
      </button>
    </div>
  );
}

export default Profile;
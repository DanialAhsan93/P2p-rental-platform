import React, { useState } from 'react';

function Email({ goBack, setView }) {
    const [email, setEmail] = useState('');

    const isValidEmail = email.trim() !== ''

    return (
        <div className=''>
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full border p-3 rounded mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button disabled={!isValidEmail}
                className={`w-full py-3 rounded text-white ${isValidEmail ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                onClick={() => setView("profile")}
            >
                Continue
            </button>
            <div>
                Donot have an account?
                <button
                    onClick={() => setView("signup")}
                    className="text-blue-500 hover:underline"
                >
                    Sign up
                </button>
            </div>

            <button
                onClick={goBack}
                className="mt-3 text-blue-500"
            >
                ← Back
            </button>
        </div>
    )
}

export default Email;
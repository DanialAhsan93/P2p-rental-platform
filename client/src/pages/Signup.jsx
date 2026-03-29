import { Alert, Button, Label, Spinner, TextInput, Modal, ModalBody, ModalHeader } from 'flowbite-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Onboard from '../components/Onboard';
// import OAuth from '../components/OAuth';

function Signup() {

    const [form, formData] = useState({});
    const [errorMessage, seterrorMessage] = useState(null);
    const [loading, setloading] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [onboarding, setOnboarding] = useState({
        referralSource: '',
        userRole: ''
    })
    const navigate = useNavigate()

    const handleInput = (e) => {
        formData({ ...form, [e.target.id]: e.target.value.trim() });
    };

    const handleOnboarding = (e) => {
        setOnboarding({ ...onboarding, [e.target.id]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username || !form.email || !form.password) {
            return seterrorMessage('Please fill out all the fields.')
        }

        try {
            setloading(true);
            seterrorMessage(null);
            const response = await fetch(`http://localhost:3000/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
                credentials: 'include'
            })

            const data = await response.json();
            if (data.success === false) {
                // setloading(false)
                return seterrorMessage(data.message)
            }
            setloading(false)

            console.log(data)
            // if (data === "signup successful" ) {
            //   alert(data)
            // }else{
            //   alert(data.message)
            // }
            setShowModal(true);
            // if (response.ok) {
            //     navigate('/signin')
            // }

        } catch (error) {
            seterrorMessage(error.message)
            setloading(false)
        }
    }

    const handleOnboardingSubmit = async () => {
        if (!onboarding.referralSource || !onboarding.userRole) {
            return seterrorMessage('Please select both options.')
        }


        try {
            setloading(true)
            seterrorMessage(null)

            const response = await fetch(`http://localhost:3000/api/auth/onboarding`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(onboarding),
                credentials: 'include' // important
            })

            const data = await response.json()
            setloading(false)

            if (!response.ok) {
                return seterrorMessage(data.message || 'Failed to save onboarding info')
            }

            // ✅ Close the modal and navigate to dashboard
            setShowModal(false)
            navigate('/signin')

        } catch (error) {
            seterrorMessage(error.message)
            setloading(false)
        }
    }
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl flex-col md:flex-row md:items-center mx-auto gap-5'>
                {/* left */}
                <div className=' flex-1'>
                    <Link to={'/'} className='text-4xl font-bold 
             dark:text-white'>
                        <span className='px-2 bg-gradient-to-r from-indigo-500
             first-letter: via-purple-500 to-cyan-500 rounded-lg text-white'>
                            Rental's
                        </span>
                        <span className='text-gray-900'>Platform</span>
                    </Link>

                    <p className='text-sm mt-5'>
                        You can signup with your email and password or with google.
                    </p>
                </div>
                {/* right */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className=''>
                            <Label value="Your username" />

                            <TextInput
                                type='text'
                                placeholder='Username'
                                id='username'
                                onChange={handleInput}
                                style={{
                                    background: "white",
                                    color: "black"
                                }}

                            />
                        </div>
                        <div className=''>
                            <Label value="Your email" />

                            <TextInput
                                type='email'
                                placeholder='name@company.com'
                                id='email'
                                onChange={handleInput}
                                style={{
                                    background: "white",
                                    color: "black"
                                }}
                            />
                        </div>
                        <div className=''>
                            <Label value="Your password" />

                            <TextInput
                                type='password'
                                placeholder='Password'
                                id='password'
                                onChange={handleInput}
                                style={{
                                    background: "white",
                                    color: "black"
                                }}
                            />
                        </div>

                        <Button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                 hover:bg-gradient-to-bl font-medium text-sm px-4 py-2.5 
                                rounded-lg focus:outline-none focus:ring-0 cursor-pointer'
                            type='submit' disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size={'sm'} />
                                        <span className='pl-3'>loading...</span>
                                    </>
                                ) : 'Sign Up'
                            }

                        </Button>
                        {/* <OAuth /> */}
                    </form>

                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Have an account?</span>
                        <Link to={'/signin'} className='text-blue-500'>
                            Sign In
                        </Link>
                    </div>

                    {
                        errorMessage && (
                            <Alert className='mt-5' color={'failure'}>
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
                {/* <Modal show={showModal} size="md" popup={true} onClose={() => { }}>
                    
                </Modal> */}
            </div>
            <Onboard
                isOpen={showModal}
                setIsOpen={setShowModal}
                handleOnboarding={handleOnboarding}
                handleOnboardingSubmit={handleOnboardingSubmit}
                onboarding={onboarding}
                loading={loading}
                errorMessage={errorMessage}
            />
        </div>
    )
}

export default Signup
import React from 'react';
import { FaRegFlag } from "react-icons/fa6";
import Reusableprofile from '../components/Reusableprofile';
import { FaRegUser } from "react-icons/fa";
import { FaRibbon } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { PiChatCircleTextBold } from "react-icons/pi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";
import { RiUserUnfollowLine } from "react-icons/ri";
import { useState } from "react";
import Flagmodal from "../components/Flagmodal";


function Profile() {
  const [isFlagmodalOpen, setIsFlagmodalOpen] = useState(false);
  return (
    <>
      <div className='max-w-[2200px] w-[93%] flex justify-center mx-auto min-h-screen lg:p-4'>
        <div className='md:w-[70%] w-[100%] '>
          <h1 className='text-[30px] lg:text-[40px] font-bold md:py-4 py-2'>
            My Profile
          </h1>
          {/* <div onClick={() => setIsFlagmodalOpen(true)}> */}
          <Reusableprofile
            onClick={() => setIsFlagmodalOpen(true)}
            icon={<FaRegFlag className="text-2xl font-extrabold" />}
            text="Current country: GB"

          />
          {/* </div> */}

          <Reusableprofile
            icon={<FaRegUser className="text-2xl font-extrabold" />}
            text="Edit profile"
            subtext="Edit your contact details"
          />
          <Reusableprofile
            icon={<FaRibbon className="text-2xl font-extrabold" />}
            text="My favorities"
          />

          <Reusableprofile
            icon={<MdOutlinePayments className="text-2xl font-extrabold" />}
            text="Credit balance"
          />

          <Reusableprofile
            icon={<MdLockOutline className="text-2xl font-extrabold" />}
            text="Sign out"
          />


          <h1 className='text-[23px] lg:text-[24px] font-medium md:py-4 py-2'>
            Help
          </h1>
          <Reusableprofile
            icon={<PiChatCircleTextBold className="text-2xl font-extrabold" />}
            text="Start chat"
            subtext={'Contact Rent-platform'}
          />
          <Reusableprofile
            icon={<MdOutlineQuestionAnswer className="text-2xl font-extrabold" />}
            text="Frequently asked questions"
            subtext={'Here you will find information about most things about Hygglo and our services.'}
          />

          <Reusableprofile
            icon={<PiReadCvLogoBold className="text-2xl font-extrabold" />}
            text="Terms and conditions"
            subtext={'Read our terms and conditions.'}
          />
          <Reusableprofile
            icon={<RiUserUnfollowLine className="text-2xl font-extrabold" />}
            text="Delete account"
          />

        </div>


      </div>
      <Flagmodal isOpen={isFlagmodalOpen} setIsOpen={setIsFlagmodalOpen} />
    </>
  )
}

export default Profile
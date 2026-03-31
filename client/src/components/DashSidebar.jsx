
// import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react'
// import React, { useEffect, useState } from 'react';
// import { HiAnnotation, HiArrowSmRight, HiChartPie, HiDocumentText, HiOutlineUserGroup, HiUser } from 'react-icons/hi'
// import { Link, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// // import { signoutSuccess } from '../redux/user/userSlice';

// function DashSidebar() {

//     const location = useLocation();
//     const [tab, setTab] = useState('');
//     const dispatch = useDispatch();
//     const { currentUser } = useSelector((state) => state.user);

//     //   useEffect(() => {
//     //     const urlParams = new URLSearchParams(location.search);
//     //     const tabFromUrl = urlParams.get('tab');
//     //     if (tabFromUrl) {
//     //       setTab(tabFromUrl)
//     //     }
//     //   }, [location.search]);

//     //   const handleUserSignout = async () => {
//     //     try {
//     //       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/signout`, {
//     //         method: 'POST'
//     //       });
//     //       const data = await res.json();
//     //       console.log(data);

//     //       if (!res.ok) {
//     //         console.log(data.message);
//     //       } else {
//     //         dispatch(signoutSuccess());
//     //       }
//     //     } catch (error) {
//     //       console.log(error)
//     //     }
//     //   }

//     return (
//         <Sidebar className='w-full md:w-56'>
//             <SidebarItems >
//                 <SidebarItemGroup className='flex flex-col gap-1'>

//                     {
//                         currentUser && currentUser.isAdmin && (
//                             <Link to={'/dashboard?tab=dash'}>
//                                     <SidebarItem active={tab === 'dash' || !tab} icon={HiChartPie} label={'admin'} labelColor='dark' as={'div'}>
//                                         Dashboard
//                                     </SidebarItem>
//                                 </Link>
//                             )
//                         }

//                         <Link to={'/dashboard?tab=profile'}>
//                             <SidebarItem active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'admin' : 'user'} labelColor='dark' as={'div'}>
//                                 Profile
//                             </SidebarItem>
//                         </Link>
//                         {
//                             currentUser.isAdmin && (

//                                 <Link to={'/dashboard?tab=posts'}>
//                                     <SidebarItem active={tab === 'posts'} icon={HiDocumentText} label={'admin'} labelColor='dark' as={'div'}>
//                                         Posts
//                                     </SidebarItem>
//                                 </Link>
//                             )
//                         }
//                         {
//                             currentUser.isAdmin && (

//                                 <Link to={'/dashboard?tab=users'}>
//                                     <SidebarItem active={tab === 'users'} icon={HiOutlineUserGroup} label={'admin'} labelColor='dark' as={'div'}>
//                                         Users
//                                     </SidebarItem>
//                                 </Link>
//                             )
//                         }
//                         {
//                             currentUser.isAdmin && (

//                                 <Link to={'/dashboard?tab=comments'}>
//                                     <SidebarItem active={tab === 'comments'} icon={HiAnnotation} label={'admin'} labelColor='dark' as={'div'}>
//                                         Comments
//                                     </SidebarItem>
//                                 </Link>

//                             )
//                         }
//                         <SidebarItem icon={HiArrowSmRight} className="cursor-pointer" onClick={'handleUserSignout'}>
//                             Sign Out
//                         </SidebarItem>
//                     </SidebarItemGroup>
//                 </SidebarItems>
          

//         </Sidebar>
//     )
// }

// export default DashSidebar

import React, { useEffect, useState } from "react";
import {
  HiChartPie,
  HiUser,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiArrowSmRight,
} from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function DashSidebar() {
     const location = useLocation();
    const [tab, setTab] = useState('');
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

      useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl)
        }
      }, [location.search]);

      //   const handleUserSignout = async () => {
//     //     try {
//     //       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/signout`, {
//     //         method: 'POST'
//     //       });
//     //       const data = await res.json();
//     //       console.log(data);

//     //       if (!res.ok) {
//     //         console.log(data.message);
//     //       } else {
//     //         dispatch(signoutSuccess());
//     //       }
//     //     } catch (error) {
//     //       console.log(error)
//     //     }
//     //   }

  return (
    <div className="w-full md:w-56 bg-gray-100 min-h-screen p-3">

      <div className="flex flex-col gap-1">

        {/* Dashboard */}
        {currentUser && currentUser.isAdmin && (
          <Link to="/admin?tab=dash">
            <div
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${tab === "dash" || !tab ? "bg-gray-200" : "hover:bg-gray-200"}`}
            >
              <HiChartPie className="text-gray-800 text-lg" />
              <span className="text-gray-800 text-sm font-medium">Dashboard</span>
              <span className="ml-auto text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                admin
              </span>
            </div>
          </Link>
        )}

        {/* Profile */}
        <Link to="/admin?tab=profile">
          <div
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
            ${tab === "profile" ? "bg-gray-200" : "hover:bg-gray-200"}`}
          >
            <HiUser className="text-gray-800 text-lg" />
            <span className="text-gray-800 text-sm font-medium">Profile</span>
            <span className="ml-auto text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
              {currentUser?.isAdmin ? "admin" : "user"}
            </span>
          </div>
        </Link>

        {/* Posts */}
        {currentUser?.isAdmin && (
          <Link to="/admin?tab=posts">
            <div
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${tab === "posts" ? "bg-gray-200" : "hover:bg-gray-200"}`}
            >
              <HiDocumentText className="text-gray-800 text-lg" />
              <span className="text-gray-800 text-sm font-medium">Posts</span>
              <span className="ml-auto text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                admin
              </span>
            </div>
          </Link>
        )}

        {/* Users */}
        {currentUser?.isAdmin && (
          <Link to="/admin?tab=users">
            <div
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${tab === "users" ? "bg-gray-200" : "hover:bg-gray-200"}`}
            >
              <HiOutlineUserGroup className="text-gray-800 text-lg" />
              <span className="text-gray-800 text-sm font-medium">Users</span>
              <span className="ml-auto text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                admin
              </span>
            </div>
          </Link>
        )}

        {/* Comments */}
        {currentUser?.isAdmin && (
          <Link to="/admin?tab=comments">
            <div
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${tab === "comments" ? "bg-gray-200" : "hover:bg-gray-200"}`}
            >
              <HiAnnotation className="text-gray-800 text-lg" />
              <span className="text-gray-800 text-sm font-medium">Comments</span>
              <span className="ml-auto text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                admin
              </span>
            </div>
          </Link>
        )}

        {currentUser?.isAdmin && (
          <Link to="/admin?tab=category">
            <div
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${tab === "comments" ? "bg-gray-200" : "hover:bg-gray-200"}`}
            >
              <HiAnnotation className="text-gray-800 text-lg" />
              <span className="text-gray-800 text-sm font-medium">Category</span>
              <span className="ml-auto text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                admin
              </span>
            </div>
          </Link>
        )}

        {/* Sign Out */}
        <div
          onClick={'handleUserSignout'}
          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-200"
        >
          <HiArrowSmRight className="text-gray-800 text-lg" />
          <span className="text-gray-800 text-sm font-medium">Sign Out</span>
        </div>

      </div>
    </div>
  );
}

export default DashSidebar;
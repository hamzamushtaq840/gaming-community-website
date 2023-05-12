import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Notifications() {
  return (
    <div>
      <div className='dark:text-white dark:bg-black px-[10.9375vw] pt-[64px] min-h-[calc(100vh-72px)]'>
        <div className='grid gap-[17px] grid-cols-5 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
          <NavLink to={'/notification/manageProfile'} className={({ isActive }) => isActive && location.pathname === "/profile" ? "bg-primary flex justify-center items-center text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] flex justify-center items-center rounded-[9px]"}>
            <button className='h-[48px] text-custom-16  rounded-[9px]'>Manage Profile</button>
          </NavLink>
          <NavLink to={'/notification/exportData'} className={({ isActive }) => isActive && location.pathname === "/profile" ? "bg-primary flex justify-center items-center text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] flex justify-center items-center rounded-[9px]"}>
            <button className='h-[48px] text-custom-16  rounded-[9px]'>Export Data</button>
          </NavLink>
          <NavLink to={'/notification/analytics'} className={({ isActive }) => isActive && location.pathname === "/profile/analytics" ? "bg-primary flex justify-center items-center text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] flex justify-center items-center rounded-[9px]"}>
            <button className='h-[48px] text-custom-16 rounded-[9px]'>Analytics</button>
          </NavLink>
          <NavLink to={'/notification/pages'} className={({ isActive }) => isActive && location.pathname === "/profile/pages" ? "bg-primary flex justify-center items-center text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] flex justify-center items-center rounded-[9px]"}>
            <button className='h-[48px] text-custom-16 rounded-[9px]'>Pages</button>
          </NavLink>
          <NavLink to={'/notification/share'} className={({ isActive }) => isActive && location.pathname === "/profile/share" ? "bg-primary flex justify-center items-center text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] flex justify-center items-center rounded-[9px]"}>
            <button className='h-[48px] text-custom-16 rounded-[9px]'>Share</button>
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

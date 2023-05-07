import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.989583333333334vw] min-h-[calc(100vh-72px)] pl-[10.9375vw]'>
      <div className='flex gap-[11px] pt-[71px] pb-[62px]'>
        <NavLink to={'/profile'} className={({ isActive }) => isActive && location.pathname === "/profile" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px]  rounded-[9px]'>View Profile</button>
        </NavLink>
        <NavLink to={'/profile/analytics'} className={({ isActive }) => isActive && location.pathname === "/profile/analytics" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px] rounded-[9px]'>Analytics</button>
        </NavLink>
        <NavLink to={'/profile/pages'} className={({ isActive }) => isActive && location.pathname === "/profile/pages" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px] rounded-[9px]'>Pages</button>
        </NavLink>
        <NavLink to={'/profile/share'} className={({ isActive }) => isActive && location.pathname === "/profile/share" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px] rounded-[9px]'>Share</button>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
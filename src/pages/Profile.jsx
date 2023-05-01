import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.989583333333334vw] pl-[10.9375vw]'>
      <div className='flex gap-[11px] pt-[71px] pb-[62px]'>
        <NavLink to={'/profile'} className={({ isActive }) => isActive && location.pathname === "/profile" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[200px] h-[48px]  rounded-[9px]'>View Profile</button>
        </NavLink>
        <NavLink to={'/profile/analytics'} className={({ isActive }) => isActive && location.pathname === "/profile/analytics" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[200px] h-[48px] rounded-[9px]'>Analytics</button>
        </NavLink>

        <button className='w-[200px] h-[48px] bg-[rgba(255,255,255,0.25)] text-custom-12 rounded-[9px]'>Pages</button>
        <button className='w-[200px] h-[48px] bg-[rgba(255,255,255,0.25)] rounded-[9px]'>Share</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function CompanyManageLayout() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)]'>
      <div className='flex gap-[11px] pt-[71px] pb-[62px]'>
        <NavLink to={'/company/manage'} className={({ isActive }) => isActive && location.pathname === "/company/manage" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px]  rounded-[9px]'>View Profile</button>
        </NavLink>
        <NavLink to={'/company/manage/analytics'} className={({ isActive }) => isActive && location.pathname === "/company/manage/analytics" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px] rounded-[9px]'>Analytics</button>
        </NavLink>
        <NavLink to={'/company/manage/pages'} className={({ isActive }) => isActive && location.pathname === "/company/manage/pages" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px] rounded-[9px]'>Pages</button>
        </NavLink>
        <NavLink to={'/company/manage/share'} className={({ isActive }) => isActive && location.pathname === "/company/manage/share" ? "bg-primary text-white rounded-[9px]" : "bg-[rgba(255,255,255,0.25)] rounded-[9px]"}>
          <button className='w-[10.417vw] h-[48px] rounded-[9px]'>Share</button>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Marketplace() {
  return (
    <div className='dark:text-white dark:bg-black pr-[8.281vw] pl-[8.281vw] min-h-[calc(100vh-72px)]'>
      <div className='flex justify-between pt-[71px] pb-[62px]'>
        <div className='flex'>
          <NavLink to={'/marketplace/gigs'} className={({ isActive }) => isActive && location.pathname === "/marketplace" ? "text-[#FF5359] border-[#FF5359] border-b-[3px]" : "border-b border-[rgba(255,255,255,0.5)]"}>
            <button className='w-[12.344vw] pb-[25px] h-[48px] font-[700] text-[16px] leading-[16px]'>Gigs</button>
          </NavLink>
          <NavLink to={'/marketplace/projects'} className={({ isActive }) => isActive && location.pathname === "/marketplace/analytics" ? "text-[#FF5359] border-[#FF5359] border-b-[3px]" : "border-b-[3px] border-[rgba(255,255,255,0.5)]"}>
            <button className='w-[12.344vw] pb-[25px] h-[48px] font-[700] text-[16px] leading-[16px]'>Projects</button>
          </NavLink>
          <NavLink to={'/marketplace/other-services'} className={({ isActive }) => isActive && location.pathname === "/marketplace/pages" ? "text-[#FF5359] border-[#FF5359] border-b-[3px]" : "border-b-[3px] border-[rgba(255,255,255,0.5)]"}>
            <button className='w-[12.344vw] pb-[25px] h-[48px] font-[700] text-[16px] leading-[16px]'>Other Services</button>
          </NavLink>
        </div>

        <div className='flex gap-[10px]'>
          <button className='w-[8.125vw] h-[48px] font-[700] text-[16px] leading-[18.4px] text-[rgba(255,255,255,0.75)] border border-[rgba(255,255,255,0.5)] rounded-[9px]'>Manage Orders</button>
          <button className='w-[8.125vw] h-[48px] font-[700] text-[16px] leading-[18.4px] rounded-[9px] bg-primary'>Start Selling</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
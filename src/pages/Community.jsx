import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Community() {
  return (
    <div>
      <div className='bg-white min-h-[814px] w-full flex flex-col items-center'>
        <div className='w-[18.75vw] min-h-[33px] min-w-[300px] h-[33px] mt-[52px] mb-[48px] flex border-[2px] border-[#EC1F26] rounded-[16.5px] overflow-hidden'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "bg-[#EC1F26] text-white flex-1 flex justify-center" : "text-[#EC1F26] bg-white flex-1 flex justify-center"}>
            <button className='font-[400] text-[14px] leading-[16.1px]'>Achieved Goals</button>
          </NavLink>
          <NavLink to={"/offer-opportunities"} className={({ isActive }) => isActive ? "bg-[#EC1F26] text-white flex-1 flex justify-center" : "text-[#EC1F26] bg-white flex-1 flex justify-center"}>
            <button className='font-[400] text-[14px] leading-[16.1px] flex-1'>Offer Opportunities</button>
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div>
        Goals
      </div>
    </div>
  )
}

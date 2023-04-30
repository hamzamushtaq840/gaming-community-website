import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.989583333333334vw] pl-[10.9375vw]'>
      
      <div className='flex gap-[11px] pt-[71px] pb-[62px]'>
        <button className='w-[200px] h-[48px] bg-[rgba(255,255,255,0.25)] rounded-[9px]'>View Profile</button>
        <button className='w-[200px] h-[48px] bg-[rgba(255,255,255,0.25)] rounded-[9px]'>Analytics</button>
        <button className='w-[200px] h-[48px] bg-[rgba(255,255,255,0.25)] rounded-[9px]'>Pages</button>
        <button className='w-[200px] h-[48px] bg-[rgba(255,255,255,0.25)] rounded-[9px]'>Share</button>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

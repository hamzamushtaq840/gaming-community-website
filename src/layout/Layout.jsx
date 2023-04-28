import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex'>
      <div className='w-[12.8125vw] min-h-[100vh] bg-primary'>
        Sidebar
      </div>
      <div className='flex-1 '>
        <div className='h-[72px] bg-[#292636] '>
          nav
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

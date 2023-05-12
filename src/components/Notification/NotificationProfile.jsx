import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NotificationProfile = () => {
  return (
    <div className='flex flex-col'>
      <p className=' flex items-center mb-[45px] bg-[#FF5359] px-[33px] xsm:px-[20px] sm:px-[20px] py-[15px] rounded-[9px] mt-[42px]'>
        Important! Your account is currently awaiting approval. You will receive an email confirmation once it has been approved.
      </p>
      <h1 className='text-custom-26 font-[700]'>Profile</h1>
      <div className='py-[42px] px-[41px] rounded-[9px] mt-[32px] xsm:py-[20px] xsm:px-[20px] sm:py-[20px] sm:px-[20px] bg-white dark:bg-[rgba(255,255,255,0.2)]'>
        <div className='flex gap-[32px] items-center xsm:gap-[20px]'>
          <div className='h-[139px] w-[139px] xsm:w-[100px] xsm:h-[100px] bg-[#ccc] rounded-[9px]'></div>
          <div className='flex flex-col gap-[17px]'>
            <h1 className='text-custom-22'>Company Name</h1>
            <p className='text-custom-18 opacity-50'>companyemail@address.com</p>
          </div>
        </div>
      </div>
      <div className='divide-y-[0.1px] mt-[42px] rounded-[9px] divide-[#cccccc53] bg-white dark:bg-[rgba(255,255,255,0.2)]'>
        <div className='flex h-[66px] justify-center gap-[13.333333333333334vw] '>
          <div className='h-full w-[13.854166666666666vw] flex items-center  min-w-[150px]'>
            <NavLink to={'/notification'} className={({ isActive }) => isActive && location.pathname !== '/notification/yourProjects' ? "transition-all duration-400 border-[#FF5359] border-b-[4px] text-[#FF5359] font-[700] mb-[-1px] w-full flex justify-center h-full" : "transition-all duration-100 w-full flex justify-center h-full rounded-[9px]"}>
              <button className='rounded-[9px]'>Your Jobs</button>
            </NavLink>
          </div>
          <div className='h-full w-[13.854166666666666vw] flex items-center  min-w-[150px]'>
            <NavLink to='/notification/yourProjects' className={({ isActive }) => isActive ? "transition-all duration-400 border-[#FF5359] border-b-[4px] text-[#FF5359] font-[700] mb-[-1px] w-full flex justify-center h-full" : "transition-all duration-100 w-full flex justify-center h-full rounded-[9px]"}>
              <button className='rounded-[9px]'>Your Projects</button>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default NotificationProfile
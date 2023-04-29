import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logoplaceholder from "../assets/logoplaceholder.svg"
import LayoutDashboard from "../assets/LayoutDashboard.png"
import NavbarFavorite from "../assets/NavbarFavorite.svg"
import NavbarMessage from "../assets/NavbarMessage.svg"
import NavbarNotification from "../assets/NavbarNotification.svg"
import NavbarProfile from "../assets/NavbarProfile.png"
import NavbarMegaphone from "../assets/NavbarMegaphone.svg"
import { CgHome } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import { ImStack } from 'react-icons/im'


export default function Layout() {
  return (
    <div className='flex'>
      <div className='w-[12.8125vw] min-h-[100vh] bg-primary xsm:hidden sm:hidden md:hidden'>
        Sidebar
      </div>

      <div className='flex-1 '>
        <div className='h-[72px]  bg-[#F5F5F5] dark:bg-[#292636]'>
          <div className='mx-[47px] m-auto h-full flex items-center rounded-[9px] justify-between'>
            <div className='relative'>
              <BsSearch className='w-[18.77px] h-[18px] absolute top-[50%] translate-y-[-50%] left-[18.77px] text-[#000000] dark:text-[#ffffff]' />
              <input className='w-[30.364583333333332vw] rounded-[9px] h-[38px] indent-[48.15px] font-[400] text-[14px] leading-[14px] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]' placeholder='Search' />
            </div>

            <div className='flex gap-[3.0729166666666665vw]'>
              <div className='flex gap-[1.9270833333333333vw]'>

                <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                  <CgHome className='text-[#000000] dark:text-[#ffffff] w-[23px] h-[22.94px]' />
                  <p className='text-[#000000] dark:text-[#ffffff]'>Home</p>
                </div>
                <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                  <ImStack className='text-[#000000] dark:text-[#ffffff] w-[23px] h-[23px]' />
                  <p className='text-[#000000] dark:text-[#ffffff]'>Projects</p>
                </div>
                <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                  <img src={NavbarFavorite} className='text-[#000000] dark:text-[#ffffff] w-[23px] h-[23px]'></img>
                  <p className='text-[#000000] dark:text-[#ffffff]'>Favorite</p>
                </div>
              </div>

              <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                <img src={NavbarMessage} className='text-[#000000] dark:text-[#ffffff] w-[24.64px] h-[23px]'></img>
              </div>
              <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                <img src={NavbarNotification} className='text-[#000000] dark:text-[#ffffff] w-[24.64px]] h-[23px]'></img>
              </div>
              <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                <img src={NavbarProfile} className='text-[#000000] dark:text-[#ffffff] min-w-[44px] h-[44px]'></img>
              </div>
              <div className='flex flex-col gap-[0.4166666666666667vw] items-center justify-center'>
                <img src={NavbarMegaphone} className='text-[#000000] dark:text-[#ffffff] w-[24px] h-[25.72px]'></img>
                <p className='text-[#000000] dark:text-[#ffffff]'>Favorite</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

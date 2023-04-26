import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import DownArrow from "../assets/downArrow.svg"
import SearchIcon from "../assets/search.svg"

export default function CommunityNav() {
  return (
    <>
      <div className='w-full h-[79px] bg-[#EC1F26]'>
        <div className='h-full w-[1234px] xsm:w-[98%] sm:w-[98%] md:w-[95%] lg:w-[85%] m-auto flex items-center sm:gap-[2.5vw] md:gap-[5vw] gap-[174px]'>
          <img className='xsm:w-[12.708333333333334vw] sm:w-[12.708333333333334vw] md:w-[12.708333333333334vw] md:min-w-[200px] min-w-[180px]' src={Logo} />
          <div className='xsm:hidden flex xsm:gap-[3.125vw] sm:gap-[3.125vw] md:gap-[3.125vw] lg:gap-[3.125vw] gap-[60px] items-center'>
            <ul className='flex xsm:gap-[1.5vw] sm:gap-[1.5vw] md:gap-[1.5vw] lg:gap-[1.5vw] gap-[44px] items-center'>
              <li className='font-[700] text-[12px] leading-[13.8px]'>HOME</li>
              <li className='font-[700] text-[12px] leading-[13.8px]'>PROJECTS</li>
              <li className='font-[700] text-[12px] leading-[13.8px]'>GIGS</li>
              <li className='font-[700] text-[12px] leading-[13.8px]'>GOALS MATCH</li>
              <li className="flex gap-[6px] font-[700] text-[12px] leading-[13.8px]">VIEW MORE <img src={DownArrow} /></li>
              <li className='font-[700] text-[12px] leading-[13.8px] ml-[2.4px]'><img src={SearchIcon}/></li>
            </ul>
            <div className='flex gap-[12px]'>
              <button className='font-[400] text-[12px] leading-[13.8px] xsm:w-[4.807291666666667vw] sm:w-[4.807291666666667vw] md:w-[4.807291666666667vw] lg:w-[4.807291666666667vw] w-[92.3px] min-w-[70px] h-[31.05px] rounded-[9px] border-[1px] border-white bg-[rgba(0,0,0,0.0)]'>Sign Up</button>
              <button className='font-[400] text-[12px] leading-[13.8px] xsm:w-[4.807291666666667vw] sm:w-[4.807291666666667vw] md:w-[4.807291666666667vw] lg:w-[4.807291666666667vw] w-[92.3px] min-w-[70px] h-[31.05px] rounded-[9px] border-[1px] border-white bg-white text-[#EC1F26]'>Log In</button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

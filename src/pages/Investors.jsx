import React from 'react'
import { HiPlus } from 'react-icons/hi'
import search from './../assets/search.svg'
import { ImCross } from 'react-icons/im'
import SingleInvestor from '../components/Investor/SingleInvestor'

const Investors = () => {
  return (
    <div className='py-[64px] xsm:px-[6vw] lg:px-[6vw] sm:px-[6vw] gap-[2.0833333333333335vw] px-[10.9375vw] dark:bg-black dark:text-white bg-white text-black'>
      <h1 className='text-custom-34 text-center font-[700] leading-[34px] mb-[40px]'>Investors</h1>
      <div className='flex items-start xsm:flex-col sm:flex-col md:flex-col xsm:gap-[20px] sm:gap-[20px] gap-[2.0833333333333335vw]'>
        <button className='buttonAnimation transition-all cursor-pointer flex gap-[8px] px-[4.6875em] py-[1.125em] text-custom-18 xsm:py-[.7em] items-center justify-center bg-primary rounded-[9px]'>All Investors</button>
        <div className='flex flex-col flex-1'>
          <div className='bg-white rounded-9px items-center dark:bg-[rgba(255,255,255,0.2)] py-[1.125em] px-[1.75em] rounded-[9px] flex gap-[1.125em] text-custom-18 xsm:w-full sm:w-full flex-1'>
            <img src={search} alt="" />
            <input type="text" placeholder='Search by name, expertise, location, affiliation' className='flex-1 outline-none bg-transparent' />
            <div className='w-[1.5em] h-[1.5em] rounded-full bg-white text-custom-12 text-black flex items-center justify-center'>
              <ImCross />
            </div>
          </div>
          <div className='flex gap-[1.25vw] xsm:gap-[15px] sm:gap-[15px] py-[25px]'>
            <select defaultValue='condition' className='outline-none flex-1 w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
              <option value='condition'>Expertise</option>
            </select>
            <select defaultValue='condition' className='outline-none flex-1 w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
              <option value='condition'>Affiliation</option>
            </select>
            <select defaultValue='condition' className='outline-none flex-1 w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
              <option value='condition'>Location</option>
            </select>
          </div>
          <div className='flex gap-[16px] flex-col'>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((val, index) => {
              return (
                <SingleInvestor />
              )
            })}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Investors
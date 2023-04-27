import React from 'react'
import UpcommingEventLeftArrow from "../../assets/UpcommingEventLeftArrow.svg"

export default function UpcommingEventCard({ background }) {
  return (
    <div style={{ background: background }} className='w-[399px] h-[399px] xsm:w-[300px] rounded-[9px] pl-[13px] text-white pt-[35px] pr-[47px]'>
      <div>
        <p className='font-[400] text-[20px] leading-[22.9px] text-white mb-[5px]'>MARCH</p>
        <h4 className='font-[700] text-[44px] leading-[50.38px] text-white'>13 - 17</h4>
      </div>
      <h3 className='w-[252px] font-[700] text-[34px] leading-[38.93px] text-white mt-[92px] mb-[43px]'>MIX Direct Showcase 2023</h3>
      <div className='flex justify-between items-center'>
        <div >
          <p className='font-[400] text-[20px] leading-[22.9px] text-white mb-[7px]'>15:00 - 17:00</p>
          <p className='font-[400] text-[12px] leading-[13.74px] text-white'>Terra, 511 Harrison Street, San Francisco, CA</p>
        </div>
        <img className='self-end' src={UpcommingEventLeftArrow}/>
      </div>
    </div>
  )
}

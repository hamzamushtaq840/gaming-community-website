import React from 'react'
import JobLocation from "../../assets/jobLocation.svg"
import JobTiming from "../../assets/JobTiming.svg"

export default function JobListingCard({image, title, company, location, createdAt, jobType, role, timing}) {
  return (
    <div className='w-full min-h-[92.32px] rounded-[9px] border-[1px] border-[#CACACA] pt-[12px] flex xsm:flex-col sm:flex-col md:flex-col justify-between pl-[11px]'>
      <div className='h-full flex xsm:flex-col sm:flex-col gap-[0.8333333333333334vw] xsm:items-start sm:items-start items-center'>
        <img src={image} />
        <div>
          <h3 className='mb-[12px] font-[700] text-[16px] leading-[16px] xsm:mt-[12px] sm:mt-[12px]'>{title}</h3>
          <div className='flex gap-[1.171875vw] items-center flex-wrap'>
            <p className='text-primary font-[700] text-[14px] leading-[14px]'>{company}</p>
            <div className='flex gap-[8px] items-center'>
              <img src={JobLocation}/>
              <p className='font-[400] text-[12px] leading-[12px]'>{location}</p>
            </div>
            <div className='flex gap-[8px] items-center'>
              <img src={JobTiming}/>
              <p className='font-[400] text-[12px] leading-[12px]'>{createdAt}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-[0.5875vw] md:ml-[90px] items-center mr-[24px] xsm:mb-[12px] sm:mb-[12px] md:mb-[12px] xsm:mt-[12px] sm:mt-[12px]'>
        <button className='w-[95.7px] h-[32.65px] rounded-[9px] bg-[#FFB3B5] font-[400] text-[14px] leading-[14px]'>{jobType}</button>
        <button className='w-[95.7px] h-[32.65px] rounded-[9px] bg-[#E87370] font-[400] text-[14px] leading-[14px]'>{role}</button>
        <button className='w-[95.7px] h-[32.65px] rounded-[9px] bg-[#FF2F36] font-[400] text-[14px] leading-[14px]'>{timing}</button>
      </div>
    </div>
  )
}

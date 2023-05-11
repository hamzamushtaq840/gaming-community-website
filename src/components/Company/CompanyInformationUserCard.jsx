import React from 'react'
import companyProfileEmplyeePic from "../../assets/companyProfileEmplyeePic.png"

export default function CompanyInformationUserCard() {
  return (
    <div className='h-[95px] rounded-[9px] bg-[rgba(255,255,255,0.15)] flex items-center gap-[14px] pl-[26px]'>
      <div className=''>
        <img src={companyProfileEmplyeePic} />
      </div>
      <div className='flex flex-col gap-[13px]'>
        <h5 className='font-[700] text-[16px] leading-[16px] text-primary'>Mohamad Zbib</h5>
        <p className='font-[700] text-[14px] leading-[14px]'>Web Developer at Pixel38</p>
      </div>
    </div>
  )
}

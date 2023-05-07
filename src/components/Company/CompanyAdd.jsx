import React from 'react'

export default function CompanyAdd() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.989583333333334vw] min-h-[calc(100vh-72px)] pl-[10.9375vw] pt-[65px] pb-[115px]'>
      <div className='w-[1253px] min-h-[1274px] rounded-[9px] bg-[rgba(255,255,255,0.15)]'>
        <div className='w-full flex gap-[21px] flex-col items-center pt-[51px]'>
          <h1 className='font-[400] text-[34px] leading-[34px]'>Add Company</h1>
          <p className='font-[400] text-[18px] leading-[24.57px]'>Let's get started with a few details about your company</p>
        </div>

        <form className='w-[716px] m-auto mt-[50px] flex flex-col gap-[22px]'>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Name*</label>
            <input placeholder='Add your organization’s name' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Website*</label>
            <input placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Industry*</label>
            <input placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Organization size*</label>
            <select placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
              <option selected>Select size</option>
            </select>
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Organization type*</label>
            <select placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
              <option selected>Select type</option>
            </select>
          </div>

          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Logo</label>
            <div className='border border-dotted min-h-[109px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
            </div>
          </div>

          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Tagline</label>
            <textarea placeholder='Use your tagline to briefly describe what your organization does' className='resize-none pt-[13px] border-[1px] min-h-[109px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
            </textarea>
          </div>
        </form>
      </div>
    </div>
  )
}
import React from 'react'

export default function DataRepositoryAdd() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)] pb-[109px]'>
      <h3 className='font-bold text-[26px] leading-[26px] pt-[65px] mb-[32px]'>New Data Repository Post</h3>
      <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] min-h-[891px] px-[47px] flex flex-col pt-[47px]'>
        <div className='flex flex-col gap-[22px] w-[37.292vw] m-auto'>
          <div className='flex-1 flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Title*</label>
            <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
          </div>
          <div className='flex-1 flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Content*</label>
            <input className='w-full h-[415px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
          </div>

          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Cover Image (optional)</label>
            <div className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden'>
              <input className='flex-1 bg-transparent indent-[22px]'></input>
              <button className='w-[134px] h-full bg-primary'>Upload Image</button>
            </div>
          </div>

          <button className='w-full h-[48px] bg-primary rounded-[9px] flex justify-center items-center gap-[10px] mb-[82px] mt-[44px]'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M12.7695 5.76953H8.23047V1.23047C8.23047 0.550894 7.67957 0 7 0C6.32043 0 5.76953 0.550894 5.76953 1.23047V5.76953H1.23047C0.550894 5.76953 0 6.32043 0 7C0 7.67957 0.550894 8.23047 1.23047 8.23047H5.76953V12.7695C5.76953 13.4491 6.32043 14 7 14C7.67957 14 8.23047 13.4491 8.23047 12.7695V8.23047H12.7695C13.4491 8.23047 14 7.67957 14 7C14 6.32043 13.4491 5.76953 12.7695 5.76953Z" fill="white" />
              </g>
            </svg>
            Post new job
          </button>
        </div>
      </div>
    </div>
  )
}

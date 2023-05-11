import React from 'react'

export default function JobsAdd() {
  return (
    <div className='dark:text-white dark:bg-black w-full pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)] pt-[65px] pb-[115px]'>
      <div className='w-[calc(1253px/1920px*100)] rounded-[9px] bg-[rgba(255,255,255,0.15)] divide-y divide-[rgba(255,255,255,0.25)]'>

        <div>
          <div className='w-[57.14%] m-auto flex flex-col pt-[52px] pb-[61px]'>
            <h3 className='font-[700] text-[34px] leading-[34px] mb-[21px] text-center '>Create a new job</h3>
            <p className='font-[400] text-[18px] text-[rgba(255,255,255,0.75)] leading-[24.57px] text-center mb-[42px]'>Target your job to the right people.</p>
            <label className='flex flex-col items-center gap-[19px] self-center'>
              <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="111" height="111" rx="9" fill="#CCCCC8" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.699 21.998C38.8211 21.998 37.2988 23.5204 37.2988 25.3982V90.0006H49.1993V78.1001C49.1993 76.2222 50.7215 74.7 52.5994 74.7H59.3996C61.2775 74.7 62.7998 76.2222 62.7998 78.1001V90.0006H74.7002V25.3982C74.7002 23.5204 73.178 21.998 71.3001 21.998H40.699ZM49.1993 32.1984C48.2604 32.1984 47.4992 32.9596 47.4992 33.8985V37.2986C47.4992 38.2375 48.2604 38.9987 49.1993 38.9987H52.5994C53.5382 38.9987 54.2995 38.2375 54.2995 37.2986V33.8985C54.2995 32.9596 53.5382 32.1984 52.5994 32.1984H49.1993ZM47.4992 44.0989C47.4992 43.16 48.2604 42.3988 49.1993 42.3988H52.5994C53.5382 42.3988 54.2995 43.16 54.2995 44.0989V47.499C54.2995 48.4379 53.5382 49.1991 52.5994 49.1991H49.1993C48.2604 49.1991 47.4992 48.4379 47.4992 47.499V44.0989ZM49.1993 52.5992C48.2604 52.5992 47.4992 53.3605 47.4992 54.2992V57.6994C47.4992 58.6381 48.2604 59.3994 49.1993 59.3994H52.5994C53.5382 59.3994 54.2995 58.6381 54.2995 57.6994V54.2992C54.2995 53.3605 53.5382 52.5992 52.5994 52.5992H49.1993ZM47.4992 64.4996C47.4992 63.5608 48.2604 62.7996 49.1993 62.7996H52.5994C53.5382 62.7996 54.2995 63.5608 54.2995 64.4996V67.8997C54.2995 68.8385 53.5382 69.5998 52.5994 69.5998H49.1993C48.2604 69.5998 47.4992 68.8385 47.4992 67.8997V64.4996ZM59.3996 32.1984C58.4609 32.1984 57.6996 32.9596 57.6996 33.8985V37.2986C57.6996 38.2375 58.4609 38.9987 59.3996 38.9987H62.7998C63.7385 38.9987 64.4998 38.2375 64.4998 37.2986V33.8985C64.4998 32.9596 63.7385 32.1984 62.7998 32.1984H59.3996ZM57.6996 44.0989C57.6996 43.16 58.4609 42.3988 59.3996 42.3988H62.7998C63.7385 42.3988 64.4998 43.16 64.4998 44.0989V47.499C64.4998 48.4379 63.7385 49.1991 62.7998 49.1991H59.3996C58.4609 49.1991 57.6996 48.4379 57.6996 47.499V44.0989ZM59.3996 52.5992C58.4609 52.5992 57.6996 53.3605 57.6996 54.2992V57.6994C57.6996 58.6381 58.4609 59.3994 59.3996 59.3994H62.7998C63.7385 59.3994 64.4998 58.6381 64.4998 57.6994V54.2992C64.4998 53.3605 63.7385 52.5992 62.7998 52.5992H59.3996ZM57.6996 64.4996C57.6996 63.5608 58.4609 62.7996 59.3996 62.7996H62.7998C63.7385 62.7996 64.4998 63.5608 64.4998 64.4996V67.8997C64.4998 68.8385 63.7385 69.5998 62.7998 69.5998H59.3996C58.4609 69.5998 57.6996 68.8385 57.6996 67.8997V64.4996Z" fill="#999999" />
                <path d="M33.8985 89.9994V32.1973H28.7983C26.9205 32.1973 25.3982 33.7196 25.3982 35.5974V86.5993H23.6981C22.7592 86.5993 21.998 87.3606 21.998 88.2993C21.998 89.2381 22.7592 89.9994 23.6981 89.9994H33.8985Z" fill="#999999" />
                <path d="M78.1006 89.9994V32.1973H83.2008C85.0787 32.1973 86.6009 33.7196 86.6009 35.5974V86.5993H88.301C89.2397 86.5993 90.001 87.3606 90.001 88.2993C90.001 89.2381 89.2397 89.9994 88.301 89.9994H78.1006Z" fill="#999999" />
                <path d="M59.3989 90V78.0996H52.5986V90H59.3989Z" fill="#999999" />
              </svg>
              <button className='w-[159px] h-[29px] bg-[rgba(255,255,255,0.25)] rounded-[9px] text-white font-[400] leading-[19.07px] text-[14px]'>Upload Image</button>
            </label>
            <div className='flex flex-col gap-[22px]'>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Job Title</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add the title you are hiring for'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Company</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Employee location</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Country or state'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Job Type</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Select level (9 dropdowns)'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Experience Level</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Select level (9 dropdowns)'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>City</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Degree Required</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Industry</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Company Size</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>External Job Application Form</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Description</label>
                <input className='w-full h-[315px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
              </div>

              <div className='flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Skills</label>
                <div className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden'>
                  <input className='flex-1 bg-transparent indent-[22px]' placeholder='Add skill keywords to make your job more visible to the right candidates'></input>
                  <button className='w-[134px] h-full bg-primary'>Upload Image</button>
                </div>
                <div className='pl-[18px] w-fit h-[48px] pr-[39px] flex gap-[10px] items-center rounded-[9px] bg-[rgba(255,255,255,0.25)]'>
                  <p>Written Communication</p>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path d="M7.27478 5.50893L10.7794 2.00424C11.0735 1.71024 11.0735 1.23158 10.7794 0.933994L10.0656 0.220501C9.77139 -0.0735005 9.29254 -0.0735005 8.99481 0.220501L5.49016 3.72523L2.00523 0.242014C1.71108 -0.0519882 1.23219 -0.0519882 0.934477 0.242014L0.22061 0.955506C-0.0735366 1.24951 -0.0735366 1.72817 0.22061 2.02576L3.70554 5.50895L0.224221 8.9868C-0.069926 9.28081 -0.069926 9.75944 0.224221 10.057L0.938064 10.7705C1.23221 11.0645 1.71111 11.0645 2.00882 10.7705L5.49016 7.29269L8.97866 10.7795C9.27283 11.0735 9.75172 11.0735 10.0494 10.7795L10.7633 10.066C11.0574 9.772 11.0574 9.29334 10.7633 8.99576L7.27478 5.50893Z" fill="white" />
                    </g>
                  </svg>
                </div>
              </div>

              <button className='w-full h-[48px] bg-primary rounded-[9px] mt-[23px] flex justify-center items-center gap-[10px] mb-[10px]'>
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
      </div>
    </div>
  )
}

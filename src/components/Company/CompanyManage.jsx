import React from 'react'

export default function CompanyManage() {
  return (
    <div className='w-[calc(1253px/1920px*100)] rounded-[9px] bg-[rgba(255,255,255,0.15)] divide-y divide-[rgba(255,255,255,0.25)]'>
      <div>
        <div className='w-[57.14%] m-auto flex flex-col pb-[45px] pt-[53px]'>
          <div>
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
          </div>

          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Cover Image</label>
            <div className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden'>
              <input className='flex-1 bg-transparent'></input>
              <button className='w-[134px] h-full bg-primary'>Upload Image</button>
            </div>
          </div>

          <div className='flex gap-[10px] mt-[22px]'>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Website</label>
              <div className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent relative'>
                <svg className='absolute top-[50%] translate-y-[-50%] left-[25px]' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6302 6.61426C14.8214 2.85731 13.0962 0.480469 11.5007 0.480469C9.90512 0.480469 8.17999 2.85731 7.37109 6.61426H15.6302Z" fill="white" />
                  <path d="M6.90039 11.2153C6.9002 12.2411 6.96859 13.2656 7.10511 14.2822H15.8964C16.0329 13.2656 16.1013 12.2411 16.1011 11.2153C16.1013 10.1896 16.0329 9.16503 15.8964 8.14844H7.10511C6.96859 9.16503 6.9002 10.1896 6.90039 11.2153Z" fill="white" />
                  <path d="M7.37109 15.8145C8.17999 19.5714 9.90512 21.9482 11.5007 21.9482C13.0962 21.9482 14.8214 19.5714 15.6302 15.8145H7.37109Z" fill="white" />
                  <path d="M17.2007 6.61376H22.031C21.3053 4.96206 20.2025 3.50343 18.8112 2.35487C17.4199 1.20631 15.7788 0.399789 14.0195 0C15.474 1.27966 16.6149 3.64577 17.2007 6.61376Z" fill="white" />
                  <path d="M22.5812 8.14844H17.4441C17.5706 9.16584 17.6339 10.1901 17.6335 11.2153C17.6336 12.2406 17.5701 13.2648 17.4434 14.2822H22.5804C23.1396 12.2759 23.1403 10.1548 22.5812 8.14844Z" fill="white" />
                  <path d="M14.0195 22.4282C15.7791 22.0286 17.4205 21.2222 18.8121 20.0737C20.2036 18.9251 21.3066 17.4663 22.0326 15.8145H17.2022C16.6149 18.7824 15.474 21.1486 14.0195 22.4282Z" fill="white" />
                  <path d="M5.80106 15.8145H0.970703C1.69663 17.4663 2.79963 18.9251 4.1912 20.0737C5.58277 21.2222 7.22418 22.0286 8.98374 22.4282C7.52773 21.1486 6.38684 18.7824 5.80106 15.8145Z" fill="white" />
                  <path d="M8.98178 0C7.22223 0.399573 5.58082 1.20599 4.18925 2.35456C2.79767 3.50313 1.69468 4.96188 0.96875 6.61376H5.79911C6.38642 3.64577 7.52731 1.27966 8.98178 0Z" fill="white" />
                  <path d="M5.36626 11.2134C5.36617 10.1881 5.42967 9.16387 5.55641 8.14648H0.419361C-0.139787 10.1529 -0.139787 12.2739 0.419361 14.2803H5.55641C5.42967 13.2629 5.36617 12.2386 5.36626 11.2134Z" fill="white" />
                </svg>
                <input className='flex-1 indent-[63px] bg-transparent' placeholder='https://linkedin.com/loremipsum'>
                </input>
              </div>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Linkedin</label>
              <div className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent relative'>
                <svg className='absolute top-[50%] translate-y-[-50%] left-[25px]' width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.5041 21.9994V13.9419C24.5041 9.982 23.5866 6.95703 18.6146 6.95703C16.2173 6.95703 14.6191 8.16702 13.968 9.322H13.9088V7.31453H9.20312V21.9994H14.116V14.7119C14.116 12.787 14.5008 10.9445 17.046 10.9445C19.5616 10.9445 19.5912 13.117 19.5912 14.8219V21.9719H24.5041V21.9994Z" fill="white" />
                  <path d="M1.21289 7.31445H6.12577V21.9993H1.21289V7.31445Z" fill="white" />
                  <path d="M3.66931 0C2.10074 0 0.828125 1.18249 0.828125 2.63997C0.828125 4.09745 2.10074 5.30744 3.66931 5.30744C5.23788 5.30744 6.5105 4.09745 6.5105 2.63997C6.5105 1.18249 5.23788 0 3.66931 0Z" fill="white" />
                </svg>
                <input className='flex-1 indent-[63px] bg-transparent' placeholder='https://linkedin.com/loremipsum'>
                </input>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className='w-[57.14%] m-auto flex flex-col pt-[45px] pb-[61px]'>
          <h3 className='text-white font-[700] text-[16px] leading-[16px] mb-[28px]'>Company Info</h3>
          <div className='flex flex-col gap-[22px]'>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Company Info</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Email Address</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Phone</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>City, State</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Description</label>
              <input className='w-full h-[315px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>

            <button className='w-1full h-[48px] bg-primary rounded-[9px] mt-[23px] flex justify-center items-center gap-[10px] mb-[10px]'>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

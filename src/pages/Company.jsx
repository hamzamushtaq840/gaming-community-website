import React from 'react'
import CompanyRecommendation from '../components/Company/CompanyRecommendation'

export default function Company() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.989583333333334vw] min-h-[calc(100vh-72px)] pl-[10.9375vw]'>
      <h3 className='pt-[63px] font-[700] text-[34px] text-center'>Company</h3>

      <div className='flex gap-[30px]'>
        <div className='w-[272px]'>
          <button className='w-full h-[57px] bg-primary flex gap-[10px] justify-center items-center rounded-[9px] font-[400] text-[18px] leading-[20.7px]'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M12.7695 5.76953H8.23047V1.23047C8.23047 0.550894 7.67957 0 7 0C6.32043 0 5.76953 0.550894 5.76953 1.23047V5.76953H1.23047C0.550894 5.76953 0 6.32043 0 7C0 7.67957 0.550894 8.23047 1.23047 8.23047H5.76953V12.7695C5.76953 13.4491 6.32043 14 7 14C7.67957 14 8.23047 13.4491 8.23047 12.7695V8.23047H12.7695C13.4491 8.23047 14 7.67957 14 7C14 6.32043 13.4491 5.76953 12.7695 5.76953Z" fill="white" />
              </g>
            </svg>
            Add Company
          </button>

          <div className='min-h-[359px] w-full rounded-[9px] px-[22px] bg-[rgba(255,255,255,0.15)] pt-[28px] my-[25px]'>
            <h4 className=' mb-[25px]'>Recent Searches</h4>
            <div className='flex flex-col gap-[12px]'>
              <p className='bg-[rgba(255,255,255,0.1)] h-[35px] rounded-[17.5px] pl-[22px] flex items-center font-[400] text-[12px] leading-[12px]'>Dubai</p>
              <p className='bg-[rgba(255,255,255,0.1)] h-[35px] rounded-[17.5px] pl-[22px] flex items-center font-[400] text-[12px] leading-[12px]'>Indie Game Companies</p>
              <p className='bg-[rgba(255,255,255,0.1)] h-[35px] rounded-[17.5px] pl-[22px] flex items-center font-[400] text-[12px] leading-[12px]'>Germany</p>
              <p className='bg-[rgba(255,255,255,0.1)] h-[35px] rounded-[17.5px] pl-[22px] flex items-center font-[400] text-[12px] leading-[12px]'>Game Development</p>
              <p className='bg-[rgba(255,255,255,0.1)] h-[35px] rounded-[17.5px] pl-[22px] flex items-center font-[400] text-[12px] leading-[12px]'>100 - 200 employees</p>
            </div>

            <div className='flex gap-[6px] items-center justify-center mt-[25px]'>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M4.62941 3.50568L6.85962 1.27543C7.04679 1.08834 7.04679 0.783734 6.85962 0.59436L6.40536 0.140319C6.21816 -0.046773 5.91344 -0.046773 5.72397 0.140319L3.49374 2.3706L1.27606 0.154009C1.08887 -0.0330834 0.784119 -0.0330834 0.594667 0.154009L0.140388 0.60805C-0.046796 0.795142 -0.046796 1.09974 0.140388 1.28912L2.35807 3.5057L0.142686 5.71887C-0.0444984 5.90597 -0.0444984 6.21055 0.142686 6.39993L0.59695 6.85397C0.784134 7.04106 1.08889 7.04106 1.27834 6.85397L3.49374 4.64081L5.71369 6.85968C5.90089 7.04677 6.20564 7.04677 6.39508 6.85968L6.84934 6.40564C7.03654 6.21855 7.03654 5.91395 6.84934 5.72457L4.62941 3.50568Z" fill="white" />
                </g>
              </svg>
              <p className='font-[400] text-[12px] leading-[12px]'>Clear All</p>
            </div>
          </div>

          <div className='min-h-[161px] w-full rounded-[9px] px-[22px] bg-[rgba(255,255,255,0.15)] py-[28px] flex flex-col gap-[19px]'>
            <div className='w-full h-[48px] bg-[rgba(255,255,255,0.2)] pl-[21px] pr-[18px] rounded-[9px] flex items-center justify-between'>
              <p className='font-[400] text-[14px] leading-[19.07px]'>Favorites</p>
              <div className='w-[28px] h-[20px] bg-[rgba(255,255,255,0.25)] rounded-[10px] flex justify-center items-center'>
                <p className='font-[400] text-[12px] leading-[16.34px]'>8</p>
              </div>
            </div>
            <div className='w-full h-[48px] bg-[rgba(255,255,255,0.2)] pl-[21px] pr-[18px] rounded-[9px] flex items-center justify-between'>
              <p className='font-[400] text-[14px] leading-[19.07px]'>Favorites</p>
              <div className='w-[28px] h-[20px] bg-[rgba(255,255,255,0.25)] rounded-[10px] flex justify-center items-center'>
                <p className='font-[400] text-[12px] leading-[16.34px]'>8</p>
              </div>
            </div>
          </div>

        </div>
        <div className='flex-1'>
          <div className='flex relative h-[57px]'>
            <div className='absolute top-[50%] translate-y-[-50%] left-[28px]'>
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                  <path d="M9.34994 17.9247C11.4264 17.9247 13.4435 17.2603 15.0816 16.0366L21.262 21.9638C21.7237 22.3914 22.4593 22.3792 22.9052 21.9364C23.3402 21.5045 23.3402 20.8197 22.9052 20.3878L16.7249 14.4606C19.8911 10.5518 19.1538 4.92157 15.0781 1.88506C11.0024 -1.15144 5.13172 -0.444344 1.96556 3.46446C-1.20061 7.37326 -0.463319 13.0035 3.61239 16.04C5.25324 17.2625 7.27212 17.9257 9.34994 17.9247ZM4.38411 4.20114C7.12669 1.57083 11.5733 1.57079 14.3159 4.20105C17.0585 6.83131 17.0586 11.0958 14.316 13.7261C11.5734 16.3564 7.12684 16.3565 4.38421 13.7262C4.38416 13.7262 4.38416 13.7262 4.38411 13.7261C1.64154 11.115 1.62538 6.86607 4.34797 4.23581C4.36 4.22422 4.37203 4.21268 4.38411 4.20114Z" fill="white" />
                </g>
              </svg>
            </div>
            <input className='flex-1 h-full rounded-[9px] bg-[rgba(255,255,255,0.3)] indent-[70px]' placeholder='Search Company' />
            <div className='absolute top-[50%] translate-y-[-50%] right-[31px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M20.4848 3.51429C18.8066 1.83618 16.6684 0.693416 14.3406 0.230492C12.0129 -0.232431 9.60016 0.00528063 7.40752 0.913568C5.21487 1.82186 3.3408 3.35993 2.02228 5.33329C0.703757 7.30665 0 9.62668 0 12C0 14.3733 0.703757 16.6934 2.02228 18.6667C3.3408 20.6401 5.21487 22.1782 7.40752 23.0864C9.60016 23.9947 12.0129 24.2324 14.3406 23.7695C16.6684 23.3066 18.8066 22.1638 20.4848 20.4857C21.5993 19.3714 22.4833 18.0485 23.0864 16.5925C23.6896 15.1365 24 13.576 24 12C24 10.424 23.6896 8.86351 23.0864 7.40752C22.4833 5.95154 21.5993 4.62861 20.4848 3.51429V3.51429ZM16.2848 15.0343C16.3705 15.1145 16.4388 15.2114 16.4854 15.319C16.5321 15.4266 16.5562 15.5427 16.5562 15.66C16.5562 15.7773 16.5321 15.8934 16.4854 16.001C16.4388 16.1086 16.3705 16.2055 16.2848 16.2857C16.2048 16.3652 16.1098 16.428 16.0053 16.4707C15.9009 16.5133 15.7891 16.5349 15.6763 16.5343C15.4514 16.5333 15.2359 16.4441 15.0763 16.2857L11.9991 13.2086L8.96485 16.2857C8.8052 16.4441 8.58971 16.5333 8.36485 16.5343C8.25204 16.5349 8.14022 16.5133 8.03579 16.4707C7.93135 16.428 7.83637 16.3652 7.75628 16.2857C7.59663 16.1251 7.50703 15.9079 7.50703 15.6814C7.50703 15.455 7.59663 15.2377 7.75628 15.0771L10.7906 12L7.75628 8.96572C7.61585 8.80175 7.54248 8.59083 7.55081 8.3751C7.55914 8.15938 7.64857 7.95475 7.80122 7.80209C7.95388 7.64944 8.15851 7.56001 8.37423 7.55168C8.58995 7.54335 8.80088 7.61673 8.96485 7.75715L11.9991 10.7914L15.0334 7.75715C15.1128 7.67498 15.2075 7.60924 15.3123 7.5637C15.4171 7.51815 15.5298 7.49368 15.644 7.49169C15.7582 7.4897 15.8717 7.51023 15.978 7.5521C16.0843 7.59397 16.1812 7.65636 16.2634 7.73572C16.3456 7.81508 16.4113 7.90984 16.4569 8.0146C16.5024 8.11936 16.5269 8.23207 16.5289 8.34628C16.5309 8.4605 16.5103 8.57399 16.4685 8.68027C16.4266 8.78655 16.3642 8.88355 16.2848 8.96572L13.2077 12L16.2848 15.0343Z" fill="white" />
                </g>
              </svg>
            </div>
          </div>
          <div className='flex gap-[20px] mt-[25px]'>
            <select className='flex-1 h-[46px] rounded-[9px] bg-transparent border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] font-[400] text-[16px] leading-[21.52px] '>
              <option>Location</option>
            </select>
            <select className='flex-1 h-[46px] rounded-[9px] bg-transparent border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] font-[400] text-[16px] leading-[21.52px] '>
              <option>Specialty</option>
            </select>
            <select className='flex-1 h-[46px] rounded-[9px] bg-transparent border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] font-[400] text-[16px] leading-[21.52px] '>
              <option>Company Size</option>
            </select>
          </div>

          <div className='mt-[57px]'>
            <CompanyRecommendation/>
          </div>
        </div>
      </div>
    </div>
  )
}

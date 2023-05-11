import React, { useState } from 'react'

export default function ProfilePagesCard() {
  const [contextMenu, setContextMenu] = useState(false);

  return (
    <div className='h-[213px] rounded-[9px] bg-[rgba(255,255,255,0.15)]'>
      <div className='bg-[#FF5359] rounded-t-[9px] flex justify-between items-center h-[44px] px-[22px]'>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.96 8.77243C11.7471 8.14322 12.3225 7.27859 12.606 6.29912C12.8894 5.31964 12.8669 4.27415 12.5414 3.30842C12.2158 2.3427 11.6037 1.50489 10.7902 0.911825C9.97665 0.318758 9.00238 0 8.0032 0C7.00402 0 6.02975 0.318758 5.21625 0.911825C4.40274 1.50489 3.79055 2.3427 3.46505 3.30842C3.13954 4.27415 3.11695 5.31964 3.40043 6.29912C3.6839 7.27859 4.2593 8.14322 5.0464 8.77243C3.55934 9.37731 2.28373 10.4239 1.38421 11.7772C0.484694 13.1304 0.00254799 14.7282 0 16.3643V17.1822C0 17.3991 0.0842854 17.6071 0.234315 17.7605C0.384344 17.9138 0.587827 18 0.8 18H15.2C15.4122 18 15.6157 17.9138 15.7657 17.7605C15.9157 17.6071 16 17.3991 16 17.1822V16.3643C15.998 14.729 15.5168 13.1317 14.6184 11.7786C13.7201 10.4254 12.4459 9.37834 10.96 8.77243ZM4.8 4.91473C4.8 4.26772 4.98768 3.63525 5.3393 3.09728C5.69092 2.55931 6.19069 2.14002 6.77541 1.89242C7.36014 1.64483 8.00355 1.58004 8.62429 1.70627C9.24503 1.83249 9.81521 2.14405 10.2627 2.60156C10.7103 3.05906 11.015 3.64195 11.1385 4.27653C11.262 4.9111 11.1986 5.56885 10.9564 6.16661C10.7142 6.76436 10.3041 7.27527 9.77782 7.63473C9.25159 7.99419 8.6329 8.18605 8 8.18605C7.15131 8.18605 6.33737 7.84139 5.73726 7.2279C5.13714 6.61441 4.8 5.78233 4.8 4.91473ZM1.6 16.3643C1.6 14.6291 2.27428 12.965 3.47452 11.738C4.67475 10.511 6.30261 9.8217 8 9.8217C9.69739 9.8217 11.3253 10.511 12.5255 11.738C13.7257 12.965 14.4 14.6291 14.4 16.3643H1.6Z" fill="white" />
        </svg>
        <div className='flex gap-[13px] items-center'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.68847 12.4428L6.93439 15.197C6.93439 15.197 6.93439 15.197 6.93432 15.197C6.93432 15.197 6.93432 15.1971 6.93426 15.1971C5.79536 16.3361 3.94212 16.3361 2.8031 15.1971C2.25131 14.6453 1.9475 13.9117 1.9475 13.1314C1.9475 12.3513 2.25131 11.6178 2.8029 11.066C2.80297 11.0659 2.80303 11.0659 2.8031 11.0658L5.55718 8.31165C5.9374 7.93137 5.9374 7.31479 5.55712 6.93458C5.1769 6.55436 4.56032 6.55436 4.18004 6.93458L1.42596 9.68873C1.42576 9.68892 1.42557 9.68918 1.42537 9.68938C0.506219 10.6089 0 11.8313 0 13.1314C0 14.4319 0.506414 15.6546 1.42602 16.5742C2.37523 17.5233 3.62195 17.9979 4.86874 17.9979C6.11553 17.9979 7.36232 17.5233 8.3114 16.5742C8.31146 16.5742 8.31146 16.574 8.31146 16.574L11.0655 13.8199C11.4458 13.4397 11.4458 12.8231 11.0655 12.4428C10.6853 12.0626 10.0688 12.0626 9.68847 12.4428Z" fill="white" />
            <path d="M18 4.86885C18 3.56838 17.4935 2.34574 16.5739 1.42613C14.6756 -0.472155 11.5868 -0.47209 9.68854 1.42613C9.68847 1.42626 9.68834 1.42633 9.68828 1.42646L6.93426 4.18041C6.55398 4.56063 6.55398 5.17727 6.93426 5.55749C7.12446 5.7477 7.37361 5.84273 7.62283 5.84273C7.87198 5.84273 8.12126 5.74763 8.31133 5.55749L11.0654 2.80353C11.0654 2.8034 11.0655 2.80334 11.0657 2.80321C12.2046 1.66431 14.0578 1.66425 15.1968 2.80321C15.7486 3.355 16.0525 4.08862 16.0525 4.86885C16.0525 5.64902 15.7487 6.38251 15.197 6.93431L15.1968 6.9345L12.4428 9.68865C12.0625 10.0689 12.0625 10.6854 12.4428 11.0657C12.633 11.2559 12.8822 11.351 13.1313 11.351C13.3805 11.351 13.6298 11.2559 13.8199 11.0657L16.574 8.31158C16.5742 8.31138 16.5744 8.31112 16.5746 8.31093C17.4937 7.39145 18 6.169 18 4.86885Z" fill="white" />
            <path d="M5.55731 12.4425C5.74745 12.6327 5.99666 12.7278 6.24581 12.7278C6.49503 12.7278 6.74424 12.6327 6.93438 12.4425L12.4427 6.93421C12.823 6.55399 12.823 5.93742 12.4427 5.55713C12.0625 5.17692 11.4459 5.17692 11.0656 5.55713L5.55731 11.0654C5.17702 11.4457 5.17702 12.0623 5.55731 12.4425Z" fill="white" />
          </svg>
          <div className='relative'>
            <div onClick={() => setContextMenu(!contextMenu)} className='cursor-pointer h-[17.73px] w-[17.73px] flex justify-center items-center rounded-full'>
              <svg  width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7879 1.96982C13.7879 3.05771 14.6698 3.93963 15.7577 3.93963C16.8456 3.93963 17.7275 3.05771 17.7275 1.96982C17.7275 0.881917 16.8456 -3.85498e-08 15.7577 -8.61033e-08C14.6698 -1.33657e-07 13.7879 0.881916 13.7879 1.96982Z" fill="white" />
                <path d="M6.89362 1.96982C6.89362 3.05771 7.77554 3.93963 8.86344 3.93963C9.95134 3.93963 10.8333 3.05771 10.8333 1.96982C10.8333 0.881917 9.95134 -3.85498e-08 8.86344 -8.61034e-08C7.77554 -1.33657e-07 6.89362 0.881916 6.89362 1.96982Z" fill="white" />
                <path d="M-0.000177708 1.96982C-0.000177755 3.05771 0.881738 3.93963 1.96964 3.93963C3.05754 3.93963 3.93945 3.05771 3.93945 1.96982C3.93945 0.881917 3.05754 -3.85498e-08 1.96964 -8.61034e-08C0.881738 -1.33657e-07 -0.00017766 0.881916 -0.000177708 1.96982Z" fill="white" />
              </svg>
            </div>
            {contextMenu &&
              <div style={{ boxShadow: "-5px 10px 16px rgba(0,0,0,0.25);" }} className='w-[201px] h-[166px] bg-[#525252] flex flex-col gap-[8px] py-[6px] rounded-[9px] absolute z-[1000] top-[32px] overflow-hidden'>
                <p className='font-[400] text-[14px] leading-[14px] h-[31px] w-full hover:bg-[rgba(64,64,64,1)] flex items-center px-[22px]'>Quick Share</p>
                <p className='font-[400] text-[14px] leading-[14px] h-[31px] w-full hover:bg-[rgba(64,64,64,1)] flex items-center px-[22px]'>Notification Details</p>
                <p className='font-[400] text-[14px] leading-[14px] h-[31px] w-full hover:bg-[rgba(64,64,64,1)] flex items-center px-[22px]'>Duplicate</p>
                <p className='font-[400] text-[14px] leading-[14px] h-[31px] w-full hover:bg-[rgba(64,64,64,1)] flex items-center px-[22px]'>Deactivate</p>
              </div>
            }
          </div>
        </div>
      </div>

      <div className='px-[21px]'>
        <div className='flex gap-[18px] items-center mt-[25px] mb-[44px]'>
          <div className='w-[63.18px] h-[63.18px] bg-[rgba(113,128,150,1)] rounded-[9px]'></div>
          <div className='flex flex-col gap-[10px]'>
            <h4 className='font-[700] text-[14px] leading-[14px]'>Lorem ipsum</h4>
            <p className='font-[400] text-[14px] leading-[14px] text-[rgba(255,255,255,0.6)]'>Updated 4 minutes ago</p>
            <p className='font-[400] text-[14px] leading-[14px] text-[rgba(255,255,255,0.6)]'>Not Visited</p>
          </div>
        </div>

        <div className='flex items-center mb-[14px] px-[5px] divide-x-[1px] divide-[rgba(255,255,255,0.5)]'>
          <div className='flex-1'>
            <p>Update</p>
          </div>
          <div className='flex-1'>
            <p className='text-center'>Share</p>
          </div>
          <div className='flex-1'>
            <p className='text-right'>Analyze</p>
          </div>
        </div>
      </div>
    </div>
  )
}

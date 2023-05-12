import React from 'react'

export default function Dashboard() {
  return (
    <div className='w-full pt-[58px] px-[47px] xsm:px-[20px] sm:px-[20px] dark:bg-black  bg-white dark:text-white text-black'>
      <h1 className='text-custom-26 font-[700]'>Launchpad to Achieve your Goals</h1>
      <div className='bg-primary pt-[28px] pb-[38px] px-[38px] mt-[36px] rounded-[9px] xsm:px-[20px] sm:px-[20px] flex flex-col gap-[20px]'>
        <h1 className='text-custom-24 font-[700]'>How are you feeling today?</h1>
        <div className='grid grid-cols-4 gap-[10.729166666666666vw] xsm:grid-cols-2 sm:grids-cols-2 md:grid-cols-2 xsm:gap-[10px] sm:gap-[10px]'>
          <div className='bg-white rounded-[20px] flex items-center justify-center h-[42px]'>
            😎
          </div>
          <div className='bg-white rounded-[20px] flex items-center justify-center h-[42px]'>
            🙂
          </div>
          <div className='bg-white rounded-[20px] flex items-center justify-center h-[42px]'>
            🙂
          </div>
          <div className='bg-white rounded-[20px] flex items-center justify-center h-[42px]'>
            😥
          </div>
        </div>
      </div>
      <div className='flex gap-[8.59375vw] mt-[36px] xsm:flex-col sm:flex-col'>
        <div className='flex-1 flex-col flex'>
          <h1 className='text-custom-20 font-[700]'>Actions</h1>
          <div className='flex flex-col gap-[34px] mt-[30px]'>
            <div className='flex flex-col'>
              <h1 className='text-custom-16 font-[700] opacity-50'>Today</h1>
              <p className='text-custom-16 mt-[12px]'>Complete your profile now</p>
              <div className='h-[1px] bg-[#cccccc52] w-full mt-[20px]' ></div>
            </div>
            <div>
              <h1 className='text-custom-20 font-[700] mb-[34px]'>What is your goal ?</h1>
              <select className='outline-none w-full h-[49px] justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                <option value="Build Personal Brand">Build Personal Brand</option>
                <option value="Grow Career">Grow Career</option>
                <option value="Develop Real World Portfolio">Develop Real World Portfolio</option>
                <option value="Expand Network">Expand Network</option>
                <option value="Upskill">Upskill</option>
                <option value="Identify Market R&D Challenges">Identify Market R&D Challenges</option>
              </select>
            </div>
          </div>
        </div>
        <div className='flex flex-col xsm:w-full sm:w-full justify-between gap-[28px] w-[20.677083333333332vw] min-w-[150px]'>
          <h1 className='text-custom-20 font-[700]'>Notifications</h1>
          <div className='flex flex-col px-[47px] xsm:px-[15px] h-[220px] justify-center sm:px-[20px] py-[33px] rounded-[9px] xsm:py-[25px] bg-[#ffffff] dark:bg-[#5b5a5a] text-[#000000] dark:text-[#ffffff]'>
            <h1 className='text-custom-24 font-bold leading-[36px]'>
              You have 3 Project
              Notifications
            </h1>
            <div className='flex gap-[9px] mt-[24px]'>
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6929 11.8078L13.6739 10.4018C13.5348 10.2107 13.4599 9.98336 13.4593 9.75028V5.71529C13.4593 4.1995 12.8315 2.74579 11.7139 1.67397C10.5963 0.602145 9.08052 0 7.5 0C5.91948 0 4.4037 0.602145 3.28611 1.67397C2.16852 2.74579 1.54066 4.1995 1.54066 5.71529V9.75028C1.54008 9.98336 1.46523 10.2107 1.32612 10.4018L0.307075 11.8078C0.152776 11.9717 0.0513107 12.1751 0.01495 12.3932C-0.0214108 12.6113 0.0088901 12.8348 0.102188 13.0367C0.195487 13.2386 0.347787 13.4103 0.540671 13.531C0.733555 13.6517 0.958762 13.7162 1.18906 13.7167H4.57992C4.7167 14.3627 5.08213 14.9435 5.61431 15.3606C6.14649 15.7778 6.81268 16.0057 7.5 16.0057C8.18732 16.0057 8.85351 15.7778 9.38569 15.3606C9.91787 14.9435 10.2833 14.3627 10.4201 13.7167H13.8109C14.0412 13.7162 14.2664 13.6517 14.4593 13.531C14.6522 13.4103 14.8045 13.2386 14.8978 13.0367C14.9911 12.8348 15.0214 12.6113 14.985 12.3932C14.9487 12.1751 14.8472 11.9717 14.6929 11.8078ZM7.5 14.8598C7.13115 14.8588 6.77165 14.7484 6.47078 14.5437C6.16992 14.3391 5.94242 14.0502 5.81947 13.7167H9.18053C9.05758 14.0502 8.83008 14.3391 8.52922 14.5437C8.22835 14.7484 7.86885 14.8588 7.5 14.8598ZM1.18906 12.5736C1.21599 12.5497 1.23999 12.5228 1.26057 12.4936L2.30345 11.0534C2.58166 10.6711 2.73138 10.2164 2.73253 9.75028V5.71529C2.73253 4.50266 3.23481 3.33969 4.12889 2.48223C5.02296 1.62477 6.23559 1.14306 7.5 1.14306C8.76441 1.14306 9.97704 1.62477 10.8711 2.48223C11.7652 3.33969 12.2675 4.50266 12.2675 5.71529V9.75028C12.2686 10.2164 12.4183 10.6711 12.6965 11.0534L13.7394 12.4936C13.76 12.5228 13.784 12.5497 13.8109 12.5736H1.18906Z" fill="#FF5359" />
              </svg>
              <p className='text-[#FF5359] text-[12px] font-[700] mb-[17px]'>See your notifications </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[61px] xsm:mt-[40px] flex flex-col gap-[36px] pb-[6.354166666666667vw]'>
        <h1 className='text-custom-20 font-[700] xsm:mb-[0px] sm:mb-[0px]'>Your Path to Achieve Goals</h1>
        <div className='grid grid-cols-4 lg:grid-cols-2 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  gap-x-[20px] gap-y-[22px]'>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#EFF3BD]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>PERSONAL BRAND</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Individual Profile</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Build & optimize your AI footprint.
                Share your AI goals with the world.
                Access gigs.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#46BFB1]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>TEAM BRAND</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Team Profile</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Access global opportunities. To deliver complex projects, you must work in a team.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#F39E52]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>OPPORTUNITY</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Projects</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Build your portfolio or complex team projects are all here.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-white'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>OPPORTUNITY</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Marketplace Gigs</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>On-demand quick gigs. Pre-packaged and frictionless.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#49A4F3]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>CAREER</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Jobs</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Supercharge your career. Curated and exclusive opportunities.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#F6CA41]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>MERIT</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Labs & Centers of Excellence</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Your work backed by world class scientific advisors and educational merit.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#FF7B89]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>SUPERCHARGE</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Events</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Supercharge your network. Curated and exclusive opportunities.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#4ACC5C]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>EDUCATION</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Knowledge Hub</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Curated and exclusive content.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#E6BABA]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>SCIENTIFIC ADVISORS</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Mentors</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Supercharge your career. Curated and exclusive mentors.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#BFFFE0]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>ENTREPRENEURSHIP</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Investors</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Connect with the best investors to realize your entrepreneurial goals.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#F47D16]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>SUPERCHARGE</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Data Repository</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Supercharge your projects. Curated data sets.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className='flex gap-[7px] px-[38px] xsm:px-[20px] pt-[30px] pb-[22px] pr-[22px] rounded-[9px] bg-[#FCECD1]'>
            <div className='flex flex-1 flex-col'>
              <p className='text-custom-14 font-bold text-black opacity-50'>EDUCATION</p>
              <h1 className='leading-[36px] text-custom-32 text-black font-[700] mb-[23px] mt-[17px]'>Research</h1>
              <p className='leading-[24px] text-[#0A0A0A] text-custom-16 mb-[64px]'>Identify Market Driven R&D Challenges.</p>
            </div>
            <div className='flex items-end'>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="9" fill="#0A0A0A" />
                <path d="M26.1867 18.8201L20.6131 13.2464C20.454 13.0873 20.242 13 20.0159 13C19.7895 13 19.5776 13.0875 19.4185 13.2464L18.9125 13.7526C18.7535 13.9114 18.6659 14.1236 18.6659 14.3498C18.6659 14.5759 18.7535 14.7953 18.9125 14.9541L22.164 18.2128H11.8338C11.368 18.2128 11 18.5774 11 19.0433V19.7589C11 20.2248 11.368 20.6262 11.8338 20.6262H22.2009L18.9126 23.903C18.7536 24.0621 18.666 24.2685 18.666 24.4947C18.666 24.7207 18.7536 24.9301 18.9126 25.0891L19.4186 25.5936C19.5777 25.7527 19.7897 25.8394 20.016 25.8394C20.2421 25.8394 20.4542 25.7516 20.6133 25.5925L26.1868 20.019C26.3463 19.8594 26.434 19.6463 26.4334 19.4198C26.4339 19.1926 26.3463 18.9794 26.1867 18.8201Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

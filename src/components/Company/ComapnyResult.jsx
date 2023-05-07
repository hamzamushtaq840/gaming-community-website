import React from 'react'
import companyRecommendation from "../../assets/companyRecommendation.png"

export default function ComapnyResult() {
  return (
    <div>
      <h4 className='font-[700] text-[24px] leading-[24px]'>Showing <span className='text-primary'>6</span> results</h4>
      <div className='grid grid-cols-1 gap-[15px] pt-[34px]'>

        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[238px] pl-[23px] pr-[25px]'>
          <div className='flex justify-between mt-[27px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <div className='flex flex-col gap-[11px]'>
                <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>

                <div className='flex gap-[7.5px] items-center'>
                  <svg width="14" height="17" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
                    <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
                    <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
                  </svg>
                  <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <p className='font-[400] text-[12px] pr-[6.198vw] leading-[17.76px] text-[rgba(255,255,255,0.6)] pl-[77px] mt-[3px]'>Andersen is a leading software development company with a strong focus on technology-intensive industries. Since its founding in 2007, the company has opened 10+ development centers in the USA and Western Europe. For over 15 years we have been helping...</p>

          <div className='flex items-center gap-[9px] mt-[11px] mb-[26px] pl-[77px] text-[rgba(255,255,255,0.7)]'>
            <div>
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4396 3.53495C18.1152 3.21299 17.6818 3.03571 17.2188 3.03571H13.6562V1.82143C13.6562 0.817032 12.8572 0 11.875 0H7.125C6.14276 0 5.34375 0.817032 5.34375 1.82143V3.03571H1.78125C1.31825 3.03571 0.884824 3.21299 0.565048 3.5302L0.562477 3.53328L0.560411 3.53495C0.558529 3.53684 0.55762 3.53932 0.555774 3.54121C0.203235 3.88903 0 4.36684 0 4.85714V15.1786C0 16.183 0.799009 17 1.78125 17H17.2188C18.201 17 19 16.183 19 15.1786V4.85714C19 4.36206 18.7939 3.87884 18.4396 3.53495ZM6.53125 1.82143C6.53125 1.48643 6.79768 1.21429 7.125 1.21429H11.875C12.2023 1.21429 12.4688 1.48643 12.4688 1.82143V3.03571H6.53125V1.82143ZM17.256 4.25704C17.256 4.25704 15.7007 7.89719 15.695 7.91062C15.5697 8.2037 15.4459 8.5 15.0812 8.5H12.4688C12.4688 7.8306 11.9362 7.28571 11.2812 7.28571H7.71875C7.06383 7.28571 6.53125 7.8306 6.53125 8.5C6.53125 8.5 3.92163 8.5 3.91881 8.5C3.54577 8.5 3.43016 8.20663 3.30505 7.91065L1.744 4.25696C1.75694 4.25615 17.2431 4.25622 17.256 4.25704ZM11.2821 9.71429H7.71875V8.5H11.2812L11.2821 9.71429ZM17.2188 15.7857H1.78125C1.45393 15.7857 1.1875 15.5136 1.1875 15.1786V5.9875L2.1967 8.3494C2.40399 9.15635 3.10385 9.71429 3.91881 9.71429H6.53125C6.53125 10.3837 7.06383 10.9286 7.71875 10.9286H11.2812C11.9362 10.9286 12.4688 10.3837 12.4688 9.71429H15.0812C15.8961 9.71429 16.596 9.15635 16.8033 8.3494L17.8125 5.9875V15.1786C17.8125 15.5136 17.5461 15.7857 17.2188 15.7857Z" fill="white" />
              </svg>
            </div>
            <p>2 jobs available</p>
          </div>

          <div className='flex gap-[10px] mb-[29px] mt-[26px] pl-[77px]'>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>Mobile App Development</button>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>Application Testing</button>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>IoT Development</button>
          </div>
        </div>

        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[238px] pl-[23px] pr-[25px]'>
          <div className='flex justify-between mt-[27px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <div className='flex flex-col gap-[11px]'>
                <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>

                <div className='flex gap-[7.5px] items-center'>
                  <svg width="14" height="17" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
                    <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
                    <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
                  </svg>
                  <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <p className='font-[400] text-[12px] leading-[17.76px] text-[rgba(255,255,255,0.6)] pl-[77px] mt-[3px]'>Andersen is a leading software development company with a strong focus on technology-intensive industries. Since its founding in 2007, the company has opened 10+ development centers in the USA and Western Europe. For over 15 years we have been helping...</p>

          <div className='flex items-center gap-[9px] mt-[11px] mb-[26px] pl-[77px] text-[rgba(255,255,255,0.7)]'>
            <div>
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4396 3.53495C18.1152 3.21299 17.6818 3.03571 17.2188 3.03571H13.6562V1.82143C13.6562 0.817032 12.8572 0 11.875 0H7.125C6.14276 0 5.34375 0.817032 5.34375 1.82143V3.03571H1.78125C1.31825 3.03571 0.884824 3.21299 0.565048 3.5302L0.562477 3.53328L0.560411 3.53495C0.558529 3.53684 0.55762 3.53932 0.555774 3.54121C0.203235 3.88903 0 4.36684 0 4.85714V15.1786C0 16.183 0.799009 17 1.78125 17H17.2188C18.201 17 19 16.183 19 15.1786V4.85714C19 4.36206 18.7939 3.87884 18.4396 3.53495ZM6.53125 1.82143C6.53125 1.48643 6.79768 1.21429 7.125 1.21429H11.875C12.2023 1.21429 12.4688 1.48643 12.4688 1.82143V3.03571H6.53125V1.82143ZM17.256 4.25704C17.256 4.25704 15.7007 7.89719 15.695 7.91062C15.5697 8.2037 15.4459 8.5 15.0812 8.5H12.4688C12.4688 7.8306 11.9362 7.28571 11.2812 7.28571H7.71875C7.06383 7.28571 6.53125 7.8306 6.53125 8.5C6.53125 8.5 3.92163 8.5 3.91881 8.5C3.54577 8.5 3.43016 8.20663 3.30505 7.91065L1.744 4.25696C1.75694 4.25615 17.2431 4.25622 17.256 4.25704ZM11.2821 9.71429H7.71875V8.5H11.2812L11.2821 9.71429ZM17.2188 15.7857H1.78125C1.45393 15.7857 1.1875 15.5136 1.1875 15.1786V5.9875L2.1967 8.3494C2.40399 9.15635 3.10385 9.71429 3.91881 9.71429H6.53125C6.53125 10.3837 7.06383 10.9286 7.71875 10.9286H11.2812C11.9362 10.9286 12.4688 10.3837 12.4688 9.71429H15.0812C15.8961 9.71429 16.596 9.15635 16.8033 8.3494L17.8125 5.9875V15.1786C17.8125 15.5136 17.5461 15.7857 17.2188 15.7857Z" fill="white" />
              </svg>
            </div>
            <p>2 jobs available</p>
          </div>

          <div className='flex gap-[10px] mb-[29px] mt-[26px] pl-[77px]'>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>Mobile App Development</button>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>Application Testing</button>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>IoT Development</button>
          </div>
        </div>

        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[238px] pl-[23px] pr-[25px]'>
          <div className='flex justify-between mt-[27px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <div className='flex flex-col gap-[11px]'>
                <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>

                <div className='flex gap-[7.5px] items-center'>
                  <svg width="14" height="17" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
                    <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
                    <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
                  </svg>
                  <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <p className='font-[400] text-[12px] leading-[17.76px] text-[rgba(255,255,255,0.6)] pl-[77px] mt-[3px]'>Andersen is a leading software development company with a strong focus on technology-intensive industries. Since its founding in 2007, the company has opened 10+ development centers in the USA and Western Europe. For over 15 years we have been helping...</p>

          <div className='flex items-center gap-[9px] mt-[11px] mb-[26px] pl-[77px] text-[rgba(255,255,255,0.7)]'>
            <div>
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4396 3.53495C18.1152 3.21299 17.6818 3.03571 17.2188 3.03571H13.6562V1.82143C13.6562 0.817032 12.8572 0 11.875 0H7.125C6.14276 0 5.34375 0.817032 5.34375 1.82143V3.03571H1.78125C1.31825 3.03571 0.884824 3.21299 0.565048 3.5302L0.562477 3.53328L0.560411 3.53495C0.558529 3.53684 0.55762 3.53932 0.555774 3.54121C0.203235 3.88903 0 4.36684 0 4.85714V15.1786C0 16.183 0.799009 17 1.78125 17H17.2188C18.201 17 19 16.183 19 15.1786V4.85714C19 4.36206 18.7939 3.87884 18.4396 3.53495ZM6.53125 1.82143C6.53125 1.48643 6.79768 1.21429 7.125 1.21429H11.875C12.2023 1.21429 12.4688 1.48643 12.4688 1.82143V3.03571H6.53125V1.82143ZM17.256 4.25704C17.256 4.25704 15.7007 7.89719 15.695 7.91062C15.5697 8.2037 15.4459 8.5 15.0812 8.5H12.4688C12.4688 7.8306 11.9362 7.28571 11.2812 7.28571H7.71875C7.06383 7.28571 6.53125 7.8306 6.53125 8.5C6.53125 8.5 3.92163 8.5 3.91881 8.5C3.54577 8.5 3.43016 8.20663 3.30505 7.91065L1.744 4.25696C1.75694 4.25615 17.2431 4.25622 17.256 4.25704ZM11.2821 9.71429H7.71875V8.5H11.2812L11.2821 9.71429ZM17.2188 15.7857H1.78125C1.45393 15.7857 1.1875 15.5136 1.1875 15.1786V5.9875L2.1967 8.3494C2.40399 9.15635 3.10385 9.71429 3.91881 9.71429H6.53125C6.53125 10.3837 7.06383 10.9286 7.71875 10.9286H11.2812C11.9362 10.9286 12.4688 10.3837 12.4688 9.71429H15.0812C15.8961 9.71429 16.596 9.15635 16.8033 8.3494L17.8125 5.9875V15.1786C17.8125 15.5136 17.5461 15.7857 17.2188 15.7857Z" fill="white" />
              </svg>
            </div>
            <p>2 jobs available</p>
          </div>

          <div className='flex gap-[10px] mb-[29px] mt-[26px] pl-[77px]'>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>Mobile App Development</button>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>Application Testing</button>
            <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] px-[12px] min-h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px]'>IoT Development</button>
          </div>
        </div>


      </div>
    </div>
  )
}
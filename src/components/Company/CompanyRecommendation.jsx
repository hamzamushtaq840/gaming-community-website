import React from 'react'
import companyRecommendation from "../../assets/companyRecommendation.png"

export default function CompanyRecommendation() {
  return (
    <div>
      <h4 className='font-[700] text-[24px] leading-[24px]'>Recommended for you</h4>
      <div className='grid grid-cols-2 gap-[25px] pt-[34px]'>

        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[323px] pl-[29px] pr-[25px]'>
          <div className='flex justify-between mt-[29px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='flex gap-[7.5px] items-center mt-[19px] mb-[17px]'>
            <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
              <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
              <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
            </svg>
            <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
          </div>
          <p className='font-[400] text-[12px] leading-[17.76px]'>Game Cooks is an indie game developer of casual VR games focused on the MENA (Middle East North Africa) region. It has developed multiple VR games including "HOVR" and an FPS game known as "VINDICTA". The games are available on Google Play store, Apple store, Oculus Store and Steam. It generates revenue through paid games and in-app purchases.</p>
          <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] w-[135px] h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px] mt-[34px] mb-[27px]'>AR/VR Development</button>
        </div>
        
        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[323px] pl-[29px] pr-[25px]'>
          <div className='flex justify-between mt-[29px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='flex gap-[7.5px] items-center mt-[19px] mb-[17px]'>
            <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
              <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
              <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
            </svg>
            <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
          </div>
          <p className='font-[400] text-[12px] leading-[17.76px]'>Game Cooks is an indie game developer of casual VR games focused on the MENA (Middle East North Africa) region. It has developed multiple VR games including "HOVR" and an FPS game known as "VINDICTA". The games are available on Google Play store, Apple store, Oculus Store and Steam. It generates revenue through paid games and in-app purchases.</p>
          <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] w-[135px] h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px] mt-[34px] mb-[27px]'>AR/VR Development</button>
        </div>

        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[323px] pl-[29px] pr-[25px]'>
          <div className='flex justify-between mt-[29px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='flex gap-[7.5px] items-center mt-[19px] mb-[17px]'>
            <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
              <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
              <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
            </svg>
            <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
          </div>
          <p className='font-[400] text-[12px] leading-[17.76px]'>Game Cooks is an indie game developer of casual VR games focused on the MENA (Middle East North Africa) region. It has developed multiple VR games including "HOVR" and an FPS game known as "VINDICTA". The games are available on Google Play store, Apple store, Oculus Store and Steam. It generates revenue through paid games and in-app purchases.</p>
          <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] w-[135px] h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px] mt-[34px] mb-[27px]'>AR/VR Development</button>
        </div>

        <div className='bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[323px] pl-[29px] pr-[25px]'>
          <div className='flex justify-between mt-[29px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyRecommendation}></img>
              <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>
            </div>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='flex gap-[7.5px] items-center mt-[19px] mb-[17px]'>
            <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
              <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
              <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
            </svg>
            <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
          </div>
          <p className='font-[400] text-[12px] leading-[17.76px]'>Game Cooks is an indie game developer of casual VR games focused on the MENA (Middle East North Africa) region. It has developed multiple VR games including "HOVR" and an FPS game known as "VINDICTA". The games are available on Google Play store, Apple store, Oculus Store and Steam. It generates revenue through paid games and in-app purchases.</p>
          <button className='border-[1px] border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.7)] w-[135px] h-[30px] bg-transparent rounded-[9px] font-[400] text-[12px] leading-[16.14px] mt-[34px] mb-[27px]'>AR/VR Development</button>
        </div>

      </div>
    </div>
  )
}

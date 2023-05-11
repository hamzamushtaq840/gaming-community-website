import React from 'react'
import companyInformationPic from "../../assets/companyInformationPic.png"
import CompanyInformationUserCard from './CompanyInformationUserCard'
import Rectangle79 from "../../assets/Rectangle 79.png"

export default function CompanyInformation() {
  return (
    <div style={{ gridTemplateColumns: "43.177vw 1fr" }} className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)] grid grid-cols-2 gap-[27px] pt-[65px] pb-[115px]'>
      <div className=''>
        <div className='w-full min-h-[416px] bg-[rgba(255,255,255,0.15)] rounded-[9px] divide-y-2 divide-[rgba(255,255,255,0.15)]'>
          <div className='flex items-center justify-between px-[67px] py-[37px]'>
            <div className='flex items-center gap-[18px]'>
              <img src={companyInformationPic} />
              <div className='flex flex-col gap-[12px]'>
                <h5 className='text-primary font-[700] text-[16px] leading-[16px]'>Game Cooks</h5>
                <div className='flex gap-[7.5px] items-center'>
                  <svg width="10.55" height="15" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.08594 10.7812C9.57213 10.7812 10.7812 9.57213 10.7812 8.08594C10.7812 6.59974 9.57213 5.39062 8.08594 5.39062C6.59974 5.39062 5.39062 6.59974 5.39062 8.08594C5.39062 9.57213 6.59974 10.7812 8.08594 10.7812ZM8.08594 7.1875C8.58134 7.1875 8.98438 7.59054 8.98438 8.08594C8.98438 8.58134 8.58134 8.98438 8.08594 8.98438C7.59054 8.98438 7.1875 8.58134 7.1875 8.08594C7.1875 7.59054 7.59054 7.1875 8.08594 7.1875Z" fill="white" />
                    <path d="M16.1719 8.08594C16.1719 3.62735 12.5445 0 8.08594 0C3.62735 0 0 3.62735 0 8.08594C0 9.8498 0.55802 11.5261 1.61377 12.9336L5.92888 18.6866C6.43573 19.3623 7.24213 19.7656 8.08594 19.7656C8.92975 19.7656 9.73614 19.3623 10.243 18.6866L14.5581 12.9336C15.6139 11.5261 16.1719 9.8498 16.1719 8.08594ZM13.1206 11.8554L8.80563 17.6083C8.63376 17.8374 8.37146 17.9688 8.08594 17.9688C7.80041 17.9688 7.53812 17.8374 7.36629 17.6084L3.05123 11.8554C2.23064 10.7614 1.79688 9.4579 1.79688 8.08594C1.79688 4.61815 4.61815 1.79688 8.08594 1.79688C11.5537 1.79688 14.375 4.61815 14.375 8.08594C14.375 9.4579 13.9412 10.7614 13.1206 11.8554Z" fill="white" />
                    <path d="M12.5781 22.1016C12.5781 21.6054 12.1759 21.2031 11.6797 21.2031H4.49219C3.99598 21.2031 3.59375 21.6054 3.59375 22.1016C3.59375 22.5978 3.99598 23 4.49219 23H11.6797C12.1759 23 12.5781 22.5978 12.5781 22.1016Z" fill="white" />
                  </svg>
                  <p className='font-[400] text-[12px] leading-[12px]'>Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <div>
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M22.0373 2.09646C20.7959 0.762155 19.0565 0.00295418 17.234 0.000139715C15.4101 0.00225056 13.6688 0.761049 12.4255 2.09561L12.0018 2.54336L11.578 2.09561C9.11101 -0.559586 4.95858 -0.71207 2.30343 1.75496C2.18578 1.86432 2.07215 1.9779 1.96278 2.09561C-0.654261 4.91841 -0.654261 9.28092 1.96278 12.1037L11.3791 22.0338C11.7048 22.3777 12.2477 22.3924 12.5916 22.0667C12.6029 22.056 12.6139 22.0451 12.6245 22.0338L22.0374 12.1037C24.6542 9.28122 24.6542 4.91896 22.0373 2.09646ZM20.7962 10.9226H20.7953L12.0018 20.1974L3.20738 10.9226C1.20811 8.76573 1.20811 5.43275 3.20738 3.27587C5.02296 1.30806 8.09007 1.18468 10.0579 3.00025C10.1534 3.08841 10.2453 3.18033 10.3335 3.27587L11.3791 4.37894C11.7236 4.7213 12.2799 4.7213 12.6245 4.37894L13.6701 3.27672C15.4857 1.30891 18.5528 1.18553 20.5206 3.00111C20.6161 3.08926 20.708 3.18118 20.7962 3.27672C22.8129 5.43702 22.8276 8.77608 20.7962 10.9226Z" fill="white" />
                </g>
              </svg>
            </div>
          </div>

          <div className='px-[67px] pt-[32px] pb-[51px]'>
            <p className='font-[400] text-[12px] leading-[17.76px] text-[rgba(255,255,255,0.7)]'>
              Pixel38 is a full-stack web and mobile development agency, with a portfolio spanning CRM, E-commerce, the Internet of things, Blockchain, and more. With a mission to help and support startups, Pixel38 helps build teams and products with competitive rates and agility in mind.
              Pixel38 is a digital agency with a mission to help companies solve problems with design and technology, maintaining long-term relationships along the way.Pixel38 has a pool of talents who will deliver outstanding portal solutions along with groundbreaking ideas for your company.
              We engineer digital products people love to use.
              We specialize in development solutions for Startups and Enterprises.
            </p>
          </div>
        </div>

        <div className='w-full bg-[rgba(255,255,255,0.15)] rounded-[9px] min-h-[515px] mt-[27px] px-[67px] grid grid-cols-2 gap-[17px] py-[38px]'>
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
          <CompanyInformationUserCard />
        </div>
      </div>

      <div>
        <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] w-full min-h-[322px] py-[44px] pl-[38px] pr-[37px] flex flex-col gap-[20px]'>
          <div className='w-full h-[77px] rounded-[9px] border-[1px] border-[rgba(255,255,255,0.7)] flex justify-between items-center px-[35px]'>
            <div className='flex flex-col gap-[4px]'>
              <p className='font-[700] text-[16px] leading-[21.52px] text-[rgba(255,255,255,0.7)]'>Visit Website</p>
              <p className='font-[400] text-[14px] leading-[18.83px] text-[rgba(255,255,255,0.7)]'>pixel38.com</p>
            </div>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M0.790057 0.255715L0.262181 0.779948C0.0973254 0.944934 0.00650524 1.16444 0.00650525 1.39903C0.00650526 1.6335 0.0973255 1.85327 0.262181 2.01825L6.24252 7.99833L0.255546 13.9853C0.0906901 14.15 -7.14293e-08 14.3698 -6.11804e-08 14.6043C-5.09316e-08 14.8387 0.0906901 15.0586 0.255546 15.2235L0.780169 15.7478C1.12133 16.0893 1.67705 16.0893 2.01821 15.7478L9.17206 8.61963C9.33678 8.4549 9.45284 8.2354 9.45284 7.99885L9.45284 7.99612C9.45284 7.76152 9.33665 7.54202 9.17206 7.37729L2.0376 0.255715C1.87287 0.0907296 1.64673 0.000169682 1.41227 -9.16145e-05C1.17767 -9.16042e-05 0.954652 0.0907297 0.790057 0.255715Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='w-full h-[77px] rounded-[9px] border-[1px] border-[rgba(255,255,255,0.7)] flex justify-between items-center px-[35px]'>
            <div className='flex flex-col gap-[4px]'>
              <p className='font-[700] text-[16px] leading-[21.52px] text-[rgba(255,255,255,0.7)]'>Phone Number</p>
              <p className='font-[400] text-[14px] leading-[18.83px] text-[rgba(255,255,255,0.7)]'>+96176939545</p>
            </div>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M0.790057 0.255715L0.262181 0.779948C0.0973254 0.944934 0.00650524 1.16444 0.00650525 1.39903C0.00650526 1.6335 0.0973255 1.85327 0.262181 2.01825L6.24252 7.99833L0.255546 13.9853C0.0906901 14.15 -7.14293e-08 14.3698 -6.11804e-08 14.6043C-5.09316e-08 14.8387 0.0906901 15.0586 0.255546 15.2235L0.780169 15.7478C1.12133 16.0893 1.67705 16.0893 2.01821 15.7478L9.17206 8.61963C9.33678 8.4549 9.45284 8.2354 9.45284 7.99885L9.45284 7.99612C9.45284 7.76152 9.33665 7.54202 9.17206 7.37729L2.0376 0.255715C1.87287 0.0907296 1.64673 0.000169682 1.41227 -9.16145e-05C1.17767 -9.16042e-05 0.954652 0.0907297 0.790057 0.255715Z" fill="white" />
              </g>
            </svg>
          </div>
          <button className='bg-primary w-full h-[40px] flex justify-center items-center gap-[8.6px] rounded-[9px] font-[400] text-[14px] leading-[19.07px]'>
            <div>
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M6.3125 12.6992V16.0436C6.3125 16.2772 6.46248 16.4842 6.68458 16.5577C6.7401 16.5757 6.79707 16.5844 6.85331 16.5844C7.02204 16.5844 7.18501 16.5051 7.28884 16.3637L9.24513 13.7015L6.3125 12.6992Z" fill="white" />
                  <path d="M17.0788 0.100294C16.913 -0.017242 16.6952 -0.0331058 16.5149 0.0613557L0.290627 8.53405C0.0988201 8.63428 -0.0143895 8.83906 0.00147423 9.05467C0.0180591 9.27099 0.161554 9.45559 0.36562 9.52553L4.87598 11.0672L14.4815 2.8541L7.04859 11.8092L14.6077 14.3928C14.6639 14.4116 14.723 14.4217 14.7822 14.4217C14.8802 14.4217 14.9776 14.395 15.0634 14.3431C15.2004 14.2594 15.2934 14.1188 15.3172 13.9609L17.3002 0.620914C17.3298 0.419012 17.2447 0.218551 17.0788 0.100294Z" fill="white" />
                </g>
              </svg>
            </div>
            Message
          </button>
        </div>
        <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] min-h-[578px] w-full mt-[28px] divide-y-2 divide-[rgba(255,255,255,0.15)]'>
          <div className='pl-[38px]'>
            <h5 className='font-[700] text-[18px] leading-[18px] py-[25px] '>Similar Companies</h5>
          </div>
          <div className='py-[35px] px-[38px] space-y-[31px]'>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[13px]'>
                <h5 className='font-[700] text-[16px] leading-[16px] text-primary'>Mohamad Zbib</h5>
                <p className='font-[700] text-[14px] leading-[14px]'>Web Developer at Pixel38</p>
              </div>
            </div>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[13px]'>
                <h5 className='font-[700] text-[16px] leading-[16px] text-primary'>Mohamad Zbib</h5>
                <p className='font-[700] text-[14px] leading-[14px]'>Web Developer at Pixel38</p>
              </div>
            </div>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[13px]'>
                <h5 className='font-[700] text-[16px] leading-[16px] text-primary'>Mohamad Zbib</h5>
                <p className='font-[700] text-[14px] leading-[14px]'>Web Developer at Pixel38</p>
              </div>
            </div>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[13px]'>
                <h5 className='font-[700] text-[16px] leading-[16px] text-primary'>Mohamad Zbib</h5>
                <p className='font-[700] text-[14px] leading-[14px]'>Web Developer at Pixel38</p>
              </div>
            </div>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[13px]'>
                <h5 className='font-[700] text-[16px] leading-[16px] text-primary'>Mohamad Zbib</h5>
                <p className='font-[700] text-[14px] leading-[14px]'>Web Developer at Pixel38</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
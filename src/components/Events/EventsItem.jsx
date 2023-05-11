import React from 'react'
import groupImage from '../../assets/groupImage.svg'
import { useNavigate } from 'react-router-dom'

const EventsItem = () => {
  const navigate = useNavigate()

  return (
    <div className='flex hover:bg-[#3f3f3fc1] transition-all duration-350 cursor-pointer xsm:flex-col sm:flex-col md:flex-col' onClick={() => navigate('/events/singleEventDetail', { state: 'hello' })}>
      {/* img and content div */}
      <div className='flex xsm:flex-col sm:flex-col md:flex-col xsm:items-start sm:items-start md:items-start  px-[30px] xsm:px-[22px] sm:px-[22px]'>
        <div className='flex flex-col xsm:w-full sm:w-full md:w-full sm:flex-row sm:justify-between xsm:flex-row xsm:justify-between md:flex-row md:justify-between gap-[24px] my-[22px] mr-[1.40625vw] xsm:mr-[15px] sm:mr-[15px]'>
          <img src={groupImage} className='min-w-[260px] w-[275px]  min-h-[156px] ' alt="" />
          <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M20.3 29C20.1067 29 19.9133 28.9396 19.7442 28.8248L10.6333 22.4448L1.5225 28.8248C1.22646 29.0302 0.839792 29.0544 0.519583 28.8913C0.199375 28.7221 0 28.3958 0 28.0333V0.966667C0 0.435 0.435 0 0.966667 0H20.3C20.8317 0 21.2667 0.435 21.2667 0.966667V28.0333C21.2667 28.3958 21.0673 28.7221 20.7471 28.8913C20.6081 28.9638 20.451 29 20.3 29ZM10.6333 20.3C10.8267 20.3 11.02 20.3604 11.1892 20.4752L19.3333 26.1785V1.93333H1.93333V26.1785L10.0775 20.4752C10.2467 20.3604 10.44 20.3 10.6333 20.3Z" fill="white" />
              <path d="M14.4039 18.4882C14.2529 18.4882 14.0958 18.452 13.9569 18.3795L10.6339 16.6334L7.31103 18.3795C6.98478 18.5486 6.59207 18.5245 6.29603 18.307C5.99999 18.0895 5.84895 17.727 5.90937 17.3645L6.54374 13.667L3.8552 11.0509C3.58937 10.7911 3.49874 10.4105 3.60749 10.0601C3.71624 9.70969 4.02437 9.45594 4.38687 9.40156L8.10249 8.86385L9.76395 5.49865C9.92708 5.16635 10.2654 4.96094 10.6279 4.96094C10.9904 4.96094 11.3287 5.1724 11.4919 5.49865L13.1533 8.86385L16.869 9.40156C17.2315 9.45594 17.5335 9.70969 17.6483 10.0601C17.7631 10.4105 17.6665 10.7972 17.4006 11.0509L14.7121 13.667L15.3465 17.3645C15.4069 17.727 15.2619 18.0955 14.9598 18.307C14.8027 18.4278 14.6033 18.4882 14.4039 18.4882ZM10.6339 14.5732C10.791 14.5732 10.9421 14.6095 11.081 14.682L13.1171 15.7514L12.7304 13.4857C12.676 13.1716 12.7787 12.8514 13.0083 12.6278L14.6577 11.0207L12.38 10.6884C12.0658 10.6401 11.794 10.4468 11.655 10.1628L10.6339 8.1026L9.61291 10.1689C9.47395 10.4528 9.20208 10.6522 8.88791 10.6945L6.6102 11.0268L8.25957 12.6339C8.48916 12.8574 8.59187 13.1776 8.53749 13.4918L8.15082 15.7574L10.1869 14.688C10.3258 14.6095 10.4769 14.5732 10.6339 14.5732Z" fill="white" />
            </g>
          </svg>
        </div>
        <div className='flex w-full flex-col h-full items-start gap-[15px]  xsm:py-[0px] sm:py-[0px] md:py-[0px] xsm:justify-start xsm:gap-[9px] sm:justify-start sm:gap-[9px] md:justify-start md:gap-[9px] py-[22px]'>
          <h1 className='text-custom-16 font-[700]'>Harvard Interactive Media Group</h1>
          <p className='font-[400] text-[#FF5359] text-custom-14'>Wednesday, March 4, 2023 at 11 AM (US/Eastern)</p>
          {/* location div*/}
          <p className='text-custom-12 opacity-70 font-[400] leading-[19.02px] flex items-center gap-[7.45px]'><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27344 7.03125C6.2427 7.03125 7.03125 6.2427 7.03125 5.27344C7.03125 4.30418 6.2427 3.51562 5.27344 3.51562C4.30418 3.51562 3.51562 4.30418 3.51562 5.27344C3.51562 6.2427 4.30418 7.03125 5.27344 7.03125ZM5.27344 4.6875C5.59652 4.6875 5.85938 4.95035 5.85938 5.27344C5.85938 5.59652 5.59652 5.85938 5.27344 5.85938C4.95035 5.85938 4.6875 5.59652 4.6875 5.27344C4.6875 4.95035 4.95035 4.6875 5.27344 4.6875Z" fill="white" />
            <path d="M10.5469 5.27344C10.5469 2.36566 8.18121 0 5.27344 0C2.36566 0 0 2.36566 0 5.27344C0 6.42378 0.363926 7.51702 1.05246 8.43498L3.86666 12.1869C4.19722 12.6276 4.72312 12.8906 5.27344 12.8906C5.82375 12.8906 6.34966 12.6276 6.68024 12.1869L9.49441 8.43498C10.1829 7.51702 10.5469 6.42378 10.5469 5.27344ZM8.55694 7.7318L5.7428 11.4837C5.63071 11.6331 5.45965 11.7188 5.27344 11.7188C5.08723 11.7188 4.91616 11.6331 4.8041 11.4837L1.98993 7.7318C1.45477 7.0183 1.17188 6.16819 1.17188 5.27344C1.17188 3.01184 3.01184 1.17188 5.27344 1.17188C7.53504 1.17188 9.375 3.01184 9.375 5.27344C9.375 6.16819 9.09211 7.0183 8.55694 7.7318Z" fill="white" />
            <path d="M8.20312 14.4141C8.20312 14.0904 7.9408 13.8281 7.61719 13.8281H2.92969C2.60607 13.8281 2.34375 14.0904 2.34375 14.4141C2.34375 14.7377 2.60607 15 2.92969 15H7.61719C7.9408 15 8.20312 14.7377 8.20312 14.4141Z" fill="white" />
          </svg>
            Harvard Law School, Cambridge, MA, USA
          </p>
          <p className='ellipsisShow opacity-70 font-[400] text-custom-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic totam est nulla officiis, voluptates dolorum labore iste cum voluptatem dignissimos consequatur autem? Expedita, molestiae, laboriosam voluptatum repellendus, sit possimus porro qui repellat provident ut error cupiditate assumenda! Nesciunt eveniet iusto laboriosam deleniti corporis tenetur vero consequuntur at voluptas nam sit, id cum omnis quam earum voluptatibus nemo tempora pariatur reiciendis magnam blanditiis modi voluptates. Perspiciatis iste distinctio voluptate doloremque, iure, voluptatem placeat sapiente iusto non praesentium quaerat eveniet voluptatum quibusdam omnis. Ad nulla quas quaerat quibusdam accusamus eum, laudantium vero in reiciendis repudiandae nisi illum, consequuntur eligendi dolorem veritatis iste!</p>
          <div className='flex gap-[17px] items-start'>
            <p className='text-custom-14'>Tags:</p>
            <div className='flex gap-[11px] flex-wrap'>
              <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                Lorem ipsum
              </div>
              <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                Lorem ipsum
              </div>
              <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                Lorem ipsum
              </div>
              <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                Lorem ipsum
              </div>
              <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                Lorem ipsum
              </div>
            </div>
          </div>
          <p className='opacity-70 font-[400] text-custom-14'>By Lorem Ipsum | User Submitted Event</p>
        </div>
      </div>
      {/* past div */}
      <div className='xsm:flex-row xsm:min-w-full xsm:pl-[22px] sm:flex-row sm:min-w-full sm:pl-[22px] md:flex-row md:min-w-full md:pl-[30px] xsm:py-[15px] sm:py-[15px] py-[26px] flex items-start xsm:justify-end sm:justify-end md:justify-end pr-[19.3px]'>
        <div className='bg-[rgba(255,255,255,0.2)] flex gap-[4.09px] rounded-[5px] px-[0.8125em] py-[0.3125em] text-custom-14 items-center'>
          <p className='text-[14px]'>Past</p>
        </div>
      </div>
    </div>

  )
}

export default EventsItem
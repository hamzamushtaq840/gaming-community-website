import React from 'react'
import eye from '../../assets/eye.svg'
import groupImage from '../../assets/groupImage.svg'
import message from '../../assets/message.svg'
import { useNavigate } from 'react-router-dom'

const GroupItem = () => {
  const navigate = useNavigate()

  return (
    <div className='flex hover:bg-[#3f3f3fc1] transition-all duration-350 cursor-pointer xsm:flex-col sm:flex-col md:flex-col' onClick={() => navigate('/labs-and-groups/singleGroupDetail', { state: 'hello' })}>
      <div className='flex-1 flex xsm:flex-col sm:flex-col md:flex-col items-center  xsm:items-start sm:items-start md:items-start  px-[30px] xsm:px-[22px] sm:px-[22px]'>
        <img src={groupImage} className='w-[275px] h-[178px] my-[22px] mr-[1.40625vw] xsm:mr-[15px] sm:mr-[15px]' alt="" />
        <div className='flex flex-col h-full items-start justify-between gap-[15px]  xsm:py-[0px] sm:py-[0px] md:py-[0px] xsm:justify-start xsm:gap-[9px] sm:justify-start sm:gap-[9px] md:justify-start md:gap-[9px] py-[22px]'>
          <h1 className='text-custom-16 font-[700]'>Harvard Interactive Media Group</h1>
          <p className='ellipsisShow opacity-70 font-[400] text-custom-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic totam est nulla officiis, voluptates dolorum labore iste cum voluptatem dignissimos consequatur autem? Expedita, molestiae, laboriosam voluptatum repellendus, sit possimus porro qui repellat provident ut error cupiditate assumenda! Nesciunt eveniet iusto laboriosam deleniti corporis tenetur vero consequuntur at voluptas nam sit, id cum omnis quam earum voluptatibus nemo tempora pariatur reiciendis magnam blanditiis modi voluptates. Perspiciatis iste distinctio voluptate doloremque, iure, voluptatem placeat sapiente iusto non praesentium quaerat eveniet voluptatum quibusdam omnis. Ad nulla quas quaerat quibusdam accusamus eum, laudantium vero in reiciendis repudiandae nisi illum, consequuntur eligendi dolorem veritatis iste!</p>
          <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
            Lorem ipsum
          </div>
          <div className='bg-[rgba(255,255,255,0.5)] flex gap-[4.09px] rounded-[5px] px-[0.4375em] py-[0.25em] text-custom-14 items-center'>
            <img src={eye} alt="" />
            <p className='text-[14px]'>10</p>
          </div>
        </div>
      </div>
      <div className='xsm:flex-row xsm:min-w-full xsm:pl-[22px] sm:flex-row sm:min-w-full sm:pl-[22px] md:flex-row md:min-w-full md:pl-[30px] w-[6.71875vw] min-w-[80px] xsm:py-[15px] sm:py-[15px] py-[26px]  flex flex-col items-end pr-[19.3px] justify-between'>
        <svg onClick={(e) => e.stopPropagation()} width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M20.3 29C20.1067 29 19.9133 28.9396 19.7442 28.8248L10.6333 22.4448L1.5225 28.8248C1.22646 29.0302 0.839792 29.0544 0.519583 28.8913C0.199375 28.7221 0 28.3958 0 28.0333V0.966667C0 0.435 0.435 0 0.966667 0H20.3C20.8317 0 21.2667 0.435 21.2667 0.966667V28.0333C21.2667 28.3958 21.0673 28.7221 20.7471 28.8913C20.6081 28.9638 20.451 29 20.3 29ZM10.6333 20.3C10.8267 20.3 11.02 20.3604 11.1892 20.4752L19.3333 26.1785V1.93333H1.93333V26.1785L10.0775 20.4752C10.2467 20.3604 10.44 20.3 10.6333 20.3Z" fill="white" />
            <path d="M14.4039 18.4882C14.2529 18.4882 14.0958 18.452 13.9569 18.3795L10.6339 16.6334L7.31103 18.3795C6.98478 18.5486 6.59207 18.5245 6.29603 18.307C5.99999 18.0895 5.84895 17.727 5.90937 17.3645L6.54374 13.667L3.8552 11.0509C3.58937 10.7911 3.49874 10.4105 3.60749 10.0601C3.71624 9.70969 4.02437 9.45594 4.38687 9.40156L8.10249 8.86385L9.76395 5.49865C9.92708 5.16635 10.2654 4.96094 10.6279 4.96094C10.9904 4.96094 11.3287 5.1724 11.4919 5.49865L13.1533 8.86385L16.869 9.40156C17.2315 9.45594 17.5335 9.70969 17.6483 10.0601C17.7631 10.4105 17.6665 10.7972 17.4006 11.0509L14.7121 13.667L15.3465 17.3645C15.4069 17.727 15.2619 18.0955 14.9598 18.307C14.8027 18.4278 14.6033 18.4882 14.4039 18.4882ZM10.6339 14.5732C10.791 14.5732 10.9421 14.6095 11.081 14.682L13.1171 15.7514L12.7304 13.4857C12.676 13.1716 12.7787 12.8514 13.0083 12.6278L14.6577 11.0207L12.38 10.6884C12.0658 10.6401 11.794 10.4468 11.655 10.1628L10.6339 8.1026L9.61291 10.1689C9.47395 10.4528 9.20208 10.6522 8.88791 10.6945L6.6102 11.0268L8.25957 12.6339C8.48916 12.8574 8.59187 13.1776 8.53749 13.4918L8.15082 15.7574L10.1869 14.688C10.3258 14.6095 10.4769 14.5732 10.6339 14.5732Z" fill="white" />
          </g>
        </svg>
        <button onClick={(e) => e.stopPropagation()} className='bg-primary rounded-[9px] py-[.6em] text-custom-14 w-[7.65625vw] min-w-[100px] gap-[9px] flex justify-center items-center'><img src={message} alt="" />Message</button>
      </div>
    </div>

  )
}

export default GroupItem
import React from 'react'
import user from './../../assets/user.svg'
import { useNavigate } from 'react-router-dom'

const SingleInvestor = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full cursor-pointer dark:hover:bg-[rgba(255,255,255,0.3)] hover:bg-[#ffffffd4] transition-all duration-300  dark:bg-[rgba(255,255,255,0.2)] bg-white rounded-[9px] px-[1.40625vw] xsm:px-[20px] sm:px-[20px] flex' onClick={() => navigate('/investor/singleInvestorDetail')}>
      <img src={user} alt="" className='w-[90px] h-[90px] xsm:w-[50px] xsm:h-[60px] mr-[22px] my-[29px]' />
      <div className='flex flex-1 flex-col py-[29px] gap-[14px]'>
        <h1 className='text-custom-16 font-[700]'>Investor Name</h1>
        <p className='text-custom-14 opacity-70 w-[80%] mb-[9px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem ducimus hic dolorum aperiam reiciendis ullam dignissimos veniam esse iure.</p>
        <div className='flex gap-[17px] items-start'>
          <p className='text-custom-14'>Investment Tags:</p>
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
      </div>
      <svg className='my-[24px]' width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M20.3 29C20.1067 29 19.9133 28.9396 19.7442 28.8248L10.6333 22.4448L1.5225 28.8248C1.22646 29.0302 0.839792 29.0544 0.519583 28.8913C0.199375 28.7221 0 28.3958 0 28.0333V0.966667C0 0.435 0.435 0 0.966667 0H20.3C20.8317 0 21.2667 0.435 21.2667 0.966667V28.0333C21.2667 28.3958 21.0673 28.7221 20.7471 28.8913C20.6081 28.9638 20.451 29 20.3 29ZM10.6333 20.3C10.8267 20.3 11.02 20.3604 11.1892 20.4752L19.3333 26.1785V1.93333H1.93333V26.1785L10.0775 20.4752C10.2467 20.3604 10.44 20.3 10.6333 20.3Z" fill="white" />
          <path d="M14.4039 18.4882C14.2529 18.4882 14.0958 18.452 13.9569 18.3795L10.6339 16.6334L7.31103 18.3795C6.98478 18.5486 6.59207 18.5245 6.29603 18.307C5.99999 18.0895 5.84895 17.727 5.90937 17.3645L6.54374 13.667L3.8552 11.0509C3.58937 10.7911 3.49874 10.4105 3.60749 10.0601C3.71624 9.70969 4.02437 9.45594 4.38687 9.40156L8.10249 8.86385L9.76395 5.49865C9.92708 5.16635 10.2654 4.96094 10.6279 4.96094C10.9904 4.96094 11.3287 5.1724 11.4919 5.49865L13.1533 8.86385L16.869 9.40156C17.2315 9.45594 17.5335 9.70969 17.6483 10.0601C17.7631 10.4105 17.6665 10.7972 17.4006 11.0509L14.7121 13.667L15.3465 17.3645C15.4069 17.727 15.2619 18.0955 14.9598 18.307C14.8027 18.4278 14.6033 18.4882 14.4039 18.4882ZM10.6339 14.5732C10.791 14.5732 10.9421 14.6095 11.081 14.682L13.1171 15.7514L12.7304 13.4857C12.676 13.1716 12.7787 12.8514 13.0083 12.6278L14.6577 11.0207L12.38 10.6884C12.0658 10.6401 11.794 10.4468 11.655 10.1628L10.6339 8.1026L9.61291 10.1689C9.47395 10.4528 9.20208 10.6522 8.88791 10.6945L6.6102 11.0268L8.25957 12.6339C8.48916 12.8574 8.59187 13.1776 8.53749 13.4918L8.15082 15.7574L10.1869 14.688C10.3258 14.6095 10.4769 14.5732 10.6339 14.5732Z" fill="white" />
        </g>
      </svg>
    </div>
  )
}

export default SingleInvestor
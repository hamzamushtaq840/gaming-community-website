import React from 'react'
import groupImage from './../../assets/groupImage.svg'

const SingleAttendingEvent = () => {
  return (
    <div className='relative flex flex-col justify-center overflow-hidden rounded-[9px] bg-white dark:bg-[rgba(255,255,255,0.2)]'>
      <img src={groupImage} className='w-full h-[200] xsm:h-[150]' />
      <div className='flex flex-col px-[23px] xsm:px-[10px] sm:px-[10px] mt-[19px] mb-[26px]'>
        <h1 className='mb-[12px] font-[700] text-custom-18'>Event Title</h1>
        <p className='text-custom-14'>March 7, 2023 | 08:23 PM</p>
      </div>
      <div className='py-[9px] px-[14px] rounded-[9px] top-[14px] right-[15px] absolute bg-white'>
        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2727 21.8182C15.1273 21.8182 14.9818 21.7727 14.8545 21.6864L8 16.8864L1.14545 21.6864C0.922727 21.8409 0.631818 21.8591 0.390909 21.7364C0.15 21.6091 0 21.3636 0 21.0909V0.727273C0 0.327273 0.327273 0 0.727273 0H15.2727C15.6727 0 16 0.327273 16 0.727273V21.0909C16 21.3636 15.85 21.6091 15.6091 21.7364C15.5045 21.7909 15.3864 21.8182 15.2727 21.8182ZM8 15.2727C8.14545 15.2727 8.29091 15.3182 8.41818 15.4045L14.5455 19.6955V1.45455H1.45455V19.6955L7.58182 15.4045C7.70909 15.3182 7.85455 15.2727 8 15.2727Z" fill="#ABABAB" />
          <path d="M10.8372 13.9097C10.7236 13.9097 10.6054 13.8824 10.5009 13.8279L8.00088 12.5142L5.50088 13.8279C5.25542 13.9551 4.95997 13.937 4.73724 13.7733C4.51451 13.6097 4.40088 13.337 4.44633 13.0642L4.9236 10.2824L2.90088 8.31424C2.70088 8.11878 2.6327 7.83242 2.71451 7.56879C2.79633 7.30515 3.02815 7.11424 3.30088 7.07333L6.09633 6.66879L7.34633 4.13697C7.46906 3.88697 7.7236 3.73242 7.99633 3.73242C8.26906 3.73242 8.5236 3.89151 8.64633 4.13697L9.89633 6.66879L12.6918 7.07333C12.9645 7.11424 13.1918 7.30515 13.2781 7.56879C13.3645 7.83242 13.2918 8.12333 13.0918 8.31424L11.0691 10.2824L11.5463 13.0642C11.5918 13.337 11.4827 13.6142 11.2554 13.7733C11.1372 13.8642 10.9872 13.9097 10.8372 13.9097ZM8.00088 10.9642C8.11906 10.9642 8.23269 10.9915 8.33724 11.0461L9.86906 11.8506L9.57815 10.1461C9.53724 9.90969 9.61451 9.66878 9.78724 9.5006L11.0281 8.29151L9.31451 8.04151C9.07815 8.00515 8.8736 7.85969 8.76906 7.64606L8.00088 6.09606L7.2327 7.6506C7.12815 7.86424 6.9236 8.01424 6.68724 8.04606L4.9736 8.29606L6.21451 9.50515C6.38724 9.67333 6.46451 9.91424 6.4236 10.1506L6.13269 11.8551L7.66451 11.0506C7.76906 10.9915 7.88269 10.9642 8.00088 10.9642Z" fill="#ABABAB" />
        </svg>
      </div>
    </div>
  )
}

export default SingleAttendingEvent
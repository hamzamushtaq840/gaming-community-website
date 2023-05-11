import React from 'react'
import event from '../../assets/eventPfp.svg'
import PeopleAttending from './PeopleAttending'
import { useNavigate } from 'react-router-dom'

const SingleEventDetail = () => {
  const navigate = useNavigate()

  return (
    <div className='py-[64px] px-[8.28125vw] xsm:px-[6vw] sm:px-[6vw] dark:bg-black dark:text-white bg-white text-black'>
      <div className='divide-y-[0.1px] divide-[#ccc] pt-[35px] rounded-[9px] bg-white dark:bg-[rgba(255,255,255,0.2)]'>
        <div className='flex sm:flex-col sm:items-center  xsm:flex-col xsm:items-center mb-[37px] gap-[1.6145833333333333vw] xsm:gap-[15px] ml-[1.875vw] sm:gap-[15px]'>
          <img src={event} className='w-[25.885416666666668vw] object-contain sm:min-w-[300px] xsm:min-w-[300px]' alt="" />
          <div className='flex flex-col justify-between gap-[15px] sm:text-center xsm:text-center sm:px-[20px] xsm:px-[20px] xsm:items-center xsm:gap-[9px] sm:items-center sm:gap-[9px]'>
            <p className='text-custom-14 mb-[-5px] opacity-50 font-[400] leading-[14px] flex items-center gap-[7.45px]'>
              Application
            </p>
            <h1 className='text-custom-24 font-[700] leading-[35.28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1>
            <p className='font-[700] text-[#FF5359] text-custom-16'>Website</p>
            <div className='flex flex-col gap-[15px]'>
              <div className='flex gap-[15px]'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="23" height="23" fill="#D9D9D9" />
                </svg>
                <p className='text-custom-16 font-[400] leading-[25.34px]'>Wednesday, March 4, 2023 at 11 AM (US/Eastern)</p>
              </div>
              <div className='flex gap-[15px]'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="23" height="23" fill="#D9D9D9" />
                </svg>
                <p className='text-custom-16 font-[400] leading-[25.34px]'>Wednesday, March 4, 2023 at 11 AM (US/Eastern)</p>
              </div>
            </div>
            <p className='opacity-70 font-[400] text-custom-14'>By Lorem Ipsum | User Submitted Event</p>
          </div>
          <div className='flex items-start mr-[19px]'>
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.5" width="44" height="40" rx="9" fill="white" />
              <path d="M29.2727 30.8182C29.1273 30.8182 28.9818 30.7727 28.8545 30.6864L22 25.8864L15.1455 30.6864C14.9227 30.8409 14.6318 30.8591 14.3909 30.7364C14.15 30.6091 14 30.3636 14 30.0909V9.72727C14 9.32727 14.3273 9 14.7273 9H29.2727C29.6727 9 30 9.32727 30 9.72727V30.0909C30 30.3636 29.85 30.6091 29.6091 30.7364C29.5045 30.7909 29.3864 30.8182 29.2727 30.8182ZM22 24.2727C22.1455 24.2727 22.2909 24.3182 22.4182 24.4045L28.5455 28.6955V10.4545H15.4545V28.6955L21.5818 24.4045C21.7091 24.3182 21.8545 24.2727 22 24.2727Z" fill="white" />
              <path d="M24.8372 22.9097C24.7236 22.9097 24.6054 22.8824 24.5009 22.8279L22.0009 21.5142L19.5009 22.8279C19.2554 22.9551 18.96 22.937 18.7372 22.7733C18.5145 22.6097 18.4009 22.337 18.4463 22.0642L18.9236 19.2824L16.9009 17.3142C16.7009 17.1188 16.6327 16.8324 16.7145 16.5688C16.7963 16.3051 17.0282 16.1142 17.3009 16.0733L20.0963 15.6688L21.3463 13.137C21.4691 12.887 21.7236 12.7324 21.9963 12.7324C22.2691 12.7324 22.5236 12.8915 22.6463 13.137L23.8963 15.6688L26.6918 16.0733C26.9645 16.1142 27.1918 16.3051 27.2781 16.5688C27.3645 16.8324 27.2918 17.1233 27.0918 17.3142L25.0691 19.2824L25.5463 22.0642C25.5918 22.337 25.4827 22.6142 25.2554 22.7733C25.1372 22.8642 24.9872 22.9097 24.8372 22.9097ZM22.0009 19.9642C22.1191 19.9642 22.2327 19.9915 22.3372 20.0461L23.8691 20.8506L23.5782 19.1461C23.5372 18.9097 23.6145 18.6688 23.7872 18.5006L25.0281 17.2915L23.3145 17.0415C23.0781 17.0051 22.8736 16.8597 22.7691 16.6461L22.0009 15.0961L21.2327 16.6506C21.1281 16.8642 20.9236 17.0142 20.6872 17.0461L18.9736 17.2961L20.2145 18.5051C20.3872 18.6733 20.4645 18.9142 20.4236 19.1506L20.1327 20.8551L21.6645 20.0506C21.7691 19.9915 21.8827 19.9642 22.0009 19.9642Z" fill="white" />
            </svg>
          </div>
        </div>
        <p className='py-[16px] px-[19px] flex justify-end'>
          <div className='bg-[rgba(255,255,255,0.2)] text-custom-16 h-[34px] w-[64px] flex items-center justify-center rounded-[5px]'>Past</div>
        </p>
      </div>
      <div className='flex gap-[1.09375vw] xsm:gap-[20px] sm:gap-[20px] xsm:flex-col sm:flex-col'>
        <div className='flex flex-col sm:w-full xsm:w-full  gap-[1.2544802867383513vw] mt-[32px] sm:flex-col xsm:flex-col xsm:gap-[20px] sm:gap-[20px]'>
          <div className='w-full flex flex-col rounded-[9px] bg-white dark:bg-[rgba(255,255,255,0.2)]  pt-[41px] px-[1.71875vw]  xsm:px-[20px] sm:px-[20px] pb-[48px]'>
            <div>
              <p className='text-custom-14 opacity-70 xsm:px-[10px] sm:px-[10px] text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid ex! Harum, est molestiae quasi blanditiis veritatis sunt! Minima quae minus sequi vel omnis voluptates tenetur aspernatur quisquam qui molestiae officia, porro incidunt labore neque pariatur quos optio atque numquam accusamus rem similique quam dignissimos. Quae, sapiente. Quibusdam architecto, consequatur quaerat tempore, alias quo praesentium impedit excepturi ex repudiandae nulla dolorem accusantium officiis sunt saepe sint sed consectetur odit eveniet eum aliquam quisquam. Reprehenderit odit quas molestiae corrupti quae dignissimos. Omnis in officiis quae, doloremque laudantium fugit. Nisi, molestias! Optio illo quae facere voluptate atque eaque illum asperiores recusandae est!</p>
            </div>
            <div className='mt-[46px]'>
              <div className='flex gap-[17px] xsm:px-[10px] sm:px-[10px] items-center'>
                <p className='text-custom-14 w-[20px] mr-[17px]'>Tags:</p>
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
              <p className='mt-[46px] xsm:px-[10px] sm:px-[10px] text-custom-16 font-[700] text-[#FF5359] underline'>Add to my calender</p>
            </div>
          </div>
          <div className='w-full flex flex-col rounded-[9px] divide-y-[0.1px] divide-[#ccc] bg-white dark:bg-[rgba(255,255,255,0.2)] '>
            <h1 className='text-custom-18 font-[700] px-[1.5625vw] xsm:px-[20px] sm:px-[20px] py-[19px]'>People Attending</h1>
            <div className=' grid gap-x-[49px] gap-y-[23px] grid-cols-4 xsm:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 pb-[63px]  lg:grid-cols-3 2xl:grid-cols-5 px-[1.6145833333333333vw] pt-[25px] xsm:px-[20px] sm:px-[24px]'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val, index) => {
                return (
                  <PeopleAttending />
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:w-full xsm:w-full min-w-[23.385416666666668vw] gap-[1.2544802867383513vw] mt-[32px] xsm:mt-0 sm:mt-0 sm:flex-col xsm:flex-col xsm:gap-[20px] sm:gap-[20px]'>
          <div className='w-full flex flex-col bg-white dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>
            <h1 className='text-custom-18 font-[700] px-[1.5625vw] xsm:px-[20px] sm:px-[20px] py-[19px]'>Location</h1>
            <div className='h-[441px] flex-1 bg-white  min-h-[271px]'></div>
            <h1 className='text-custom-16 text-[#FF5359] font-[700] px-[1.5625vw] xsm:px-[20px] sm:px-[20px] py-[23px] text-center'>View on Google Maps</h1>
          </div>
          <div className='w-full divide-y-[0.1px] divide-[#ccc] flex flex-col bg-white dark:bg-[rgba(255,255,255,0.2)] rounded-[9px] min-h-[330px]'>
            <h1 className='text-custom-18 font-[700] px-[1.5625vw] xsm:px-[20px] sm:px-[20px] py-[19px] cursor-pointer' onClick={() => navigate('/events/allEvents')}>Upcoming Events</h1>
            <div className='flex px-[1.6145833333333333vw] xsm:px-[20px] sm:px-[20px] py-[16px]'>
              <p className='text-custom-16 opacity-50'>No upcoming events</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleEventDetail
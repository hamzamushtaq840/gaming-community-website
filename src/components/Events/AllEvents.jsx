import React from 'react'
import SingleUpcomingEvent from './SingleUpcomingEvent'
import SingleJoinedEvent from './SingleJoinedEvent'
import SingleAttendingEvent from './SingleAttendingEvent'

const AllEvents = () => {
  return (
    <div className='py-[94px] gap-[53px] flex flex-col  xsm:py-[64px] sm:py-[64px] pl-[10.9375vw] pr-[8.28125vw] xsm:px-[6vw] sm:px-[6vw] dark:bg-black dark:text-white bg-white text-black'>
      <div>
        <h1 className='text-custom-26 font-[700] mb-[30px] xsm:mb-[0px] sm:mb-[0px]'>Upcoming Events</h1>
        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 gap-x-[1.1979166666666667vw] gap-y-[23px]'>
          {[1, 2, 3, 4, 5, 6].map((val, index) => {
            return (
              <SingleUpcomingEvent />
            )
          })}
        </div>
      </div>

      <div>
        <h1 className='text-custom-26 font-[700] mb-[30px] xsm:mb-[0px] sm:mb-[0px]'>You are attending</h1>
        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 gap-x-[1.1979166666666667vw] gap-y-[23px]'>
          {[1, 2, 3].map((val, index) => {
            return (
              <SingleAttendingEvent />
            )
          })}
        </div>
      </div>

      <div>
        <h1 className='text-custom-26 font-[700] mb-[30px] xsm:mb-[0px] sm:mb-[0px]'>You have Joined</h1>
        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 gap-x-[1.1979166666666667vw] gap-y-[23px]'>
          {[1].map((val, index) => {
            return (
              <SingleJoinedEvent />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllEvents
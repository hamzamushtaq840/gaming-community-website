import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import arrow from './../assets/arrow.svg'
import EventsItem from '../components/Events/EventsItem'
import { useNavigate } from 'react-router-dom'

export default function Events() {

  const [seeMore, setSeeMore] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='py-[64px] xsm:px-[6vw] lg:px-[6vw] sm:px-[6vw] gap-[2.0833333333333335vw] px-[9.598958333333334vw] dark:bg-black  bg-white dark:text-white text-black'>
      <h1 className='text-custom-34 text-center font-[700] leading-[34px] mb-[40px]'>Events</h1>
      {/* main div */}
      <div className='flex xsm:flex-col sm:flex-col xsm:gap-[20px] sm:gap-[20px] gap-[2.0833333333333335vw]'>
        {/* left section  */}
        <div className='flex flex-col gap-[25px] sm:w-full  sm:items-start xsm:w-full  xsm:items-start'>
          <button className='buttonAnimation transition-all cursor-pointer flex gap-[8px] px-[3.58em] h-[3.18em] text-custom-18 items-center justify-center bg-primary rounded-[9px] buttonAnimation xsm:h-[46.39px] xsm:py-0' onClick={() => navigate('/events/submitEvent')}><HiPlus />Submit Event</button>
          <div className={`dark:bg-[rgba(255,255,255,0.2)] transition-all duration-700 xsm:w-full sm:w-full ${seeMore && "sm:max-h-[1000px] xsm:max-h-[1000px]"} sm:max-h-[60px] xsm:max-h-[60px] sm:overflow-hidden xsm:overflow-hidden bg-white rounded-[9px] divide-y-[0.1px] divide-[#cccccc94] `}>
            <div className=' flex flex-col py-[20px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <div className='flex justify-between'>
                <h1 className='text-custom-16 font-[700]'>FILTER</h1>
                <div className='flex gap-[14px]'>
                  <h1 className='text-custom-12  text-primary font-[400]'>RESET</h1>
                  <div className='hidden sm:block xsm:block pb-[10px] text-center'>
                    <div className={`flex justify-center transition-all duration-700 ${!seeMore && 'rotate-180'} cursor-pointer`}>
                      <img src={arrow} alt="" onClick={() => setSeeMore(prev => !prev)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col py-[23px] gap-[23px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <h1 className='text-custom-16 font-[700]'>STATUS</h1>
              <div className='flex flex-col gap-[15px]'>
                <div className='flex gap-[10px] '>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Upcoming</p>
                </div>
                <div className='flex gap-[10px] '>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Past</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col  py-[23px] gap-[23px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <h1 className='text-custom-16 font-[700]'>STATUS</h1>
              <div className='flex flex-col gap-[15px]'>
                <input type="datetime-local" placeholder='haaa' className='text-custom-14 px-[10px] h-[3em] rounded-3px border-[#cccccc94] border-[1px] dark:bg-transparent rounded-[3px]' />
                <p className='text-custom-14 text-center'>to</p>
                <input type="datetime-local" placeholder='haaa' className='text-custom-14 px-[10px] h-[3em] rounded-3px border-[#cccccc94] border-[1px] dark:bg-transparent rounded-[3px]' />
              </div>
            </div>
            <div className='flex flex-col  py-[23px] gap-[23px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <h1 className='text-custom-16 font-[700]'>TYPE</h1>
              <div className='flex flex-col gap-[15px]'>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] opacity-70 w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col  py-[23px] gap-[23px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <h1 className='text-custom-16 font-[700]'>TAGS</h1>
              <div className='flex flex-col gap-[15px]'>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <input type="checkbox" className='peer/contentAdmin h-[18px] opacity-70 w-[18px]' />
                  <p className='opacity-50 peer-checked/contentAdmin:opacity-100 text-custom-16'>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className='bg-white divide-y-[0.1px] divide-[#cccccc94] rounded-[9px] xsm:w-full sm:w-full flex-1 dark:bg-[rgba(255,255,255,0.2)]'>
          <p className='text-custom-24 px-[1.6666666666666667vw] xsm:px-[20px] sm:px-[20px] xsm:py-[15px] sm:py-[15px] py-[26px] font-[700]'>DISCOVER</p>
          {[0, 1, 2, 3, 4].map((val, index) => {
            return (
              <EventsItem />
            )
          })}
        </div>
      </div>
    </div>
  )
}

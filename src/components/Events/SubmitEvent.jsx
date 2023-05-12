import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import arrow from '../../assets/arrow.svg'
import EventsItem from './EventsItem'

const SubmitEvent = () => {
  const [seeMore, setSeeMore] = useState(false)

  return (
    <div className='py-[64px] xsm:px-[6vw] lg:px-[6vw] sm:px-[6vw] gap-[2.0833333333333335vw] px-[10.9375vw] dark:bg-black  bg-white dark:text-white text-black'>
      <h1 className='text-custom-34 text-center font-[700] leading-[34px] mb-[40px]'>Events</h1>
      {/* main div */}
      <div className='flex xsm:flex-col sm:flex-col xsm:gap-[20px] sm:gap-[20px] gap-[30px]'>
        {/* left section  */}
        <aside className='flex gap-[25px]  sm:w-full  sm:items-start xsm:w-full  xsm:items-start'>
          <div className={`dark:bg-[rgba(255,255,255,0.2)] w-[272px] transition-all duration-700 xsm:w-full sm:w-full ${seeMore && "sm:max-h-[1000px] xsm:max-h-[1000px]"} sm:max-h-[60px] xsm:max-h-[60px] sm:overflow-hidden xsm:overflow-hidden bg-white rounded-[9px] divide-y-[0.1px] divide-[#cccccc94] `}>
            <div className=' flex flex-col py-[20px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <div className='flex justify-between'>
                <h1 className='text-custom-26 font-[700]'>Add Tags</h1>
                <div className='flex '>
                  <div className='hidden sm:block xsm:block pb-[10px] text-center'>
                    <div className={`flex justify-center transition-all duration-700 ${!seeMore && 'rotate-180'} cursor-pointer`}>
                      <img src={arrow} alt="" onClick={() => setSeeMore(prev => !prev)} />
                    </div>
                  </div>
                </div>
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
              <div className='flex justify-between'>
                <h1 className='text-custom-16 font-[700]'>TAGS</h1>
                <h1 className='text-custom-12  text-primary font-[400]'>SHOW ALL</h1>
              </div>
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

              </div>
            </div>
            <div className='flex flex-col  py-[23px] gap-[23px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <h1 className='text-custom-16 font-[700]'>MISCELLANEOUS</h1>
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
              </div>
            </div>
            <div className=' flex flex-col py-[20px] px-[1.1458333333333333vw] sm:px-[20px] xsm:px-[15px]'>
              <div className='flex justify-between'>
                <h1 className='text-custom-26 font-[700]'>Settings</h1>
              </div>
            </div>
            <div className='flex flex-col gap-[15px] py-[20px] px-[22px] xsm:px-[15px] sm:px-[20px]'>
              <div className='flex gap-[10.52px]'>
                <div className='relative h-[23px] rounded-full flex  w-[36.48px] bg-primary'>
                  <div className='h-[16.66px] rounded-full w-[16.66px] bg-white absolute  right-[3.97px] top-[2.5px]'></div>
                </div>
                <p>lorem ipsum</p>
              </div>
              <div className='flex gap-[10.52px]'>
                <div className='relative h-[23px] rounded-full flex  w-[36.48px] bg-primary'>
                  <div className='h-[16.66px] rounded-full w-[16.66px] bg-white absolute  right-[3.97px] top-[2.5px]'></div>
                </div>
                <p>lorem ipsum</p>
              </div>
              <div className='flex flex-col gap-[10.52px]'>
                <div className='flex gap-[10.52px]'>
                  <div className='relative h-[23px] rounded-full flex  w-[36.48px] bg-primary'>
                    <div className='h-[16.66px] rounded-full w-[16.66px] bg-white absolute  right-[3.97px] top-[2.5px]'></div>
                  </div>
                  <p>lorem ipsum</p>
                </div>
                <div className='pl-[23px] sm:pl-[15px] xsm:pl-[15px] flex flex-col gap-[10.52px]'>
                  <div className='flex gap-[10.52px]'>
                    <div className='relative h-[23px] rounded-full flex  w-[36.48px] bg-primary'>
                      <div className='h-[16.66px] rounded-full w-[16.66px] bg-white absolute  right-[3.97px] top-[2.5px]'></div>
                    </div>
                    <p>lorem ipsum</p>
                  </div>
                  <div className='flex gap-[10.52px]'>
                    <div className='relative h-[23px] rounded-full flex  w-[36.48px] bg-primary'>
                      <div className='h-[16.66px] rounded-full w-[16.66px] bg-white absolute  right-[3.97px] top-[2.5px]'></div>
                    </div>
                    <p>lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-[10.52px]'>
                <div className='relative h-[23px] rounded-full flex  w-[36.48px] bg-primary'>
                  <div className='h-[16.66px] rounded-full w-[16.66px] bg-white absolute  right-[3.97px] top-[2.5px]'></div>
                </div>
                <p>lorem ipsum</p>
              </div>

            </div>
          </div>
        </aside>
        {/* right section */}
        <main className='bg-white divide-y-[0.1px] divide-[#cccccc94] rounded-[9px] xsm:w-full sm:w-full flex-1 dark:bg-[rgba(255,255,255,0.2)]'>
          <p className='text-custom-24 px-[93px] xsm:px-[20px] sm:px-[20px] xsm:py-[15px] sm:py-[15px] py-[26px] font-[700]'>New Event</p>
          <div className='flex flex-col pt-[24px] px-[93px] pb-[83px] xsm:px-[20px] sm:px-[20px] gap-[22px]'>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Organization Title</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add the title you are hiring for'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Event Name*</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Event Name'></input>
            </div>
            <div className='flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Image</label>
              <div className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden'>
                <input className='flex-1 bg-transparent indent-[22px]' placeholder='Text'></input>
                <button className='w-[134px] h-full bg-primary'>Upload Image</button>
              </div>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Location</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Google Map Location (optional)</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>External Job Application Form</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
            </div>
            <div className='flex gap-[21px]'>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Start Time*</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px] justify-end'>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
            </div>
            <div className='flex gap-[21px]'>
              <div className='flex-1 flex flex-col gap-[15px]'>
                <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>End Time*</label>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
              <div className='flex-1 flex flex-col gap-[15px] justify-end'>
                <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
              </div>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Description</label>
              <input className='w-full h-[315px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Text'></input>
            </div>

            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>External Registration Link</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
            </div>
            <div className='flex-1 flex flex-col gap-[15px]'>
              <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Tickets (optional)</label>
              <input className='w-full h-[48px] border border-[rgba(255,255,255,0.25)] rounded-[9px] flex overflow-hidden bg-transparent indent-[22px]' placeholder='Add a company'></input>
            </div>
            <div className='flex gap-[2.65625vw] space-between'>
              <button className='w-full h-[48px] bg-[#828282] rounded-[9px] mt-[23px] flex justify-center items-center gap-[10px] mb-[10px]'>
                Reset
              </button>
              <button className='w-full h-[48px] bg-primary rounded-[9px] mt-[23px] flex justify-center items-center gap-[10px] mb-[10px]'>
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SubmitEvent
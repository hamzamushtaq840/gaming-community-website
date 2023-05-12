import React from 'react'

const SingleMentorAbout = () => {
  return (
    <div className='w-full flex-col'>
      <div className='bg-white xsm:w-full sm:w-full divide-y-[0.1px] divide-[#ccc] rounded-9px items-center dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>
        <h1 className='text-custom-20 px-[2.34375vw] py-[24px] xsm:px-[20px] sm:px-[20px] font-[700]'>Biography</h1>
        <div className='px-[2.34375vw] xsm:px-[20px] sm:px-[20px] py-[25px]'>
          <p className='text-custom-14 opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam tempora, velit vel esse odit ea adipisci dolores cupiditate, architecto officiis hic nihil totam a nobis quos repellendus rem consequatur! Consectetur dignissimos tempore obcaecati ex totam cum voluptatem iure ea commodi, nesciunt molestiae sapiente explicabo, ad quam? Suscipit, nihil? Ullam accusantium porro tenetur ipsum fuga dolorem repellendus officiis doloremque. Voluptate magnam ratione id rerum quasi sunt pariatur atque ipsam est ipsa laborum fuga sequi nihil expedita dolores quae eius vel, quas rem eligendi, delectus veritatis. Praesentium beatae sequi autem culpa, atque iure repellendus assumenda consequatur, reprehenderit asperiores corporis error? Quasi, sint.</p>
        </div>
      </div>
      <div className='bg-white mt-[27px] xsm:mt-[20px] sm:mt-[20px] xsm:w-full sm:w-full rounded-9px items-center dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>
        <h1 className='text-custom-20 px-[2.34375vw] py-[24px] xsm:px-[20px] sm:px-[20px] font-[700]'>Experience</h1>
        <div className='py-[0.1px] bg-[#ccc]'></div>
        {[0, 1, 2, 3].map((val, index) => {
          return (
            <div className='px-[2.34375vw] xsm:px-[20px] sm:px-[20px] py-[20px]'>
              <div className='flex xsm:flex-col xsm:gap-[20px] justify-between'>
                <div className='flex gap-[16px] items-center'>
                  <div className='h-[61px] w-[61px] rounded-[9px] bg-purple-500'></div>
                  <div className='flex flex-col gap-[6px]'>
                    <h1 className='text-custom-16 font-[700]'>Company</h1>
                    <p className='text-custom-14 opacity-50'>Head of Analytics</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[3px] justify-center items-end xsm:items-start'>
                  <p className='text-custom-14 font-[700] opacity-50'>January 2021-November-2022</p>
                  <p className='text-custom-14 opacity-50'>(1 year, 10 months)</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='bg-white mt-[27px] xsm:mt-[20px] sm:mt-[20px] xsm:w-full sm:w-full rounded-9px items-center dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>
        <h1 className='text-custom-20 px-[2.34375vw] py-[24px] xsm:px-[20px] sm:px-[20px] font-[700]'>Education</h1>
        <div className='py-[0.1px] bg-[#ccc]'></div>
        {[0, 1,].map((val, index) => {
          return (
            <div className='px-[2.34375vw] xsm:px-[20px] sm:px-[20px] py-[20px]'>
              <div className='flex flex-1'>
                <div className='flex gap-[16px] items-center'>
                  <div className='h-[61px] w-[61px] rounded-[9px] bg-purple-500'></div>
                  <div className='flex flex-col gap-[3px] justify-center'>
                    <h1 className='text-custom-16 font-[700] mb-[0px]'>University</h1>
                    <p className='text-custom-14 opacity-50'>Bachelor's Degree</p>
                    <p className='text-custom-14 opacity-50'>Class of 2020</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleMentorAbout
import React from 'react'

const YourProjects = () => {
  return (
    <div className='flex justify-between items-center px-[43px] xsm:px-[20px] sm:px-[20px]'>
      <table className='table-auto pt-0 mt-[20px] w-full h-full divide-y-2 divide-[rgba(255,255,255,0.15)]'>
        <thead className='text-black dark:text-white'>
          <tr className='p-0 h-[49px]'>
            <th className='text-left w-[297px] font-[700] text-[14px] leading-[14px]'>Title</th>
            <th className='text-left w-[242px] font-[700] text-[14px] leading-[14px]'>Applies</th>
            <th className='text-left w-[217px] font-[700] text-[14px] leading-[14px] flex items-center h-full gap-[7px]'>Status</th>
            <th className='text-left w-[175px] font-[700] text-[14px] leading-[14px]'>Posted</th>
            <th className='text-left w-[175px] font-[700] text-[14px] leading-[14px]'>Expired</th>
            <th className='text-left w-[107px] font-[700] text-[14px] leading-[14px] flex items-center h-full gap-[7px]'>Actions</th>
          </tr>
        </thead>
        <tbody className='divide-y-2 divide-[rgba(255,255,255,0.15)]'>
          {[0].map(() => {
            return (
              <tr className='h-[80px] '>
                <p className='py-[50px] text-custom-16 opacity-50'>You have not posted any Projects</p>
                {/* <td className=''>
                  <div className='flex gap-[11px] items-center'>
                    <div className='bg-[#51D1B2] w-[43px] h-[43px] flex justify-center items-center rounded-full'>TR</div>
                    <div className='flex flex-col gap-[6px]'>
                      <h1 className='font-[700] text-[16px] leading-[16px]'>Taha Ridley</h1>
                      <p className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)]'>Electronic Arts</p>
                    </div>
                  </div>
                </td>
                <td className='flex gap-[8px] items-center h-full'>
                  <p className='font-[400] text-[12px] leading-[12px]'>AI Projects</p>
                </td>
                <td className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)]'>15 mins ago</td>
                <td className='w-[107px] font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)] text-right'>1:20</td>
                <td className='flex justify-center'>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                      <path d="M8.30322 8.80418L15.1582 1.94907C15.3169 1.79052 15.4043 1.57887 15.4043 1.35319C15.4043 1.12751 15.3169 0.91586 15.1582 0.75731L14.6535 0.252478C14.3246 -0.0760189 13.7901 -0.076019 13.4617 0.252478L7.70534 6.00888L1.94255 0.246091C1.78387 0.0875403 1.57234 -6.04614e-07 1.34679 -6.14473e-07C1.12099 -6.24343e-07 0.909463 0.0875402 0.750663 0.246091L0.246081 0.750922C0.0874061 0.909597 -8.63207e-06 1.12112 -8.64194e-06 1.3468C-8.6518e-06 1.57248 0.0874061 1.78413 0.246081 1.94268L7.10733 8.80418C7.26651 8.9631 7.47903 9.05039 7.70496 9.04989C7.93177 9.05039 8.14417 8.9631 8.30322 8.80418Z" fill="white" />
                    </g>
                  </svg>
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default YourProjects
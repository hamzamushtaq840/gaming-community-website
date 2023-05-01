import React from 'react'

export default function AnalyticsStatsCard({title,count}) {
  return (
    <div className='flex-1 h-[159px] rounded-[9px] bg-[rgba(255,255,255,0.15)] flex flex-col justify-center items-center'>
      <h4 className='font-[700] text-[50px] leading-[50px] mb-[16px]'>{count}</h4>
      <p className='font-[400] text-[20px] leading-[20px]'>{title}</p>
    </div>
  )
}

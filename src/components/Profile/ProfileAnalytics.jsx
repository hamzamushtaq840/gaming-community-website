import React from 'react'
import AnalyticsStatsCard from './AnalyticsStatsCard'
import analyticsFilterIcon from "../../assets/analyticsFilterIcon.svg"
import analyticsDownArrow from "../../assets/analyticsDownArrow.svg"

export default function ProfileAnalytics() {
  return (
    <div>
      <h3 className='font-[700] text-[26px] leading-[26px] mb-[32px]'>Interaction Overview</h3>
      <div className='flex gap-[14px] pb-[36px]'>
        <AnalyticsStatsCard title={"Total Views"} count={"75"} />
        <AnalyticsStatsCard title={"Unique Visitors"} count={"35"} />
        <AnalyticsStatsCard title={"Total Clicks"} count={"34"} />
        <AnalyticsStatsCard title={"Average Time"} count={"00:39"} />
      </div>

      <div className='min-h-[412px] w-full bg-[rgba(255,255,255,0.15)] rounded-[9px] mb-[32px]  divide-y-2 divide-[rgba(255,255,255,0.15)]'>
        <div className='flex justify-between items-center py-[14px] px-[22px]'>
          <p className='font-[700] text-[16px] leading-[16px]'>Recent Visits</p>
          <button className='w-[108px] h-[37px] rounded-[9px] border-[1px] flex justify-center items-center gap-[7.5px] font-[400] text-[16px] leading-[16px] border-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.5)]' >Filter<img src={analyticsFilterIcon} /></button>
        </div>
        <div className='flex justify-between items-center py-[14px] px-[22px]'>
          <table className='table-auto w-full'>
            <thead className='text-primary'>
              <th className='text-left w-[297px] font-[700] text-[14px] leading-[14px]'>CONTACT</th>
              <th className='text-left w-[242px] font-[700] text-[14px] leading-[14px]'>CONTENT</th>
              <th className='text-left w-[217px] font-[700] text-[14px] leading-[14px] flex items-center gap-[7px]'>TIME AGO <img src={analyticsDownArrow} /></th>
              <th className='text-left w-[175px] font-[700] text-[14px] leading-[14px]'>OWNER</th>
              <th className='text-left w-[107px] font-[700] text-[14px] leading-[14px] flex items-center gap-[7px]'>TIME SPENT <img className='w-[13px] h-[10px]' src={analyticsDownArrow} /></th>
            </thead>
          </table>
        </div>

      </div>

      <div>a</div>
    </div>
  )
}

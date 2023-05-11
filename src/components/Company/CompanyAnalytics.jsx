import React from 'react'
import AnalyticsStatsCard from '../Profile/AnalyticsStatsCard'
import analyticsFilterIcon from "../../assets/analyticsFilterIcon.svg"
import analyticsDownArrow from "../../assets/analyticsDownArrow.svg"
import profileAnalyticsProfilePic from "../../assets/profileAnalyticsProfilePic.png"
import { AiTwotoneSetting } from "react-icons/ai"

export default function CompanyAnalytics() {
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
          <button className='w-[108px] h-[37px] rounded-[9px] border-[1px] flex justify-center items-center gap-[7.5px] font-[400] text-[16px] leading-[16px] border-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.5)]' >Filter<img className='w-[28px] h-[19.6px] text-[rgba(255,255,255,0.15)]' src={analyticsFilterIcon} /></button>
        </div>
        <div className='flex justify-between items-center px-[22px]'>
          <table className='table-auto pt-0 mt-0 w-full h-full divide-y-2 divide-[rgba(255,255,255,0.15)]'>
            <thead className='text-primary'>
              <tr className='p-0 h-[49px]'>
                <th className='text-left w-[297px] font-[700] text-[14px] leading-[14px]'>CONTACT</th>
                <th className='text-left w-[242px] font-[700] text-[14px] leading-[14px]'>CONTENT</th>
                <th className='text-left w-[217px] font-[700] text-[14px] leading-[14px] flex items-center h-full gap-[7px]'>TIME AGO <img src={analyticsDownArrow} /></th>
                <th className='text-left w-[175px] font-[700] text-[14px] leading-[14px]'>OWNER</th>
                <th className='text-left w-[107px] font-[700] text-[14px] leading-[14px] flex items-center h-full gap-[7px]'>TIME SPENT <img className='w-[13px] h-[10px]' src={analyticsDownArrow} /></th>
                <th className='w-[104px]'></th>
              </tr>
            </thead>
            <tbody className='divide-y-2 divide-[rgba(255,255,255,0.15)]'>
              {[0, 1, 2].map(() => {
                return (
                  <tr className='h-[80px] '>
                    <td className=''>
                      <div className='flex gap-[11px] items-center'>
                        <div className='bg-[#51D1B2] w-[43px] h-[43px] flex justify-center items-center rounded-full'>TR</div>
                        <div className='flex flex-col gap-[6px]'>
                          <h1 className='font-[700] text-[16px] leading-[16px]'>Taha Ridley</h1>
                          <p className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)]'>Electronic Arts</p>
                        </div>
                      </div>
                    </td>
                    <td className='flex gap-[8px] items-center h-full'>
                      <AiTwotoneSetting className='text-[rgba(255,255,255,0.15)] w-[26px] h-[26px]' />
                      <p className='font-[400] text-[12px] leading-[12px]'>AI Projects</p>
                    </td>
                    <td className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)]'>15 mins ago</td>
                    <td><img src={profileAnalyticsProfilePic} /></td>
                    <td className='w-[107px] font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)] text-right'>1:20</td>
                    <td className='flex justify-center'>
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                          <path d="M8.30322 8.80418L15.1582 1.94907C15.3169 1.79052 15.4043 1.57887 15.4043 1.35319C15.4043 1.12751 15.3169 0.91586 15.1582 0.75731L14.6535 0.252478C14.3246 -0.0760189 13.7901 -0.076019 13.4617 0.252478L7.70534 6.00888L1.94255 0.246091C1.78387 0.0875403 1.57234 -6.04614e-07 1.34679 -6.14473e-07C1.12099 -6.24343e-07 0.909463 0.0875402 0.750663 0.246091L0.246081 0.750922C0.0874061 0.909597 -8.63207e-06 1.12112 -8.64194e-06 1.3468C-8.6518e-06 1.57248 0.0874061 1.78413 0.246081 1.94268L7.10733 8.80418C7.26651 8.9631 7.47903 9.05039 7.70496 9.04989C7.93177 9.05039 8.14417 8.9631 8.30322 8.80418Z" fill="white" />
                        </g>
                      </svg>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className='font-[700] text-[14px] leading-[14px] text-primary pt-[22px] mb-[21px] text-center'>View All</p>
      </div>

      <div className='flex gap-[31px] pb-[114px]'>
        <div className='flex-1 min-w-[500px] bg-[rgba(255,255,255,0.15)] rounded-[9px]'>
          <div className='flex justify-between items-center py-[14px] px-[22px]'>
            <p className='font-[700] text-[16px] leading-[16px]'>Recent Visits</p>
            <button className='w-[108px] h-[37px] rounded-[9px] border-[1px] flex justify-center items-center gap-[7.5px] font-[400] text-[16px] leading-[16px] border-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.5)]' >Filter<img className='w-[28px] h-[19.6px] text-[rgba(255,255,255,0.15)]' src={analyticsFilterIcon} /></button>
          </div>

          <div className='flex justify-between items-center px-[22px]'>
            <table className='table-auto pt-0 mt-0 w-full h-full divide-y-2 divide-[rgba(255,255,255,0.15)]'>
              <thead className='text-primary'>
                <tr className='p-0 h-[49px]'>
                  <th className='text-left font-[700] text-[14px] leading-[14px]'>CONTACT</th>
                  <th className='text-left font-[700] w-[115px] text-[14px] leading-[14px] h-full'><div className='flex gap-[7px]'><p>VISITS</p> <img className='inline-block' src={analyticsDownArrow} /></div></th>
                  <th className='text-left font-[700] w-[110px] mr-[52px] text-[14px] leading-[14px] h-full'><div className='flex gap-[7px]'><p>DOCS</p> <img className='w-[13px] h-[10px] inline-block' src={analyticsDownArrow} /></div></th>
                  <th className='font-[700] w-[69px] text-right text-[14px] leading-[14px] h-full'><div className='flex gap-[7px]'><p>TIME SPENT</p> <img className='w-[13px] h-[10px] self-end' src={analyticsDownArrow} /></div></th>
                </tr>
              </thead>
              <tbody className='divide-y-2 divide-[rgba(255,255,255,0.15)]'>
                {[0, 1, 2].map(() => {
                  return (
                    <tr className='h-[80px] '>
                      <td className=''>
                        <div className='flex gap-[11px] items-center'>
                          <div className='bg-[#51D1B2] w-[43px] h-[43px] flex justify-center items-center rounded-full'>TR</div>
                          <div className='flex flex-col gap-[6px]'>
                            <h1 className='font-[700] text-[16px] leading-[16px]'>Taha Ridley</h1>
                            <p className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)]'>Electronic Arts</p>
                          </div>
                        </div>
                      </td>
                      <td className='font-[400] text-[12px] w-[115px] pr-[52px] text-center leading-[12px] text-[rgba(255,255,255,0.6)]'>27</td>
                      <td className='font-[400] text-[12px] w-[110px] pr-[52px] text-center leading-[12px] text-[rgba(255,255,255,0.6)]'>12</td>
                      <td className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)] text-right'>3:03</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex-1 min-w-[500px] bg-[rgba(255,255,255,0.15)] rounded-[9px]'>
          <div className='flex justify-between items-center py-[14px] px-[22px]'>
            <p className='font-[700] text-[16px] leading-[16px]'>Recent Visits</p>
            <button className='w-[108px] h-[37px] rounded-[9px] border-[1px] flex justify-center items-center gap-[7.5px] font-[400] text-[16px] leading-[16px] border-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.5)]' >Filter<img className='w-[28px] h-[19.6px] text-[rgba(255,255,255,0.15)]' src={analyticsFilterIcon} /></button>
          </div>

          <div className='flex justify-between items-center px-[22px]'>
            <table className='table-auto pt-0 mt-0 w-full h-full divide-y-2 divide-[rgba(255,255,255,0.15)]'>
              <thead className='text-primary'>
                <tr className='p-0 h-[49px]'>
                  <th className='text-left font-[700] text-[14px] leading-[14px]'>CONTACT</th>
                  <th className='text-left font-[700] w-[115px] text-[14px] leading-[14px] h-full'>CONTENT</th>
                  <th className='text-left font-[700] w-[110px] mr-[52px] text-[14px] leading-[14px] h-full'>VISITS</th>
                  <th className='font-[700] w-[78px] text-right text-[14px] leading-[14px] h-full'>LAST VISIT</th>
                </tr>
              </thead>
              <tbody className='divide-y-2 divide-[rgba(255,255,255,0.15)]'>
                {[0, 1, 2].map(() => {
                  return (
                    <tr className='h-[80px] '>
                      <td className=''>
                        Corsair Gaming, Inc.
                      </td>
                      <td className='font-[400] text-[12px] w-[141px] pr-[63px] text-center leading-[12px] text-[rgba(255,255,255,0.6)]'>Optimize St...</td>
                      <td className='font-[400] text-[12px] w-[118px] pr-[78px] text-center leading-[12px] text-[rgba(255,255,255,0.6)]'>7</td>
                      <td className='font-[400] text-[12px] w-[76px] leading-[12px] text-[rgba(255,255,255,0.6)] text-right'>25 mins ago</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

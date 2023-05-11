import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import KnowlegdeHubCard from '../components/KnowlegdeHub/KnowlegdeHubCard'

export default function DataRepository() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)]'>
      <div className='flex justify-between pt-[71px] pb-[62px]'>
        <div className='flex gap-[14px]'>
          <button className='w-[9.844vw] h-[48px] rounded-[9px] bg-[#FF5359] text-white'>All</button>
        </div>
        <Link to={"/data-repository/add"}>
          <button className='w-[12.448vw] h-[48px] rounded-[9px] bg-primary text-white'>New Data Repository Post</button>
        </Link>
      </div>
      <div>
        <h4 className='font-bold text-[26px] leading-[26px]'>Data Repository Submissions</h4>
        <div className='flex justify-between items-center max-h-[48px] mt-[32px]'>
          <div className='flex gap-[5.208vw]'>
            <div className='flex gap-[11px]'>
              <label>Showing posts in:</label>
              <input className='w-[112px] border-b border-[rgba(255,255,255,0.25)] bg-transparent'></input>
            </div>
            <div className='flex gap-[11px]'>
              <label>Sort by:</label>
              <input className='w-[112px] border-b border-[rgba(255,255,255,0.25)] bg-transparent'></input>
            </div>
          </div>
          <div className='relative w-[25.417vw] rounded-[9px] h-[48px] flex border border-[rgba(255,255,255,0.25)]'>
            <input className='flex-1 h-full bg-transparent indent-[22px]' placeholder='Search Data Repository'></input>
            <svg className='absolute right-[19px] top-[50%] translate-y-[-50%]' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.55493 14.4835C9.23276 14.4835 10.8626 13.9467 12.1863 12.9579L17.1801 17.7472C17.5531 18.0927 18.1476 18.0828 18.5079 17.725C18.8593 17.376 18.8593 16.8227 18.5079 16.4738L13.5141 11.6845C16.0724 8.52609 15.4766 3.97672 12.1834 1.52317C8.89012 -0.930386 4.14653 -0.359039 1.58821 2.79935C-0.970115 5.95773 -0.37437 10.5071 2.91888 12.9607C4.24472 13.9485 5.87601 14.4843 7.55493 14.4835ZM3.54245 3.39461C5.75851 1.26927 9.35144 1.26923 11.5675 3.39453C13.7836 5.51983 13.7837 8.96563 11.5676 11.091C9.35157 13.2163 5.75863 13.2164 3.54253 11.091C3.54249 11.091 3.54249 11.091 3.54245 11.091C1.32639 8.98115 1.31334 5.54792 3.51325 3.42261C3.52297 3.41325 3.53269 3.40393 3.54245 3.39461Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <div className='mt-[33px] flex flex-col gap-[19px]'>
        <KnowlegdeHubCard></KnowlegdeHubCard>
        <KnowlegdeHubCard></KnowlegdeHubCard>
      </div>
    </div>
  )
}
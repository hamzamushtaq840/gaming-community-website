import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import GoalsCard from '../components/Community/GoalsCard'
import { communityGoalsCardsData } from "../utils/consts.js"

export default function Community() {
  return (
    <div>
      <div className='bg-white min-h-[814px] w-full flex flex-col items-center'>
        <div className='w-[18.75vw] min-h-[33px] min-w-[300px] h-[33px] mt-[52px] mb-[48px] flex border-[2px] border-[#EC1F26] rounded-[16.5px] overflow-hidden'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "bg-[#EC1F26] text-white flex-1 flex justify-center" : "text-[#EC1F26] bg-white flex-1 flex justify-center"}>
            <button className='font-[400] text-[14px] leading-[16.1px]'>Achieved Goals</button>
          </NavLink>
          <NavLink to={"/offer-opportunities"} className={({ isActive }) => isActive ? "bg-[#EC1F26] text-white flex-1 flex justify-center" : "text-[#EC1F26] bg-white flex-1 flex justify-center"}>
            <button className='font-[400] text-[14px] leading-[16.1px] flex-1'>Offer Opportunities</button>
          </NavLink>
        </div>
        <div className='xsm:mb-[50px] sm:mb-[50px]'>
          <Outlet />
        </div>
      </div>
      <div className='min-h-[1234px] w-full bg-[#F5F5F5]'>
        <div className='flex flex-wrap gap-[15px] py-[83px] min-h-[1234px] m-auto w-[1388px] xl:w-[80vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] xsm:w-[85vw]'>
          {communityGoalsCardsData.map((goal) =>
            <GoalsCard key={goal.id} background={goal.background} image={goal.image} heading={goal.title} description={goal.description} buttonTitle={goal.buttonTitle} />
          )}
        </div>

      </div>
    </div>
  )
}

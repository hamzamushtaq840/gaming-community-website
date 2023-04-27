import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import GoalsCard from '../components/Community/GoalsCard'
import UpcommingEventIcon from '../assets/UpcommingEventIcon.svg'
import { communityGoalsCardsData } from "../utils/consts.js"
import FeaturedProjectsCard from '../components/Community/FeaturedProjectsCard'
import UpcommingEventCard from '../components/Community/UpcommingEventCard'

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
        <div className='flex flex-wrap gap-[15px] justify-center py-[83px] min-h-[1234px] m-auto w-[1388px] xl:w-[80vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] xsm:w-[85vw]'>
          {communityGoalsCardsData.map((goal) =>
            <GoalsCard key={goal.id} background={goal.background} image={goal.image} heading={goal.title} description={goal.description} buttonTitle={goal.buttonTitle} />
          )}
        </div>
      </div>

      <div className='w-full min-h-[940px] bg-white'>
        <div className='w-[1234px] xsm:w-[64.27083333333333vw] sm:w-[64.27083333333333vw] md:w-[64.27083333333333vw] lg:w-[64.27083333333333vw] min-w-[300px] min-h-[940px] m-auto pt-[87px] pb-[118px]'>
          <h1 className='font-[700] text-[40px] leading-[44.2px] text-center mb-[16px]'>Featured Projects</h1>
          <p className='font-[400] text-[18px] leading-[25.11px] text-center tracking-[-4%] w-[632px] min-w-[300px] m-auto xsm:w-[32.916666666666664vw] sm:w-[32.916666666666664vw] md:w-[32.916666666666664vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className='mt-[64px] w-full flex gap-[23px] justify-center flex-wrap'>
            <FeaturedProjectsCard background={"./featureProject1.png"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing"} />
            <FeaturedProjectsCard background={"./featureProject2.png"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing"} />
            <FeaturedProjectsCard background={"./featureProject3.png"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing"} />
          </div>
        </div>
      </div>


      <div className='w-full min-h-[1087px] bg-[#F5F5F5]'>
        <div className='w-[1234px] xsm:w-[64.27083333333333vw] sm:w-[64.27083333333333vw] md:w-[64.27083333333333vw] lg:w-[64.27083333333333vw] min-w-[300px] min-h-[940px] m-auto pt-[73px] pb-[108px]'>
            <div className='flex gap-[18px] items-center'>
              <img src={UpcommingEventIcon}/>
              <h3 className='font-[700] text-[30px] leading-[34.35px]'>Upcoming Events</h3>
            </div>
            <div className='mt-[37px] flex gap-[18px] flex-wrap'>
              <UpcommingEventCard background={"#EC1F26"}/>
              <UpcommingEventCard background={"#F48589"}/>
              <UpcommingEventCard background={"#EC1F26"}/>
              <UpcommingEventCard background={"#F48589"}/>
              <UpcommingEventCard background={"#EC1F26"}/>
              <UpcommingEventCard background={"#F48589"}/>
            </div>
        </div>
      </div>
    </div>
  )
}

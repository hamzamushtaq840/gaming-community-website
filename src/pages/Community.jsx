import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import GoalsCard from '../components/Community/GoalsCard'
import UpcommingEventIcon from '../assets/UpcommingEventIcon.svg'
import FooterBackgroundImage from '../assets/footerBackgroundImage.png'
import JobListingsIcon from '../assets/JobListingsIcon.svg'
import { communityGoalsCardsData } from "../utils/consts.js"
import FeaturedProjectsCard from '../components/Community/FeaturedProjectsCard'
import UpcommingEventCard from '../components/Community/UpcommingEventCard'
import JobListingCard from '../components/Community/JobListingCard'
import { jobListingData } from "../utils/consts.js";

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
            <img src={UpcommingEventIcon} />
            <h3 className='font-[700] text-[30px] leading-[34.35px]'>Upcoming Events</h3>
          </div>
          <div className='mt-[37px] flex gap-[18px] flex-wrap'>
            <UpcommingEventCard background={"#EC1F26"} />
            <UpcommingEventCard background={"#F48589"} />
            <UpcommingEventCard background={"#EC1F26"} />
            <UpcommingEventCard background={"#F48589"} />
            <UpcommingEventCard background={"#EC1F26"} />
            <UpcommingEventCard background={"#F48589"} />
          </div>
        </div>
      </div>


      <div className='w-full min-h-[713px] bg-white'>
        <div className='w-[1234px] xsm:w-[64.27083333333333vw] sm:w-[64.27083333333333vw] md:w-[64.27083333333333vw] lg:w-[64.27083333333333vw] min-w-[300px] min-h-[713px] m-auto pt-[83px] pb-[109px]'>
          <div className='flex gap-[18px] items-center'>
            <img src={JobListingsIcon} />
            <h3 className='font-[700] text-[30px] leading-[34.35px]'>Job Listings</h3>
          </div>
          <div className='flex gap-[23.64px] flex-wrap mt-[41px]'>
            {jobListingData?.map((job) => {
              return <JobListingCard key={job.id} image={job.image} title={job.title} company={job.company} location={job.location} createdAt={job.createdAt} jobType={job.jobType} role={job.role} timing={job.timing} />
            })
            }
          </div>
        </div>
      </div>


      <div style={{background: `linear-gradient(270deg, #EC1F26 58.33%, rgba(236, 31, 38, 0) 84.56%), url(${FooterBackgroundImage})`}} className='w-full min-h-[287px] bg-white'>
        <div className='flex xsm:items-start sm:items-start md:items-start items-center xsm:flex-col sm:flex-col md:flex-col xsm:gap-[20px] sm:gap-[20px] md:gap-[20px] gap-[138px] w-[1234px] xsm:w-[64.27083333333333vw] sm:w-[64.27083333333333vw] md:w-[64.27083333333333vw] lg:w-[64.27083333333333vw] min-w-[300px] min-h-[287px] m-auto pt-[83px] pb-[109px]'>
          <h3 className='font-[700] text-[clamp(28px,2.2916666666666665vw,44px)] leading-[54.12px] xsm:w-[36.822916666666664vw] sm:w-[36.822916666666664vw] md:w-[36.822916666666664vw] w-[707px] min-w-[300px] text-white'>Join our community! Create
            profile pages & connect to local
            or global opportunities</h3>
            <button className='w-[13.385416666666666vw] min-w-[180px] h-[54px] bg-white rounded-[9px] font-[400] text-[18px] leading-[20.7px] text-primary'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

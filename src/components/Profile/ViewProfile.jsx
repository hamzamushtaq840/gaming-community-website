import React from 'react'
import viewProfilePic from "../../assets/viewProfilePic.png"
import viewProfileLinkedin from "../../assets/viewProfileLinkedin.svg"
import viewProfileTwitter from "../../assets/viewProfileTwitter.svg"
import viewProfileConnect from "../../assets/viewProfileConnect.svg"
import viewProfilePlaceHolder from "../../assets/viewProfilePlaceHolder.png"

export default function ViewProfile() {
  return (
    <div className='flex gap-[27px] pb-[114px]'>
      <div className='w-[330px] h-[541px] bg-[rgba(255,255,255,0.15)] rounded-[9px] flex flex-col items-center'>
        <img className='mt-[45px] mb-[23px]' src={viewProfilePic} />
        <h3 className='font-[700] text-[16px] leading-[21.79px] mb-[7px] font-opensans'>Jane Doe</h3>
        <p className='font-[400] text-[14px] leading-[19.07px] text-[rgba(255,255,255,0.60)] mb-[13px] font-opensans'>Lebanon, Beirut</p>
        <p className='font-[400] text-[14px] leading-[19.07px] mb-[37px] font-opensans'>add one liner here</p>

        <div className='flex gap-[10px] mb-[8px] w-[152px]'>
          <img src={viewProfilePlaceHolder} />
          <p className='font-[400] text-[14px] leading-[19.07px] font-opensans'>Open to Remote</p>
        </div>

        <div className='flex gap-[10px] mb-[37px] w-[152px]'>
          <img src={viewProfilePlaceHolder} />
          <p className=' font-[400] text-[14px] leading-[19.07px] font-opensans'>Open to Relocation</p>
        </div>

        <div className='flex gap-[25px] mb-[52px]'>
          <img src={viewProfileLinkedin} />
          <img src={viewProfileTwitter} />
        </div>

        <button className='w-[270px] mb-[48px] h-[40px] flex justify-center items-center gap-[8px] bg-primary rounded-[9px] text-white font-[400] text-[14px] leading-[19.07px]'><img src={viewProfileConnect} />Connect</button>
      </div>

      <div className='flex-1 min-h-[1002px] bg-[rgba(255,255,255,0.15)] rounded-[9px] divide-y-[1px] divide-[rgba(255,255,255,0.25)]'>
        <div>
          <div className='px-[60px] mb-[15px]'>
            <h3 className='mt-[41px] mb-[22px] font-[700] text-[20px] leading-[20px]'>Background</h3>
            <p className='font-[400] text-[14px] leading-[22.89px] min-h-[114px] text-[rgba(255,255,255,0.7)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div>
          <div className='px-[60px] flex flex-col gap-[33px] mt-[39px] mb-[64px]'>
            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>University</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Beirut Arab University</p>
            </div>
            
            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Degree Level</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Bachelor’s Degree</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Program</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>English Language and Literature (BA)</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Graduation Date</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Already Graduated</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Experience Level</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Senior Level (5+ Years)</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Opportunity Type</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Full Time, Contract</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Types of Roles Sought</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Writing, Editing, Proofreading</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Sectors of Interest</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Gaming, Technology (Information and Media), Technology (Product Development)</p>
            </div>

            <div className='flex flex-col gap-[15px]'>
              <p className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.7)]'>Research Interests</p>
              <p className='font-[400] text-[16px] leading-[16px] text-white'>Video Games</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

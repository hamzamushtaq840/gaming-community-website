import React from 'react'
import { MdEdit } from 'react-icons/md'
import teamLogo from './../assets/Logo.svg'
import admins from './../assets/admins.svg'
import allTeams from './../assets/allTeams.svg'
import analytics from './../assets/analytics.svg'
import pages from './../assets/pages.svg'
import shareTeam from './../assets/shareTeam.svg'
import teamFlagName from './../assets/teamFlagName.png'
import teamLocation from './../assets/teamLocation.svg'
import teamMessage from './../assets/teamMessage.svg'
import teamMembers from './../assets/teamMembers.svg'
import teamMemberSchool from './../assets/teamMemberSchool.svg'
import addATeamMember from './../assets/addATeamMember.svg'
import addEducation from './../assets/addEducation.svg'
import university from './../assets/university.svg'
import teamProfileName from './../assets/teamProfileName.svg'
import teamProfileStakeholder from './../assets/teamProfileStakeholder.svg'
import userProfileLogo from './../assets/userProfileLogo.svg'
import viewAsMember from './../assets/viewasmember.svg'
import SingleTeamMember from '../components/UserProfile/SingleTeamMember'
import { ImCross } from 'react-icons/im'

export default function TeamProfile() {

  const teamMemberss = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Frontend Engineer',
      createdAt: 'September 14, 2016',
      country: 'Lebanon',
      city: 'Beirut',
      paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru']
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Frontend Engineer',
      createdAt: 'September 14, 2016',
      country: 'Lebanon',
      city: 'Beirut',
      paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru']
    },
    {
      id: 3,
      name: 'John Doe',
      role: 'Frontend Engineer',
      createdAt: 'September 14, 2016',
      country: 'Lebanon',
      city: 'Beirut',
      paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru']
    }
  ]

  return (
    <div className='dark:bg-black dark:text-white bg-white text-black justify-center flex px-[10.9vw] xsm:px-[6vw] sm:px-[6vw] font-helvetica'>
      <div className='w-full'>
        <div className='w-full relative'>
          <div className='userProfileHeader h-[225px] mt-[66px] z-10 flex flex-col'>
            <div className='flex mt-[42px] flex-col items-center'>
              <img src={teamLogo} alt="Team Logo" className='mb-[8.82px]' />
              <h1 className='leading-[20px] text-[clamp(12px,1.3020833333333333vw,20px)] font-[400]'>Team Profile 1</h1>
            </div>
          </div>
          <div className='flex justify-center'><img src={userProfileLogo} alt="" className='absolute mt-[-2.6041666666666665vw] sm:mt-[-4.604vw] z-20 min-w-[60px] xsm:mt-[-30px] w-[4.94895833333333vw]' /></div>
        </div>
        <div className='dark:bg-[#2C2C2C] bg-white rounded-b-[27.5px] mb-[28px]'>
          <div className='flex justify-end pr-[1.3125em] pt-[1.125em]'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
          <div className='flex flex-col'>
            <div className='flex gap-[5.1px] justify-center mt-[1.9625vw] xsm:mt-[5px] items-center'>
              <img src={teamProfileName} alt="" className='w-[23px]' />
              <p className='text-[clamp(16px,1.5625vw,24px)] font-[700]'>Team Profile 1</p>
            </div>
            <div className='flex gap-[5.1px] justify-center mt-[9px] mb-[10px] items-center'>
              <img src={teamFlagName} alt="" className='w-[17.9px]' />
              <p className='text-[clamp(12px,1.3020833333333333vw,20px)] text-[#FF5359] font-[400]'>Nintendo Gamers Beirut</p>
            </div>
            <div className='flex gap-[5.1px] justify-center mb-[16.17px] items-center'>
              <img src={teamLocation} alt="" className='h-[25px]' />
              <p className='text-[clamp(10px,0.9114583333333334vw,14px)] font-[400]'>Beirut, Lebanon, 1500</p>
            </div>
            <div className='flex gap-[5.1px] justify-center items-center mb-[12.16px]'>
              <img src={teamMessage} alt="" className='w-[20.14px] h-[14.84px]' />
              <p className='text-[clamp(10px,0.9114583333333334vw,14px)] text-[#FF5359] underline font-[400]'>email@address.com</p>
            </div>
            <div className='flex gap-[7px] justify-center items-center mb-[13px]'>
              <img src={teamProfileStakeholder} alt="" className='w-[21px]' />
              <p className='text-[clamp(11px,0.9114583333333334vw,16px)] font-[700]'>Stakeholder Category: Lorem Ipsum</p>
            </div>
            <div className='flex justify-center mb-[37px]'>
              <p className='text-[clamp(8px,0.9114583333333334vw,12px)] w-[32.903645833333336vw] xsm:w-[60vw] text-center opacity-[0.5] font-[400] leading-[19.46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15]'></div>
            <div className='flex justify-around mb-[21px] items-center'>
              <div className='flex gap-[8.43px] items-center'>
                <img src={allTeams} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,16px)] md:hidden xsm:hidden sm:hidden mb-[-3px]'>All Teams</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={admins} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,16px)] md:hidden xsm:hidden sm:hidden mb-[-3px]'>Admins</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={viewAsMember} alt="All Teams" className='cursor-pointer w-[28.57px] gap-[7.43px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,16px)] md:hidden xsm:hidden sm:hidden mb-[-3px]'>View As Member</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={shareTeam} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,16px)] md:hidden xsm:hidden sm:hidden mb-[-3px]'>Share Team</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={analytics} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,16px)] md:hidden xsm:hidden sm:hidden mb-[-3px]'>Analytics</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={pages} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,16px)] md:hidden xsm:hidden sm:hidden mb-[-2px]'>Pages</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-[1.6276041666666667vw] w-full xsm:flex-col sm:flex-col xsm:gap-[30px] sm:gap-[30px]'>
          <div className='flex flex-col gap-[28px] w-[70%] xsm:w-full sm:w-full'>
            <div className='flex flex-col dark:bg-[#2C2C2C] bg-white w-full rounded-t-[27.5px]'>
              <div className='px-[23px] flex items-center gap-[7.99px] h-[65px]'>
                <img src={teamMembers} alt="" className='w-[33px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,18px)] font-[700]'>Team Members</p>
              </div>
              <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
              <div className='flex flex-col gap-[18px] px-[25px] mt-[22px]'>
                {teamMemberss.map((value, index) => {
                  return (
                    <SingleTeamMember key={index} value={value} />
                  )
                })}
              </div>
              <div className='h-[56px] bg-[#EC1F26] mt-[42px] rounded-b-[9px] flex justify-center items-center gap-[7px]'>
                <img src={addATeamMember} alt="" className='w-[28.79px]' />
                <p className='text-[clamp(11px,0.9114583333333334vw,16px)] font-[400]'>Add Team Member</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[28px] w-[30%] xsm:w-full sm:w-full'>
            <div className='flex flex-col dark:bg-[#2C2C2C] bg-white  rounded-t-[27.5px]'>
              <div className='flex items-center px-[23px] gap-[7.99px] h-[65px]'>
                <img src={teamMemberSchool} alt="" className='w-[33px]' />
                <p className='text-[clamp(12px,1.3020833333333333vw,18px)] font-[700]'>Team Members School Attend</p>
              </div>
              <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
              <div className='flex flex-col mt-[24px] gap-[26px]'>
                <div className='flex mx-[23px] items-center'>
                  <img src={university} alt="" className='w-[56px]' />
                  <p className='flex-1 leading-[19.6px] text-[clamp(11px,0.9114583333333334vw,16px)] pl-[21px]'>Xyz university</p>
                  <div className='flex gap-[0.5765625vw]'>
                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                  </div>
                </div>
              </div>
              <div className='h-[56px] flex gap-[8px] bg-[#EC1F26] mt-[27px] items-center justify-center rounded-b-[9px] '>
                <img src={addEducation} alt="" className='w-[30px]' />
                <p className='text-[clamp(11px,0.9114583333333334vw,16px)] font-[400]'>Add Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

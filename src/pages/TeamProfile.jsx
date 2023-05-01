import React, { useState } from 'react'
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
import teamProfileName from './../assets/teamProfileName.svg'
import teamProfileStakeholder from './../assets/teamProfileStakeholder.svg'
import userProfileLogo from './../assets/userProfileLogo.svg'
import viewAsMember from './../assets/viewasmember.svg'
import TeamProfileMain from '../components/TeamProfile/TeamProfileMain'
import EditTeamProfileModal from '../components/TeamProfile/EditTeamProfileModal'

export default function TeamProfileHeader() {
  const [editTeamProfileModal, setEditTeamProfileModal] = useState(false)

  return (
    <div className='dark:bg-black dark:text-white bg-white text-black justify-center flex px-[10.9vw] xsm:px-[6vw] sm:px-[6vw] font-helvetica'>
      <div className='w-full'>
        <div className='w-full relative'>
          <div className='userProfileHeader h-[225px] mt-[66px] z-10 flex flex-col '>
            <div className='flex mt-[42px] flex-col items-center'>
              <img src={teamLogo} alt="Team Logo" className='mb-[8.82px]' />
              <h1 className='leading-[20px] text-custom-20 font-[400]'>Team Profile 1</h1>
            </div>
          </div>
          <div className='flex justify-center'><img src={userProfileLogo} alt="" className='absolute mt-[-2.6041666666666665vw] sm:mt-[-4.604vw] z-20 min-w-[60px] xsm:mt-[-30px] w-[4.94895833333333vw]' /></div>
        </div>
        <div className='dark:bg-[#2C2C2C] bg-white rounded-b-[27.5px] mb-[28px]'>
          <div className='flex justify-end pr-[1.3125em] pt-[1.125em]'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' onClick={() => setEditTeamProfileModal(true)} /></div>
          <div className='flex flex-col'>
            <div className='flex gap-[5.1px] justify-center mt-[1.9625vw] xsm:mt-[5px] items-center'>
              <img src={teamProfileName} alt="" className='w-[23px]' />
              <p className='text-custom-24 font-[700]'>Team Profile 1</p>
            </div>
            <div className='flex gap-[5.1px] justify-center mt-[9px] mb-[10px] items-center'>
              <img src={teamFlagName} alt="" className='w-[17.9px]' />
              <p className='text-custom-20 text-[#FF5359] font-[400]'>Nintendo Gamers Beirut</p>
            </div>
            <div className='flex gap-[5.1px] justify-center mb-[16.17px] items-center'>
              <img src={teamLocation} alt="" className='h-[25px]' />
              <p className='text-custom-14 font-[400]'>Beirut, Lebanon, 1500</p>
            </div>
            <div className='flex gap-[5.1px] justify-center items-center mb-[12.16px]'>
              <img src={teamMessage} alt="" className='w-[20.14px] h-[14.84px]' />
              <p className='text-custom-14 text-[#FF5359] underline font-[400]'>email@address.com</p>
            </div>
            <div className='flex gap-[7px] justify-center items-center mb-[13px]'>
              <img src={teamProfileStakeholder} alt="" className='w-[21px]' />
              <p className='text-custom-16 font-[700]'>Stakeholder Category: Lorem Ipsum</p>
            </div>
            <div className='flex justify-center mb-[37px]'>
              <p className='text-custom-12 w-[32.903645833333336vw] xsm:w-[60vw] text-center opacity-[0.5] font-[400] leading-[19.46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15]'></div>
            <div className='flex justify-around mb-[21px] items-center'>
              <div className='flex gap-[8.43px] items-center'>
                <img src={allTeams} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-custom-14 md:hidden xsm:hidden sm:hidden mb-[-3px]'>All Teams</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={admins} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-custom-16 md:hidden xsm:hidden sm:hidden mb-[-3px]'>Admins</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={viewAsMember} alt="All Teams" className='cursor-pointer w-[28.57px] gap-[7.43px]' />
                <p className='text-custom-16 md:hidden xsm:hidden sm:hidden mb-[-3px]'>View As Member</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={shareTeam} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-custom-16 md:hidden xsm:hidden sm:hidden mb-[-3px]'>Share Team</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={analytics} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-custom-16 md:hidden xsm:hidden sm:hidden mb-[-3px]'>Analytics</p>
              </div>
              <div className='flex gap-[8.43px] items-center'>
                <img src={pages} alt="All Teams" className='cursor-pointer w-[24.57px] gap-[7.43px]' />
                <p className='text-custom-16 md:hidden xsm:hidden sm:hidden mb-[-2px]'>Pages</p>
              </div>
            </div>
          </div>
        </div>
        <TeamProfileMain />
      </div>
      {editTeamProfileModal && <EditTeamProfileModal setModal={setEditTeamProfileModal} />}
    </div>
  )
}

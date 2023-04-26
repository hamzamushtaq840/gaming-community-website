import React from 'react'
import MainIcon from "../../assets/achievedGoalsPic.svg"

export default function AchievedGoals() {
  return (
    <div style={{ background: "linear-gradient(90deg, #EC1F26 0%, #8E0207 64.06%, #D8494E 100%)" }} className='w-[1388px] px-[77px] h-[577px] rounded-[15px] flex items-center justify-between'>
      <div>
        <h1 className='w-[512px] font-[700] text-[43px] leading-[55.17px] text-white mb-[51px]'>All-in-One Ecosystem Platform for Universities.</h1>
        <button className='w-[224px] h-[55px] bg-[white] text-[#EC1F26] font-[700] text-[18px] leading-[20.7px] rounded-[8px]'>Sign Up</button>
      </div>
      <div>
        <img src={MainIcon}/>
      </div>
    </div>
  )
}

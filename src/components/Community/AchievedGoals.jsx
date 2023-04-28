import React from 'react'
import MainIcon from "../../assets/achievedGoalsPic.svg"

export default function AchievedGoals() {
  return (
    <div style={{ background: "linear-gradient(90deg, #EC1F26 0%, #8E0207 64.06%, #D8494E 100%)" }} className='min-w-[300px] xsm:flex-col sm:flex-col w-[1388px] xl:w-[80vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] xsm:w-[85vw] px-[77px]  xl:px-[4.010416666666667vw] lg:px-[4.010416666666667vw] md:px-[4.010416666666667vw] sm:px-[4.010416666666667vw] xsm:px-[4.010416666666667vw] min-h-[577px] rounded-[15px] flex items-center justify-between'>
      <div className='xsm:my-[30px] sm:my-[30px] sm:max-w-[437px]'>
        <h1 className='w-[512px] xl:w-[26.666666666666668vw] min-w-[280px] lg:w-[26.666666666666668vw] md:w-[26.666666666666668vw] sm:w-[60vw] xsm:w-[75vw] font-[700] text-[clamp(28px,2.2395833333333335vw,43px)] xsm:leading-[45.17px] sm:leading-[45.17px] leading-[55.17px] text-white xsm:mb-[15px] sm:mb-[15px] mb-[51px]'>All-in-One Ecosystem Platform for Universities.</h1>
        <button className='w-[11.666666666666666vw] min-w-[160px] h-[55px] bg-[white] text-[#EC1F26] font-[700] text-[18px] leading-[20.7px] rounded-[8px]'>Sign Up</button>
      </div>
      <div>
        <img className='min-w-[280px] sm:mb-[50px] xsm:mb-[20px]' src={MainIcon}/>
      </div>
    </div>
  )
}

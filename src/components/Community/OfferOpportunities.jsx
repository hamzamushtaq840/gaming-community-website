import React from 'react'
import MainIcon from "../../assets/offerOppotunityPic.svg"


export default function OfferOpportunities() {
  return (
    <div style={{ background: "linear-gradient(90deg, #EC1F26 0%, #8E0207 64.06%, #D8494E 100%)" }} className='w-[1388px] px-[77px] h-[577px] rounded-[15px] flex items-center justify-between'>
    <div>
      <h1 className='w-[566px] font-[700] text-[43px] leading-[55.17px] text-white'>Access the Next Generation of Talent.</h1>
      <p className='font-[400] text-[24px] leading-[30.79px] font-poppins text-[#FFFFFF] mb-[45px] mt-[27px] opacity-70'>Vetted talent. Back by Scientific Advisors & Ecosystem</p>
      <button className='w-[224px] h-[55px] bg-[white] text-[#EC1F26] font-[700] text-[18px] leading-[20.7px] rounded-[8px]'>Sign Up</button>
    </div>
    <div>
      <img src={MainIcon}/>
    </div>
  </div>
  )
}
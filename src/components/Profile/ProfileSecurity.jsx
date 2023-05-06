import React from 'react'

export default function ProfileSecurity() {
  return (
    <div>
      <h3 className='font-[700] text-[26px] leading-[26px]'>Security</h3>
      <div className='w-full min-h-[474px] bg-[rgba(255,255,255,0.15)] mt-[32px] rounded-[9px] flex justify-center items-center'>
        <div className='w-[716px]'>
          <h4 className='font-[700] text-[16px] leading-[16px] mb-[31px]'>Change Password</h4>
          <input className='w-full h-[48px] border-[1px] border-[rgba(255,255,255,0.25)] font-[400] text-[16px] leading-[22px] text-[rgba(255,255,255,0.5)] rounded-[9px] bg-transparent pl-[22px] mb-[29px]' placeholder='Change Password'/>
          <input className='w-full h-[48px] border-[1px] border-[rgba(255,255,255,0.25)] font-[400] text-[16px] leading-[22px] text-[rgba(255,255,255,0.5)] rounded-[9px] bg-transparent pl-[22px] mb-[29px]' placeholder='New Password'/>
          <input className='w-full h-[48px] border-[1px] border-[rgba(255,255,255,0.25)] font-[400] text-[16px] leading-[22px] text-[rgba(255,255,255,0.5)] rounded-[9px] bg-transparent pl-[22px] mb-[20px]' placeholder='Confirm Password'/>
          <p className='font-[500] text-[16px] leading-[25.2px] text-[rgba(255,255,255,0.6)]'>8 characters or longer. Combine upper and lowercase letters and numbers.</p>
          <button className='font-[400] text-[16px] leading-[18.4px] bg-primary w-full h-[48px] rounded-[9px] mt-[48px]'>Save Changes</button>
        </div>
      </div>
    </div>
  )
}
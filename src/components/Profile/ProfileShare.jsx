import React from 'react'

export default function ProfileShare() {
  return (
    <div>
      <h3 className='font-[700] text-[26px] leading-[26px] text-white mb-[29px]'>Quick Share & Privacy Settings</h3>
      <div className='bg-[rgba(225,225,225,0.15)] min-h-[183px] w-full rounded-[9px] flex gap-[57px] pl-[53px]'>
        <div className='pt-[44px] pb-[50px]'>
          <h4 className='font-[700] text-[18px] leading-[18px] mb-[23px]'>Share Your Profile</h4>
          <div className='relative flex w-[353px] h-[48px] rounded-[9px] overflow-hidden border-[1px] bg-transparent border-[rgba(255,255,255,0.25)]'>
            <input className='flex-1 font-[400] pl-[22px] text-[14px] leading-[14px] bg-transparent' defaultValue={"Lorem ipsum"} />
            <button className='absolute top-[50%] translate-y-[-50%] font-[400] text-[16px] leading-[16px] text-primary right-[16px]'>COPY</button>
          </div>
        </div>
        <div className='pt-[44px] pb-[50px]'>
          <h4 className='font-[700] text-[18px] leading-[18px] mb-[23px]'>Privacy Settings</h4>
          <div className='relative flex w-[353px] h-[48px] rounded-[9px] overflow-hidden border-[1px] border-[rgba(255,255,255,0.25)]'>
            <select className='flex-1 font-[400] pl-[22px] text-[14px] leading-[14px] bg-transparent'>
              <option selected>Visitors must enter their info to view</option>
              <option>Anyone can view anonymously</option>
              <option>Visitors must be granted access to view</option>
            </select>
          </div>
        </div>
      </div>

      <h3 className='font-[700] text-[26px] leading-[26px] text-white mb-[29px] mt-[65px]'>Access List</h3>
      <div className='bg-[rgba(225,225,225,0.15)] min-h-[183px] w-full rounded-[9px] pl-[48px] pt-[44px]'>
        <h4 className='font-[700] text-[18px] leading-[18px] mb-[23px]'>Invite Viewer</h4>
        <div className='relative flex w-[60.781vw] h-[48px] rounded-[9px] overflow-hidden border-[1px] border-[rgba(255,255,255,0.25)] mb-[50px]'>
          <input className='flex-1 px-[22px] bg-transparent' placeholder='company@name.com'></input>
          <button className='w-[8.438vw] h-full bg-primary text-white font-[400] text-[16px] leading-[16px]'>Invite</button>
        </div>
      </div>

    </div>
  )
}

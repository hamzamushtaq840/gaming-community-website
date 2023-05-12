import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'

const NotificationModal = ({ setModal }) => {
  const [value, setValue] = useState('Can Edit')
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div onClick={() => setModal(false)} className="fixed top-0 left-0 w-full z-[1008] h-full bg-[rgba(0,0,0,0.25)] backdrop-blur-[4px] flex justify-center items-center">
      <div onClick={(e) => { e.stopPropagation(); }} className='modal rounded-[9px] relative bg-white   text-black  w-[486px] xsm:min-w-[310px] flex flex-col justify-center items-center'>
        <div className='flex w-full justify-end mr-[1.9416666666666667vw] mt-[10px]'><ImCross className='text-[#7a7979] w-[13px] cursor-pointer hover:text-[#FF5359]' onClick={() => setModal(false)} /></div>
        <div className='overflow-y-auto w-full px-[2.03125vw] xsm:px-[16px] sm:px-[16px] '>

          <form onSubmit={handleSubmit} className='w-full relative'>
            <h1 className='text-custom-20 font-[700] leading-[20px] mt-[20px] mb-[20px]'>Notifications</h1>
            <p className='text-custom-16 opacity-50 mt-[14px] leading-[25.2px] mb-[20px]'>For important updates regarding your activity, certain notification cannot be disabled</p>
            <div className='flex mb-[65px]'>
              <div className='flex-1 flex flex-col'>
                <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Type</h1>
                <p className='text-custom-18 opacity-50 leading-[25.2px]'>Inbox Messages</p>
                <p className='text-custom-18 opacity-50 leading-[25.2px] mt-[10px]'>Platform Updates</p>
              </div>
              <div className='flex flex-col mr-[80px]'>
                <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Email</h1>
                <div className='flex items-center gap-[10px]'>
                  <input className='h-[18px] w-[18px]' type="checkbox" name="" id="" />
                  <p className='text-custom-18 opacity-50 leading-[25.2px]'>Yes</p>
                </div>
                <div className='flex items-center mt-[10px] gap-[10px]'>
                  <input className='h-[18px] w-[18px]' type="checkbox" name="" id="" />
                  <p className='text-custom-18 opacity-50 leading-[25.2px]'>Yes</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center'><button onClick={() => setModal(false)} className='buttonAnimation mb-[52px] text-white w-[195px] h-[48px] bg-primary rounded-[9px]'>Save Changes</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotificationModal
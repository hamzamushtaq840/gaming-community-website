import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'

const AddAdmin = ({ setModal }) => {
    const [value, setValue] = useState('Can Edit')
    const [open, setOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div onClick={() => setModal(false)} className="fixed top-0 left-0 w-full z-[1008] h-full bg-[rgba(0,0,0,0.25)] backdrop-blur-[4px] flex justify-center items-center">
            <div onClick={(e) => { e.stopPropagation(); }} className='modal rounded-[9px] relative bg-white sm:w-[80%] md:min-w-[480px] lg:min-w-[480px] max-h-[96vh]  text-black xsm:w-[80%] sm:min-w-[80%] xsm:min-w-[80%] w-[38.333333333333336vw] min-w-[300px] flex flex-col justify-center items-center'>
                <div className='flex w-full justify-end mr-[1.9416666666666667vw] mt-[10px]'><ImCross className='text-[#7a7979] w-[13px] cursor-pointer hover:text-[#FF5359]' onClick={() => setModal(false)} /></div>
                <div className='overflow-y-auto w-full px-[2.03125vw] xsm:px-[16px] sm:px-[16px] '>

                    <form onSubmit={handleSubmit} className='w-full relative'>
                        <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Edit Experience</h1>
                        <div className='mt-[1.8625vw] xsm:mt-[15px] sm:mt-[15px] flex flex-col gap-[19px]'>
                            <div className='relative flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Invite with email</h2>
                                <div className='flex space-between border-[#ccc] rounded-[9px]  border-[1px] h-[48px] min-h-[48px]'>
                                    <input type="text" className='h-full outline-none px-[12px] rounded-[9px] flex-1 text-custom-16' placeholder='Title' />
                                    <div className={`flex h-full items-center gap-[6px] text-custom-16 pr-[19px]`}>
                                        {value}
                                        <IoIosArrowDown onClick={() => setOpen(prev => !prev)} className={`${open && 'rotate-180'} cursor-pointer `} />
                                    </div>
                                </div>
                                {open &&
                                    <div style={{ filter: 'drop-shadow(-1px 2px 5px rgba(0, 0, 0, 0.25))' }} className='w-[16.66666666666667vw] z-[1009] min-w-[240px] py-[15px] absolute divide-y-2 top-[80px] bg-white border-[1px] border-[#ccc] right-[0px]'>
                                        <div onClick={() => { setValue('Can Edit'); setOpen(false) }} className='flex gap-[9px] px-[30px] cursor-pointer'>
                                            <div className='w-[50px] h-[20px]'>
                                                <TiTick className={`text-black opacity-0.7 w-full h-full ${value === 'Can Edit' ? "block" : 'hidden'}`} />
                                            </div>
                                            <div className='flex flex-col gap-[6px] pb-[12px]'>
                                                <span className='text-custom-16 font-[400] mt-[px]'>Can Edit</span>
                                                <p className='text-custom-16 opacity-60 leading-[21.28px] font-[400]'>This member can add, edit, and deleting on the team profile page.</p>
                                            </div>
                                        </div>
                                        <div onClick={() => { setValue('Can View'); setOpen(false) }} className='flex gap-[9px] px-[30px] pt-[12px] cursor-pointer'>
                                            <div className='w-[50px] h-[20px]'>
                                                <TiTick className={`text-black opacity-0.7 w-full h-full ${value === 'Can View' ? "block" : 'hidden'}`} />
                                            </div>
                                            <div className='flex flex-col gap-[6px]'>
                                                <span className='text-custom-16 font-[400] mt-[px]'>Can View</span>
                                                <p className='text-custom-16 opacity-60 leading-[21.28px] font-[400]'>This member can view only, but can’t edit anything in the project.</p>
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Message (optional)</h2>
                                <textarea type="text" className='border-[#ccc] resize-none p-[12px] border-[1px] h-[221px] min-h-[221px] rounded-[9px] w-full text-custom-16' placeholder='Add a message' />
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <input type="checkbox" className='h-[1.09375vw] w-[1.09375vw] min-w-[15px] min-h-[15px] rounded-[9px]' />
                                <h2 className='text-custom-16 font-[400] leading-[25.2px] text-[#000000] opacity-50'>Notify them when new changes are added to the team page</h2>
                            </div>
                            <div className='flex gap-[22px] mt-[11px] mb-[42px]'>
                                <button className='flex bg-white justify-center items-center text-custom-16 border-[2px] h-[2.5vw] min-h-[25px] border-[#EC1F26] text-[#EC1F26] rounded-[9px] flex-1 cursor-pointer' onClick={() => setModal(false)}>Cancel</button>
                                <button className='flex text-white justify-center items-center text-custom-16 border-[0px] h-[2.5vw] min-h-[25px] bg-[#EC1F26] rounded-[9px] flex-1 cursor-pointer'>Send</button>
                            </div>
                            {/* <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
                                When you look
                                <span class="before:block mx-[10px] w-[120px] before:absolute before:-inset-[1px] before:-skew-y-3  before:bg-pink-500 relative inline-block">
                                    <span class="relative text-white ">annoyed</span>
                                </span>
                                all the time, people think that you're busy.
                            </blockquote> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin
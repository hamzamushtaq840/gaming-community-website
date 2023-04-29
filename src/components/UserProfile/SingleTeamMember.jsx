import React, { useState } from 'react'
import user from './../../assets/user.svg'
import { MdEdit } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import arrow from './../../assets/arrow.svg'

const SingleTeamMember = ({ value }) => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <>
            <div className='flex gap-[10px] justify-between items-start'>
                <img src={user} alt="" className='w-[56px] rounded-full min-w-[30px]' />
                <div className='flex-1 flex flex-col gap-[0.390625vw] pt-[8px]'>
                    <h1 className='text-[clamp(12px,1.0416666666666667vw,16px)] font-[700] leading-[16px]'>{value.name} | {value.role}</h1>
                    <p className='text-[clamp(10px,0.9114583333333334vw,14px)] font-[400] opacity-[0.5]'>Member Since: {value.createdAt}</p>
                    <p className='text-[clamp(10px,0.9114583333333334vw,14px)] font-[400] mt-[-2px] opacity-[0.5]'>{value.country}, {value.city} </p>
                    <div className={`${!seeMore && 'opacity-overlay'}`}>
                        <div className={`mt-[7px] border-l-[4px] border-[#EC1F26] pl-[30px] z-10 ${!seeMore ? 'h-[47px] overflow-hidden ' : 'h-full'}`}>
                            <ul className='flex flex-col gap-[14px]'>
                                {value.paragraphs.map((item, index) => {
                                    return (
                                        <li key={index} className='list-disc text-[clamp(10px,0.9114583333333334vw,14px)] font-[400] opacity-[0.5] leading-[18.83px]'>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={`flex justify-center mt-[14px] ${!seeMore && 'rotate-180'} cursor-pointer`}>
                        <img src={arrow} alt="" onClick={() => setSeeMore(prev => !prev)} />
                    </div>
                </div>
                <div className='flex gap-[0.5765625vw] pt-[8px]'>
                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                </div>
            </div>
        </>
    )
}

export default SingleTeamMember
import React from 'react'
import options from './../../assets/options.svg'

const SingleTeam = ({ value }) => {
    return (
        <div className='rounded-[9px] bg-[rgba(255,255,255,0.2)] p-[24px]'>
            <div className='flex justify-between items-start mb-[28px]'>
                <img src={value.teamImage} className='w-[70px] h-[70px]' alt="" />
                <img src={options} className='cursor-pointer' alt="" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-custom-24 leading-[24px] font-[700]'>{value.teamName}</h1>
                <p className='text-custom-14 leading-[18.76px] font-[400] mt-[15px] w-[90%] mb-[60px] opacity-[0.7]'>{value.teamDescription}</p>
                <p className='text-custom-14 leading-[14px] font-[400] mb-[13px] opacity-[0.5]'>Team Members</p>
            </div>
        </div>
    )
}

export default SingleTeam
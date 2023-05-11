import React from 'react'
import user from './../../assets/user.svg'

const PeopleAttending = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={user} className='mb-[15px] h-[4.84375vw] w-[4.84375vw] min-h-[80px] min-w-[80px]' alt="" />
      <h1 className='text-custom-16 font-[700] mb-[4px]'>Name</h1>
      <p className='text-custom-14 opacity-50 mb-[3px]'>Student</p>
      <p className='text-custom-14 opacity-50 mb-[8px]'>Harvard Unversity</p>
      <p className='text-[#FF5359] text-custom-12 underline'>Send a message</p>
    </div>
  )
}

export default PeopleAttending
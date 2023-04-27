import React from 'react'

export default function GoalsCard({background,image,heading,description,buttonTitle}) {
  return (
    <div style={{background:background}} className='w-[335.76px] min-w-[300px] h-[341.75px] flex flex-col justify-between py-[40px] items-center rounded-[18px]'>
      <img src={image}/>
      <h1 className='text-center font-[700] text-[30px] leading-[34.35px] tracking-[2.5%] w-[257.81px]'>{heading}</h1>
      <p className='h-[59px] font-[400] text-[14px] leading-[21.42px] tracking-[2.5%] text-center w-[240.8px]'>{description}</p>
      <button className='w-[169.88px] h-[44.97px] bg-[rgba(10,10,10,1)] text-white rounded-[9px] font-[400] text-[14px] leading-[16.1px]'>{buttonTitle}</button>
    </div>
  )
}

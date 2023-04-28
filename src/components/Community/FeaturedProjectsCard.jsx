import React from 'react'

export default function FeaturedProjectsCard({background,content}) {
  return (
    <div style={{background: `linear-gradient(180deg,rgba(0,0,0,0) 58.73%, #000000 100%),url(${background})`,}} className='w-[396px] xsm:w-[20.625vw] sm:w-[20.625vw] md:w-[20.625vw] lg:w-[20.625vw] xl:w-[20.625vw] min-w-[300px] min-h-[561px] rounded-[14px] flex'>
      <p className='place-self-end text-white w-[198px] ml-[28px] mb-[37px]'>{content}</p>
    </div>
  )
}

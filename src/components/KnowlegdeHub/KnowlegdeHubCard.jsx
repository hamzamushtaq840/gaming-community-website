import React from 'react'
import { Link } from 'react-router-dom'

export default function KnowlegdeHubCard() {
  return (
    <Link to={'/knowledge-hub/info'}>
      <div className='w-full min-h-[149px] rounded-[9px] bg-[rgba(255,255,255,0.15)] pl-[29px] flex flex-col justify-center'>
        <div className='flex items-center gap-[13px]'>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
          </svg>
          <p className='font-normal text-[14px] leading-[16.1px] text-[rgba(255,255,255,0.5)]'>Posted by Name | 1 month ago</p>
        </div>
        <p className='font-[700] text-[20px] leading-[23px] mt-[19px] mb-[23px]'>Posted by Name | 1 month ago</p>
        <div className='w-[51px] h-[24px] bg-[rgba(255,255,255,0.25)] rounded-[9px] flex gap-[4px] justify-center items-center'>
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7294 5.44253C13.0674 6.11862 13.2421 6.84542 13.2421 7.60602C13.2421 10.2484 11.0955 12.395 8.4531 12.395C5.81071 12.395 3.66413 10.2484 3.66413 7.60602C3.66413 4.96363 5.81071 2.81705 8.4531 2.81705C8.49254 2.81705 8.58832 2.81705 8.68973 2.85085C8.88129 2.91282 9.02215 3.07621 9.06158 3.27341C9.29822 4.40586 10.3067 5.23407 11.4673 5.23407C11.6814 5.23407 11.8899 5.2059 12.0702 5.15519C12.335 5.08195 12.6054 5.2059 12.7294 5.44253ZM8.4531 0C4.59938 0 0.649887 3.38045 0.00760118 7.22854C-0.0431056 7.53278 0.165356 7.82575 0.469597 7.87646C0.773838 7.92717 1.06681 7.7187 1.11752 7.41446C1.61895 4.4453 4.85855 1.12682 8.4531 1.12682C12.0477 1.12682 15.2873 4.4453 15.7831 7.41446C15.8281 7.69053 16.0704 7.88773 16.3408 7.88773C16.369 7.88773 16.4028 7.88773 16.4366 7.88209C16.7409 7.83139 16.9493 7.53841 16.8986 7.23417C16.2563 3.38045 12.3068 0 8.4531 0Z" fill="white" />
          </svg>
          <p>10</p>
        </div>
      </div>
    </Link>
  )
}

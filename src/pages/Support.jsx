import React from 'react'
import { Link } from 'react-router-dom'

export default function Support() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)]'>
      <h3 className='text-center font-bold text-[34px] leading-[34px] pt-[64px] mb-[40px]'>Help / Support</h3>
      <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] flex flex-col'>
        <Link className='self-end mr-[24px] mt-[24px]' to={'/about/edit'}>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13.5" cy="13.5" r="13.5" fill="#FF5359" />
            <path d="M14.5603 8.62695L7.3141 15.8737C7.27764 15.9103 7.25132 15.9564 7.23879 16.006L6.43561 19.2298C6.41159 19.3268 6.4401 19.4301 6.51093 19.5009C6.56451 19.5545 6.63753 19.5841 6.71222 19.5841C6.73509 19.5841 6.75849 19.5813 6.78126 19.5756L10.005 18.7723C10.0553 18.7597 10.1009 18.7335 10.1374 18.6971L17.3842 11.4509L14.5603 8.62695Z" fill="white" />
            <path d="M19.1791 7.64044L18.3724 6.83382C17.8333 6.29472 16.8937 6.29524 16.3553 6.83382L15.3672 7.82188L18.191 10.6457L19.1791 9.65762C19.4483 9.38843 19.5967 9.03014 19.5967 8.64908C19.5967 8.26802 19.4483 7.90973 19.1791 7.64044Z" fill="white" />
          </svg>
        </Link>
        <div className='px-[98px]'>
          <h4 className='w-[219px] h-[80px] border border-white rounded-[9px] m-auto font-bold text-[50px] leading-[50px] flex justify-center items-center'>LOGO</h4>
          <p className='font-normal leading-[25.92px] text-[16px] text-[rgba(255,255,255,0.7)] mt-[58px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci eu lobortis elementum. Et netus et malesuada fames ac. Sollicitudin tempor id eu nisl nunc. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Aliquam nulla facilisi cras fermentum odio. Diam maecenas. <br /><br /> ultricies mi eget mauris pharetra et ultrices. Fermentum leo vel orci porta non pulvinar. Nunc eget lorem dolor sed viverra ipsum. Felis eget nunc lobortis mattis aliquam faucibus purus in. Urna porttitor rhoncus dolor purus non. Et ultrices neque ornare aenean euismod. Felis eget velit aliquet sagittis id. Magna fermentum iaculis eu non diam phasellus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Adipiscing commodo elit at imperdiet dui accumsan sit amet.</p>

          <div className='flex gap-[14px] items-center mt-[41px]'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3781 16.1458L18.3079 13.0756C17.2114 11.9791 15.3474 12.4178 14.9088 13.8431C14.5799 14.83 13.4834 15.3783 12.4966 15.1589C10.3036 14.6107 7.34307 11.7598 6.79482 9.4572C6.46588 8.47031 7.12377 7.37383 8.11061 7.04493C9.53604 6.60633 9.97464 4.7423 8.87815 3.64582L5.80799 0.575655C4.9308 -0.191885 3.61501 -0.191885 2.84747 0.575655L0.764149 2.65898C-1.31918 4.85195 0.983447 10.6633 6.13693 15.8168C11.2904 20.9703 17.1018 23.3826 19.2948 21.1896L21.3781 19.1063C22.1457 18.2291 22.1457 16.9133 21.3781 16.1458Z" fill="#FF5359" />
            </svg>
            <p>123-456-7891</p>
          </div>
          <div className='flex gap-[14px] items-center mt-[32px] mb-[72px]'>
            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0668 14.7741C14.3489 14.9504 14.6662 15.0209 14.9482 15.0209C15.2303 15.0209 15.5476 14.9504 15.8296 14.7741L29.8613 6.20703V17.5946C29.8613 20.0272 27.887 22.0015 25.4544 22.0015H4.4068C1.97417 22.0015 -0.000144958 20.0272 -0.000144958 17.5946V6.20703L14.0668 14.7741Z" fill="#FF5359" />
              <path d="M4.39938 0H25.447C27.527 0 29.2898 1.48073 29.7129 3.45505L14.9055 12.4805L0.133459 3.45505C0.556526 1.48073 2.3193 0 4.39938 0Z" fill="#FF5359" />
            </svg>
            <p>companyname@email.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

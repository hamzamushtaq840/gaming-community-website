import React from 'react'
import user from './../../assets/user.svg'

const AllMatches = () => {
  return (
    <div className='w-full py-[64px] px-[10.9375vw] xsm:px-[20px] sm:px-[20px] dark:bg-black bg-white dark:text-white text-black'>
      <h1 className='text-custom-34 font-bold text-center mb-[40px]'>Matches</h1>
      <div className='grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 gap-x-[18px] gap-y-[20px] mb-[61px]'>
        <button className='bg-white px-[5px] py-[13px] hover:dark:bg-primary hover:dark:text-white dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>All</button>
        <button className='bg-white px-[5px] py-[13px] hover:dark:bg-primary hover:dark:text-white dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>Match LOREM IPSUM 1</button>
        <button className='bg-white px-[5px] py-[13px] hover:dark:bg-primary hover:dark:text-white dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>Match LOREM IPSUM 2</button>
        <button className='bg-white px-[5px] py-[13px] hover:dark:bg-primary hover:dark:text-white dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>Match LOREM IPSUM 3</button>
      </div>
      <h1 className='font-bold text-custom-24'>Showing <span className='text-[#FF5359]'>4</span> matches</h1>
      <di className="flex flex-col gap-[19px] mt-[24px]">
        {[0, 1, 2, 3].map(() => {
          return (<div className='flex py-[28px] xsm:flex-col rounded-[9px] px-[29px] xsm:px-[20px] bg-white items-center dark:bg-[rgba(255,255,255,0.2)]'>
            <div className='relative mr-[22px] xsm:mr-0'>
              <img src={user} className='h-[90px] w-[90px] rounded-full' alt="" />
              <svg className='absolute bottom-0 right-[-2px]' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_48365)">
                  <circle cx="17" cy="13" r="13" fill="#EC1F26" />
                </g>
                <path d="M16.8975 18.6074C13.4976 18.6074 10.4143 16.7473 8.13924 13.7259C7.95359 13.4784 7.95359 13.1326 8.13924 12.8851C10.4143 9.86007 13.4976 7.99994 16.8975 7.99994C20.2974 7.99994 23.3807 9.86007 25.6558 12.8814C25.8414 13.129 25.8414 13.4748 25.6558 13.7223C23.3807 16.7473 20.2974 18.6074 16.8975 18.6074ZM17.1414 9.56886C14.8845 9.42689 13.0207 11.287 13.1627 13.5476C13.2792 15.4113 14.7898 16.922 16.6536 17.0385C18.9105 17.1805 20.7743 15.3203 20.6323 13.0598C20.5122 11.1997 19.0015 9.68898 17.1414 9.56886ZM17.0286 11.2943C15.8127 11.2179 14.808 12.2189 14.8881 13.4347C14.95 14.4394 15.7654 15.2512 16.7701 15.3167C17.9859 15.3931 18.9906 14.3921 18.9105 13.1763C18.845 12.1679 18.0296 11.3562 17.0286 11.2943Z" fill="white" />
                <defs>
                  <filter id="filter0_d_1_48365" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_48365" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_48365" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className='flex flex-1 flex-col gap-[10px] justify-center xsm:items-center xsm:mt-[20px]'>
              <h1 className='text-custom-16 font-[700]'>Investor Name</h1>
              <p className='text-custom-14 opacity-70 xsm:text-center'>You matched with John Doe because you’re both looking for LOREM IPSUM 1 | LOREM IPSUM 2 | LOREM IPSUM 3</p>
            </div>
            <div className='flex ml-[5px] flex-col justify-between h-full items-end gap-[26px] xsm:flex-row xsm:items-center xsm:mt-[20px]'>
              <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M20.3 29C20.1067 29 19.9133 28.9396 19.7442 28.8248L10.6333 22.4448L1.5225 28.8248C1.22646 29.0302 0.839792 29.0544 0.519583 28.8913C0.199375 28.7221 0 28.3958 0 28.0333V0.966667C0 0.435 0.435 0 0.966667 0H20.3C20.8317 0 21.2667 0.435 21.2667 0.966667V28.0333C21.2667 28.3958 21.0673 28.7221 20.7471 28.8913C20.6081 28.9638 20.451 29 20.3 29ZM10.6333 20.3C10.8267 20.3 11.02 20.3604 11.1892 20.4752L19.3333 26.1785V1.93333H1.93333V26.1785L10.0775 20.4752C10.2467 20.3604 10.44 20.3 10.6333 20.3Z" fill="white" />
                  <path d="M14.403 18.4873C14.2519 18.4873 14.0948 18.4511 13.9559 18.3786L10.633 16.6325L7.31006 18.3786C6.98381 18.5477 6.5911 18.5236 6.29506 18.3061C5.99901 18.0886 5.84797 17.7261 5.90839 17.3636L6.54277 13.6661L3.85422 11.05C3.58839 10.7902 3.49776 10.4096 3.60651 10.0592C3.71526 9.70877 4.02339 9.45502 4.38589 9.40065L8.10152 8.86294L9.76297 5.49773C9.9261 5.16544 10.2644 4.96002 10.6269 4.96002C10.9894 4.96002 11.3278 5.17148 11.4909 5.49773L13.1523 8.86294L16.868 9.40065C17.2305 9.45502 17.5326 9.70877 17.6473 10.0592C17.7621 10.4096 17.6655 10.7963 17.3996 11.05L14.7111 13.6661L15.3455 17.3636C15.4059 17.7261 15.2609 18.0946 14.9588 18.3061C14.8017 18.4269 14.6023 18.4873 14.403 18.4873ZM10.633 14.5723C10.7901 14.5723 10.9411 14.6086 11.0801 14.6811L13.1161 15.7504L12.7294 13.4848C12.6751 13.1706 12.7778 12.8504 13.0073 12.6269L14.6567 11.0198L12.379 10.6875C12.0648 10.6392 11.793 10.4459 11.654 10.1619L10.633 8.10169L9.61193 10.1679C9.47297 10.4519 9.2011 10.6513 8.88693 10.6936L6.60922 11.0259L8.2586 12.6329C8.48818 12.8565 8.59089 13.1767 8.53652 13.4909L8.14985 15.7565L10.1859 14.6871C10.3248 14.6086 10.4759 14.5723 10.633 14.5723Z" fill="white" />
                </g>
              </svg>
              <button className='flex justify-center items-center rounded-[9px] bg-[#EC1F26] gap-[9px] h-[40px] w-[7.65625vw] min-w-[110px] xsm:min-w-[150px]'>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M20.7585 14.9335L18.8552 13.4759C20.2259 11.9992 20.9996 10.0482 20.9996 8.01855C20.9996 3.59713 17.4026 0 12.9813 0C10.0494 0 7.48047 1.58206 6.08203 3.93703C13.1222 2.43109 19.1254 9.23803 16.7524 16.0372H20.3845C20.971 16.0371 21.2241 15.2901 20.7585 14.9335Z" fill="white" />
                    <path d="M5.58008 16.0125H10.4979V12.3252H5.58008V16.0125ZM7.63087 13.5536H8.44708C8.78686 13.5536 9.06232 13.8291 9.06232 14.1689C9.06232 14.5086 8.78686 14.7841 8.44708 14.7841H7.63087C7.29109 14.7841 7.01563 14.5086 7.01563 14.1689C7.01563 13.8291 7.29109 13.5536 7.63087 13.5536Z" fill="white" />
                    <path d="M8.01869 4.96289C3.59735 4.96289 0.000262869 8.55998 0.000262869 12.9815C0.000262869 15.0111 0.773985 16.9621 2.14469 18.4388L0.241436 19.8964C-0.224299 20.2531 0.029015 21.0001 0.6155 21.0001C8.37335 21 8.03932 21.0004 8.0595 20.9997C12.4667 20.9778 16.0371 17.405 16.0371 12.9815C16.0371 8.55998 12.44 4.96289 8.01869 4.96289ZM11.7285 16.6278C11.7285 16.9676 11.453 17.243 11.1133 17.243H4.96498C4.62521 17.243 4.34974 16.9676 4.34974 16.6278V11.71C4.34974 11.3702 4.62521 11.0948 4.96498 11.0948H5.57817V10.5C5.57817 9.14306 6.68215 8.03908 8.03912 8.03908C9.39608 8.03908 10.5001 9.14306 10.5001 10.5V11.0948H11.1133C11.453 11.0948 11.7285 11.3702 11.7285 11.71V16.6278Z" fill="white" />
                    <path d="M9.26954 10.5C9.26954 9.82152 8.71755 9.26953 8.03907 9.26953C7.36058 9.26953 6.80859 9.82152 6.80859 10.5V11.0947H9.26954V10.5Z" fill="white" />
                  </g>
                </svg>
                Message
              </button>
            </div>
          </div>)
        })}
      </di>
    </div>
  )
}

export default AllMatches
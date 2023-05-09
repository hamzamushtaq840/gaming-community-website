import React from 'react'

export default function CompanyAdd() {
  return (
    <div className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)] pt-[65px] pb-[115px]'>
      <div className='w-[65.26vw] min-h-[1274px] rounded-[9px] bg-[rgba(255,255,255,0.15)]'>
        <div className='w-full flex gap-[21px] flex-col items-center pt-[51px]'>
          <h1 className='font-[400] text-[34px] leading-[34px]'>Add Company</h1>
          <p className='font-[400] text-[18px] leading-[24.57px]'>Let's get started with a few details about your company</p>
        </div>

        <form className='w-[37.292vw] m-auto mt-[50px] flex flex-col gap-[22px]'>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Name*</label>
            <input placeholder='Add your organization’s name' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Website*</label>
            <input placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Industry*</label>
            <input placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Organization size*</label>
            <select placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
              <option selected>Select size</option>
            </select>
          </div>
          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Organization type*</label>
            <select placeholder='Begin with http://, https:// or www.' className='border-[1px] h-[48px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
              <option selected>Select type</option>
            </select>
          </div>

          <div className='flex flex-col gap-[15px] min-h-[149px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Logo</label>
            <div className='border border-dotted py-[41px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'>
              <div className='flex flex-col justify-center items-center gap-[9px] h-full'>
                <button className='w-[159px] border-0 h-[40px] rounded-[9px] text-white bg-primary flex justify-center items-center gap-[7px]'>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.74982 4.77019L7.54712 2.97289V12.4805C7.54712 12.7115 7.63886 12.9329 7.80215 13.0962C7.96545 13.2595 8.18692 13.3513 8.41785 13.3513C8.64879 13.3513 8.87026 13.2595 9.03355 13.0962C9.19685 12.9329 9.28859 12.7115 9.28859 12.4805V2.97289L11.0859 4.77019C11.1667 4.85141 11.2627 4.91589 11.3684 4.95994C11.4741 5.00399 11.5875 5.02674 11.7021 5.0269C11.8166 5.02706 11.9301 5.00461 12.0359 4.96085C12.1418 4.91708 12.238 4.85286 12.319 4.77187C12.4 4.69087 12.4642 4.59469 12.5079 4.48884C12.5517 4.38298 12.5741 4.26953 12.574 4.15498C12.5738 4.04044 12.5511 3.92705 12.507 3.82131C12.463 3.71558 12.3985 3.61957 12.3173 3.5388L9.03357 0.255047C8.95272 0.174188 8.85672 0.110046 8.75108 0.0662848C8.64543 0.0225236 8.5322 0 8.41785 0C8.3035 0 8.19027 0.0225236 8.08463 0.0662848C7.97898 0.110046 7.88299 0.174188 7.80214 0.255047L4.51843 3.5388C4.43721 3.61957 4.37273 3.71558 4.32868 3.82131C4.28463 3.92705 4.26188 4.04044 4.26172 4.15498C4.26156 4.26953 4.28401 4.38298 4.32777 4.48884C4.37154 4.59469 4.43575 4.69087 4.51675 4.77187C4.59775 4.85286 4.69393 4.91708 4.79978 4.96085C4.90564 5.00461 5.01909 5.02706 5.13364 5.0269C5.24818 5.02674 5.36157 5.00399 5.46731 4.95994C5.57304 4.91589 5.66905 4.85141 5.74982 4.77019Z" fill="white" />
                    <path d="M15.9634 7.54688C15.7325 7.54688 15.511 7.63861 15.3477 7.80191C15.1844 7.9652 15.0927 8.18667 15.0927 8.41761V15.0932H1.74146V8.41761C1.74146 8.18667 1.64973 7.9652 1.48643 7.80191C1.32314 7.63861 1.10166 7.54688 0.870732 7.54688C0.639799 7.54688 0.418325 7.63861 0.255032 7.80191C0.0917376 7.9652 0 8.18667 0 8.41761V15.3835C0 15.7683 0.152896 16.1375 0.425052 16.4096C0.697209 16.6818 1.06633 16.8347 1.45122 16.8347H15.3829C15.7678 16.8347 16.1369 16.6818 16.4091 16.4096C16.6813 16.1375 16.8342 15.7683 16.8342 15.3835V8.41761C16.8342 8.18667 16.7424 7.9652 16.5791 7.80191C16.4158 7.63861 16.1944 7.54688 15.9634 7.54688Z" fill="white" />
                  </svg>
                  Upload File
                </button>
                <p className='p-0 m-0 indent-0'>Upload to see preview</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[15px]'>
            <label className='text-[rgba(255,255,255,0.5)] font-[700] text-[16px] leading-[16px]'>Tagline</label>
            <textarea placeholder='Use your tagline to briefly describe what your organization does' className='resize-none pt-[13px] border-[1px] min-h-[109px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] pl-[1.146vw]'>
            </textarea>
          </div>

          <div className='flex items-start gap-[15px] w-[90%] m-auto mt-[13px] mb-[23px]'>
            <input type='checkbox' className='pt-[13px] mt-[3px] bg-transparent rounded-[9px] border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.5)] font-[400] text-[16px] leading-[21.79px] indent-[22px]'></input>
            <p className='font-[400] leading-[18.41px] text-[14px] text-[rgba(255,255,255,0.5)]'>I verify that I am an authorized representative of this organization and have the right to act on its behalf in the creation and management of this page. The organization and I agree to the additional terms for Pages.</p>
          </div>

          <button className='w-[37.292vw] h-[48px] bg-primary rounded-[9px] flex justify-center items-center gap-[10px] mb-[10px]'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M12.7695 5.76953H8.23047V1.23047C8.23047 0.550894 7.67957 0 7 0C6.32043 0 5.76953 0.550894 5.76953 1.23047V5.76953H1.23047C0.550894 5.76953 0 6.32043 0 7C0 7.67957 0.550894 8.23047 1.23047 8.23047H5.76953V12.7695C5.76953 13.4491 6.32043 14 7 14C7.67957 14 8.23047 13.4491 8.23047 12.7695V8.23047H12.7695C13.4491 8.23047 14 7.67957 14 7C14 6.32043 13.4491 5.76953 12.7695 5.76953Z" fill="white" />
              </g>
            </svg>
            Add Company
          </button>
        </form>
      </div>
    </div>
  )
}
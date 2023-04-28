import React from 'react'

export default function SignupCommunity() {

  const handleSignup = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex font-helvetica sm:text-[.8rem] md:text-[.9rem] xsm:text-[.7rem]'>
      <div className='signupbg w-[50vw] md:w-[35vw] sm:w-0 xsm:w-0 flex justify-center items-center'>
        LOGO
      </div>
      <div className='flex flex-col w-[50vw] h-[100vh] md:w-[65vw] xsm:w-full sm:w-full bg-black'>
        <div className='flex flex-col flex-1 justify-center px-[10.5vw]'>
          <div className='flex flex-col'>
            <h1 className='font-[600] text-[1.625em] text-white mb-[15px] text-center leading-[29.77px]'>Sign Up To (name Community 1)</h1>
            <p className='font-[400] text-[1em] text-white opacity-[0.75] leading-[21.84px] mb-[78px] text-center'>Sign-up to join (name of community). Achieve your community goals.</p>
            <form onSubmit={handleSignup}>
              <div className='flex justify-between mb-[28px]'>
                <div className='flex flex-col w-[45%]'>
                  <label className='text-[#FF5359] text-[1em] font-[700] mb-[5px]'>First Name</label>
                  <input type="text" className='bg-black border-b-[1px] border-[#FFFFFF] text-white' />
                </div>
                <div className='flex flex-col w-[45%]'>
                  <label className='text-[#FF5359] text-[1em] font-[700] mb-[5px]'>Last Name</label>
                  <input type="text" className='bg-black border-b-[1px] border-[#FFFFFF] text-white' />
                </div>
              </div>
              <div className='flex flex-col mb-[28px]'>
                <label className='text-[#FF5359] text-[1em] font-[700] mb-[5px]'>Email Address</label>
                <input type="email" className='bg-black border-b-[1px] border-[#FFFFFF] text-white' />
              </div>
              <div className='flex flex-col w-full mb-[4.875em]'>
                <label className='text-[#FF5359] text-[1em] font-[700] mb-[5px]'>Password</label>
                <input type="password" className='bg-black border-b-[1px] border-[#FFFFFF] text-white' />
              </div>
              <button className='w-full rounded-[9px] bg-[#EC1F26] h-[3.0625em] text-white text-[0.9375em]'>Sign Up</button>
            </form>
          </div>
        </div>
        <div className='min-h-[114px]'>
          <p className='text-[#FFFFFF] text-center text-[1em] font-[400] opacity-[0.75] hover:underline cursor-pointer'>Already have an account? Sign in</p>
        </div>
      </div>
    </div>
  )
}

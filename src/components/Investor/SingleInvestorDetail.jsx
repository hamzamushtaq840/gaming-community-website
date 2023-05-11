import React from 'react'
import user from './../../assets/user.svg'

const SingleInvestorDetail = () => {
  return (
    <main className='py-[64px] min-h-[calc(100vh-72px)] flex xsm:flex-col sm:flex-col xsm:px-[6vw] lg:px-[6vw] sm:px-[6vw] gap-[2.0833333333333335vw] px-[8.28125vw] dark:bg-black dark:text-white bg-white text-black'>
      <aside className='w-[17.1875vw] min-w-[225px] h-[1%] xsm:w-full sm:w-full bg-white rounded-9px items-center dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>
        <div className='relative'>
          <div className='absolute top-[-4px] right-[18.73px]'>
            <svg className='my-[24px]' width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M20.3 29C20.1067 29 19.9133 28.9396 19.7442 28.8248L10.6333 22.4448L1.5225 28.8248C1.22646 29.0302 0.839792 29.0544 0.519583 28.8913C0.199375 28.7221 0 28.3958 0 28.0333V0.966667C0 0.435 0.435 0 0.966667 0H20.3C20.8317 0 21.2667 0.435 21.2667 0.966667V28.0333C21.2667 28.3958 21.0673 28.7221 20.7471 28.8913C20.6081 28.9638 20.451 29 20.3 29ZM10.6333 20.3C10.8267 20.3 11.02 20.3604 11.1892 20.4752L19.3333 26.1785V1.93333H1.93333V26.1785L10.0775 20.4752C10.2467 20.3604 10.44 20.3 10.6333 20.3Z" fill="white" />
                <path d="M14.4039 18.4882C14.2529 18.4882 14.0958 18.452 13.9569 18.3795L10.6339 16.6334L7.31103 18.3795C6.98478 18.5486 6.59207 18.5245 6.29603 18.307C5.99999 18.0895 5.84895 17.727 5.90937 17.3645L6.54374 13.667L3.8552 11.0509C3.58937 10.7911 3.49874 10.4105 3.60749 10.0601C3.71624 9.70969 4.02437 9.45594 4.38687 9.40156L8.10249 8.86385L9.76395 5.49865C9.92708 5.16635 10.2654 4.96094 10.6279 4.96094C10.9904 4.96094 11.3287 5.1724 11.4919 5.49865L13.1533 8.86385L16.869 9.40156C17.2315 9.45594 17.5335 9.70969 17.6483 10.0601C17.7631 10.4105 17.6665 10.7972 17.4006 11.0509L14.7121 13.667L15.3465 17.3645C15.4069 17.727 15.2619 18.0955 14.9598 18.307C14.8027 18.4278 14.6033 18.4882 14.4039 18.4882ZM10.6339 14.5732C10.791 14.5732 10.9421 14.6095 11.081 14.682L13.1171 15.7514L12.7304 13.4857C12.676 13.1716 12.7787 12.8514 13.0083 12.6278L14.6577 11.0207L12.38 10.6884C12.0658 10.6401 11.794 10.4468 11.655 10.1628L10.6339 8.1026L9.61291 10.1689C9.47395 10.4528 9.20208 10.6522 8.88791 10.6945L6.6102 11.0268L8.25957 12.6339C8.48916 12.8574 8.59187 13.1776 8.53749 13.4918L8.15082 15.7574L10.1869 14.688C10.3258 14.6095 10.4769 14.5732 10.6339 14.5732Z" fill="white" />
              </g>
            </svg>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='relative mt-[45px] mb-[30px] flex justify-center'>
            <img src={user} alt="" className='h-[109px] w-[109px]' />
            <div className='absolute bottom-0 text-custom-12 flex justify-center items-center leading-[13px] h-[23px] w-[119px] bg-primary rounded-full'>Investor</div>
          </div>
          <h1 className='text-custom-16 font-[700] mb-[10px]'>Name</h1>
          <h1 className='text-custom-14 opacity-60 font-[400] text-center'>Data Scientist . Project Manager</h1>
          <p className='mt-[10px] mb-[17px] text-custom-14'>New York City NY USA</p>
          <div className='flex gap-[18px] items-center mb-[38px]'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5495 19.8594V12.8315H13.8775L14.3205 9.92334H11.5495V8.03662C11.5295 7.82028 11.5583 7.60213 11.6339 7.39844C11.7094 7.19474 11.8298 7.01078 11.9861 6.85986C12.1424 6.70895 12.3306 6.59477 12.5368 6.52637C12.743 6.45797 12.962 6.43676 13.1775 6.46436H14.4375V3.99072C13.6984 3.86944 12.9514 3.8024 12.2025 3.79053C9.91851 3.79053 8.42852 5.18259 8.42852 7.70459V9.91943H5.89151V12.8276H8.42852V19.8555C5.94562 19.4628 3.70205 18.1487 2.14547 16.1748C0.588898 14.201 -0.166231 11.7126 0.0307273 9.20654C0.227685 6.70051 1.36224 4.36074 3.20806 2.6543C5.05389 0.947852 7.47525 0 9.98901 0C12.5028 0 14.9241 0.947852 16.77 2.6543C18.6158 4.36074 19.7503 6.70051 19.9473 9.20654C20.1443 11.7126 19.3891 14.201 17.8325 16.1748C16.276 18.1487 14.0324 19.4628 11.5495 19.8555V19.8594Z" fill="#FF5359" />
            </svg>
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5266 4.94775C18.5266 10.4838 14.4096 16.8613 6.88455 16.8613C4.65113 16.8657 2.46589 16.2123 0.601562 14.9824C0.929597 15.019 1.25947 15.0367 1.58954 15.0347C3.43805 15.0365 5.23136 14.4047 6.67056 13.2446C5.8096 13.2223 4.97732 12.9304 4.29095 12.4102C3.60459 11.8899 3.0987 11.1676 2.84454 10.3447C3.10009 10.3868 3.35858 10.4084 3.61755 10.4097C3.98092 10.4091 4.34263 10.3609 4.69354 10.2666C3.75759 10.0635 2.9203 9.54391 2.32281 8.79541C1.72533 8.04691 1.40419 7.1154 1.41354 6.15771V6.10645C1.97822 6.42939 2.61253 6.61149 3.26254 6.63672C2.39122 6.02926 1.77835 5.11806 1.54413 4.08203C1.30991 3.046 1.47126 1.95982 1.99655 1.03662C3.01076 2.32408 4.28756 3.38066 5.74197 4.13623C7.19638 4.8918 8.79504 5.32886 10.4315 5.41846C10.3663 5.10259 10.3328 4.78103 10.3315 4.4585C10.3252 3.91495 10.426 3.37569 10.6282 2.87109C10.8303 2.3665 11.1299 1.90638 11.5098 1.51758C11.8897 1.12877 12.3425 0.818796 12.8422 0.60498C13.342 0.391165 13.879 0.277751 14.4225 0.271484C14.9857 0.271451 15.5426 0.38905 16.0576 0.616699C16.5727 0.844348 17.0345 1.17729 17.4135 1.59375C18.3332 1.41314 19.2135 1.0706 20.0135 0.58252C19.7129 1.54445 19.0733 2.36467 18.2136 2.89062C19.0274 2.79548 19.8218 2.5767 20.5695 2.2417C20.0123 3.07403 19.3186 3.80633 18.5175 4.40771C18.5265 4.58371 18.5266 4.76675 18.5266 4.94775Z" fill="#FF5359" />
            </svg>
          </div>
          <div className='flex flex-col mb-[55px] px-[2.1875vw] xsm:px-[25px]'>
            <div className='flex flex-col gap-[19px]'>
              <p className='text-custom-14  font-[700]'>Expertise Tags:</p>
              <div className='flex gap-[11px] flex-wrap'>
                <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                  Lorem ipsum
                </div>
                <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                  Lorem ipsum
                </div>
                <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                  Lorem ipsum
                </div>
                <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                  Lorem ipsum
                </div>
                <div className='border-[1px] text-custom-12 opacity-70 rounded-[4px] border-white px-[1em] py-[0.4375em] leading-[16.41px]'>
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section className='flex-1 flex flex-col gap-[25px] xsm:items-center sm:items-center'>
        <div className='bg-white xsm:w-full sm:w-full divide-y-[0.1px] divide-[#ccc] rounded-9px items-center dark:bg-[rgba(255,255,255,0.2)] rounded-[9px]'>
          <h1 className='text-custom-20 px-[2.34375vw] py-[24px] xsm:px-[20px] sm:px-[20px] font-[700]'>Upcoming Avalibility</h1>
          <div className='px-[2.34375vw] xsm:px-[20px] sm:px-[20px] py-[25px]'>
            <p className='text-custom-16'>https://calendly.com</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default SingleInvestorDetail
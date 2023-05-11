import React from 'react'
import labBg from '../../assets/labsBg.svg'
import eye from '../../assets/eye.svg'
import bookmarks from '../../assets/bookmarks.svg'
import userProfileLogo from '../../assets/userProfileLogo.svg'
import message from '../../assets/message.svg'

const SingleGroupDetail = () => {

  return (
    <div className='py-[64px] px-[8.28125vw] xsm:px-[6vw] sm:px-[6vw] dark:bg-black dark:text-white bg-white text-black'>
      <div className='relative w-full rounded-[9px] bg-white dark:bg-[rgba(255,255,255,0.2)]'>
        <img src={labBg} className='w-full aspect-[6.5/2] min-h-[200px] object-cover rounded-t-[9px]' />
        <div className='bg-[rgba(255,255,255,0.5)] left-[1.09375vw] top-[6%] absolute flex gap-[4.09px] rounded-[5px] px-[7px] py-[4px] items-center'>
          <img src={eye} alt="" />
          <p className='text-[14px]'>10</p>
        </div>
        <div className='pr-[3.4895833333333335vw] pl-[3.59375vw] py-[45px]'>
          <div className='flex divide-x-[1px] sm:divide-x-0 xsm:divide-x-0 flex-wrap divide-[#ccc] gap-y-[20px]'>
            <div className='flex-1 flex items-center min-w-[350px] xsm:min-w-full sm:min-w-full gap-[26px] xsm:gap-[10px] sm:gap-[10px]'>
              <img src={userProfileLogo} className='w-[90px] h-[90px] xsm:w-[60px] sm:w-[60px] sm:h-[60px] xsm:h-[60px] rounded-full' alt="" />
              <div className='flex flex-col gap-[12px]'>
                <h1 className='text-custom-22 font-bold'>Harvard Interactive Media Group</h1>
                <div className='flex gap-[11px] items-center'>
                  <button className='bg-primary rounded-[9px] py-[.6em] text-custom-14 w-[7.65625vw] min-w-[130px] gap-[9px] flex justify-center items-center'><img src={message} alt="" />Message</button>
                  <button className='bg-[rgba(255,255,255,0.5)] rounded-[9px] py-[.6em] text-custom-14 w-[40px] flex items-center justify-center'><img src={bookmarks} alt="" /></button>
                </div>
              </div>
            </div>
            <div className='pl-[3.5416666666666665vw] sm:pl-0 xsm:pl-0 flex flex-col gap-[12px] xsm:gap-[5px] sm:gap-[5px] sm:items-center xsm:items-center  sm:w-full  xsm:w-full'>
              <h1 className='text-custom-16 leading-[25.36px]'>Harvard University</h1>
              <p className='text-custom-16 leading-[25.36px]'>123-456-7891</p>
              <p className='text-custom-16 leading-[25.36px]'>HarvardInteractive@harvard.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col w-full rounded-[9px] bg-white dark:bg-[rgba(255,255,255,0.2)] mt-[32px] pt-[41px] px-[3.5416666666666665vw] pb-[48px]'>
        <div>
          <p className='text-custom-14 opacity-70 xsm:px-[10px] sm:px-[10px] text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid ex! Harum, est molestiae quasi blanditiis veritatis sunt! Minima quae minus sequi vel omnis voluptates tenetur aspernatur quisquam qui molestiae officia, porro incidunt labore neque pariatur quos optio atque numquam accusamus rem similique quam dignissimos. Quae, sapiente. Quibusdam architecto, consequatur quaerat tempore, alias quo praesentium impedit excepturi ex repudiandae nulla dolorem accusantium officiis sunt saepe sint sed consectetur odit eveniet eum aliquam quisquam. Reprehenderit odit quas molestiae corrupti quae dignissimos. Omnis in officiis quae, doloremque laudantium fugit. Nisi, molestias! Optio illo quae facere voluptate atque eaque illum asperiores recusandae est!</p>
        </div>
        <div className='mt-[46px]'>
          <div className='flex gap-[17px] xsm:px-[10px] sm:px-[10px] items-center'>
            <p className='text-custom-14 w-[20px]'>Tags:</p>
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
          <div className='flex mt-[31px] gap-[17px] xsm:px-[10px] sm:px-[10px] items-center'>
            <p className='text-custom-14 w-[20px]'>For:</p>
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
          <p className='mt-[46px] xsm:px-[10px] sm:px-[10px] text-custom-16 font-[700] text-primary underline'>www.harvardinteractivemediagroup.com</p>
          <div className='flex xsm:px-[10px] sm:px-[10px] items-center mt-[35px] gap-[11px]'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5495 19.8594V12.8315H13.8775L14.3205 9.92334H11.5495V8.03662C11.5295 7.82028 11.5583 7.60213 11.6339 7.39844C11.7094 7.19474 11.8298 7.01078 11.9861 6.85986C12.1424 6.70895 12.3306 6.59477 12.5368 6.52637C12.743 6.45797 12.962 6.43676 13.1775 6.46436H14.4375V3.99072C13.6984 3.86944 12.9514 3.8024 12.2025 3.79053C9.91851 3.79053 8.42852 5.18259 8.42852 7.70459V9.91943H5.89151V12.8276H8.42852V19.8555C5.94562 19.4628 3.70205 18.1487 2.14547 16.1748C0.588898 14.201 -0.166231 11.7126 0.0307273 9.20654C0.227685 6.70051 1.36224 4.36074 3.20806 2.6543C5.05389 0.947852 7.47525 0 9.98901 0C12.5028 0 14.9241 0.947852 16.77 2.6543C18.6158 4.36074 19.7503 6.70051 19.9473 9.20654C20.1443 11.7126 19.3891 14.201 17.8325 16.1748C16.276 18.1487 14.0324 19.4628 11.5495 19.8555V19.8594Z" fill="#FF5359" />
            </svg>
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5266 4.94775C18.5266 10.4838 14.4096 16.8613 6.88455 16.8613C4.65113 16.8657 2.46589 16.2123 0.601562 14.9824C0.929597 15.019 1.25947 15.0367 1.58954 15.0347C3.43805 15.0365 5.23136 14.4047 6.67056 13.2446C5.8096 13.2223 4.97732 12.9304 4.29095 12.4102C3.60459 11.8899 3.0987 11.1676 2.84454 10.3447C3.10009 10.3868 3.35858 10.4084 3.61755 10.4097C3.98092 10.4091 4.34263 10.3609 4.69354 10.2666C3.75759 10.0635 2.9203 9.54391 2.32281 8.79541C1.72533 8.04691 1.40419 7.1154 1.41354 6.15771V6.10645C1.97822 6.42939 2.61253 6.61149 3.26254 6.63672C2.39122 6.02926 1.77835 5.11806 1.54413 4.08203C1.30991 3.046 1.47126 1.95982 1.99655 1.03662C3.01076 2.32408 4.28756 3.38066 5.74197 4.13623C7.19638 4.8918 8.79504 5.32886 10.4315 5.41846C10.3663 5.10259 10.3328 4.78103 10.3315 4.4585C10.3252 3.91495 10.426 3.37569 10.6282 2.87109C10.8303 2.3665 11.1299 1.90638 11.5098 1.51758C11.8897 1.12877 12.3425 0.818796 12.8422 0.60498C13.342 0.391165 13.879 0.277751 14.4225 0.271484C14.9857 0.271451 15.5426 0.38905 16.0576 0.616699C16.5727 0.844348 17.0345 1.17729 17.4135 1.59375C18.3332 1.41314 19.2135 1.0706 20.0135 0.58252C19.7129 1.54445 19.0733 2.36467 18.2136 2.89062C19.0274 2.79548 19.8218 2.5767 20.5695 2.2417C20.0123 3.07403 19.3186 3.80633 18.5175 4.40771C18.5265 4.58371 18.5266 4.76675 18.5266 4.94775Z" fill="#FF5359" />
            </svg>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.171 1.31201V16.8882C18.1721 17.2344 18.0359 17.5668 17.7922 17.8127C17.5485 18.0587 17.2172 18.1981 16.871 18.2002H1.294C1.12277 18.1994 0.953404 18.1646 0.795588 18.0981C0.637771 18.0317 0.494622 17.9349 0.374384 17.813C0.254146 17.6911 0.159212 17.5467 0.0949652 17.3879C0.0307181 17.2292 -0.00152683 17.0594 5.55381e-05 16.8882V1.31201C-0.00152683 1.14079 0.0307181 0.970975 0.0949652 0.812256C0.159212 0.653537 0.254146 0.509118 0.374384 0.387207C0.494622 0.265296 0.637771 0.16824 0.795588 0.101807C0.953404 0.0353732 1.12277 0.000782977 1.294 0H16.869C17.2156 0.00158809 17.5473 0.140728 17.7914 0.386719C18.0356 0.632709 18.1721 0.965453 18.171 1.31201ZM5.71002 4.16406C5.70942 3.85545 5.61737 3.55392 5.44549 3.29761C5.2736 3.0413 5.02961 2.84181 4.74432 2.72412C4.45903 2.60643 4.14525 2.5759 3.84265 2.63647C3.54004 2.69704 3.26219 2.84602 3.04418 3.06445C2.82617 3.28288 2.67778 3.5608 2.61779 3.86353C2.5578 4.16625 2.58891 4.48008 2.70715 4.76514C2.82538 5.0502 3.02546 5.2937 3.2821 5.46509C3.53874 5.63648 3.84043 5.72803 4.14904 5.72803C4.56324 5.72697 4.96008 5.56172 5.25268 5.26855C5.54528 4.97539 5.70975 4.57826 5.71002 4.16406ZM5.49902 15.6001V6.91504H2.79901V15.6001H5.49902ZM15.588 10.8381C15.588 8.49914 15.081 6.7002 12.356 6.7002C11.8441 6.68088 11.3365 6.8008 10.8874 7.04736C10.4383 7.29392 10.0645 7.65778 9.80602 8.1001H9.76904V6.91309H7.18603V15.5981H9.87902V11.2981C9.87902 10.1641 10.094 9.06714 11.498 9.06714C12.877 9.06714 12.898 10.3672 12.898 11.3672V15.592H15.59L15.588 10.8381Z" fill="#FF5359" />
            </svg>
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0101 8.35596C22.0214 10.0897 21.8674 11.8204 21.5501 13.5249C21.4196 13.9801 21.1708 14.3928 20.8292 14.7207C20.4876 15.0486 20.0652 15.2803 19.6051 15.3921C17.8881 15.8411 11.0051 15.8408 11.0051 15.8408C11.0051 15.8408 4.12308 15.8411 2.40508 15.3921C1.94497 15.2802 1.52263 15.0486 1.18102 14.7207C0.839411 14.3928 0.590684 13.9801 0.460075 13.5249C-0.153358 10.1069 -0.153358 6.60699 0.460075 3.18896C0.588899 2.72937 0.836476 2.31205 1.17791 1.97852C1.51934 1.64498 1.9426 1.4071 2.40508 1.28906C4.12208 0.840062 11.0051 0.839844 11.0051 0.839844C11.0051 0.839844 17.8871 0.840062 19.6051 1.28906C20.0676 1.407 20.4909 1.64448 20.8323 1.97803C21.1738 2.31158 21.4213 2.72932 21.5501 3.18896C21.8673 4.89276 22.0213 6.62292 22.0101 8.35596ZM14.5101 8.35596L8.75808 5.18408V11.5278L14.5101 8.35596Z" fill="#FF5359" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleGroupDetail
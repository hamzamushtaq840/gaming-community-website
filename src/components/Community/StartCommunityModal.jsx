import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import addPicture from '../../assets/addPicture.svg'

const StartCommunityModal = ({ setModal }) => {
  const [file, setFile] = useState(null)
  const [projectLogoURL, setProjectLogoURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleCoverUpload = (event) => {
    setFile(event.target.files[0])
    setProjectLogoURL(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <>
      <div className='modalBackground'></div>
      <div className='modalContainer text-black w-[43.70364583333333vw] min-w-[350px] flex flex-col justify-center items-center'>
        <div className='flex w-full justify-end mr-[1.9416666666666667vw] mt-[10px]'><ImCross className='text-[#7a7979] w-[13px] cursor-pointer hover:text-[#FF5359]' onClick={() => setModal(false)} /></div>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Apply to Start a Commuinity</h1>
          <div className='h-[0.1px] w-full bg-[#ccc] mb-[2px]'></div>
        </div>
        <div className='overflow-y-auto max-h-[85vh] w-full px-[2.03125vw] xsm:px-[20px] sm:px-[20px] '>
          <form onSubmit={handleSubmit} className='w-full relative'>
            <div className='mt-[1.8625vw] xsm:mt-[15px] sm:mt-[15px] flex flex-col gap-[17px]'>
              <div className='flex gap-[0.5208333333333334vw]'>
                <h2 className='w-[113.00000000000001px] self-start text-custom-16 font-[700] text-[#000000] opacity-50'>Project Logo</h2>
                <div className='relative flex justify-center items-center w-[102px] h-[102px] border-[#ccc] border-[1.5px] rounded-[9px]'>
                  <p className='w-[45px] h-[34px] text-primary text-custom-14 text-center'>{projectLogoURL !== '' ? 'Image Uploaded' : 'Upload Image'}</p>
                  <div className="absolute right-[-10px] top-[-8px] flex justify-end">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <img src={addPicture} className='w-[25px] h-[25px]' alt="upload a picture" />
                      <input id="file-upload" type="file" className="hidden" onChange={handleCoverUpload} />
                    </label>
                  </div>
                </div>
                {projectLogoURL !== '' && <p className='self-center text-custom-14 font-[500] text-[#000000] opacity-50'>{file?.name}</p>}
              </div>
              <div className='flex gap-[25px]'>
                <h2 className='w-[113.00000000000001px] text-custom-16 font-[700] text-[#000000] opacity-50'>Community Name</h2>
                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[37px] rounded-[9px] w-full text-custom-16' placeholder='Title' />
              </div>
              <div className='flex gap-[25px]'>
                <h2 className='w-[113.00000000000001px] text-custom-16 font-[700] text-[#000000] opacity-50'>Personal Linkedin</h2>
                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[37px] rounded-[9px] w-full text-custom-16' placeholder='Title' />
              </div>
              <div className='flex gap-[25px]'>
                <h2 className='w-[113.00000000000001px] text-custom-16 font-[700] text-[#000000] opacity-50'>Community Website</h2>
                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[37px] rounded-[9px] w-full text-custom-16' placeholder='Title' />
              </div>
              <div className='flex gap-[25px]'>
                <h2 className='w-[113.00000000000001px] self-center text-custom-16 font-[700] text-[#000000] opacity-50'>Location</h2>
                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[37px] rounded-[9px] w-full text-custom-16' placeholder='Title' />
              </div>
              <div className='flex gap-[25px]'>
                <h2 className='w-[113.00000000000001px] text-custom-16 font-[700] text-[#000000] opacity-50'>Proposed domain</h2>
                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[37px] rounded-[9px] w-full text-custom-16' placeholder='Title' />
              </div>
              <div className='flex gap-[25px]'>
                <h2 className='w-[113.00000000000001px] text-custom-16 font-[700] text-[#000000] opacity-50'>Community Description</h2>
                <textarea type="text" className='border-[#ccc] resize-none p-[12px] border-[1px] h-[8.28125vw] min-h-[80px] rounded-[9px] w-full text-custom-16' placeholder='Name' />
              </div>
              <div className='flex '>
                <h2 className='xsm:w-[100.00000000000001px] xsm:mr-0 w-[80px] mr-[35px] text-custom-16 font-[700] text-[#000000] opacity-50'>Proposed domain</h2>
                <div className='flex-1 flex gap-[17px] flex-wrap'>
                  <div className='flex flex-1 justify-around  border-[#ccc] rounded-[9px]  pl-[12px] border-[1px] h-[2.4479166666666665vw] min-h-[37px] '>
                    <input type="text" className=' outline-none w-full text-custom-16' placeholder='Title' />
                    <button className='h-full bg-primary rounded-[9px] w-[85px] text-custom-16 text-white '>Add</button>
                  </div>
                  <p className='self-center'>or</p>
                  <button className='bg-[rgba(178,177,177,0.93)] rounded-[9px] text-black justify-center flex items-center gap-[10px] h-[2.4479166666666665vw] min-h-[37px] w-[9.166666666666666vw] min-w-[170px] text-custom-16'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.83651 5.93014L8.91778 3.84886V14.8587C8.91778 15.1261 9.02402 15.3826 9.21311 15.5717C9.40221 15.7608 9.65867 15.867 9.92609 15.867C10.1935 15.867 10.45 15.7608 10.6391 15.5717C10.8282 15.3826 10.9344 15.1261 10.9344 14.8587V3.84886L13.0157 5.93014C13.1092 6.02419 13.2204 6.09886 13.3428 6.14987C13.4653 6.20088 13.5966 6.22723 13.7292 6.22741C13.8619 6.22759 13.9932 6.2016 14.1158 6.15092C14.2384 6.10024 14.3498 6.02588 14.4436 5.93208C14.5374 5.83829 14.6117 5.72691 14.6624 5.60433C14.7131 5.48175 14.7391 5.35037 14.7389 5.21773C14.7387 5.08508 14.7124 4.95378 14.6614 4.83134C14.6104 4.70889 14.5357 4.59772 14.4416 4.50418L10.6391 0.701595C10.5455 0.60796 10.4343 0.533683 10.312 0.483008C10.1896 0.432332 10.0585 0.40625 9.92609 0.40625C9.79368 0.40625 9.66256 0.432332 9.54022 0.483008C9.41788 0.533683 9.30672 0.60796 9.21309 0.701595L5.41055 4.50418C5.3165 4.59772 5.24183 4.70889 5.19082 4.83134C5.13981 4.95378 5.11346 5.08508 5.11328 5.21773C5.1131 5.35037 5.13909 5.48175 5.18977 5.60433C5.24045 5.72691 5.31482 5.83829 5.40861 5.93208C5.5024 6.02588 5.61378 6.10024 5.73636 6.15092C5.85894 6.2016 5.99032 6.22759 6.12296 6.22741C6.25561 6.22723 6.38691 6.20088 6.50935 6.14987C6.6318 6.09886 6.74297 6.02419 6.83651 5.93014Z" fill="black" />
                      <path d="M18.6654 9.14453C18.3979 9.14453 18.1415 9.25076 17.9524 9.43986C17.7633 9.62895 17.657 9.88542 17.657 10.1528V17.8832H2.19631V10.1528C2.19631 9.88542 2.09007 9.62895 1.90098 9.43986C1.71188 9.25076 1.45542 9.14453 1.188 9.14453C0.920576 9.14453 0.664109 9.25076 0.475014 9.43986C0.28592 9.62895 0.179688 9.88542 0.179688 10.1528V18.2193C0.179688 18.665 0.356741 19.0925 0.671899 19.4076C0.987057 19.7228 1.4145 19.8998 1.8602 19.8998H17.9931C18.4388 19.8998 18.8663 19.7228 19.1815 19.4076C19.4966 19.0925 19.6737 18.665 19.6737 18.2193V10.1528C19.6737 9.88542 19.5674 9.62895 19.3783 9.43986C19.1892 9.25076 18.9328 9.14453 18.6654 9.14453Z" fill="black" />
                    </svg>
                    Upload CSV FILE
                  </button>
                </div>
              </div>
              <p className='text-custom-16 ml-[115px] my-[4px] text-red-500'>*ALL FIELDS REQUIRED</p>
              <div className='flex ml-[117px] gap-[22px] mb-[42px]'>
                <button className='flex text-white justify-center items-center text-custom-16 border-[0px] h-[2.5vw] min-h-[37px] bg-[#EC1F26] rounded-[9px] flex-1 cursor-pointer'>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default StartCommunityModal
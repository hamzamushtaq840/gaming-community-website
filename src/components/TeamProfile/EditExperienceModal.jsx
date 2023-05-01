import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import addPicture from '../../assets/addPicture.svg'

const EditExperienceModal = ({ setModal }) => {
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
            <div className='modalContainer sm:w-[70%] max-h-[96vh]  text-black xsm:w-[70%] sm:min-w-[70%] xsm:min-w-[70%] w-[31.09375vw] min-w-[450px] flex flex-col justify-center items-center'>
                <div className='flex w-full justify-end mr-[1.9416666666666667vw] mt-[10px]'><ImCross className='text-[#7a7979] w-[13px] cursor-pointer hover:text-[#FF5359]' onClick={() => setModal(false)} /></div>
                <div className='overflow-y-auto w-full px-[2.03125vw] xsm:px-[16px] sm:px-[16px] '>
                    <form onSubmit={handleSubmit} className='w-full relative'>
                        <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Edit Experience</h1>
                        <div className='mt-[1.8625vw] xsm:mt-[15px] sm:mt-[15px] flex flex-col gap-[19px]'>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Title</h2>
                                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Title' />
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Company</h2>
                                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Company' />
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Location</h2>
                                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Location' />
                            </div>
                            <div className='flex flex-col mb-[-15px] gap-[16px]'>
                                <div className='flex gap-[1.6666666666666667vw]'>
                                    <div className='flex flex-col gap-[0.5208333333333334vw] flex-1'>
                                        <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>From</h2>
                                        <input type="date" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Location' />
                                    </div>
                                    <div className='flex flex-col gap-[0.5208333333333334vw] flex-1'>
                                        <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>From</h2>
                                        <input type="date" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Location' />
                                    </div>
                                </div>
                                <div className='flex gap-[1.6666666666666667vw]'>
                                    <div className='flex flex-1'>
                                    </div>
                                    <div className='flex gap-[8px] flex-1'>
                                        <input type="radio" className='h-[18px] w-[18px]' placeholder='Location' />
                                        <h2 className='text-custom-16 font-[700] text-[#000000]'>I currently work here</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Description</h2>
                                <textarea type="text" className='border-[#ccc] resize-none p-[12px] border-[1px] h-[8.28125vw] min-h-[80px] rounded-[9px] w-full text-custom-16' placeholder='Name' />
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Project Logo</h2>
                                <div className='relative flex justify-center items-center w-[102px] h-[102px] border-[#ccc] border-[1.5px] rounded-[9px]'>
                                    <p className='w-[45px] h-[34px] text-primary text-custom-14 text-center'>{projectLogoURL !== '' ? 'Image Uploaded' : 'Upload Image'}</p>
                                    <div className="absolute right-[-10px] top-[-8px] flex justify-end">
                                        <label htmlFor="file-upload" className="cursor-pointer">
                                            <img src={addPicture} className='w-[25px] h-[25px]' alt="upload a picture" />
                                            <input id="file-upload" type="file" className="hidden" onChange={handleCoverUpload} />
                                        </label>
                                    </div>
                                </div>
                                {projectLogoURL !== '' && <p className='text-custom-14 font-[500] text-[#000000] opacity-50'>{file?.name}</p>}
                            </div>
                            <div className='flex gap-[22px] mb-[42px]'>
                                <button className='flex bg-white justify-center items-center text-custom-16 border-[2px] h-[2.5vw] min-h-[25px] border-[#EC1F26] text-[#EC1F26] rounded-[9px] flex-1 cursor-pointer' onClick={() => setModal(false)}>Cancel</button>
                                <button className='flex text-white justify-center items-center text-custom-16 border-[0px] h-[2.5vw] min-h-[25px] bg-[#EC1F26] rounded-[9px] flex-1 cursor-pointer'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditExperienceModal
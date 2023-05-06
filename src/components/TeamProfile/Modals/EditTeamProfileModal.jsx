import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import addPicture from '../../../assets/addPicture.svg'

const EditTeamProfileModal = ({ setModal }) => {
    const [file, setFile] = useState(null)
    const [profileURL, setProfileURL] = useState('');
    const [coverURL, setCoverURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleCoverUpload = (event) => {
        // setFile(event.target.files[0])
        console.log('asdasd');
        setCoverURL(URL.createObjectURL(event.target.files[0]))
    }
    const handleProfileUpload = (event) => {
        // setFile(event.target.files[0])
        console.log('i ran ');
        setProfileURL(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <>
            <div className='modalBackground'></div>
            <div className='modalContainer sm:w-[70%] max-h-[95vh]  text-black xsm:w-[70%] sm:min-w-[70%] xsm:min-w-[70%] w-[31.09375vw] min-w-[450px] flex flex-col justify-center items-center'>
                <div className='flex w-full justify-end mr-[1.9416666666666667vw] mt-[10px]'><ImCross className='text-[#7a7979] w-[13px] cursor-pointer hover:text-[#FF5359]' onClick={() => setModal(false)} /></div>
                <div className='overflow-y-auto w-full px-[2.03125vw] xsm:px-[16px] sm:px-[16px] '>
                    <form onSubmit={handleSubmit} className='w-full relative'>
                        <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Edit Team Profile Info</h1>
                        <div className={`flex w-full justify-center items-center h-[177px] ${coverURL === '' && "bg-[#ccc] rounded-[9px]"}`}>
                            {coverURL !== '' && (
                                <img src={coverURL} className='rounded-[9px] w-full h-full' alt="uploaded picture" />
                            )}
                            <div className="absolute right-[10px] top-[55px] flex justify-end">
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <img src={addPicture} className='w-[25px] h-[25px]' alt="upload a picture" />
                                    <input id="file-upload" type="file" className="hidden" onChange={handleCoverUpload} />
                                </label>
                            </div>
                        </div>
                        <div className={` flex justify-center h-[20px] `}>
                            <div className={`relative top-[-2.8333333333333353vw] xsm:top-[-30px] sm:top-[-30px] ${profileURL === '' && "bg-[#635c5c] w-[5.46875vw] h-[5.46875vw] min-h-[55px] rounded-[9px]"}`}>
                                {profileURL !== '' && (
                                    <img src={profileURL} className='w-[5.46875vw] h-[5.46875vw] min-h-[55px] rounded-[10px] min-w-[60px]' alt="uploaded picture" />
                                )}
                                <label htmlFor="file-upload3" className="absolute top-[-5px] right-[-8px] cursor-pointer">
                                    <img src={addPicture} className='w-[25px] h-[25px]' alt="upload a picture" />
                                    <input id="file-upload3" type="file" className="hidden" onChange={handleProfileUpload} />
                                </label>
                            </div>
                        </div>
                        <div className='mt-[1.8625vw] xsm:mt-[15px] sm:mt-[15px] flex flex-col gap-[19px]'>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Name</h2>
                                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Name' />
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Team Name</h2>
                                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Name' />
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Location</h2>
                                <input type="text" className='border-[#ccc] px-[12px] border-[1px] h-[2.5vw] min-h-[25px] rounded-[9px] w-full text-custom-16' placeholder='Name' />
                            </div>
                            <div className='flex flex-col gap-[0.5208333333333334vw]'>
                                <h2 className='text-custom-16 font-[700] text-[#000000] opacity-50'>Description</h2>
                                <textarea type="text" className='border-[#ccc] p-[12px] border-[1px] h-[8.28125vw] min-h-[80px] rounded-[9px] w-full text-custom-16' placeholder='Name' />
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

export default EditTeamProfileModal
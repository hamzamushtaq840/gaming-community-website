import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiPlus } from 'react-icons/hi'
import AdminTableRow from './AdminTableRow'
import { ImCross } from 'react-icons/im'
import warning from './../../../assets/warning.svg'
import AddAdmin from '../Modals/AddAdmin'

const Admins = () => {
    const [addAdmin, setAddAdmin] = useState(false)

    return (
        <div className='dark:bg-black bg-light dark:text-white text-black min-h-[calc(100vh-72px)]'>
            <div className='flex flex-col w-full pt-[64px] px-[8.28125vw]'>
                <h1 className='text-custom-34 text-center font-[700] leading-[34px] mb-[55px]'>Name of Team Admins</h1>
                <div className='flex justify-between items-center mb-[34px] xsm:flex-col xsm:items-start xsm:gap-[10px]'>
                    <button className='buttonAnimation cursor-pointer flex gap-[8px] px-[1.5em] py-[1em] text-custom-14 items-center justify-center bg-primary rounded-[9px]' onClick={() => setAddAdmin(true)}><HiPlus />Add New Team Member</button>
                    <div className='w-[24.21875vw] min-w-[240px] relative'>
                        <BsSearch className='w-[1.1875em] h-[1.1875em] absolute top-[50%] text-custom-14 translate-y-[-50%] left-[18.77px] text-[#000000] dark:text-[#ffffff]' />
                        <input className='w-full rounded-[9px] py-[1.1875em] indent-[45.15px] font-[400] text-custom-14 leading-[14px] bg-[#ffffff] dark:bg-[#5b5a5a] text-[#000000] dark:text-[#ffffff]' placeholder='Search for a member to assign roles' />
                    </div>
                </div>
                <div className='w-full bg-[rgba(255,255,255,0.15)] rounded-[9px] mb-[32px]  divide-y-2 divide-[rgba(255,255,255,0.15)]'>
                    <div className='flex justify-between items-center'>
                        <table className='table-auto pt-0 mb-[76px] mt-0 w-full h-full divide-y-2 divide-[rgba(255,255,255,0.15)]'>
                            <thead className='text-primary'>
                                <tr className='p-0 h-[54px] '>
                                    <th className='pl-[73px] text-left w-[297px] font-[700] text-[14px] leading-[14px]'>Name</th>
                                    <th className='text-left w-[242px] font-[700] text-[14px] leading-[14px]'>Status</th>
                                    <th className='text-left w-[175px] font-[700] text-[14px] leading-[14px]'>Last Active</th>
                                    <th className='pr-[73px] text-left w-[175px] font-[700] text-[14px] leading-[14px]'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y-2 divide-[rgba(255,255,255,0.15)]'>
                                {[0, 1, 2].map((v, index) => {
                                    return (
                                        <AdminTableRow index={index} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[19.427083333333332vw] min-w-[180px] bg-[#FF5359] rounded-[13px] flex pb-[20px]'>
                    <img src={warning} className='w-[20.95] h-[19px] mt-[18px] ml-[18.1px] mr-[11.95px]' alt="" />
                    <p className='mt-[16px] mr-[21px] font-[400] text-custom-14 leading-[19.6px]'>A Page must have at least one Super Admin.
                        Please reassign a Super Admin, or
                        deactivate your Page under Admin Tools.</p>
                    <ImCross className='text-white w-[30px] mr-[12px] mt-[13px] cursor-pointer' />
                </div>
            </div>
            {addAdmin && <AddAdmin setModal={setAddAdmin} />}
        </div>
    )
}

export default Admins
import React from 'react'
import { ImCross } from 'react-icons/im'
import { MdEdit } from 'react-icons/md'

const AdminTableRow = ({ index }) => {
    return (
        <tr className='h-[98px]'>
            <td className='pl-[73px]'>
                <div className='flex gap-[11px] items-center'>
                    <div className='bg-[#51D1B2] min-w-[43px] min-h-[43px] flex justify-center items-center rounded-full'>TR</div>
                    <div className='flex flex-col gap-[6px]'>
                        <h1 className='font-[700] text-[16px] leading-[16px]'>Taha </h1>
                        <p className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.6)]'>dummy@gmail.com</p>
                    </div>
                </div>
            </td>
            <td className='items-center'>
                <div className='flex gap-[8px ]'>
                    <p className='font-[400] h-full text-[12px] leading-[12px]'>{index === 0 ? <div className='flex flex-col gap-[18px]'>
                        <div className='flex gap-[10px] items-center'>
                            <input checked id="contentAdmin" className='h-[18px] w-[18px] peer/contentAdmin bg-[#ccc]' type="radio" name="admin" />
                            <label for="contentAdmin" className='text-[14px] font-[400] text-[rgba(255,255,255,0.25)] dark:peer-checked/contentAdmin:text-white peer-checked/contentAdmin:text-black'>Super Admin</label>
                        </div>
                        <div className='flex gap-[10px] items-center'>
                            <input id="contentAdmin" className='h-[18px] w-[18px] peer/contentAdmin bg-[#ccc]' type="radio" name="admin" />
                            <label for="contentAdmin" className='text-[14px] font-[400] text-[rgba(255,255,255,0.25)] dark:peer-checked/contentAdmin:text-white peer-checked/contentAdmin:text-black'>Content Admin</label>
                        </div>
                    </div> : 'Member'}</p>
                </div>
            </td>
            <td className='font-[400] text-[12px] leading-[12px] text-white'>22 Sep 2022 | 1:15</td>
            <td className='pr-[73px] w-full justify-start items-center  h-full flex gap-[15px] '>
                <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' onClick={() => setEditPreviousProjectModal(true)} /></div>
                <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
            </td>
        </tr>
    )
}

export default AdminTableRow
import React from 'react'
import { HiPlus } from 'react-icons/hi'
import GroupItem from '../components/LabsAndGroups/GroupItem'

const LabsAndGroups = () => {
    return (
        <div className='py-[64px] xsm:px-[6vw] lg:px-[6vw] sm:px-[6vw] gap-[2.0833333333333335vw] px-[10.9375vw] dark:bg-black dark:text-white bg-white text-black'>
            <h1 className='text-custom-34 text-center font-[700] leading-[34px] mb-[40px]'>Groups</h1>
            <div className='flex items-start xsm:flex-col sm:flex-col md:flex-col xsm:gap-[20px] sm:gap-[20px] gap-[2.0833333333333335vw]'>
                <button className='buttonAnimation transition-all cursor-pointer flex gap-[8px] px-[4.6875em] py-[1em] text-custom-14 items-center justify-center bg-primary rounded-[9px]'><HiPlus />Add Group</button>
                <div className='bg-white divide-y-[0.1px] divide-[#cccccc94] rounded-[9px] xsm:w-full sm:w-full flex-1 dark:bg-[rgba(255,255,255,0.2)]'>
                    <p className='text-custom-24 px-[1.6666666666666667vw] xsm:px-[20px] sm:px-[20px] xsm:py-[15px] sm:py-[15px] py-[26px] font-[700]'>ALL</p>
                    {[0, 1, 2, 3, 4].map((val, index) => {
                        return (
                            <GroupItem />
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default LabsAndGroups
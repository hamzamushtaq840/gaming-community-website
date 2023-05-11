import React from 'react'
import { BsSearch } from 'react-icons/bs'
import azFilter from './../../../assets/azFilter.svg'
import timeFilter from './../../../assets/timeFilter.svg'
import { allTeams } from '../../../utils/consts'
import SingleTeam from './SingleTeam'

const AllTeams = () => {

    return (
        <div className='dark:bg-black bg-light dark:text-white pb-10 text-black px-[5.9375vw] pt-[64px] xsm:pt-[30px] sm:pt-[30px]'>
            <div className='flex flex-col w-full'>
                <h1 className='text-custom-34 text-center font-[700] leading-[34px]'>Teams</h1>
                <div className='w-full relative mt-[40px] mb-[65px] xsm:mb-[20px] sm:mb-[20px]'>
                    <BsSearch className='w-[23.23px] h-[22.28px] absolute top-[50%] translate-y-[-50%] left-[18.77px] text-[#000000] dark:text-[#ffffff]' />
                    <input className='w-full rounded-[9px] h-[57px] indent-[55.15px] font-[400] text-custom-18 leading-[14px] bg-[#ffffff] dark:bg-[#5b5a5a] text-[#000000] dark:text-[#ffffff]' placeholder='Search Teams' />
                </div>
                <div className='flex xsm:flex-col sm:flex-col gap-[1.5625vw]'>
                    <div className='xsm:mb-[15px] sm:mb-[15px]'>
                        <p className='text-custom-18 font-[400] mt-[18px] mb-[19px]'>Filter by:</p>
                        <div className='flex gap-[1.5625vw]'>
                            <div className='filterDiv flex flex-col gap-[19px] xsm:overflow-auto xsm:pb-[15px] xsm:min-w-[100%] sm:overflow-auto sm:pb-[15px] sm:min-w-[100%] w-[14.166666666666666vw] min-w-[150px] xsm:flex-row sm:flex-row'>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Location</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>School</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Company Name</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Framework</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Front End</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Back End</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Database</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>DevOps</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Mobile App</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Data Toolkits</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Cloud Vendor Experience</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Generative</option>
                                </select>
                                <select className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value=''>Based on Role</option>
                                    <option value='condition'>Based onda  Role</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Deep Understanding</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Technology & Tools</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Technical Function</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] min-h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Specialization & Business Function</option>
                                </select>
                                <select defaultValue='condition' className='outline-none w-auto justify-between border-[1px] border-[#ccc] text-custom-16 leading-[14.63px] h-[46px] rounded-[9px] dark:bg-black bg-white dark:text-[#ccc] text-[#4747474]'>
                                    <option value='condition'>Industry</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 ml-[1.5625vw] xsm:ml-0 sm:ml-0'>
                        <div className='flex justify-between xsm:items-center xsm:mb-[29px] sm:items-center sm:mb-[29px]'>
                            <h1 className='text-custom-24 font-[700] mb-[29px] xsm:mb-0 sm:mb-0'>Showing <span className='text-[#FF5359]'>All</span> Teams</h1>
                            <div className='flex gap-[14px]'>
                                <button className='w-[38px] h-[38px] bg-[#9b9b9b] rounded-[5px] flex justify-center items-center'><img src={timeFilter} className='w-[22.68]' alt="" /></button>
                                <button className='w-[38px] h-[38px] bg-[#9b9b9b] rounded-[5px] flex justify-center items-center'><img src={azFilter} className='w-[22.68]' alt="" /></button>
                            </div>
                        </div>
                        <div className='grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-3  gap-x-[14px] gap-y-[23px]'>
                            {allTeams.map((value) => {
                                return (
                                    <SingleTeam value={value} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTeams
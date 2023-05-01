import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { MdEdit } from 'react-icons/md'
import { previousProjects, teamsMembers } from '../../utils/consts'
import addATeamMember from './../../assets/addATeamMember.svg'
import addCompany from './../../assets/addCompany.svg'
import addEducation from './../../assets/addEducation.svg'
import addExpertise from './../../assets/addExpertise.svg'
import addMentors from './../../assets/addMentors.svg'
import addProjects from './../../assets/addProjects.svg'
import bitGameDevelopment from './../../assets/bitGameDevelopment.svg'
import companiesTeam from './../../assets/companiesTeam.svg'
import expertise from './../../assets/expertise.svg'
import gameWritingDevelopment from './../../assets/gameWritingDevelopment.svg'
import mentors from './../../assets/mentors.svg'
import previousProject from './../../assets/previousProjects.svg'
import productManagement from './../../assets/productManagement.svg'
import teamMemberSchool from './../../assets/teamMemberSchool.svg'
import teamMembers from './../../assets/teamMembers.svg'
import university from './../../assets/university.svg'
import userInterfaceDesign from './../../assets/userInterfaceDesign.svg'
import vsSoftwareDesign from './../../assets/vsSoftwareDesign.svg'
import SingleTeamMember from './SingleTeamMember'
import SinglePreviousProject from './SinglePreviousProject'
import SingleTeamMentor from './SingleTeamMentor'
import EditExperienceModal from './EditExperienceModal'
import AddTechAndToolsModal from './AddTechAndToolsModal'
import AddSpecializationAndBussinessModal from './AddSpecializationAndBussinessModal'
import AddTechnicalFunctionsModal from './AddTechnicalFunctionsModal'

export default function TeamProfileMain() {
    return (
        <>
            <div className='flex gap-[1.602083333333vw] w-full xsm:flex-col sm:flex-col '>
                <div className='flex flex-col gap-[28px] w-[70%] xsm:w-full sm:w-full'>
                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white w-full rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='px-[23px] flex items-center gap-[7.99px] h-[65px]'>
                            <img src={teamMembers} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700]'>Team Members</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex flex-col gap-[18px] px-[25px] mt-[22px]'>
                            {teamsMembers.map((value, index) => {
                                return (
                                    <SingleTeamMember key={index} value={value} />
                                )
                            })}
                        </div>
                        <div className='h-[56px] bg-[#EC1F26] mt-[42px] rounded-b-[9px] flex justify-center items-center'>
                            <button className='buttonAnimation flex items-center gap-[7px] cursor-pointer'>
                                <img src={addATeamMember} alt="" className='w-[28.79px]' />
                                <p className='text-custom-16 font-[400]'>Add Team Member</p>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white w-full rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='px-[23px] flex items-center gap-[7.99px] h-[65px]'>
                            <img src={companiesTeam} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700]'>Companies Team Profile 1 worked for</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex gap-y-[30px] px-[3.0598958333333335vw] mt-[22px] flex-wrap justify-center'>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex flex-col gap-[13px] items-center'>
                                    <img src={university} alt="" className='w-[56px]' />
                                    <p className='text-custom-14 font-[400] max-w-[6.770833333333333vw] text-center'>Bethesda Game Studios</p>
                                </div>
                                <div className='flex gap-[0.5765625vw] ml-[-1.5vw] mt-[-10px]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[56px] bg-[#EC1F26] mt-[42px] rounded-b-[9px] flex justify-center items-center gap-[7px]'>
                            <img src={addCompany} alt="" className='w-[28.79px]' />
                            <p className='text-custom-16 font-[400]'>Add Company</p>
                        </div>
                    </div>

                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white w-full rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='px-[23px] flex items-center gap-[7.99px] h-[65px]'>
                            <img src={previousProject} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700]'>Previous Projects</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex flex-col gap-[18px] px-[25px] mt-[22px]'>
                            {previousProjects.map((value, index) => {
                                return (
                                    <SinglePreviousProject key={index} value={value} />
                                )
                            })}
                        </div>
                        <div className='h-[56px] bg-[#EC1F26] mt-[42px] rounded-b-[9px] flex justify-center items-center gap-[7px]'>
                            <img src={addProjects} alt="" className='w-[28.79px]' />
                            <p className='text-custom-16 font-[400]'>Add Project</p>
                        </div>
                    </div>

                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white w-full rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='px-[23px] flex items-center gap-[7.99px] h-[65px]'>
                            <img src={mentors} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700]'>Team Mentors</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex flex-col gap-[18px] px-[25px] mt-[22px]'>
                            {teamsMembers.map((value, index) => {
                                return (
                                    <SingleTeamMentor key={index} value={value} />
                                )
                            })}
                        </div>
                        <div className='h-[56px] bg-[#EC1F26] mt-[42px] rounded-b-[9px] flex justify-center items-center gap-[7px]'>
                            <img src={addMentors} alt="" className='w-[28.79px]' />
                            <p className='text-custom-16 font-[400]'>Add Mentor</p>
                        </div>
                    </div>

                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white w-full rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='px-[23px] flex items-center gap-[7.99px] h-[65px]'>
                            <img src={expertise} alt="" className='w-[24px]' />
                            <p className='text-custom-18 font-[700]'>Expertise</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex gap-y-[30px] gap-x-[23px] px-[2.1484375vw] mt-[22px] flex-wrap justify-center'>
                            <div className='flex flex-col border-[1.5px] border-[#EC1F26] rounded-[6px] w-[134px] h-[134px] pt-[10.79px] px-[10.79px]'>
                                <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                <div className='flex flex-1 flex-col justify-center items-center gap-[10.73px]'>
                                    <img src={gameWritingDevelopment} alt="" />
                                    <p className='text-custom-14 font-[400] leading-[17.15px] text-center'>Game Writing Development</p>
                                </div>
                            </div>
                            <div className='flex flex-col border-[1.5px] border-[#EC1F26] rounded-[6px] w-[134px] h-[134px] pt-[10.79px] px-[10.79px]'>
                                <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                <div className='flex flex-1 flex-col justify-center items-center gap-[10.73px]'>
                                    <img src={productManagement} alt="" />
                                    <p className='text-custom-14 font-[400] leading-[17.15px] text-center'>Product Management</p>
                                </div>
                            </div>
                            <div className='flex flex-col border-[1.5px] border-[#EC1F26] rounded-[6px] w-[134px] h-[134px] pt-[10.79px] px-[10.79px]'>
                                <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                <div className='flex flex-1 flex-col justify-center items-center gap-[10.73px]'>
                                    <img src={vsSoftwareDesign} alt="" />
                                    <p className='text-custom-14 font-[400] leading-[17.15px] text-center'>VR Software Design</p>
                                </div>
                            </div>
                            <div className='flex flex-col border-[1.5px] border-[#EC1F26] rounded-[6px] w-[134px] h-[134px] pt-[10.79px] px-[10.79px]'>
                                <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                <div className='flex flex-1 flex-col justify-center items-center gap-[10.73px]'>
                                    <img src={userInterfaceDesign} alt="" />
                                    <p className='text-custom-14 font-[400] leading-[17.15px] text-center'>User Interface Design</p>
                                </div>
                            </div>
                            <div className='flex flex-col border-[1.5px] border-[#EC1F26] rounded-[6px] w-[134px] h-[134px] pt-[10.79px] px-[10.79px]'>
                                <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                <div className='flex flex-1 flex-col justify-center items-center gap-[10.73px]'>
                                    <img src={bitGameDevelopment} alt="" />
                                    <p className='text-custom-14 font-[400] leading-[17.15px] text-center'>8 Bit Game Development</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[56px] bg-[#EC1F26] mt-[42px] rounded-b-[9px] flex justify-center items-center gap-[7px]'>
                            <img src={addExpertise} alt="" className='w-[28.79px]' />
                            <p className='text-custom-16 font-[400]'>Add Expertise</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-[28px] w-[30%] min-w-[240px] xsm:w-full sm:w-full'>
                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white  rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='flex items-center px-[23px] gap-[7.99px] h-[65px]'>
                            <img src={teamMemberSchool} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700] text-center'>Team Members School Attend</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex flex-col mt-[24px] gap-[26px]'>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[56px] flex gap-[8px] bg-[#EC1F26] mt-[27px] items-center justify-center rounded-b-[9px] '>
                            <img src={addEducation} alt="" className='w-[30px] h-[28px]' />
                            <p className='text-custom-16 font-[400]'>Add Education</p>
                        </div>
                    </div>

                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white  rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='flex items-center px-[23px] gap-[7.99px] h-[65px]'>
                            <img src={teamMemberSchool} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700] text-center'>Team Members School Attend</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex flex-col mt-[24px] gap-[26px]'>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[56px] flex gap-[8px] bg-[#EC1F26] mt-[27px] items-center justify-center rounded-b-[9px] '>
                            <img src={addEducation} alt="" className='w-[30px] h-[28px]' />
                            <p className='text-custom-16 font-[400]'>Add Education</p>
                        </div>
                    </div>

                    <div className='flex flex-col dark:bg-[#2C2C2C] bg-white  rounded-t-[27.5px] rounded-b-[9px]'>
                        <div className='flex items-center px-[23px] gap-[7.99px] h-[65px]'>
                            <img src={teamMemberSchool} alt="" className='w-[33px]' />
                            <p className='text-custom-18 font-[700] text-center'>Team Members School Attend</p>
                        </div>
                        <div className='py-[1px] dark:bg-[#FFFFFF] bg-black mb-3 opacity-[0.15] gap-[18px]'></div>
                        <div className='flex flex-col mt-[24px] gap-[26px]'>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                            <div className='flex mx-[23px] items-center'>
                                <img src={university} alt="" className='w-[56px]' />
                                <p className='flex-1 leading-[19.6px] text-custom-16 pl-[21px]'>Xyz university</p>
                                <div className='flex gap-[0.5765625vw]'>
                                    <div className='flex justify-end'><MdEdit className='text-[#FF5359] w-[19px] cursor-pointer' /></div>
                                    <div className='flex justify-end'><ImCross className='text-[#FF5359] w-[13px] cursor-pointer' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[56px] flex gap-[8px] bg-[#EC1F26] mt-[27px] items-center justify-center rounded-b-[9px] '>
                            <img src={addEducation} alt="" className='w-[30px] h-[28px]' />
                            <p className='text-custom-16 font-[400]'>Add Education</p>
                        </div>
                    </div>
                </div>
            </div>
            <AddTechnicalFunctionsModal />
        </>
    )
}

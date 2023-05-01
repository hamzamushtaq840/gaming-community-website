import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { HiPlus } from 'react-icons/hi'
import { selectOptions } from '../../utils/consts'

const AddTechAndToolsModal = ({ setModal }) => {
    const [selectedOption, setSelectedOption] = useState('Chooseatechnologyandtools');
    const [selectedOptionsArray, setSelectedOptionsArray] = useState([]);

    const handleDeleteClick = (valueToDelete) => {
        setSelectedOptionsArray(selectedOptionsArray.filter(option => option.value !== valueToDelete));
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleAddClick = () => {
        console.log(selectedOption);
        const newSelectedOption = selectOptions.find(option => option.value === selectedOption);
        console.log(newSelectedOption);
        if (newSelectedOption) {
            setSelectedOptionsArray([...selectedOptionsArray, newSelectedOption]);
            setSelectedOption('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='modalBackground'></div>
            <div className='modalContainer sm:w-[70%] max-h-[96vh]  text-black xsm:w-[70%] sm:min-w-[70%] xsm:min-w-[70%] w-[31.09375vw] min-w-[450px] flex flex-col justify-center items-center'>
                <div className='flex w-full justify-end mr-[1.9416666666666667vw] mt-[10px]'><ImCross className='text-[#7a7979] w-[13px] cursor-pointer hover:text-[#FF5359]' onClick={() => setModal(false)} /></div>
                <div className='overflow-y-auto w-full px-[2.03125vw] xsm:px-[16px] sm:px-[16px] '>
                    <form onSubmit={handleSubmit} className='w-full relative'>
                        <h1 className='text-custom-20 font-[700] leading-[20px] mt-[4px] mb-[20px]'>Add Technology and Tools</h1>
                        <div className='mt-[1.8625vw] xsm:mt-[15px] sm:mt-[15px] flex flex-col gap-[19px]'>
                            <div className='flex w-full gap-[10px]'>
                                <select defaultValue='Chooseatechnologyandtools' value={selectedOption} onChange={handleSelectChange} className='outline-none px-[5px] flex-1 text-[#1E1E21] border-[1px] border-[#ccc] text-custom-16 leading-[22px] h-[48px] rounded-[9px] bg-[white]'>
                                    <option disabled value='Chooseatechnologyandtools'>Choose a technology and tools</option>
                                    {selectOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                <button onClick={handleAddClick} className='flex justify-center text-white text-custom-16 bg-primary w-[5.833333333333333vw] min-w-[70px] h-[48px] items-center gap-[9px] rounded-[9px]'>
                                    <HiPlus className='text-[16px] w-[14px] h-[14px]' />
                                    Add
                                </button>
                            </div>
                            <ul className='flex flex-col gap-[9px]'>
                                {selectedOptionsArray.map(option => (
                                    <div className='flex w-full items-center justify-between rounded-[9px] px-[20px] bg-[#cccccc82] h-[48px]'>
                                        <li key={option.value} className='text-custom-16'>
                                            {option.label}
                                        </li>
                                        <ImCross onClick={() => handleDeleteClick(option.value)} className='text-[#7a7979] w-[9px] cursor-pointer hover:text-[#FF5359]' />
                                    </div>
                                ))}
                            </ul>
                            <div className='flex gap-[22px] mb-[42px]'>
                                <button className='flex bg-white justify-center items-center text-custom-16 border-[2px] h-[2.5vw] min-h-[25px] border-[#EC1F26] text-[#EC1F26] rounded-[9px] flex-1 cursor-pointer' onClick={() => setModal(false)}>Cancel</button>
                                <button className='flex text-white justify-center items-center text-custom-16 border-[0px] h-[2.5vw] min-h-[25px] bg-[#EC1F26] rounded-[9px] flex-1 cursor-pointer' type='submit'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTechAndToolsModal
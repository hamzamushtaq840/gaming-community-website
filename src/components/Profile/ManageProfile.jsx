import React from 'react'
import manageProfilePic from "../../assets/manageProfilePic.png"

export default function ManageProfile() {
  return (
    <div className='pb-[114px]'>
      <h1 className='font-[700] text-[26px] leading-[26px]'>Edit your personal Info</h1>
      <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] mt-[32px] '>
        <div className='divide-y-[1px] divide-[rgba(255,255,255,0.25)]'>
          <div>
            <div className='flex flex-col items-center gap-[21px] pt-[53px]'>
              <img src={manageProfilePic} />
              <div className='flex gap-[9px]'>
                <button className='w-[95px] h-[29px] bg-[rgba(255,255,255,0.25)] font-[400] text-[14px] leading-[19.07px] rounded-[9px]'>Change</button>
                <button className='w-[95px] h-[29px] bg-[rgba(255,255,255,0.25)] font-[400] text-[14px] leading-[19.07px] rounded-[9px]'>Change</button>
              </div>
            </div>
            <div className='w-[716px] m-auto pt-[59px] pb-[44px] flex flex-col gap-[16px]'>
              <input placeholder='Email' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              <div className='flex gap-[10px]'>
                <input placeholder='First Name' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
                <input placeholder='Last Name' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>
              <input placeholder='Location' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              <input placeholder='Your professional headline (i.e. Experienced Manager)' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              <select className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]'>
                <option selected>Lab Affiliation</option>
              </select>
              <textarea placeholder='Provide a short Bio' className='w-full h-[126px] resize-none border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              <div className='relative overflow-hidden w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' >
                <label className='absolute right-0 h-full bg-primary w-[162px] top-0 text-white flex justify-center items-center'>Upload Resume</label>
              </div>
              <p className='font-[400] text-[16px] leading-[21.79px] text-[rgba(255,255,255,0.50)]'>The attached resume will be the default resume when applying to jobs.</p>
            </div>
          </div>

          <div>
            <div className='w-[716px] m-auto pt-[44px] pb-[41px] flex flex-col gap-[22px]'>
              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>How are you associated with the Institute? Please note that you must be associated in order for your profile to be approved.</p>
                <select className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]'>
                  <option selected>Dropdown Menu</option>
                </select>
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>If you chose Other/Unsure, please explain:</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>If you are associated with a Faculty or Faculty Affiliate, please state their name:</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>Which University have you attended or currently are studying in?</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What is your highest level of education? Note: If currently enrolled, please include this level.</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What is/was Your program of study?</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>If you are still studying, what is your expected graduation date? If you are not still studying, select already graduated.</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What is your level of experience? This could be through internships, PhD research experience or industry experience post graduation.</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What types of opportunities are you seeking:</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What types of roles are you looking for?</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What sectors Interest You?</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>What are your primary areas of research interest? Please select the top 3 from the list below.</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <div className=' flex flex-col gap-[15px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>Online and Social Presence</p>
                <div className='flex gap-[19px]'>
                  <button className='bg-primary w-[236px] h-[48px] rounded-[9px] font-[400] text-[16px] leading-[21.79px] text-white'>Open to Remote</button>
                  <button className='w-[236px] h-[48px] rounded-[9px] font-[400] text-[16px] leading-[21.79px] text-white border-[1.5px] border-[rgba(255,255,255,0.25)]'>Open to Relocation</button>
                </div>
              </div>

              <div className=' flex flex-col gap-[15px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>Online and Social Presence</p>
                <div className='flex gap-[10px]'>
                  <input placeholder='https://linkedin.com/loremipsum' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
                  <input placeholder='https://twitter.com/loremipsum' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
                </div>
                <div className='flex gap-[10px]'>
                  <input placeholder='Website' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
                  <input placeholder='Video' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
                </div>
              </div>

              <div className=' flex flex-col gap-[10px]'>
                <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>Additional Skills</p>
                <input placeholder='Text' className='w-full h-[48px] border-[1.5px] border-[rgba(255,255,255,0.25)] rounded-[9px] p-[22px] font-[400] text-[16px] leading-[21.79px] font-opensans bg-[rgba(0,0,0,0.0)] text-[rgba(255,255,255,0.50)]' />
              </div>

              <p className='font-[700] text-[16px] leading-[23.6px] text-[rgba(255,255,255,0.50)]'>Hint: Separate skills with commas or by hitting {'<Enter>'} on your keyboard.</p>
            </div>
          </div>

          <div>
            <div className='w-[716px] m-auto pt-[44px] pb-[97px] flex flex-col gap-[41px]'>
              <div className='flex justify-between items-center'>
                <p  className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.50)]'>Employment History</p>
                <button className='bg-primary w-[177px] h-[40px] rounded-[9px] font-[400] text-[16px] leading-[21.79px] text-white'>Open to Remote</button>
              </div>

              <div className='flex justify-between items-center'>
                <p  className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.50)]'>Education</p>
                <button className='bg-primary w-[177px] h-[40px] rounded-[9px] font-[400] text-[16px] leading-[21.79px] text-white'>Open to Remote</button>
              </div>

              <div className='flex justify-between items-center'>
                <p  className='font-[700] text-[16px] leading-[16px] text-[rgba(255,255,255,0.50)]'>Certifications</p>
                <button className='bg-primary w-[177px] h-[40px] rounded-[9px] font-[400] text-[16px] leading-[21.79px] text-white'>Open to Remote</button>
              </div>

              <button className='bg-primary w-full h-[48px] mt-[51px] rounded-[9px] font-[400] text-[16px] leading-[18.4px] text-white'>Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

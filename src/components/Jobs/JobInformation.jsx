import React from 'react'
import companyInformationPic from "../../assets/companyInformationPic.png"
import CompanyInformationUserCard from '../Company/CompanyInformationUserCard'
import Rectangle79 from "../../assets/Rectangle 79.png"
import companyRecommendation from "../../assets/companyRecommendation.png"

export default function JobInformation() {
  return (
    <div style={{ gridTemplateColumns: "43.177vw 1fr" }} className='dark:text-white dark:bg-black pr-[10.98%] pl-[10.93%] min-h-[calc(100vh-72px)] grid grid-cols-2 gap-[27px] pt-[65px] pb-[115px]'>
      <div className=''>
        <div className='w-full min-h-[303px] bg-[rgba(255,255,255,0.15)] rounded-[9px] divide-y-2 divide-[rgba(255,255,255,0.15)]'>
          <div className='flex items-center justify-between px-[67px] py-[28px] divide-y divide-[rgba(255,255,255,0.15)]'>
            <div className='w-full flex justify-between items-center'>
              <div className='flex flex-col gap-[18px]'>
                <img className='w-[61px]' src={companyRecommendation}></img>
                <div className='flex flex-col gap-[11px]'>
                  <h5 className='text-white font-[700] text-[18px] leading-[18px]'>Game Walkthrough Writer</h5>
                  <div className='flex gap-[1.719vw] items-center mt-[11px]'>
                    <p className='font-[700] text-[14px] leading-[14px] text-primary'>Hypemasters</p>
                    <div className='flex gap-[7px] items-center'>
                      <svg width="14.7px" height="18.05px" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.34793 9.84375C8.69858 9.84375 9.79742 8.73977 9.79742 7.38281C9.79742 6.02585 8.69858 4.92188 7.34793 4.92188C5.99728 4.92188 4.89844 6.02585 4.89844 7.38281C4.89844 8.73977 5.99728 9.84375 7.34793 9.84375ZM7.34793 6.5625C7.79815 6.5625 8.16443 6.93049 8.16443 7.38281C8.16443 7.83513 7.79815 8.20312 7.34793 8.20312C6.89771 8.20312 6.53143 7.83513 6.53143 7.38281C6.53143 6.93049 6.89771 6.5625 7.34793 6.5625Z" fill="white" />
                        <path d="M14.6969 7.38281C14.6969 3.31193 11.4004 0 7.34847 0C3.29653 0 0 3.31193 0 7.38281C0 8.99329 0.507127 10.5238 1.46659 11.809L5.38815 17.0617C5.84877 17.6786 6.58162 18.0469 7.34847 18.0469C8.11533 18.0469 8.84818 17.6786 9.30884 17.0616L13.2304 11.809C14.1898 10.5238 14.6969 8.99329 14.6969 7.38281ZM11.924 10.8245L8.00253 16.0771C7.84633 16.2863 7.60796 16.4062 7.34847 16.4062C7.08899 16.4062 6.85062 16.2863 6.69446 16.0772L2.77295 10.8245C2.0272 9.82562 1.63299 8.63547 1.63299 7.38281C1.63299 4.21657 4.19696 1.64062 7.34847 1.64062C10.5 1.64062 13.064 4.21657 13.064 7.38281C13.064 8.63547 12.6697 9.82562 11.924 10.8245Z" fill="white" />
                      </svg>
                      <p className='font-[400] text-[12px] leading-[12px] text-[rgba(255,255,255,0.5)]'>Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                </div>
              </div>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M15.2727 21.9989C15.1236 21.9988 14.9781 21.9525 14.856 21.8662L8 17.0279L1.144 21.8677C1.03492 21.9446 0.90701 21.9898 0.774194 21.9985C0.641378 22.0071 0.508752 21.9789 0.390763 21.9168C0.272774 21.8547 0.173946 21.7611 0.105044 21.6463C0.0361421 21.5315 -0.000191608 21.3998 7.59918e-07 21.2656V3.51983C0.000963372 2.58661 0.369063 1.69189 1.02353 1.03201C1.67799 0.372121 2.56536 0.000970588 3.49091 0H12.5091C13.4346 0.000970588 14.322 0.372121 14.9765 1.03201C15.6309 1.69189 15.999 2.58661 16 3.51983V21.2656C16 21.4601 15.9234 21.6466 15.787 21.7842C15.6506 21.9217 15.4656 21.9989 15.2727 21.9989ZM8 15.3993C8.14912 15.3994 8.2946 15.4457 8.41673 15.532L14.5455 19.857V3.51983C14.5455 2.97528 14.3309 2.45303 13.949 2.06797C13.5671 1.68292 13.0492 1.4666 12.5091 1.4666H3.49091C2.95083 1.4666 2.43288 1.68292 2.05098 2.06797C1.66909 2.45303 1.45455 2.97528 1.45455 3.51983V19.857L7.58327 15.5305C7.70557 15.4448 7.85104 15.3989 8 15.3993Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className='px-[67px] py-[37px] flex flex-col gap-[20px]'>
            <div className='flex gap-[11px]'>
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M22.3304 2.66684C22.329 2.66684 22.3276 2.66667 22.3262 2.66667H16.2168V2C16.2168 0.897222 15.3099 0 14.1953 0H8.80469C7.69006 0 6.7832 0.897222 6.7832 2V2.66667H0.673828C0.29866 2.66667 0 2.97083 0 3.33333V18C0 19.1028 0.90686 20 2.02148 20H20.9785C22.0931 20 23 19.1028 23 18V3.3474C23 3.34653 23 3.34566 23 3.34479C22.9742 2.90694 22.702 2.66927 22.3304 2.66684ZM8.13086 2C8.13086 1.63247 8.4332 1.33333 8.80469 1.33333H14.1953C14.5668 1.33333 14.8691 1.63247 14.8691 2V2.66667H8.13086V2ZM21.3912 4L19.2987 10.2108C19.2069 10.4835 18.95 10.6667 18.6596 10.6667H14.8691V10C14.8691 9.63177 14.5675 9.33333 14.1953 9.33333H8.80469C8.4325 9.33333 8.13086 9.63177 8.13086 10V10.6667H4.3404C4.04999 10.6667 3.79309 10.4835 3.70132 10.2108L1.60876 4H21.3912ZM13.5215 10.6667V12H9.47852V10.6667H13.5215ZM21.6523 18C21.6523 18.3675 21.35 18.6667 20.9785 18.6667H2.02148C1.65 18.6667 1.34766 18.3675 1.34766 18V7.44149L2.4228 10.6325C2.6983 11.4505 3.46899 12 4.3404 12H8.13086V12.6667C8.13086 13.0349 8.4325 13.3333 8.80469 13.3333H14.1953C14.5675 13.3333 14.8691 13.0349 14.8691 12.6667V12H18.6596C19.531 12 20.3017 11.4505 20.5772 10.6325L21.6523 7.44149V18Z" fill="white" />
              </svg>
              <p>{`${"Full-time"} . ${"Associate"}`}</p>
            </div>
            <div className='flex gap-[11px]'>
              <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M18.4094 18.9776H16.8513V0.590589C16.8513 0.264426 16.5869 0 16.2607 0H2.73923C2.41307 0 2.14864 0.264426 2.14864 0.590589V18.9776H0.590589C0.264426 18.9776 0 19.242 0 19.5682C0 19.8943 0.264426 20.1588 0.590589 20.1588H18.4094C18.7356 20.1588 19 19.8943 19 19.5682C19 19.242 18.7356 18.9776 18.4094 18.9776ZM7.48682 18.9776V14.9513H11.5131V18.9776H7.48682ZM12.6943 18.9776V14.3607C12.6943 14.0346 12.4299 13.7701 12.1037 13.7701H6.89623C6.57007 13.7701 6.30564 14.0346 6.30564 14.3607V18.9776H3.32982V1.18118H15.6701V18.9776H12.6943Z" fill="white" />
                  <path d="M8.23088 2.61133H5.33668C5.01052 2.61133 4.74609 2.87575 4.74609 3.20192V6.09612C4.74609 6.42228 5.01052 6.68671 5.33668 6.68671H8.23088C8.55705 6.68671 8.82147 6.42228 8.82147 6.09612V3.20192C8.82147 2.87575 8.55705 2.61133 8.23088 2.61133ZM7.6403 5.50553H5.92727V3.79251H7.6403V5.50553Z" fill="white" />
                  <path d="M13.6645 2.61133H10.7703C10.4441 2.61133 10.1797 2.87575 10.1797 3.20192V6.09612C10.1797 6.42228 10.4441 6.68671 10.7703 6.68671H13.6645C13.9906 6.68671 14.2551 6.42228 14.2551 6.09612V3.20192C14.2551 2.87575 13.9906 2.61133 13.6645 2.61133ZM13.0739 5.50553H11.3609V3.79251H13.0739V5.50553Z" fill="white" />
                  <path d="M8.23088 8.10938H5.33668C5.01052 8.10938 4.74609 8.3738 4.74609 8.69996V11.5942C4.74609 11.9203 5.01052 12.1848 5.33668 12.1848H8.23088C8.55705 12.1848 8.82147 11.9203 8.82147 11.5942V8.69996C8.82147 8.3738 8.55705 8.10938 8.23088 8.10938ZM7.6403 11.0036H5.92727V9.29055H7.6403V11.0036Z" fill="white" />
                  <path d="M13.6645 8.10938H10.7703C10.4441 8.10938 10.1797 8.3738 10.1797 8.69996V11.5942C10.1797 11.9203 10.4441 12.1848 10.7703 12.1848H13.6645C13.9906 12.1848 14.2551 11.9203 14.2551 11.5942V8.69996C14.2551 8.3738 13.9906 8.10938 13.6645 8.10938ZM13.0739 11.0036H11.3609V9.29055H13.0739V11.0036Z" fill="white" />
                </g>
              </svg>
              <p>{`${"11-50 employees"} . ${"Mobile Gaming Apps"}`}</p>
            </div>
          </div>
        </div>

        <div className='w-full bg-[rgba(255,255,255,0.15)] rounded-[9px] min-h-[515px] mt-[27px] px-[67px] grid grid-cols-2 gap-[17px] py-[38px]'>
          <div className='w-[693px]'>
            <h4 className='font-[700] text-[24px] leading-[24px] mb-[27px]'>About the job</h4>
            <p className='leading-[22.89px] text-[14px] font-[400] text-[rgba(255,255,255,0.7)]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quas odio, explicabo repellendus voluptatem labore provident, qui alias aperiam, nihil veniam cumque adipisci. Hic vel necessitatibus optio porro ut libero.
              Quos voluptatibus officia amet non molestias quo debitis obcaecati veniam, magni, nihil architecto vitae distinctio ex illum modi repudiandae error magnam aut autem soluta blanditiis ipsam minima quae. Incidunt, laboriosam!
              Eligendi maiores rem dolores deleniti ratione alias earum. Dolores veritatis, eaque pariatur minus similique sed consectetur dignissimos molestias amet ut, libero vitae ullam repellendus deserunt eum illum maxime ducimus enim.
              Recusandae, laudantium nesciunt laborum fugit porro delectus illum explicabo sed blanditiis voluptate magni doloremque quae, esse est dolor laboriosam magnam reprehenderit! Numquam tempora, eveniet voluptatem accusamus repellendus natus tempore minima!
              Nemo quam distinctio ab. At aspernatur iure numquam commodi distinctio quos deserunt vel praesentium ab in nostrum voluptate magni, aliquam dolor? Optio doloremque totam, temporibus quaerat nulla maxime tenetur tempore.
              Exercitationem, blanditiis, molestiae adipisci quasi eum provident ea aut numquam maiores ad harum cumque in tenetur quae delectus laboriosam eligendi nisi perspiciatis. Asperiores maiores earum ducimus sint possimus molestias pariatur.
              Aliquid porro a, incidunt ab sunt repudiandae sint eligendi soluta amet repellendus aut assumenda voluptatem nisi minima placeat excepturi recusandae alias explicabo! Sint, tenetur. Quibusdam incidunt corrupti commodi optio recusandae.
              Veritatis placeat molestiae eligendi possimus quidem? Quidem, debitis! Inventore, est. Debitis voluptas deserunt corporis quidem odit vero nobis exercitationem error commodi dolorum. Expedita quis at minima placeat id! Cupiditate, dolor?
              Impedit odio itaque id accusantium voluptas ut officia explicabo iure quibusdam ad. Perspiciatis eaque aperiam, dolorem numquam magni aut reprehenderit laborum dicta vel rem, iste unde nulla qui similique. Quis.
              Repudiandae necessitatibus, dolorem amet quasi, eveniet non maxime soluta ut asperiores voluptate qui autem dolor est velit alias! Expedita porro tempora nesciunt voluptatum voluptatibus doloribus nihil enim, illo sint itaque!</p>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] w-full min-h-[322px] py-[44px] pl-[38px] pr-[37px] flex flex-col gap-[20px]'>
          <div className='w-full h-[77px] rounded-[9px] border-[1px] border-[rgba(255,255,255,0.7)] flex justify-between items-center px-[35px]'>
            <div className='flex flex-col gap-[4px]'>
              <p className='font-[700] text-[16px] leading-[21.52px] text-[rgba(255,255,255,0.7)]'>Visit Website</p>
              <p className='font-[400] text-[14px] leading-[18.83px] text-[rgba(255,255,255,0.7)]'>pixel38.com</p>
            </div>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M0.790057 0.255715L0.262181 0.779948C0.0973254 0.944934 0.00650524 1.16444 0.00650525 1.39903C0.00650526 1.6335 0.0973255 1.85327 0.262181 2.01825L6.24252 7.99833L0.255546 13.9853C0.0906901 14.15 -7.14293e-08 14.3698 -6.11804e-08 14.6043C-5.09316e-08 14.8387 0.0906901 15.0586 0.255546 15.2235L0.780169 15.7478C1.12133 16.0893 1.67705 16.0893 2.01821 15.7478L9.17206 8.61963C9.33678 8.4549 9.45284 8.2354 9.45284 7.99885L9.45284 7.99612C9.45284 7.76152 9.33665 7.54202 9.17206 7.37729L2.0376 0.255715C1.87287 0.0907296 1.64673 0.000169682 1.41227 -9.16145e-05C1.17767 -9.16042e-05 0.954652 0.0907297 0.790057 0.255715Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='w-full h-[77px] rounded-[9px] border-[1px] border-[rgba(255,255,255,0.7)] flex justify-between items-center px-[35px]'>
            <div className='flex flex-col gap-[4px]'>
              <p className='font-[700] text-[16px] leading-[21.52px] text-[rgba(255,255,255,0.7)]'>Phone Number</p>
              <p className='font-[400] text-[14px] leading-[18.83px] text-[rgba(255,255,255,0.7)]'>+96176939545</p>
            </div>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M0.790057 0.255715L0.262181 0.779948C0.0973254 0.944934 0.00650524 1.16444 0.00650525 1.39903C0.00650526 1.6335 0.0973255 1.85327 0.262181 2.01825L6.24252 7.99833L0.255546 13.9853C0.0906901 14.15 -7.14293e-08 14.3698 -6.11804e-08 14.6043C-5.09316e-08 14.8387 0.0906901 15.0586 0.255546 15.2235L0.780169 15.7478C1.12133 16.0893 1.67705 16.0893 2.01821 15.7478L9.17206 8.61963C9.33678 8.4549 9.45284 8.2354 9.45284 7.99885L9.45284 7.99612C9.45284 7.76152 9.33665 7.54202 9.17206 7.37729L2.0376 0.255715C1.87287 0.0907296 1.64673 0.000169682 1.41227 -9.16145e-05C1.17767 -9.16042e-05 0.954652 0.0907297 0.790057 0.255715Z" fill="white" />
              </g>
            </svg>
          </div>
          <button className='bg-primary w-full h-[40px] flex justify-center items-center gap-[8.6px] rounded-[9px] font-[400] text-[14px] leading-[19.07px]'>
            <div>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M16.0649 0.935149C15.4416 0.311755 14.6907 0 13.8127 0H3.18752C2.30955 0 1.55866 0.311755 0.935149 0.935149C0.311755 1.55866 0 2.30952 0 3.18752V13.8126C0 14.6906 0.311755 15.4415 0.935149 16.065C1.55866 16.6885 2.30955 17.0003 3.18752 17.0003H13.8126C14.6906 17.0003 15.4415 16.6885 16.0647 16.065C16.6882 15.4415 17 14.6906 17 13.8126V3.18752C17 2.30952 16.6882 1.55854 16.0649 0.935149ZM14.1668 8.8542C14.1668 9.1641 14.0227 9.38165 13.7351 9.50718C13.6393 9.54404 13.5468 9.5625 13.4584 9.5625C13.2594 9.5625 13.0933 9.49229 12.9604 9.35223L11.3667 7.75849L5.45672 13.6688C5.31635 13.8089 5.15047 13.8791 4.95858 13.8791C4.76661 13.8791 4.60058 13.8089 4.4604 13.6688L3.3315 12.5397C3.19128 12.3998 3.12116 12.2334 3.12116 12.0417C3.12116 11.85 3.19128 11.6839 3.3315 11.5438L9.24182 5.63342L7.64804 4.03968C7.41925 3.82569 7.36765 3.56758 7.49302 3.26494C7.61839 2.97726 7.83617 2.83324 8.14607 2.83324H13.4584C13.6502 2.83324 13.8163 2.90341 13.9567 3.04366C14.0968 3.18376 14.1669 3.34984 14.1669 3.54169V8.8542H14.1668Z" fill="white" />
                </g>
              </svg>
            </div>
            Apply now
          </button>
        </div>
        <div className='bg-[rgba(255,255,255,0.15)] rounded-[9px] min-h-[405px] w-full mt-[28px] divide-y-2 divide-[rgba(255,255,255,0.15)]'>
          <div className='pl-[38px]'>
            <h5 className='font-[700] text-[18px] leading-[18px] py-[25px] '>Similar Jobs</h5>
          </div>
          <div className='py-[35px] px-[38px] space-y-[31px]'>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[7px]'>
                <h5 className='font-[700] text-[16px] leading-[16px]'>Content and Copy Lead</h5>
                <p className='font-[700] text-[14px] leading-[14px] text-primary'>Justlife</p>
                <div className='flex gap-[4px]'>
                  <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.27344 7.03125C6.2427 7.03125 7.03125 6.2427 7.03125 5.27344C7.03125 4.30418 6.2427 3.51562 5.27344 3.51562C4.30418 3.51562 3.51562 4.30418 3.51562 5.27344C3.51562 6.2427 4.30418 7.03125 5.27344 7.03125ZM5.27344 4.6875C5.59652 4.6875 5.85938 4.95035 5.85938 5.27344C5.85938 5.59652 5.59652 5.85938 5.27344 5.85938C4.95035 5.85938 4.6875 5.59652 4.6875 5.27344C4.6875 4.95035 4.95035 4.6875 5.27344 4.6875Z" fill="white" />
                    <path d="M10.5469 5.27344C10.5469 2.36566 8.18121 0 5.27344 0C2.36566 0 0 2.36566 0 5.27344C0 6.42378 0.363926 7.51702 1.05246 8.43498L3.86666 12.1869C4.19722 12.6276 4.72312 12.8906 5.27344 12.8906C5.82375 12.8906 6.34966 12.6276 6.68024 12.1869L9.49441 8.43498C10.1829 7.51702 10.5469 6.42378 10.5469 5.27344ZM8.55694 7.7318L5.7428 11.4837C5.63071 11.6331 5.45965 11.7188 5.27344 11.7188C5.08723 11.7188 4.91616 11.6331 4.8041 11.4837L1.98993 7.7318C1.45477 7.0183 1.17188 6.16819 1.17188 5.27344C1.17188 3.01184 3.01184 1.17188 5.27344 1.17188C7.53504 1.17188 9.375 3.01184 9.375 5.27344C9.375 6.16819 9.09211 7.0183 8.55694 7.7318Z" fill="white" />
                    <path d="M8.20312 14.4141C8.20312 14.0904 7.9408 13.8281 7.61719 13.8281H2.92969C2.60607 13.8281 2.34375 14.0904 2.34375 14.4141C2.34375 14.7377 2.60607 15 2.92969 15H7.61719C7.9408 15 8.20312 14.7377 8.20312 14.4141Z" fill="white" />
                  </svg>
                  <p className='text-[12px] leading-[12px] font-[400]'>Dubai. United Arab Emirates</p>
                </div>
              </div>
            </div>
            
            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[7px]'>
                <h5 className='font-[700] text-[16px] leading-[16px]'>Content and Copy Lead</h5>
                <p className='font-[700] text-[14px] leading-[14px] text-primary'>Justlife</p>
                <div className='flex gap-[4px]'>
                  <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.27344 7.03125C6.2427 7.03125 7.03125 6.2427 7.03125 5.27344C7.03125 4.30418 6.2427 3.51562 5.27344 3.51562C4.30418 3.51562 3.51562 4.30418 3.51562 5.27344C3.51562 6.2427 4.30418 7.03125 5.27344 7.03125ZM5.27344 4.6875C5.59652 4.6875 5.85938 4.95035 5.85938 5.27344C5.85938 5.59652 5.59652 5.85938 5.27344 5.85938C4.95035 5.85938 4.6875 5.59652 4.6875 5.27344C4.6875 4.95035 4.95035 4.6875 5.27344 4.6875Z" fill="white" />
                    <path d="M10.5469 5.27344C10.5469 2.36566 8.18121 0 5.27344 0C2.36566 0 0 2.36566 0 5.27344C0 6.42378 0.363926 7.51702 1.05246 8.43498L3.86666 12.1869C4.19722 12.6276 4.72312 12.8906 5.27344 12.8906C5.82375 12.8906 6.34966 12.6276 6.68024 12.1869L9.49441 8.43498C10.1829 7.51702 10.5469 6.42378 10.5469 5.27344ZM8.55694 7.7318L5.7428 11.4837C5.63071 11.6331 5.45965 11.7188 5.27344 11.7188C5.08723 11.7188 4.91616 11.6331 4.8041 11.4837L1.98993 7.7318C1.45477 7.0183 1.17188 6.16819 1.17188 5.27344C1.17188 3.01184 3.01184 1.17188 5.27344 1.17188C7.53504 1.17188 9.375 3.01184 9.375 5.27344C9.375 6.16819 9.09211 7.0183 8.55694 7.7318Z" fill="white" />
                    <path d="M8.20312 14.4141C8.20312 14.0904 7.9408 13.8281 7.61719 13.8281H2.92969C2.60607 13.8281 2.34375 14.0904 2.34375 14.4141C2.34375 14.7377 2.60607 15 2.92969 15H7.61719C7.9408 15 8.20312 14.7377 8.20312 14.4141Z" fill="white" />
                  </svg>
                  <p className='text-[12px] leading-[12px] font-[400]'>Dubai. United Arab Emirates</p>
                </div>
              </div>
            </div>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[7px]'>
                <h5 className='font-[700] text-[16px] leading-[16px]'>Content and Copy Lead</h5>
                <p className='font-[700] text-[14px] leading-[14px] text-primary'>Justlife</p>
                <div className='flex gap-[4px]'>
                  <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.27344 7.03125C6.2427 7.03125 7.03125 6.2427 7.03125 5.27344C7.03125 4.30418 6.2427 3.51562 5.27344 3.51562C4.30418 3.51562 3.51562 4.30418 3.51562 5.27344C3.51562 6.2427 4.30418 7.03125 5.27344 7.03125ZM5.27344 4.6875C5.59652 4.6875 5.85938 4.95035 5.85938 5.27344C5.85938 5.59652 5.59652 5.85938 5.27344 5.85938C4.95035 5.85938 4.6875 5.59652 4.6875 5.27344C4.6875 4.95035 4.95035 4.6875 5.27344 4.6875Z" fill="white" />
                    <path d="M10.5469 5.27344C10.5469 2.36566 8.18121 0 5.27344 0C2.36566 0 0 2.36566 0 5.27344C0 6.42378 0.363926 7.51702 1.05246 8.43498L3.86666 12.1869C4.19722 12.6276 4.72312 12.8906 5.27344 12.8906C5.82375 12.8906 6.34966 12.6276 6.68024 12.1869L9.49441 8.43498C10.1829 7.51702 10.5469 6.42378 10.5469 5.27344ZM8.55694 7.7318L5.7428 11.4837C5.63071 11.6331 5.45965 11.7188 5.27344 11.7188C5.08723 11.7188 4.91616 11.6331 4.8041 11.4837L1.98993 7.7318C1.45477 7.0183 1.17188 6.16819 1.17188 5.27344C1.17188 3.01184 3.01184 1.17188 5.27344 1.17188C7.53504 1.17188 9.375 3.01184 9.375 5.27344C9.375 6.16819 9.09211 7.0183 8.55694 7.7318Z" fill="white" />
                    <path d="M8.20312 14.4141C8.20312 14.0904 7.9408 13.8281 7.61719 13.8281H2.92969C2.60607 13.8281 2.34375 14.0904 2.34375 14.4141C2.34375 14.7377 2.60607 15 2.92969 15H7.61719C7.9408 15 8.20312 14.7377 8.20312 14.4141Z" fill="white" />
                  </svg>
                  <p className='text-[12px] leading-[12px] font-[400]'>Dubai. United Arab Emirates</p>
                </div>
              </div>
            </div>

            <div className='flex gap-[18px] items-center'>
              <div className=''>
                <img src={Rectangle79} />
              </div>
              <div className='flex flex-col gap-[7px]'>
                <h5 className='font-[700] text-[16px] leading-[16px]'>Content and Copy Lead</h5>
                <p className='font-[700] text-[14px] leading-[14px] text-primary'>Justlife</p>
                <div className='flex gap-[4px]'>
                  <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.27344 7.03125C6.2427 7.03125 7.03125 6.2427 7.03125 5.27344C7.03125 4.30418 6.2427 3.51562 5.27344 3.51562C4.30418 3.51562 3.51562 4.30418 3.51562 5.27344C3.51562 6.2427 4.30418 7.03125 5.27344 7.03125ZM5.27344 4.6875C5.59652 4.6875 5.85938 4.95035 5.85938 5.27344C5.85938 5.59652 5.59652 5.85938 5.27344 5.85938C4.95035 5.85938 4.6875 5.59652 4.6875 5.27344C4.6875 4.95035 4.95035 4.6875 5.27344 4.6875Z" fill="white" />
                    <path d="M10.5469 5.27344C10.5469 2.36566 8.18121 0 5.27344 0C2.36566 0 0 2.36566 0 5.27344C0 6.42378 0.363926 7.51702 1.05246 8.43498L3.86666 12.1869C4.19722 12.6276 4.72312 12.8906 5.27344 12.8906C5.82375 12.8906 6.34966 12.6276 6.68024 12.1869L9.49441 8.43498C10.1829 7.51702 10.5469 6.42378 10.5469 5.27344ZM8.55694 7.7318L5.7428 11.4837C5.63071 11.6331 5.45965 11.7188 5.27344 11.7188C5.08723 11.7188 4.91616 11.6331 4.8041 11.4837L1.98993 7.7318C1.45477 7.0183 1.17188 6.16819 1.17188 5.27344C1.17188 3.01184 3.01184 1.17188 5.27344 1.17188C7.53504 1.17188 9.375 3.01184 9.375 5.27344C9.375 6.16819 9.09211 7.0183 8.55694 7.7318Z" fill="white" />
                    <path d="M8.20312 14.4141C8.20312 14.0904 7.9408 13.8281 7.61719 13.8281H2.92969C2.60607 13.8281 2.34375 14.0904 2.34375 14.4141C2.34375 14.7377 2.60607 15 2.92969 15H7.61719C7.9408 15 8.20312 14.7377 8.20312 14.4141Z" fill="white" />
                  </svg>
                  <p className='text-[12px] leading-[12px] font-[400]'>Dubai. United Arab Emirates</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
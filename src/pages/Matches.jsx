import React from 'react'
import { useNavigate } from 'react-router-dom'

const Matches = () => {
  const navigate = useNavigate()

  return (
    <div className='px-[15.260416666666666vw] py-[64px] xsm:px-[20px] sm:px-[20px] dark:bg-black bg-white dark:text-white text-black'>
      <div className='flex flex-col items-center justify-center mb-[61px]'>
        <h1 className='font-bold text-custom-26'>Tell us, what are your goals?</h1>
        <p className='text-custom-14 opacity-50'>Our top-of-the-line algorithm will take your preferences and use them to pinpoint<br /> the perfect matches just for you. Select 3, let's get started!</p>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-x-[29px] gap-y-[27px] mb-[86px]'>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.068 26.8043C37.7497 29.2101 29.4436 37.3929 26.9071 47.6509C24.3627 57.9417 27.2747 68.431 34.6972 75.7097C37.3226 78.2847 38.8903 82.4116 38.8903 86.7495V87.442C38.8903 90.2985 40.1366 92.8689 42.1129 94.6403V100.333C42.1129 105.664 46.45 110.001 51.7809 110.001H58.2263C63.5572 110.001 67.8943 105.664 67.8943 100.333V94.6403C69.8706 92.8689 71.1169 90.2988 71.1169 87.442V86.7368C71.1169 82.4649 72.7684 78.2595 75.5348 75.4874C80.9985 70.0116 84.0076 62.7359 84.0076 55.0005C84.0076 36.5069 66.8697 22.4219 48.068 26.8043ZM61.4489 100.333C61.4489 102.11 60.0033 103.555 58.2263 103.555H51.7809C50.004 103.555 48.5583 102.11 48.5583 100.333V97.11H61.4489V100.333ZM70.9721 70.9346C66.9681 74.9473 64.6716 80.7068 64.6716 86.7368V87.442C64.6716 89.2189 63.2259 90.6646 61.4489 90.6646H48.5583C46.7813 90.6646 45.3356 89.2189 45.3356 87.442V86.7495C45.3356 80.6267 43.1027 74.9256 39.2098 71.108C33.4326 65.4425 31.1726 57.252 33.1638 49.198C35.1243 41.2687 41.549 34.9424 49.5315 33.0814C64.2853 29.6411 77.5623 40.6549 77.5623 55.0005C77.5623 61.017 75.2218 66.6758 70.9721 70.9346Z" fill="#E44C4C" />
            <path d="M29.934 25.3754L20.8188 16.2604C19.5605 15.0018 17.5199 15.0018 16.2613 16.2604C15.0027 17.5189 15.0027 19.5593 16.2613 20.8179L25.3765 29.9329C26.6348 31.1914 28.6757 31.1914 29.934 29.9329C31.1926 28.6743 31.1926 26.6339 29.934 25.3754Z" fill="#E44C4C" />
            <path d="M16.3282 51.7772H3.22267C1.44289 51.7772 0 53.2201 0 54.9999C0 56.7797 1.44289 58.2226 3.22267 58.2226H16.3282C18.1079 58.2226 19.5508 56.7797 19.5508 54.9999C19.5508 53.2201 18.1079 51.7772 16.3282 51.7772Z" fill="#E44C4C" />
            <path d="M106.778 51.7773H93.6729C91.8931 51.7773 90.4502 53.2202 90.4502 55C90.4502 56.7798 91.8931 58.2227 93.6729 58.2227H106.778C108.558 58.2227 110.001 56.7798 110.001 55C110.001 53.2202 108.558 51.7773 106.778 51.7773Z" fill="#E44C4C" />
            <path d="M93.7426 16.2605C92.4845 15.0019 90.4439 15.0019 89.1851 16.2605L80.0699 25.3755C78.8113 26.6338 78.8113 28.6744 80.0699 29.933C81.3282 31.1915 83.3688 31.1915 84.6274 29.933L93.7426 20.818C95.0011 19.5597 95.0011 17.5191 93.7426 16.2605Z" fill="#E44C4C" />
            <path d="M55.001 -0.000976562C53.2212 -0.000976562 51.7783 1.44192 51.7783 3.22169V16.3272C51.7783 18.107 53.2212 19.5499 55.001 19.5499C56.7808 19.5499 58.2237 18.107 58.2237 16.3272V3.22169C58.2237 1.44192 56.7808 -0.000976562 55.001 -0.000976562Z" fill="#E44C4C" />
            <path d="M55.0039 38.8864C53.6792 38.8864 52.3297 39.0451 50.9953 39.3577C45.4384 40.6547 40.7864 45.229 39.4197 50.74C38.9913 52.4675 40.0443 54.2151 41.7716 54.6437C43.4994 55.0721 45.247 54.0187 45.6754 52.2916C46.4619 49.1209 49.2519 46.3833 52.4629 45.6338C53.3184 45.4333 54.1735 45.3317 55.0039 45.3317C56.7837 45.3317 58.2266 43.8888 58.2266 42.109C58.2266 40.3292 56.7837 38.8864 55.0039 38.8864Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.8944 68.1043C40.1174 68.1043 38.6717 66.6586 38.6717 64.8817C38.6717 63.5836 39.4441 62.4178 40.6395 61.9114C42.0826 61.3004 43.8095 61.8219 45.3787 63.3421C46.657 64.5804 48.6972 64.5482 49.9355 63.2701C51.1741 61.9918 51.1417 59.9516 49.8636 58.7133C48.4086 57.3037 46.7913 56.3075 45.117 55.7452V51.991C45.117 50.2113 43.6741 48.7684 41.8944 48.7684C40.1146 48.7684 38.6717 50.2113 38.6717 51.991V55.7661C38.4889 55.8311 38.3067 55.8999 38.126 55.9764C34.5422 57.4942 32.2264 60.9898 32.2264 64.8817C32.2264 70.2126 36.5634 74.5496 41.8944 74.5496C43.6713 74.5496 45.117 75.9953 45.117 77.7723C45.117 79.1228 44.2652 80.3405 42.9974 80.8022C41.342 81.4049 39.4151 80.5874 37.7109 78.5582C36.5662 77.1952 34.5336 77.0184 33.1706 78.1631C31.8077 79.3078 31.6308 81.3406 32.7755 82.7034C34.5177 84.7777 36.5456 86.2002 38.6719 86.916V90.6629C38.6719 92.4427 40.1148 93.8856 41.8946 93.8856C43.6743 93.8856 45.1172 92.4427 45.1172 90.6629V86.8875C45.146 86.8774 45.1748 86.8685 45.2034 86.8582C49.0068 85.4729 51.5623 81.8214 51.5623 77.7723C51.5623 72.4414 47.2253 68.1043 41.8944 68.1043Z" fill="#E44C4C" />
            <path d="M71.7404 48.3955C67.9102 43.6833 63.5317 39.9291 58.7252 37.2294C59.5124 36.2981 60.1335 35.206 60.5346 33.9889C62.1085 29.196 59.8095 23.5026 53.9415 21.6479L62.1676 7.30383C63.2055 5.49355 62.2731 3.18785 60.2718 2.60605C54.3241 0.876777 48.1413 0 41.8945 0C35.6477 0 29.465 0.876777 23.5172 2.60605C21.5136 3.1885 20.5848 5.4957 21.6214 7.30383L29.8476 21.6481C24.0028 23.4934 21.6747 29.1784 23.2553 33.9915C23.6552 35.2054 24.2761 36.2968 25.0656 37.2286C20.2585 39.9283 15.8795 43.6829 12.0489 48.3955C4.39162 57.8157 0 69.6981 0 80.9961C0 104.434 18.7015 110 41.8945 110C65.1039 110 83.7891 104.424 83.7891 80.9961C83.7891 69.6981 79.3974 57.8157 71.7404 48.3955ZM29.3253 7.78121C33.4368 6.89369 37.6488 6.44531 41.8945 6.44531C46.1403 6.44531 50.3523 6.89369 54.4637 7.78121L47.3668 20.1566C43.7319 19.6492 40.0583 19.6494 36.4225 20.1569L29.3253 7.78121ZM31.4308 27.9073C36.977 26.088 42.7795 25.7432 48.4206 26.8709C48.4273 26.8722 48.4342 26.8735 48.4408 26.8748C49.7557 27.1386 51.0617 27.482 52.3538 27.9058C54.0427 28.4625 54.9656 30.2893 54.412 31.9752C54.0096 33.1962 52.9472 34.0371 51.6974 34.1733C48.4842 33.1671 45.2068 32.6562 41.8945 32.6562C38.5889 32.6562 35.318 33.165 32.111 34.167C30.8419 34.0364 29.7769 33.1895 29.3779 31.9782C28.8234 30.2893 29.7464 28.4623 31.4308 27.9073ZM41.8945 103.598C16.7157 103.598 6.44531 97.0191 6.44531 80.9961C6.44531 71.2976 10.4098 60.6304 17.05 52.461C24.0528 43.846 32.876 39.1016 41.8945 39.1016C51.8216 39.1016 60.5045 44.7911 66.7391 52.461C73.3792 60.6304 77.3438 71.2976 77.3438 80.9961C77.3438 97.0191 67.0734 103.598 41.8945 103.598Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_48146" maskUnits="userSpaceOnUse" x="0" y="0" width="110" height="110">
              <path d="M0 0H110V110H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_48146)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.224609 106.777C0.224609 108.434 1.56776 109.777 3.22461 109.777H106.779C108.436 109.777 109.779 108.434 109.779 106.777C109.779 105.12 108.436 103.777 106.779 103.777H3.22461C1.56776 103.777 0.224609 105.12 0.224609 106.777Z" fill="#E44C4C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88281 106.777C6.88281 108.434 8.22596 109.777 9.88281 109.777H22.7734C24.4303 109.777 25.7734 108.434 25.7734 106.777V83.1445C25.7734 80.3011 23.4684 77.9961 20.625 77.9961H12.0312C9.18781 77.9961 6.88281 80.3011 6.88281 83.1445V106.777ZM12.8828 103.777V83.9961H19.7734V103.777H12.8828Z" fill="#E44C4C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6641 106.777C32.6641 108.434 34.0072 109.777 35.6641 109.777H48.5547C50.2115 109.777 51.5547 108.434 51.5547 106.777V75.4102C51.5547 72.5667 49.2497 70.2617 46.4063 70.2617H37.8125C34.9691 70.2617 32.6641 72.5667 32.6641 75.4102V106.777ZM38.6641 103.777V76.2617H45.5547V103.777H38.6641Z" fill="#E44C4C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M58.4453 106.777C58.4453 108.434 59.7885 109.777 61.4453 109.777H74.3359C75.9928 109.777 77.3359 108.434 77.3359 106.777V63.5938C77.3359 60.7503 75.0309 58.4453 72.1875 58.4453H63.5938C60.7503 58.4453 58.4453 60.7503 58.4453 63.5938V106.777ZM64.4453 103.777V64.4453H71.3359V103.777H64.4453Z" fill="#E44C4C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M84.2266 106.777C84.2266 108.434 85.5697 109.777 87.2266 109.777H100.117C101.774 109.777 103.117 108.434 103.117 106.777V42.1094C103.117 39.2659 100.812 36.9609 97.9688 36.9609H89.375C86.5316 36.9609 84.2266 39.2659 84.2266 42.1094V106.777ZM90.2266 103.777V42.9609H97.1172V103.777H90.2266Z" fill="#E44C4C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.224609 66.0225C0.224609 67.6793 1.56776 69.0225 3.22461 69.0225C25.1297 69.0225 46.87 60.6638 64.8105 48.5221C82.7338 36.3921 97.1514 20.2918 104.24 4.44891C104.917 2.93655 104.24 1.16196 102.727 0.48526C101.215 -0.191444 99.4402 0.485992 98.7635 1.99835C92.2326 16.5943 78.6759 31.8935 61.4476 43.5531C44.2367 55.2011 23.6482 63.0225 3.22461 63.0225C1.56776 63.0225 0.224609 64.3656 0.224609 66.0225Z" fill="#E44C4C" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M107.555 25.8148C109.155 25.3859 110.105 23.7409 109.676 22.1405L104.399 2.44579C103.97 0.845396 102.325 -0.104351 100.725 0.324476L81.0299 5.60168C79.4296 6.03051 78.4798 7.67552 78.9086 9.27592C79.3375 10.8763 80.9825 11.8261 82.5829 11.3972L99.3798 6.89649L103.881 23.6934C104.309 25.2938 105.954 26.2436 107.555 25.8148Z" fill="#E44C4C" />
            </g>
          </svg>

          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="141" height="89" viewBox="0 0 141 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M111.333 60.4221C108.566 54.6529 98.6666 46.6451 89.1023 38.9078C83.7677 34.5954 78.7269 30.5182 75.5134 27.3047C74.7084 26.494 73.5042 26.2354 72.4409 26.6173C70.4611 27.3342 69.2389 27.8863 68.2756 28.3151C66.8069 28.973 66.3134 29.1964 64.3334 29.396C63.4579 29.4842 62.6708 29.9542 62.1831 30.6827C58.0294 36.8924 53.7289 36.3637 50.856 35.4004C49.9395 35.095 49.7751 34.7012 49.687 34.3253C49.0701 31.7462 52.1663 25.7419 56.1788 21.7292C65.7258 12.1764 70.6489 9.78518 81.0477 14.4324C92.8446 19.7081 104.665 23.8384 104.783 23.8794C106.328 24.4139 107.991 23.6032 108.525 22.0698C109.054 20.5364 108.249 18.8621 106.715 18.3275C106.598 18.2865 95.0125 14.2385 83.4505 9.06255C69.9792 3.04058 62.5882 7.00621 52.0308 17.5696C48.0123 21.5882 42.5544 29.7191 43.9644 35.6824C44.5694 38.2204 46.3556 40.1005 49.0109 40.9757C55.6674 43.173 61.7419 41.0696 66.2658 35.0655C68.134 34.7777 69.1505 34.3547 70.6778 33.6673C71.23 33.4206 71.8763 33.1328 72.7342 32.7861C76.0948 35.941 80.6302 39.6128 85.4066 43.4726C94.0428 50.4579 103.837 58.3776 106.04 62.9601C107.127 65.2219 105.957 66.6966 105.164 67.3721C104.001 68.371 102.409 68.6882 101.545 68.0829C100.594 67.4308 99.354 67.3898 98.3728 67.9772C97.3858 68.5646 96.8336 69.675 96.957 70.8148C97.1566 72.6831 95.447 73.7524 94.7068 74.1225C92.8267 75.0743 90.8645 74.9099 90.1301 74.2283C89.3075 73.4646 88.1266 73.2413 87.0809 73.629C86.0353 74.0226 85.3066 74.9861 85.2008 76.1023C85.0246 78.0292 83.597 79.8798 81.7345 80.6025C80.8356 80.9431 79.5314 81.1488 78.3623 80.0795C77.6339 79.4216 76.6232 79.1688 75.6776 79.3979C74.72 79.6328 73.9503 80.3263 73.6154 81.2485C73.5039 81.5424 73.2511 82.2474 70.5016 82.2474C68.5452 82.2474 65.026 80.9255 63.3048 79.7857C61.2427 78.4285 48.3117 68.7819 37.1435 59.4288C35.5749 58.1069 32.8606 55.275 30.4636 52.7723C28.3368 50.5515 26.3922 48.5365 25.3934 47.6905C24.142 46.633 22.2914 46.7916 21.2515 48.0372C20.2059 49.2768 20.3584 51.1334 21.5982 52.1791C22.509 52.9488 24.2715 54.811 26.216 56.8379C28.8363 59.5756 31.5445 62.4074 33.366 63.935C44.3053 73.0942 57.4536 82.9818 60.0736 84.703C62.2357 86.1249 66.8945 88.1223 70.5019 88.1223C73.3981 88.1223 75.625 87.4583 77.1699 86.1601C79.2378 86.9651 81.588 86.9709 83.8498 86.0896C86.523 85.0555 88.7201 82.97 89.9656 80.4438C92.2803 80.9373 94.9301 80.5906 97.3387 79.3806C99.6947 78.1939 101.398 76.3785 102.244 74.2575C104.583 74.3808 106.991 73.5525 108.983 71.8428C112.355 68.9584 113.284 64.4701 111.333 60.4221Z" fill="#E44C4C" />
            <path d="M58.7482 11.7491H32.3106C30.6891 11.7491 29.373 13.0652 29.373 14.6867C29.373 16.3082 30.6891 17.6243 32.3106 17.6243H58.7482C60.3697 17.6243 61.6857 16.3082 61.6857 14.6867C61.6857 13.0652 60.3697 11.7491 58.7482 11.7491Z" fill="#E44C4C" />
            <path d="M119.939 54.1721C119.029 52.8268 117.208 52.4567 115.862 53.3732L107.273 59.1423C105.928 60.047 105.569 61.8742 106.474 63.2195C107.044 64.0597 107.972 64.518 108.918 64.518C109.477 64.518 110.046 64.3593 110.552 64.0187L119.141 58.2495C120.486 57.3446 120.844 55.5176 119.939 54.1721Z" fill="#E44C4C" />
            <path d="M101.705 68.1887C99.6015 66.5319 90.1955 56.9029 84.3792 50.8399C83.257 49.6648 81.3948 49.6237 80.2255 50.7517C79.0504 51.874 79.0152 53.7361 80.1374 54.9055C81.6474 56.4799 94.9658 70.3626 98.062 72.8067C98.5966 73.2297 99.2429 73.4354 99.8774 73.4354C100.741 73.4354 101.605 73.0476 102.192 72.3132C103.197 71.0439 102.98 69.1933 101.705 68.1887Z" fill="#E44C4C" />
            <path d="M89.9634 74.0828C86.4442 71.2685 77.6025 61.8744 75.6048 59.7008C74.5002 58.5023 72.6495 58.4317 71.451 59.5245C70.2583 60.623 70.1763 62.4855 71.2748 63.6782C71.3806 63.7898 81.9321 75.1816 86.2913 78.6713C86.8319 79.1001 87.484 79.3116 88.1243 79.3116C88.9822 79.3116 89.8397 78.9296 90.4213 78.2131C91.4323 76.9438 91.2266 75.0932 89.9634 74.0828Z" fill="#E44C4C" />
            <path d="M78.2739 79.9977C74.0849 76.4669 65.5134 67.3429 63.839 65.551C62.7286 64.3643 60.8661 64.2996 59.6853 65.41C58.4986 66.5203 58.4397 68.3767 59.5443 69.5637C61.9531 72.1427 70.1545 80.8379 74.4845 84.4921C75.0366 84.9561 75.7064 85.1852 76.3761 85.1852C77.2103 85.1852 78.0447 84.8269 78.6264 84.1396C79.672 82.894 79.5134 81.0433 78.2739 79.9977Z" fill="#E44C4C" />
            <path d="M34.3335 6.6773C29.2985 1.9067 9.165 0.361483 3.11384 0.00319988C2.27968 -0.0378333 1.50997 0.23811 0.922559 0.796327C0.334875 1.34849 0 2.12399 0 2.93474V55.8098C0 57.4313 1.31609 58.7474 2.93759 58.7474H20.5626C21.8316 58.7474 22.9596 57.9308 23.3531 56.7205C23.7819 55.4044 33.9047 24.3376 35.2382 9.06246C35.3147 8.16936 34.9856 7.28811 34.3335 6.6773ZM18.4181 52.8724H5.87491V6.08383C15.3161 6.82986 25.5034 8.45137 29.2046 10.2491C27.6479 23.1154 20.6036 45.975 18.4181 52.8724Z" fill="#E44C4C" />
            <path d="M138.06 5.87256C114.995 5.87256 102.199 11.7769 101.665 12.0237C100.901 12.382 100.331 13.0459 100.096 13.8509C99.8612 14.6559 99.9785 15.5195 100.419 16.2361C104.05 22.0818 115.418 54.5471 117.604 62.4665C117.956 63.7413 119.114 64.6225 120.435 64.6225H138.06C139.682 64.6225 140.998 63.3064 140.998 61.6849V8.80988C140.998 7.18259 139.682 5.87256 138.06 5.87256ZM135.123 58.7476H122.633C119.848 49.6765 111.623 26.0237 107.035 16.2479C111.517 14.7264 121.146 12.1118 135.123 11.783V58.7476Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="113" height="100" viewBox="0 0 113 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M91.3512 48.726C102.824 38.4119 103.764 20.7501 93.4497 9.27714C83.99 -1.24545 68.1563 -3.03307 56.5887 5.1158C43.9786 -3.78363 26.5419 -0.77553 17.6425 11.8343C9.47652 23.405 11.2569 39.255 21.7863 48.7258C8.70323 55.6223 0.537733 69.2189 0.597 84.008V96.0019C0.597 98.21 2.38696 100 4.59507 100H108.543C110.751 100 112.541 98.21 112.541 96.0019V84.008C112.6 69.2189 104.434 55.6223 91.3512 48.726ZM72.5605 8.04636C83.5852 8.03418 92.5324 16.9615 92.5448 27.9861C92.5535 35.8487 87.9461 42.9839 80.7764 46.2111C80.4686 46.3509 80.1608 46.4788 79.849 46.6109C78.8623 47.0089 77.8447 47.3256 76.8065 47.5585C76.6066 47.6025 76.4066 47.6264 76.2028 47.6665C75.0427 47.8888 73.8656 48.0078 72.6845 48.0223C72.1527 48.0223 71.617 47.9823 71.0852 47.9345C70.8854 47.9345 70.6853 47.9345 70.4855 47.8944C68.2132 47.6269 66.0028 46.9754 63.9488 45.9674C63.8729 45.9314 63.7848 45.9353 63.7089 45.9035C63.309 45.7116 62.9094 45.5437 62.5536 45.3277C62.5856 45.2876 62.6056 45.2438 62.6374 45.2038C64.4707 42.8481 65.9161 40.215 66.9192 37.4037L67.0431 37.0678C67.4992 35.725 67.8534 34.3499 68.1026 32.9537C68.1387 32.7499 68.1666 32.5539 68.1987 32.3341C68.4299 30.9129 68.5515 29.4762 68.5625 28.0362C68.551 26.5991 68.4294 25.1649 68.1987 23.7463C68.1666 23.5385 68.1387 23.3464 68.1026 23.1267C67.8534 21.7307 67.4992 20.3554 67.0431 19.0126L66.9192 18.6767C65.9161 15.8654 64.4705 13.2323 62.6374 10.8767C62.6053 10.8366 62.5854 10.7928 62.5536 10.7527C65.5909 8.98081 69.0441 8.04659 72.5605 8.04636ZM20.5869 28.0365C20.5585 17.025 29.4619 8.07541 40.4734 8.04706C45.635 8.03371 50.6008 10.0228 54.326 13.5957C54.5579 13.8196 54.7858 14.0433 55.0095 14.2753C55.6962 14.9947 56.3293 15.763 56.9047 16.574C57.0806 16.8219 57.2406 17.0859 57.4044 17.3417C57.9631 18.2016 58.4536 19.104 58.8715 20.0403C58.9715 20.2683 59.0474 20.5002 59.1353 20.7279C59.5567 21.7635 59.8884 22.8336 60.1269 23.9262C60.155 24.0461 60.163 24.1661 60.1869 24.29C60.6933 26.7724 60.6933 29.3317 60.1869 31.8141C60.163 31.938 60.1548 32.0579 60.1269 32.1779C59.8886 33.2705 59.5569 34.3405 59.1353 35.3762C59.0474 35.6041 58.9713 35.836 58.8715 36.0637C58.4531 36.9987 57.9626 37.8996 57.4044 38.7584C57.2404 39.0142 57.0806 39.2782 56.9047 39.5261C56.3296 40.3373 55.6962 41.1054 55.0095 41.8248C54.7856 42.0567 54.5577 42.2807 54.326 42.5044C52.7073 44.047 50.8409 45.3066 48.8048 46.2305C48.481 46.3783 48.1531 46.5144 47.8214 46.6304C46.8576 47.0129 45.866 47.3203 44.855 47.5498C44.6031 47.6058 44.3431 47.6377 44.0873 47.6817C43.0018 47.8839 41.901 47.9947 40.7969 48.0137H40.3572C39.2532 47.9949 38.1524 47.8839 37.0669 47.6817C36.811 47.6377 36.551 47.6058 36.2992 47.5498C35.2881 47.3203 34.2963 47.0129 33.3328 46.6304C33.0009 46.4985 32.6731 46.3626 32.3494 46.2305C25.1966 43.001 20.596 35.8843 20.5869 28.0365ZM72.5605 92.0041H8.5929V84.0082C8.53433 70.4604 17.0702 58.3645 29.8541 53.8795C36.7169 56.7367 44.4363 56.7367 51.2994 53.8795C52.6342 54.3672 53.935 54.9428 55.1934 55.6027C56.025 56.0304 56.7927 56.5181 57.5922 57.0098C58.112 57.3336 58.6396 57.6496 59.1395 58.0054C59.9111 58.5531 60.6387 59.1488 61.3544 59.7605C61.8142 60.1604 62.2699 60.56 62.7016 60.9599C63.3613 61.5835 63.9809 62.2431 64.5766 62.919C65.0043 63.4067 65.4202 63.9024 65.8161 64.4142C66.3399 65.0859 66.8395 65.7736 67.3034 66.4811C67.7032 67.0808 68.0591 67.7044 68.4107 68.3282C68.8106 69.0158 69.1784 69.7035 69.514 70.4192C69.85 71.1348 70.1458 71.9184 70.4335 72.6821C70.6853 73.3458 70.9533 74.0054 71.1611 74.681C71.441 75.6085 71.6369 76.568 71.8327 77.5275C71.9527 78.0951 72.1087 78.651 72.1965 79.2265C72.4333 80.8094 72.5549 82.4075 72.5603 84.0082L72.5605 92.0041ZM104.545 92.0041H80.5567V84.0082C80.5567 82.7568 80.4848 81.5173 80.3728 80.2901C80.3407 79.9303 80.2849 79.5744 80.2449 79.2146C80.1369 78.331 80.013 77.4556 79.845 76.5879C79.7731 76.2175 79.6972 75.8455 79.6171 75.4723C79.4252 74.5822 79.2027 73.7 78.9494 72.8257C78.8656 72.5378 78.7894 72.2459 78.7016 71.9622C77.5821 68.3835 75.9599 64.9821 73.8841 61.8594L73.7281 61.6315C73.0405 60.6106 72.3061 59.6232 71.5251 58.6691L71.4973 58.633C70.6977 57.6416 69.83 56.6779 68.9186 55.7664C68.9706 55.7664 69.0266 55.7664 69.0825 55.7664C70.2107 55.9147 71.3469 55.9948 72.4849 56.0063H72.7048C73.7581 55.9972 74.8097 55.929 75.8554 55.8025C76.1831 55.7624 76.5071 55.7024 76.8348 55.6504C77.6852 55.52 78.5247 55.3506 79.3535 55.1428C79.5894 55.0828 79.8293 55.0269 80.0692 54.9589C81.1568 54.6631 82.2251 54.2997 83.2675 53.8715C96.0608 58.3521 104.604 70.4534 104.545 84.0084V92.0041H104.545Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="123" height="109" viewBox="0 0 123 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M104.008 20.248H86.1928V9.11639C86.1928 4.08933 82.0612 0 76.9827 0H45.998C40.9195 0 36.7879 4.08981 36.7879 9.11639V20.248H18.9726C8.5111 20.248 0 28.7591 0 39.2206V93.4008C0 101.946 6.95199 108.898 15.4974 108.898H107.483C116.028 108.898 122.98 101.946 122.98 93.4008V39.2206C122.98 28.7591 114.469 20.248 104.008 20.248ZM44.0156 9.11639C44.0156 8.03959 44.8678 7.22773 45.998 7.22773H76.9825C78.1126 7.22773 78.9648 8.03959 78.9648 9.11639V20.248H44.0156V9.11639ZM115.752 93.4008C115.753 97.9607 112.043 101.671 107.483 101.671H15.4974C10.9373 101.671 7.22773 97.9607 7.22773 93.4008V59.6442C8.35953 60.3545 9.59702 60.93 10.9248 61.3402C10.994 61.3614 11.0637 61.3808 11.1338 61.3981L47.9515 70.3961V73.3683C47.9515 78.0348 51.748 81.8313 56.4145 81.8313H66.5657C71.2322 81.8313 75.0287 78.0348 75.0287 73.3683V70.3961L111.846 61.3981C111.917 61.3811 111.986 61.3619 112.055 61.3402C113.383 60.93 114.62 60.3545 115.753 59.6442V93.4008H115.752ZM55.1795 73.3683V63.1715C55.1795 62.4903 55.7336 61.9362 56.4148 61.9362H66.5659C67.2471 61.9359 67.8013 62.4903 67.8013 63.1715V73.3683C67.8013 74.0495 67.2471 74.6036 66.5659 74.6036H56.4148C55.7336 74.6034 55.1795 74.0492 55.1795 73.3683ZM115.753 46.5036C115.753 50.1368 113.452 53.2994 110.016 54.4048L75.0237 62.9565C74.9091 58.389 71.1606 54.708 66.5659 54.708H56.4148C51.8203 54.708 48.0718 58.3892 47.957 62.9565L12.9643 54.4051C9.52881 53.2994 7.22773 50.1368 7.22773 46.5036V39.2206C7.22773 32.7444 12.4964 27.4758 18.9726 27.4758H104.008C110.484 27.4758 115.753 32.7444 115.753 39.2206V46.5036H115.753Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M108.247 93.0165L88.9327 73.7027C88.9323 73.7022 88.9321 73.702 88.9314 73.7014C88.9308 73.7007 88.9308 73.7007 88.9301 73.7001L82.0261 66.7961C79.694 64.4637 75.8984 64.4629 73.5654 66.7961L72.7191 67.6423L69.8034 64.7267C75.5155 57.8779 78.9573 49.0729 78.9573 39.4784C78.9569 17.71 61.2469 0 39.4782 0C17.7096 0 0 17.71 0 39.4784C0 61.2469 17.7096 78.9569 39.4782 78.9569C49.0727 78.9569 57.8777 75.5151 64.7265 69.8032L67.6421 72.7187L66.7956 73.5651C64.4637 75.8977 64.4637 79.6931 66.7961 82.0259L93.0163 108.246C95.354 110.584 99.1391 110.585 101.477 108.246L108.246 101.477C110.579 99.1449 110.579 95.3495 108.247 93.0165ZM39.4782 71.7774C21.6685 71.7774 7.17923 57.2881 7.17923 39.4784C7.17923 21.6687 21.6685 7.17944 39.4782 7.17944C57.2879 7.17944 71.7774 21.6687 71.7774 39.4784C71.7774 57.2881 57.2879 71.7774 39.4782 71.7774ZM72.7189 77.7956L77.7954 72.7191L81.3163 76.24L76.2397 81.3165L72.7189 77.7956ZM97.247 102.324L81.3163 86.3928L86.3928 81.3163L102.324 97.247L97.247 102.324Z" fill="#E44C4C" />
            <path d="M39.4765 14.359C37.494 14.359 35.8867 15.9663 35.8867 17.9488C35.8867 19.9314 37.494 21.5387 39.4765 21.5387C49.369 21.5387 57.4171 29.5861 57.4171 39.4781C57.4171 41.4607 59.0243 43.068 61.0069 43.068C62.9895 43.068 64.5968 41.4607 64.5968 39.4781C64.5968 25.6274 53.3278 14.359 39.4765 14.359Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.6377 53.178C38.6377 49.9146 37.67 46.7245 35.8569 44.0111C34.0439 41.2977 31.4669 39.1828 28.452 37.934C25.437 36.6852 22.1194 36.3584 18.9187 36.9951C15.718 37.6317 12.778 39.2032 10.4704 41.5108C8.16287 43.8183 6.5914 46.7583 5.95475 49.959C5.31809 53.1597 5.64484 56.4773 6.89369 59.4923C8.14253 62.5073 10.2574 65.0842 12.9708 66.8972C15.6842 68.7103 18.8743 69.678 22.1377 69.678C26.511 69.6689 30.7025 67.9276 33.7949 64.8352C36.8873 61.7428 38.6286 57.5513 38.6377 53.178ZM12.9596 53.178C12.9596 51.3627 13.4979 49.5882 14.5064 48.0789C15.5149 46.5696 16.9483 45.3932 18.6254 44.6985C20.3025 44.0039 22.1479 43.8221 23.9282 44.1762C25.7086 44.5304 27.344 45.4045 28.6276 46.6881C29.9112 47.9717 30.7853 49.6071 31.1395 51.3874C31.4936 53.1678 31.3118 55.0132 30.6172 56.6903C29.9225 58.3674 28.7461 59.8008 27.2368 60.8093C25.7274 61.8178 23.9529 62.3561 22.1377 62.3561C20.9324 62.3561 19.7389 62.1187 18.6254 61.6575C17.5118 61.1962 16.5 60.5202 15.6478 59.6679C14.7955 58.8156 14.1195 57.8039 13.6582 56.6903C13.197 55.5768 12.9596 54.3833 12.9596 53.178Z" fill="#E44C4C" />
            <path d="M61.8749 68.0284C61.5018 67.2841 60.8873 66.6885 60.1317 66.3388C59.3762 65.9891 58.5244 65.9061 57.7156 66.1034L30.9375 72.7721C29.4758 73.1368 27.9751 73.3215 26.4687 73.3221H14.6781C10.7852 73.3221 7.0518 74.8685 4.29912 77.6212C1.54644 80.3739 0 84.1073 0 88.0002V106.322C0 107.298 0.387515 108.233 1.0773 108.923C1.76708 109.613 2.70262 110 3.67812 110H40.3218C41.2973 110 42.2329 109.613 42.9227 108.923C43.6124 108.233 44 107.298 44 106.322V95.5971C43.9946 94.9932 44.1395 94.3974 44.4215 93.8634C44.7035 93.3294 45.1138 92.8738 45.6156 92.5377L58.9531 83.6346C61.3497 81.9052 62.9897 79.3205 63.5336 76.4155C64.0775 73.5105 63.4836 70.5077 61.8749 68.0284ZM55 77.5158L41.6625 86.419C40.1516 87.4184 38.9118 88.7767 38.0541 90.3723C37.1963 91.9679 36.7472 93.7511 36.7468 95.5627V102.644H7.32187V88.0002C7.33091 86.0611 8.10522 84.204 9.47638 82.8329C10.8475 81.4617 12.7046 80.6874 14.6437 80.6783H26.6062C28.7032 80.6799 30.7926 80.4259 32.8281 79.9221L56.4781 74.0096C56.5814 74.6786 56.4981 75.3632 56.2372 75.9879C55.9764 76.6126 55.5483 77.1532 55 77.5502V77.5158Z" fill="#E44C4C" />
            <path d="M47.6777 25.6783H76.9996V33.0002H47.6777V25.6783Z" fill="#E44C4C" />
            <path d="M47.6777 44.0002H91.6777V51.322H47.6777V44.0002Z" fill="#E44C4C" />
            <path d="M110 6.10352e-05H0V7.32193H3.67812V33H11V7.32193H98.9999V84.3219C98.9999 85.2974 98.6124 86.2329 97.9226 86.9227C97.2328 87.6125 96.2973 88 95.3218 88H72.1874V95.3219H95.4937C96.9382 95.3219 98.3686 95.0373 99.7032 94.4845C101.038 93.9317 102.25 93.1215 103.272 92.1C104.293 91.0786 105.104 89.866 105.656 88.5314C106.209 87.1968 106.494 85.7664 106.494 84.3219V7.32193H110V6.10352e-05Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
        <div className='bg-white rounded-[9px] flex flex-col items-center justify-center h-[332px] xsm:h-[300px] dark:bg-[rgba(255,255,255,0.2)]'>
          <svg width="122" height="112" viewBox="0 0 122 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2075 80.5055C19.5508 80.5055 18.8863 80.3783 18.2529 80.111C16.3425 79.3141 15.1095 77.453 15.1095 75.3712V66.3875H7.64173C3.42891 66.3875 0 62.9352 0 58.6913V7.69364C0 3.44968 3.42891 0 7.64173 0H77.5101C81.7229 0 85.1518 3.45228 85.1518 7.69624V58.6939C85.1518 62.9378 81.7255 66.3901 77.5178 66.3901H36.3268L23.8051 79C22.8265 79.9838 21.5287 80.5055 20.2075 80.5055ZM7.64173 5.12909C6.23745 5.12909 5.09535 6.27899 5.09535 7.69364V58.6913C5.09535 60.1059 6.23745 61.2558 7.64173 61.2558H17.6559C19.0628 61.2558 20.2023 62.4031 20.2023 63.8204V75.3686L33.4715 62.006C33.9491 61.5258 34.598 61.2532 35.2729 61.2532H77.5178C78.9195 61.2532 80.0564 60.1033 80.0564 58.6887V7.69364C80.0564 6.27899 78.9143 5.12909 77.5101 5.12909H7.64173Z" fill="#E44C4C" />
            <path d="M101.791 111.615C100.467 111.615 99.1722 111.094 98.1936 110.11L85.6694 97.4975H44.4757C40.2655 97.4975 36.8418 94.0452 36.8418 89.8012V73.6612C36.8418 72.244 37.9813 71.0967 39.3882 71.0967C40.795 71.0967 41.9346 72.244 41.9346 73.6612V89.8012C41.9346 91.2159 43.0741 92.3658 44.4731 92.3658H86.7207C87.3981 92.3658 88.0445 92.6357 88.5221 93.1185L101.791 106.484V94.9329C101.791 93.5157 102.931 92.3684 104.338 92.3684H114.349C115.754 92.3684 116.896 91.2185 116.896 89.8038V38.801C116.896 37.3864 115.754 36.2365 114.349 36.2365H82.6065C81.1996 36.2365 80.0601 35.0892 80.0601 33.6719C80.0601 32.2547 81.1996 31.1074 82.6065 31.1074H114.357C118.57 31.1074 121.999 34.5597 121.999 38.8036V89.8012C121.999 94.0452 118.57 97.4975 114.357 97.4975H106.889V106.484C106.889 108.566 105.656 110.427 103.746 111.224C103.112 111.486 102.448 111.615 101.791 111.615Z" fill="#E44C4C" />
            <path d="M42.5763 42.8112C41.1695 42.8112 40.03 41.6639 40.03 40.2466V32.7113C40.03 31.2941 41.1695 30.1468 42.5763 30.1468H50.6957V19.4058H34.457V24.8567C34.457 26.274 33.3175 27.4213 31.9106 27.4213C30.5038 27.4213 29.3643 26.274 29.3643 24.8567V16.8412C29.3643 15.424 30.5038 14.2767 31.9106 14.2767H53.2421C54.6489 14.2767 55.7884 15.424 55.7884 16.8412V32.7139C55.7884 34.1312 54.6489 35.2785 53.2421 35.2785H45.1227V40.2492C45.1253 41.6613 43.9832 42.8112 42.5763 42.8112Z" fill="#E44C4C" />
            <path d="M42.5794 52.1145C44.3384 52.1145 45.7644 50.6792 45.7644 48.9088C45.7644 47.1383 44.3384 45.7031 42.5794 45.7031C40.8205 45.7031 39.3945 47.1383 39.3945 48.9088C39.3945 50.6792 40.8205 52.1145 42.5794 52.1145Z" fill="#E44C4C" />
            <path d="M105.267 52.2747H92.7944C91.3876 52.2747 90.248 51.1274 90.248 49.7102C90.248 48.2929 91.3876 47.1456 92.7944 47.1456H105.267C106.674 47.1456 107.813 48.2929 107.813 49.7102C107.813 51.1274 106.674 52.2747 105.267 52.2747Z" fill="#E44C4C" />
            <path d="M105.267 66.175H92.7944C91.3876 66.175 90.248 65.0277 90.248 63.6105C90.248 62.1932 91.3876 61.0459 92.7944 61.0459H105.267C106.674 61.0459 107.813 62.1932 107.813 63.6105C107.813 65.0277 106.674 66.175 105.267 66.175Z" fill="#E44C4C" />
            <path d="M105.267 79.96H54.5884C53.1815 79.96 52.042 78.8127 52.042 77.3954C52.042 75.9782 53.1815 74.8309 54.5884 74.8309H105.267C106.674 74.8309 107.813 75.9782 107.813 77.3954C107.813 78.8127 106.674 79.96 105.267 79.96Z" fill="#E44C4C" />
          </svg>
          <h1 className='text-custom-[20px] font-bold mt-[54px]'>LOREM IPSUM</h1>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='h-[48px] w-[180px] bg-primary rounded-[9px]' onClick={() => navigate('/matches/allMatches')}>Next</button>
      </div>
    </div>
  )
}

export default Matches
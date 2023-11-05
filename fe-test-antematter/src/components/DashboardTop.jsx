import React from "react";
import avatar from "../images/avatar image.png"

function DashboardTop(){
    return (
        <div className='px-[3rem] py-[1rem] flex justify-between'>

                    <div className='px-[12px] py-[3px] h-[36px] flex gap-2 bg-grey_level_2 rounded-[14px] hover:scale-110'>

                        <div className='bg-[#ECEFF0] w-[24px] h-[24px] rounded-full m-auto'>
                            <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 18" fill="none">
                                <path d="M5.99839 0L5.87762 0.410199V12.3122L5.99839 12.4327L11.523 9.16698L5.99839 0Z" fill="#343434"/>
                                <path d="M5.99836 0L0.473572 9.16698L5.99836 12.4327V6.65576V0Z" fill="#8C8C8C"/>
                                <path d="M5.99836 13.4786L5.9303 13.5616V17.8012L5.99836 17.9999L11.5264 10.2146L5.99836 13.4786Z" fill="#3C3C3B"/>
                                <path d="M5.99836 17.9999V13.4786L0.473572 10.2146L5.99836 17.9999Z" fill="#8C8C8C"/>
                                <path d="M5.99835 12.4326L11.523 9.16698L5.99835 6.65576V12.4326Z" fill="#141414"/>
                                <path d="M0.473572 9.16698L5.99836 12.4326V6.65576L0.473572 9.16698Z" fill="#393939"/>
                            </svg>

                        </div>

                        <p className='text-[14px] font-sfregular text-[#FFF] m-auto'>
                        ETH/USDT
                        </p>

                        <p className='text-[14px] font-sfregular text-[#0AC18E] m-auto'>
                        1137.62 +2.62%↑
                        </p>

                    </div>

                    <div className='px-[12px] py-[3px] h-[36px] flex gap-2 bg-grey_level_2 rounded-[14px] hover:scale-110'>
                        <img src={avatar} className='w-[24px] h-[24px] rounded-full m-auto object-cover hover:scale-150'>
                        </img>

                        <p className='text-[14px] font-sfregular text-[#FFF] m-auto'>
                        zash
                        </p>

                        <div className='w-[1px] h-[11px] bg-[#fff] m-auto'>

                        </div>
                        <p className='text-[14px] font-sfregular text-[#FFF] m-auto'>
                        User ID: 11026666
                        </p>
                    </div>
                </div>
    );
  };
  
  export default DashboardTop;
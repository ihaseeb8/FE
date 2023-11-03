import React from 'react';
import brandlogo from '../assets/brand logo.svg'

function Dashboard() {
    return ( 
        <div className='flex w-[1440px] m-auto bg-[#05070A]'>

            <div className='h-screen w-[108px] flex flex-column' >
                <img src={brandlogo} className='h-[86px] w-[86px] bg-blue-500 mx-auto'></img>
            </div>
            <div className='bg-[#282A31] w-[1332px] rounded-s-[32px]'>
                
            </div>
        </div>
     );
}

export default Dashboard;
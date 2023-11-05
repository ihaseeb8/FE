import React, { useEffect, useState } from 'react';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import { Metaplex } from '@metaplex-foundation/js';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import ItemCard from './ItemCard';
import Sidebar from './Sidebar';
import DashboardTop from './DashboardTop';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const mx = Metaplex.make(connection);

function Dashboard() {
    
    // const fetchNFTs = async () => {
    //     try {
    //        const list = await mx.nfts().findAllByOwner({ owner: new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X")});
    //        console.log(list)
    //     } catch (e) {
    //        console.error(e);
    //     }
    //  };

    //  useEffect(() => {
    //     fetchNFTs();
    // }, []);

    // the metaflex end point doesnt work for me for some reason, i hae tried many ways so i am just using dummy data

    const [nfts, setNfts] = useState([
        { image: image1, name: 'zombies #7919', owner: '72UGr...YdD', mint: '72UGr...YdD', token: '72UGr...YdD' },
        { image: image2, name: 'Cyberlinx #2551', owner: '72UGr...YdD', mint: '72UGr...YdD', token: '72UGr...YdD' },
        { image: image3, name: 'The Eyedeas #1029', owner: '72UGr...YdD', mint: '72UGr...YdD', token: '72UGr...YdD' },
      ])

    const [poistionIndexes, SetPositionIndexes] = useState([0,1,2])

    const handleRight = () => {
        SetPositionIndexes((prevIndexes) => {
            const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex+1)%3)
            return updateIndexes
        })
    }

    const handleLeft = () => {
        SetPositionIndexes((prevIndexes) => {
            const updateIndexes = prevIndexes.map((prevIndex) => {
                if (prevIndex === 0) {
                    return 2;
                } else {
                    return prevIndex - 1;
                }
            });
            return updateIndexes;
        });
    };

    const positions = [
        'center',
        'left',
        'right',
    ]
    
    const positionVariants = {
        center : {x:'0%', scale:1, zindex: 2},
        left : {x:'100%', scale:1, zindex: 1},
        right : {x:'200%', scale:1, zindex: 1},
    }

    return ( 
        <div className='flex w-[70%] h-screen box-border m-auto bg-[#05070A]'>

            <Sidebar></Sidebar>


            <div className='bg-[#282A31] w-[100%] rounded-s-[32px] flex flex-col'>
                
                <DashboardTop></DashboardTop>
                

                <div className='px-[3em] py-[0.5em] flex justify-between'>

                    <p className='text-[1.75rem] font-sfregular text-[#FFF] font-[500]'>
                        Dashboard
                    </p>

                    <div className='bg-grey_level_1 w-[40px] h-[40px] rounded-[14px] my-auto hover:scale-125 hover:cursor-pointer'>
                        <svg className='m-auto h-[100%] hover:animate-spin' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_1011)">
                            <path d="M4.04999 11C4.30287 9.07074 5.25021 7.29978 6.71467 6.01862C8.17912 4.73747 10.0603 4.03395 12.0061 4.03977C13.9518 4.04559 15.8287 4.76034 17.2855 6.05023C18.7423 7.34012 19.679 9.11672 19.9204 11.0475C20.1617 12.9782 19.6911 14.9307 18.5967 16.5395C17.5022 18.1483 15.859 19.3031 13.9745 19.7877C12.0901 20.2723 10.0936 20.0534 8.35886 19.1722C6.6241 18.2909 5.26999 16.8077 4.54999 15M4.04999 20V15H9.04999" stroke="#808287" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.9212 11.0474C20.1625 12.9782 19.6919 14.9307 18.5975 16.5395C17.503 18.1483 15.8598 19.303 13.9753 19.7876C12.0909 20.2722 10.0944 20.0534 8.35966 19.1722C6.6249 18.2909 5.27078 16.8076 4.55078 15M4.05078 20V15H9.05078" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1011">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                    </div>
                </div>

                <div className='pt-[2.5em] px-[3em] flex-col'>
                    <div className='w-[100%] h-[65vh] m-auto flex justify-between'>
        
                        {nfts.map((nft, index) => (

                                <motion.div 
                                    animate={positions[poistionIndexes[index]]}
                                    variants={positionVariants}
                                    transition={{duration: 0.5}}
                                    style={{width: '20%', position: "absolute"}}
                                    >
                                    <ItemCard key={index} image={nft.image} name={nft.name} owner={nft.owner} mint={nft.mint} token={nft.token} />
                                </motion.div>
                        ))}


                    </div>

                    <div className='mt-[20px] mx-auto h-[54px] w-[25%] bg-[#000] px-[10px] rounded-full flex justify-between'>
                        <button onClick={handleRight}  className='button-left bg-grey_level_2 w-[40px] h-[40px] rounded-full my-auto hover:scale-110'>
                            <svg className='m-auto h-[100%]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M7.24081 14.1768L21.1167 0.33925C21.5713 -0.113854 22.3074 -0.113092 22.7612 0.341594C23.2148 0.796221 23.2136 1.53268 22.7589 1.98614L9.70894 15.0001L22.7594 28.0139C23.214 28.4674 23.2152 29.2034 22.7617 29.6581C22.5342 29.886 22.2361 30 21.9381 30C21.6408 30 21.3439 29.8868 21.1168 29.6604L7.24081 15.8233C7.02184 15.6054 6.89897 15.309 6.89897 15.0001C6.89897 14.6911 7.0222 14.395 7.24081 14.1768Z" fill="white"/>
                            </svg>                      
                        </button>
                        
                        <button onClick={handleLeft} className='button-right bg-grey_level_2 w-[40px] h-[40px] rounded-full my-auto hover:scale-110'>
                            <svg className='m-auto h-[100%]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                            <path d="M22.7592 14.1768L8.88331 0.33925C8.42868 -0.113854 7.69263 -0.113092 7.23876 0.341594C6.78525 0.796221 6.78642 1.53268 7.24111 1.98614L20.2911 15.0001L7.24064 28.0139C6.78601 28.4674 6.78484 29.2034 7.23829 29.6581C7.46581 29.886 7.76388 30 8.06194 30C8.35925 30 8.65614 29.8868 8.88325 29.6604L22.7592 15.8233C22.9782 15.6054 23.101 15.309 23.101 15.0001C23.101 14.6911 22.9778 14.395 22.7592 14.1768Z" fill="white"/>
                            </svg>                      
                        </button>

                    </div>

                </div>

            </div>
        </div>
     );
}

export default Dashboard;
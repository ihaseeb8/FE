import React from 'react';

const ItemCard = ({ image, name , owner, mint,token  }) => {
  
  return (
    <div className='w-[94%] bg-[#000] rounded-[1.25rem] p-[12px] flex flex-col  '>

      <div className='flex justify-between'>

        <h2 className='font-sfregular text-[#FFF] px-[0.5em] py-[0.25em]'>{name}</h2>

        <svg className='my-auto mx-[8px] hover:scale-150 hover:cursor-pointer hover:opacity-[1] opacity-[0.6]' xmlns="http://www.w3.org/2000/svg" width="15" height="3" viewBox="0 0 15 3">
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 1.89782 0.158035 2.27936 0.43934 2.56066C0.720644 2.84196 1.10218 3 1.5 3C1.89782 3 2.27936 2.84196 2.56066 2.56066C2.84196 2.27936 3 1.89782 3 1.5C3 1.10218 2.84196 0.720644 2.56066 0.43934C2.27936 0.158035 1.89782 0 1.5 0C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5ZM7.5 3C7.10218 3 6.72064 2.84196 6.43934 2.56066C6.15803 2.27936 6 1.89782 6 1.5C6 1.10218 6.15803 0.720644 6.43934 0.43934C6.72064 0.158035 7.10218 0 7.5 0C7.89782 0 8.27936 0.158035 8.56066 0.43934C8.84196 0.720644 9 1.10218 9 1.5C9 1.89782 8.84196 2.27936 8.56066 2.56066C8.27936 2.84196 7.89782 3 7.5 3ZM13.5 3C13.1022 3 12.7206 2.84196 12.4393 2.56066C12.158 2.27936 12 1.89782 12 1.5C12 1.10218 12.158 0.720644 12.4393 0.43934C12.7206 0.158035 13.1022 0 13.5 0C13.8978 0 14.2794 0.158035 14.5607 0.43934C14.842 0.720644 15 1.10218 15 1.5C15 1.89782 14.842 2.27936 14.5607 2.56066C14.2794 2.84196 13.8978 3 13.5 3Z" fill="white"/>
          </g>
        </svg>
      </div>

      <img className='w-[100%] mb-[1.125em] hover:animate-wiggle' src={image} alt={name} />

      <div className='rounded-[0.75em] bg-grey_level_2 p-[0.5em] flex flex-col gap-[12px]'>
        
        <div className='bg-grey_level_1 rounded-[8px] px-[10px] py-[8px] flex justify-between'>
          <p className='text-[#FFF] font-[14px] font-normal'>Owner</p>
          <div className='flex'>
            <div className='w-[0.5px] h-[12px] bg-[#fff] opacity-20 mr-[12px] m-auto'></div>
            <p className='text-[#FFF] font-[14px] font-normal text-opacity-40'>{owner}</p>
          </div>
        </div>

        <div className='bg-grey_level_1 rounded-[8px] px-[10px] py-[8px] flex justify-between'>
          <p className='text-[#FFF] font-[14px] font-normal'>Mint address</p>
          <div className='flex'>
            <div className='w-[0.5px] h-[12px] bg-[#fff] opacity-20 mr-[12px] m-auto'></div>
            <p className='text-[#FFF] font-[14px] font-normal text-opacity-40'>{mint}</p>
          </div>
        </div>

        <div className='bg-grey_level_1 rounded-[8px] px-[10px] py-[8px] flex justify-between'>
          <p className='text-[#FFF] font-[14px] font-normal'>Token address</p>
          <div className='flex'>
            <div className='w-[0.5px] h-[12px] bg-[#fff] opacity-20 mr-[12px] m-auto'></div>
            <p className='text-[#FFF] font-[14px] font-normal text-opacity-40'>{token}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ItemCard;

import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

import { RiChat3Line } from "react-icons/ri";
import { useSession } from 'next-auth/react';

function Post({id, username, userImg, img, caption}) {
  const {data: session} = useSession();
   return (
    <div className='  bg-white my-7 border rounded-sm'>

        {/* header */}
        <div className='flex items-center p-5 '>
            <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={userImg} alt="" />
            <p className='flex-1 font-normal'>{username}</p>
            <DotsHorizontalIcon className='h-5' />
            </div>
        
        {/* img */}
        <img className=' object-cover w-full' src={img} alt="" />


        {/* Buttons */}

        {session && (
           <div className=' flex justify-between px-4 pt-4'>
           <div className='flex space-x-4'>
            <HeartIcon className='btn' />
            
             <RiChat3Line className='h-7 w-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out' />
              <PaperAirplaneIcon className='btn rotate-90' />
              
            </div>
            <BookmarkIcon className='btn' />
           </div>
            
        ) }
        
         {/* caption */}
         <p className=' p-5  truncate'>
         <span className='mr-1 font-semibold'>{username}</span>
          {caption}
         </p>
         {/* input box */}
         <form className='flex items-center p-4' >
             <EmojiHappyIcon className='btn' />
             <input type="text" placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none' />
             <button className=' font-light text-blue-400'>Post</button>
         </form>
      </div>
  )
}

export default Post
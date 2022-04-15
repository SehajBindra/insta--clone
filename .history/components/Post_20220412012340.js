import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

function Post({id, username, userImg, img, caption}) {
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
        <div>
         <HeartIcon className='btn' />
          <ChatIcon />
        </div>
    </div>
  )
}

export default Post
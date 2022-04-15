import React from 'react'
import {
    BookmarkIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
} from "@heroicons/react/outline"

function Post({id, username, userImg, img, caption}) {
  return (
    <div>

        {/* header */}
        <div>
            <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={userImg} alt="" />
            <p>{username}</p></div>
            <DotsHorizontalIcon className='h-5' />
        {/* img */}

    </div>
  )
}

export default Post
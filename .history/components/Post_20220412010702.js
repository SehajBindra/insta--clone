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
            <img src={userImg} alt="" />
            <p>{username}</p></div>
            <DotsHorizontalIcon className='h-5' />
        {/* img */}

    </div>
  )
}

export default Post
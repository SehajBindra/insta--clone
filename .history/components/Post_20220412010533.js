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
        <h1>I am Post</h1>

        {/* header */}
        <div>
            <img src="" alt="" />
            <p>{username}</p></div>
        {/* img */}

    </div>
  )
}

export default Post
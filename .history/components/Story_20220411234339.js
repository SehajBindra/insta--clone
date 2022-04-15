import React from 'react'

function Story({img, username }) {
  return (
    <div>
        <img className=' h-16 w-16 rounded-full p-[1.25px] border-red-500 border-2 object-contain cursor-pointer' src={img} alt="" />
        <p className=' text-xs w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story
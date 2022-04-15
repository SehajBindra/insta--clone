import React from 'react'

function Story({img, username }) {
  return (
    <div>
        <img className=' h-14 w-14 rounded-full' src={img} alt="" />
        <p>{username}</p>
    </div>
  )
}

export default Story
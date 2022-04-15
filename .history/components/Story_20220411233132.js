import React from 'react'

function Story({image , username }) {
  return (
    <div>
        <img src={image} alt="" />
        <p>{username}</p>
    </div>
  )
}

export default Story
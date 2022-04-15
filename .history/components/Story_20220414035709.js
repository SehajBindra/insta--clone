import React from 'react'

function Story({img, username }) {
  return (
    <div>
        <img className=' h-14 w-16 rounded-full p-[1.25px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt="" />
        <div className=" absolute -top-1 -right-2  text-xs w-5 h-5 bg-red-500  rounded-full flex items-center  justify-center animate-none text-white ">8</div>
           
        <p className=' text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story
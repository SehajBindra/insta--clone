import React from 'react'
import Image from 'next/image';
function Header() {
  return (
    <div><h1>I am Header</h1>
    
    <div className='relative w-24 h-24'>
        <Image src= "https://links.papareact.com/ocw" layout="fill" />
    </div>
    
    </div>
  )
}

export default Header
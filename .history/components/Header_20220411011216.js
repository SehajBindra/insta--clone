import React from 'react'
import Image from 'next/image';
function Header() {
  return (
    <div>
    <div className='flex justify-between max-w-6xl '>

    <div className='relative hidden lg:inline-grid w-24 h-24'>
        <Image src= "https://links.papareact.com/ocw" layout="fill" objectFit='contain' />
    </div>
    
    <h1>I am Header</h1>
    </div>
    </div>
  )
}

export default Header
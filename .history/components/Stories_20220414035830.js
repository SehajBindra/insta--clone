import {  useEffect, useState } from 'react'
import faker from '@faker-js/faker'  ;
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
    const {data: session  }  = useSession();
    const [suggestions, SetSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_ , i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        console.log(suggestions);
        SetSuggestions(suggestions);
    }, [])
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin  scrollbar-thumb-black '>
        {session && (
            <><Story img={session.user.image} username={session.user.username} /><div className=" absolute -top-1 -right-2  text-xs w-5 h-5 bg-red-500  rounded-full flex items-center  justify-center animate-none text-white ">8</div></>
            
        )}
        {suggestions.map(profile => (
            <Story key={profile.id} img={profile.avatar} username={profile.username} />
        ))}
    </div>
  )
}

export default Stories
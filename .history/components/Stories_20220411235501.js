import { Profiler, useEffect, useState } from 'react'
import faker from '@faker-js/faker'  ;
import Story from './Story';

function Stories() {
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
        {suggestions.map(profile => (
            <Story key={profile.id} img={profile.avatar} username={profile.username} />
        ))}
    </div>
  )
}

export default Stories
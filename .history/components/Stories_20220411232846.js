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
    <div>
        {suggestions.map(profile => (
            <Story key={profile.id} img={profile.avatar} username={profile.username} />
        ))}
    </div>
  )
}

export default Stories
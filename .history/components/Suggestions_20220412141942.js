import faker from '@faker-js/faker';
import React, { useEffect, useState } from 'react'

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) =>(
            {
                ...faker.helpers.contextualCard(),
                id: i,
            }
        ));
        setSuggestions(suggestions); 
    }, [])
  return (
    <div className=' mt-10 ml-14'>
     <div className=' flex justify-between text-sm mb-5'>
         <h3 className=' font-bold capitalize  text-sm  text-gray-400'>Suggestions for You</h3>
         <button className=' text-sm cursor-pointer text-gray-600 font-semibold'>See all</button>
     </div>


     {
         suggestions.map(profile => (
             <div className=' flex items-center justify-between mt-3' key={profile.id}>
                 <img className=' w-10 h-10 rounded-full border p-[2px]' src={profile.avatar} alt="" />
                <div>
                    <h2>{profile.username}</h2>
                </div>
             </div>
         ))
     }
    </div>
  )
}

export default Suggestions
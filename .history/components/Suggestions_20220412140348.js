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
     <div>
         <h3 className=' flex justify-between text-sm mb-5'>Suggestions for You</h3>
         <button>See all</button>
     </div>
    </div>
  )
}

export default Suggestions
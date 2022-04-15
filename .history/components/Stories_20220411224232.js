import { useEffect } from 'react'
import faker from '@faker-js/faker'  ;

function Stories() {
    useEffect(() => {
        const suggestions = [...Array(20)].map((_ , i) => ({
            ...faker.Helpers.contextualCard(),
            id: i,
        }));
        console.log(suggestions);
    }, [])
  return (
    <div>Stories</div>
  )
}

export default Stories
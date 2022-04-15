import React from 'react'
import Stories from './Stories'


function Feed() {
  return (
    <main className=' grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto'>
        <section>
        
        <Stories />
        {/* posts */}
        </section>

        <section>

       {/* mini profile */}
         {/* suggestions */}
        </section>
    </main>
  )
}

export default Feed
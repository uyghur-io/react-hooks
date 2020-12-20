import React, { useEffect, useState } from 'react'


export default function useEffectExample() {
    return (
        <div>
            <Example />
        </div>
    )
}

function Example() {
   const [count, setCount] = useState(0)

   useEffect(() => {
       document.title = `You Clicked ${count} times`
   })
   
   return (
       <div>
           <h3>
               useEffect
           </h3>
           <p>You clicked {count} times.</p>
           <button onClick={ () => setCount(count + 1) } >Click</button>
       </div>
   )
}
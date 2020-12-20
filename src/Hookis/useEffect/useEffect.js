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
   const [dir, setDir] = useState("ltr")

   // console.log(document.location.href)

   useEffect(() => {
    document.title = `You Clicked ${count} times`
   })

   useEffect(() => {
     document.dir = `${dir}`
    // console.log(a)
})
   
   return (
       <div>
           <h3>
               useEffect
           </h3>
           <p>Click button to change html API document.title .</p>
           <button onClick={ () => setCount(count + 1) } >Click</button>
           <p>Click button to change html API document.dir .</p>
           <button onClick={ () => setDir("rtl") }>Click</button>
       </div>
   )
}
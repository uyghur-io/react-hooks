import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code1 = `import React, { useEffect, useState } from 'react'

function Example() {
    const [count, setCount] = useState(0)
  
    useEffect(() => {
     document.title = \`You Clicked  \${count} times\`
    })
    
    return (
        <div>
            <p>Click button to change html API document.title .</p>
            <button onClick = { () => setCount(count + 1) } >Click</button>
        </div>
    )
    `

    const code2 = `const [dir, setDir] = useState("ltr")

    useEffect(() => {
        document.dir = \`\${dir}\`
       // console.log(a)
       })`
 
 export default function Example() {
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
 
     useEffect(() => {
     console.log('just excuit frist time')
     }, [])
    
    return (
        <div>
            <SyntaxHighlighter language="javascript" style={tomorrowNight}>
             {code1}
            </SyntaxHighlighter>
            <p>Click button to change html API document.title .</p>
            <button onClick={ () => setCount(count + 1) } >Click</button>
            <SyntaxHighlighter language="javascript" style={tomorrowNight}>
             {code2}
            </SyntaxHighlighter>
            <p>Click button to change html API document.dir .</p>
            <button onClick={ () => setDir("rtl") }>Click</button>
            <p>Only excuit on first time !</p>
            <SyntaxHighlighter language="javascript" style={tomorrowNight}>
             {`useEffect(() => {
     console.log('just excuit frist time')
 }, [])`}
             </SyntaxHighlighter>
        </div>
    )
 }
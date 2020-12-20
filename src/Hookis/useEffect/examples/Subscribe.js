import React, { useState } from 'react'

export default function Subscribe() {
    const [userID, setUserID] = useState(48136949)
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(0)

    return (
        <>
           <div>
            <p>
            users ID: {userID}
            </p>
            <p>
                Subscribe : {count} 
                <button onClick={ () => setCount(count+1) }>Follow</button>
            </p>
            {show ? <p>true</p> : <p>false</p> }
            <button onClick = { () => setShow(!show) }>Turn On/Off</button>
            <button onClick = { () => setUserID(userID + 1) }>Change userID</button>
           </div>
        </>
    )
}

import React, { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `import React, { useState, useEffect } from 'react'

export default function GetGithubUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

    return (
        <div>
            <p>
                {users.map(user =>(
                    <div key={user.id} className="Card">
                        <h5>{user.login}</h5>
                    </div>
                ))}
            </p>
        </div>
    )
}
`

export default function GetGithubUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

    return (
        <div>
            <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                    {code}
            </SyntaxHighlighter>
            <p> Result : </p><hr/>
            <p>
                {users.map(user =>(
                    <div key={user.id} className="Card">
                        <h5>{user.login}</h5>
                    </div>
                ))}
            </p>
        </div>
    )
}

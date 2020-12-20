import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const code = `class Example2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    // excuit first time
    componentDidMount() {
        document.title = \`You clicked \${this.state.count} time, (fist time)\`
    }

    // excuit ever time
    componentDidUpdate() {
        document.title = \`You clicked \${this.state.count}\`
    }

    render() {
        return (
            <div>
                <p>Click button to change html API document.title use class + componentDidMount</p>
                <button onClick = { () => this.setState({ count : this.state.count + 1 }) } >Click</button>
            </div>
        )
    }
}`

class ExampleOld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    // excuit first time
    componentDidMount() {
        document.title = `You clicked ${this.state.count} time, (fist time)`
    }

    // excuit ever time
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count}`
    }

    render() {
        return (
            <div>
                <p>Click button to change html API document.title use class + componentDidMount</p>
                <button onClick = { () => this.setState({ count : this.state.count + 1 }) } >Click</button>
                <p>code : </p>
                <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                    {code}
                </SyntaxHighlighter>
            </div>
        )
    }
}

export default ExampleOld
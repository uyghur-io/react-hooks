import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Example from "../useEffect/examples/Example";
import ExampleOld from "../useEffect/examples/ExampleOld";
import GetGithubUser from '../useEffect/examples/GetGithubUser'

export default function useEffectExample() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/useEffect" exact component={Home}/>
                    <Route path="/useEffect/Example" component={Example}/>
                    <Route path="/useEffect/ExampleOld" component={ExampleOld}/>
                    <Route path="/useEffect/GetGithubUser" component={GetGithubUser}/>
                </Switch>
            </Router>
        </>
    )
}

const Home = () => (
    <div>
      <h3>
        useEffect
      </h3>
      <Link to="/useEffect/Example"><li>Example</li></Link>
      <Link to="/useEffect/ExampleOld"><li>Example Old</li></Link>
      <Link to="/useEffect/GetGithubUser"><li>Get Github Users</li></Link>
    </div>
  )
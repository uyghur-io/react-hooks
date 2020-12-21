import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Example from "../useEffect/examples/Example";
import ExampleOld from "../useEffect/examples/ExampleOld";
import GetGithubUser from '../useEffect/examples/GetGithubUser'
import Subscribe from '../useEffect/examples/Subscribe'
import Subscribe2 from '../useEffect/examples/Subscribe2'

export default function useEffectExample() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/useEffect" exact component={Home}/>
                    <Route path="/useEffect/Example" component={Example}/>
                    <Route path="/useEffect/ExampleOld" component={ExampleOld}/>
                    <Route path="/useEffect/GetGithubUser" component={GetGithubUser}/>
                    <Route path="/useEffect/Subscribe" component={Subscribe}/>
                    <Route path="/useEffect/Subscribe2" component={Subscribe2}/>
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
      <Link to="/useEffect/Subscribe"><li>Subscribe</li></Link>
      <Link to="/useEffect/Subscribe2"><li>Subscribe2</li></Link>
    </div>
  )
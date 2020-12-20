import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import useEffectExample from './Hookis/useEffect/useEffect'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/useEffect" component={useEffectExample}/>
        </Switch>
      </Router>
    </>
  );
}

const Home = () => (
  <div>
    <h3>
      React Hooks
    </h3>
    <Link to="/useEffect" ><li>useEffect</li></Link>
  </div>
)

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'



function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/React-Portfolio/'>
            <Home />
          </Route>
          <Route path='/React-Portfolio/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/React-Portfolio/Contact'>
            <Contact />
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

export default App;

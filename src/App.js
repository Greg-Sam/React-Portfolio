import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

export default App;

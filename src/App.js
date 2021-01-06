import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Main from './components/main.component';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    // Get request to api providing data
    fetch('localhost:8080/api/reading/1')
      .then(response =>response.json)
      .then(data = test)
  })
  return (
    <div>
    </div>
  )}


export default App;

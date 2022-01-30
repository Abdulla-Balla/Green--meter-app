import React from "react"
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Main from './components/main.component';

const Console = prop => (
  console[Object.keys(prop)[0]](...Object.values(prop))
  ,null // ➜ React components must return something 
)

function App() {
  const [api, setApi] = React.useState(null);
  React.useEffect(()=>{
    // Get request to api providing data
    fetch('/api/reading/1')
      .then(response =>response.json())
      .then(data=> setApi(data)
      )
    },[]);
  return (
    <div>
      <p>Hello {api.value}</p>
    </div>
  );
}


export default App;

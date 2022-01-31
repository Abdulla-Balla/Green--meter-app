import React from "react"
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Current from './components/Current'

const Console = prop => (
  console[Object.keys(prop)[0]](...Object.values(prop))
  ,null // ➜ React components must return something 
)

function App() {
  const [api, setApi] = React.useState("");
  React.useEffect(()=>{
    // Get request to api providing data
    fetch('/api/reading/1')
      .then(response =>
        (response.json())
      )
      .then(data => setApi(data))
      .catch((err) => {console.error(err)})
    },[]);
  return (
    <div>
      <p>Hello</p>
      <p>{api.ppm}</p>
      <Current/>
    </div>
  );
}


export default App;

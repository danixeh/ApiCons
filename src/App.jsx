import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'



function App() {
  const [user, setUser] = useState()
  useEffect(() => {
  //  prefer use URL const
    const URL = 'https://randomuser.me/api/'       
    axios.get(URL)
      .then(res => setUser(res.data.results[0]))
      // estas spm funciones callback. para le caso de res (puede ser cualqueir cosa"
      // ese es el parametro para este caso RES wath means Response )
     
    // el json es sincrono per hay informaicon que se demora ne llegar, si la informacion llega 
    // `correctly , we use ".then" a diferencia del fletch , aqui no hay necesidad de transformasr a json nasa
},[])
  console.log(user?.email)
  // ? encadenamiento opcional
  return (
    <div className="App">
  
      
    </div>
  )
}

export default App

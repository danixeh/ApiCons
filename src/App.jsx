import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import JavascriptLearn from './components/JavascriptLearn'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // const [user, setUser] = useState()
  // useEffect(() => {
  //   //  prefer use URL const
  //   const URL = 'https://randomuser.me/api/'
  //   axios.get(URL)
  //     .then(res => setUser(res.data.results[0]))
  //   // estas spm funciones callback. para le caso de res (puede ser cualqueir cosa"
  //   // ese es el parametro para este caso RES wath means Response )
     
  //   // el json es sincrono per hay informaicon que se demora ne llegar, si la informacion llega 
  //   // `correctly , we use ".then" a diferencia del fletch , aqui no hay necesidad de transformasr a json nasa
  // }, [])
  

  // function AppTwo() {
  //   const [userTwo, setUserTwo] = useState()
    
  //   useEffect(() => {
  //     const URLIMG = 'https://api.pexels.com/v1/';
  //     // axios.get(URLIMG)
  //     // .then(res => setUserTwo(resTwo.data.results[0]
  //     console.log(URLIMG);
  //           }, [])
  
  //   // ? encadenamiento opcional
    
    
    
    return (
      <div className="App">
        <li>
          <Header />
          <Header />
          <Header />
          <Header />
          <Header />  
        </li>
      </div>
    )
  }


export default App

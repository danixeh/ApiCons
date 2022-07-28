import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import JavascriptLearn from '../components/JavascriptLearn'



function Header() {
  const [user, setUser] = useState()
  useEffect(() => {
    //  prefer use URL const
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)
      .then(res => setUser(res.data.results[0]))
      .catch()
    // estas spm funciones callback. para le caso de res (puede ser cualqueir cosa"
    // ese es el parametro para este caso RES wath means Response )
     
    // el json es sincrono per hay informaicon que se demora ne llegar, si la informacion llega 
    // `correctly , we use ".then" a diferencia del fletch , aqui no hay necesidad de transformasr a json nasa
  }, [])
  

  // function HeaderTwo() {
  //   const [userTwo, setUserTwo] = useState()
    
  //   useEffect(() => {
  //     const URLIMG = 'https://api.pexels.com/v1/';
  //     // axios.get(URLIMG)
  //     // .then(res => setUserTwo(resTwo.data.results[0]
  //     console.log(URLIMG);
  //           }, [])
  
  //   // ? encadenamiento opcional
    
    console.log(user);
    
    return (
      <div className="Header">
        <div className="card">          
          <img src={user?.picture.thumbnail}   alt="" />         
           <div className="card-body">
              <h2 className="card-title">{user?.name.first}</h2>
              <h6 className="card.sub.title">From {user?.location.city}</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
      
    )
  }


export default Header

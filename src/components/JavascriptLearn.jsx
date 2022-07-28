
import React, { useState } from 'react'
import ReactDOM from 'react-dom';




const JavascriptLearn = () => {
    const [number, setNumber] = useState(0)

    let count = 0
 
    js(() => {
     
        document.getElementById("count.el").innerText = 3 
        },[])

  return (
      <div>
          JavascriptLearn
        
          <h1>People entered:</h1>
          <h2 id="count.el">{js}</h2>

   
     
      
      </div>

    
  )


}




export default JavascriptLearn
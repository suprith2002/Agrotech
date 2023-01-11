import React from 'react'
import { useContext , useEffect} from "react";
import noteContext from '../context/noteContext';

const AboutUs = () => {
    const a = useContext(noteContext)
    // useEffect(() => {
    //   a.update()
    
      
    // }, [])
    
  return (
    <div>
      <h2>Created By</h2>
      <h1> Shreesha Ramachandra Hegde </h1>
                  <h3>And</h3>
                  <h1>Suprith Korishettar</h1>
         {/* {a.state.name} Ivaru {a.state.class} */}

    </div>
  )
}

export default AboutUs
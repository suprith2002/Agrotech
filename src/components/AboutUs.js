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
      <h2 className='tw-text-4xl tw-text-red-600'>Created By</h2>
      <h1 className='tw-text-7xl tw-text-purple-600'> Shreesha Ramachandra Hegde </h1>
                  <h3 className='tw-text-4xl tw-text-red-600'>And</h3>
                  <h1 className='tw-text-7xl tw-text-purple-600'>Suprith Revanasiddappa Korishettar</h1>
         {/* {a.state.name} Ivaru {a.state.class} */}

    </div>
  )
}


export default AboutUs
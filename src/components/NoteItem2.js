import React from 'react'
import Tractor from "./Tractor.jpg"
import Jcb from "./JCB.jpg"
import Tiller from "./Tiller.jpg"
import pille from "./pille bored.jpg"
import { useContext, useRef, useState } from "react";


const NoteItem2 = (props) => {
    const {note, updateOrder} =props
    // const [src, setsrc] = useState("")
    
    // switch(note.tag){
    //     case "Personal": setsrc("/static/media/hoho.b7b351e7c24a2fe22110.jpg");
    //     break;
    //     case "Hehe": setsrc("/static/media/ho.342535ffa9f16f54d7f0.jpg");
    //     break;
      
    // }
 
    
  return (
    <>
   
    
        
        <div className="card col-md-5  my-3 tw-mx-auto  cardguru" >
        <h5 className="card-title tw-text-2xl tw-font-semibold tw-my-2 tw-text-purple-600">{note.title}</h5>
  <div className='tw-mx-2'><ul className='tw-flex tw-justify-center '><img src={(note.tag == "Tractor")?Tractor:((note.tag == "Jcb")?Jcb:((note.tag == "Tiller")?Tiller:((note.tag == "pille bored") && pille )))} width="200" className="tw-rounded-full" alt="tamma"/></ul></div>
  <div className="card-body">
    <p>deva</p>
    <p className='tw-text-xl tw-text-violet-600'>{note.tag}</p><br/>

    <p className="card-text tw-mx-2 tw-border-2 tw-border-purple-600 tw-border-dotted">{note.description}</p>
   
    <p className='tw-mx-2 tw-my-3'>{(note.order=="Hehe")?<div className='tw-relative'>Available<div className='tw-bg-green-600 tw-h-3 tw-w-3 tw-rounded-full tw-absolute tw-top-1 tw-left-80'></div><div className='tw-bg-green-900 tw-h-3 tw-w-3 tw-rounded-full tw-absolute tw-top-1 tw-left-80 tw-animate-ping'></div></div>:<div className='tw-relative'>Not Available<div className='tw-bg-red-600 tw-h-3 tw-w-3 tw-rounded-full tw-absolute tw-top-1 tw-left-80'></div></div>}</p>
    {(note.order !== "Hehe")?"":<button onClick={()=>{updateOrder(note)}} ><i className='fa fa-edit mx-2'></i></button>}
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  {/* {console.log(img2)} */}
</div>
   
    </>
  )
}

export default NoteItem2
import React from 'react'
import img from "./hoho.jpg"
import img2 from "./ho.jpg"
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
    <div>
    
        
        <div className="card col-md-5 mx-3 my-3" >
  <img src={(note.tag == "Tractor")?img:((note.tag == "jcb") && img2)} width="200" className="" alt="tamma"/>
  <div className="card-body">
    <p>deva</p>
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p>{note.tag}</p><br/>
    <p>{(note.order=="Hehe")?"No Order":note.order}</p>
    {(note.order !== "Hehe")?"":<button onClick={()=>{updateOrder(note)}} ><i className='fa fa-edit mx-2'></i></button>}
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  {/* {console.log(img2)} */}
</div>
    </div>
    </>
  )
}

export default NoteItem2
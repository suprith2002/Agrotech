import React, { useState } from 'react'
import { useContext } from "react";
import noteContext from "../context/noteContext";
import Notes from './Notes';


const AddNote = (props) => {
    const context = useContext(noteContext)
    const {addNote} = context;
    const[note, setNote] = useState({title: "", description: "", tag: "", number3: ""})
    const [len, setlen] = useState(":")
    const [redd, setredd] = useState(null)
    const handleClick = (e)=>{
        e.preventDefault()
        if((note.number3.charAt(0) == 6) || (note.number3.charAt(0) == 7) || (note.number3.charAt(0) == 8) || (note.number3.charAt(0) == 9) && (note.number3.length == 10) )
       { 
        setredd({
          color:'black'
        })
        setlen(":")
        addNote(note.title, note.description, note.tag, note.number3);
        props.showAlert("Notes Added Successfully", "success")
      }
        else{
          setredd({
            color:'red'
          })
           setlen(": Should Be 10 Digits And Start With 6 or 7 or 8 or 9")
        }
    }
    const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    
    <div className='px-4'>

        <h2>Add an Equipment</h2><form onSubmit={handleClick}>
    <div className="mb-3">
      <label htmlfor="title" className="form-label" >Your Title</label>
      <input type="text" className="form-control" name='title' id="title" aria-describedby="emailHelp" onChange={onChange} required/>
      <div id="emailHelp" className="form-text">Boom</div>
    </div>
    <div className="mb-3">
      <label htmlfor="description" className="form-label">Description</label>
      <input type="text" className="form-control" name='description' id="description" onChange={onChange} required/>
    </div>
    {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
    </div> */}
       <span style={redd}>Mobile Number {len}</span>  <br/>
         <input type="number" className="form-control" name='number3' id="number3" onChange={onChange} required /><br/>
       <div className="mb-3">
      <label htmlfor="tag" className="form-label">tag</label>
      {/* <input type="text" className="form-control" name='tag' id="tag" onChange={onChange} required/> */}
      <select name="tag" id="tag" onChange={onChange} required >
      <option value="" onChange={onChange} >Select Type</option>
          <option value="Jcb" onChange={onChange} >Jcb</option>

          <option value="Tractor" onChange={onChange}>Tractor</option>
          <option value="Tiller" onChange={onChange} >Tiller</option>
        </select>
    </div>
    <button disabled={note.title.length<5 || note.description.length<5 || note.number3.length<10 || note.number3.length>10 || note.tag.length < 1} type="submit" className="btn btn-primary" >Serisi</button>
  </form></div>
  )
}

export default AddNote
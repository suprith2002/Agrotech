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
            color:'white',
           
          })
           setlen(": Should Be 10 Digits And Start With 6 or 7 or 8 or 9")
        }
    }
    const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    
    <div className='px-4 tw-bg-gradient-to-r tw-from-red-600 tw-via-pink-300 tw-to-rose-600 tw-py-3 tw-my-2 tw-rounded-3xl'>

        <h2 className='tw-text-3xl tw-text-slate-200'>Add an Equipment</h2><form onSubmit={handleClick}>
    <div className="mb-3">
      <label htmlfor="title" className="form-label tw-text-lg tw-text-slate-200 " >Your Title</label>
      <input type="text" className="form-control" name='title' id="title" aria-describedby="emailHelp" onChange={onChange} required/>
      <div id="emailHelp" className="form-text">Boom</div>
    </div>
    <div className="mb-3">
      <label htmlfor="description" className="form-label tw-text-lg tw-text-slate-200">Description</label>
      <input type="text" className="form-control" name='description' id="description" onChange={onChange} required/>
    </div>
    {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
    </div> */}
       <span className='tw-text-lg tw-text-slate-200 tw-px-2' style={redd}>Mobile Number {len}</span>  <br/>
         <input type="number" className="form-control tw-my-2" name='number3' id="number3" onChange={onChange} required /><br/>
       <div className="mb-3">
      <label htmlfor="tag" className="form-label tw-text-lg tw-text-slate-200 ">Type</label>
      {/* <input type="text" className="form-control" name='tag' id="tag" onChange={onChange} required/> */}
      <select className='tw-mx-2 tw-text-lg tw-text-slate-200 tw-bg-fuchsia-800 tw-rounded-full tw-px-2 tw-py-2' name="tag" id="tag" onChange={onChange} required >
      <option value="" onChange={onChange} >Select Type</option>
          <option value="Jcb" onChange={onChange} >Jcb</option>

          <option value="Tractor" onChange={onChange}>Tractor</option>
          <option value="Tiller" onChange={onChange} >Tiller</option>
          <option value="pille" onChange={onChange} >pille bored </option>
        </select>
    </div>
    <button disabled={note.title.length<5 || note.description.length<5 || note.number3.length<10 || note.number3.length>10 || note.tag.length < 1} type="submit" className="btn tw-bg-blue-600 berebutton " >Add</button>
  </form></div>
  )
}

export default AddNote
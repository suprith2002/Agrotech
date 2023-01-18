import React, { useRef } from 'react'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = (props) => {
  const[note, setNote] = useState([{id :"", etitle: "", edescription: "", etag: "", enumber3:0}])
  let navigate = useNavigate()
  const [len, setlen] = useState(":")
  const [redd, setredd] = useState(null)

  const handleClick = (e)=>{
    e.preventDefault();
    console.log("Saved Your Changes", note)
    if((note.enumber3.length === 10 ) &&  ((note.enumber3.charAt(0) === 6) || (note.enumber3.charAt(0) === 7) || (note.enumber3.charAt(0) === 8) || (note.enumber3.charAt(0) === 9) ) )
    {  setlen(":")
       editNote(note.id, note.etitle, note.edescription, note.etag, note.enumber3)
    refClose.current.click()
    props.showAlert("Updated Equipment", "success")
    setredd({
      color:'black'
    })
   
  }
    // e.preventDefault();
    // addNote(note.title, note.description, note.tag);
  else{
    // props.showAlert("Number must be atleast 10 digit","danger")
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

  const context = useContext(noteContext)

  const { notes, getnotes, editNote, editorder } = context;
  // const onchange2 = (e)=>{
  //   const newNotes = notes.filter((note)=>{return note.etag==e.target.value})
  //   console.log(newNotes)
  //     setNote(newNotes)
  // }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      getnotes()

    }
    else{
      navigate("/login")
    }



  }, [])
  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id: currentNote._id, etitle: currentNote.title , edescription:currentNote.description, etag:currentNote.tag, enumber3:currentNote.number3})
  }
  const ref = useRef(null);
  const refClose = useRef(null);
  const noorder = (id)=>{
    const b = "Hehe"
    console.log(b)
    let y = window.confirm("do you want to reset Order?")
    if(y){
    nullifyU2(id._id)
    
    editorder(id._id, b)
    props.showAlert("Resetted Order", "success")
    }
    else{
      props.showAlert("Cancelled","danger")
    }
  }

  const nullifyU2 = async(id)=>{
    //API call
    const response = await fetch("http://localhost:5001/api/notes/du2", {
      method: 'PUT',
      headers: {
        "auth-token":sessionStorage.getItem('token'),
        // "auth-token": sessionStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
    const json = response.json();
    //Harry Bhai Method
    // for (let index = 0; index<notes.length;index++){
    //   const element =notes[index];
    
    //   if(element._id === id){
    //     notes[index].title = title;
    //     notes[index].description = description;
    //     notes[index].tag = tag;
    //   }
    //   break;
    // }
    // setNote2(json)
    // getnotes()
//  allnotes("All")

    //my method
  //  const c=  await getnotes();
  //  setNote2(json)


}


  // useEffect(() => {
  //   (async () => {
  //     const usersss = await getnotes();
  //     // setUsers(users);
  //     // return usersss
  //   })();

  //   // return () => {

  //   //   // this now gets called when the component unmounts
  //   // };
  // }, []);


  return (
    <div>
      <div id='ho'>
      <AddNote showAlert={props.showAlert}/> </div>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Equipment</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleClick}>
                <div className="mb-3">
                  <label htmlfor="title" className="form-label">Your Title</label>
                  <input type="text" className="form-control" name='etitle' id="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange}  minLength={5} required/>
                  <div id="emailHelp" className="form-text">Boom</div>
                </div>
                <div className="mb-3">
                  <label htmlfor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" name='edescription' id="edescription" value={note.edescription} onChange={onChange} minLength={5} required/><br/>
                  <label htmlfor="enumber3" className="form-label" style={redd}>Mobile Number{len}
         <input type="number" className="form-control" name='enumber3' id="enumber3" value={note.enumber3}  required onChange={onChange}/><br/>
         </label><br/>
                </div>
                {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
    </div> */}
                <div className="mb-3">
                  {/* <label htmlfor="tag" className="form-label">tag</label>
                  <input type="text" className="form-control" name='etag' id="etag" value={note.etag }onChange={onChange} /> */}
                </div>
                {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Serisi</button> */}
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary"  >Save changes</button>
            </div>
            </form>            </div>
            {/* disabled={note.etitle.length<5 || note.edescription.length<5 || note.enumber3.length<10 || note.enumber3.length>10}  */}
          </div>
        </div>
      </div>
      <div className='row my-3'>
        {
           
        }
        {/* <select onChange={onchange2}>
          <option value="Personal">Personal</option>
          <option value="Hehe" >Hehe</option>
        </select> */}
        <h2>Your Equipments</h2>
        <span> {notes.length===0 && "No Equipments To Display"} </span>
        { 
            notes.map((note) => {
            return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} noorder={noorder}/>
          })
          
          }
           {/* updateNote={updateNote}  */}

         {/* ( notes  >= 0 )
           ?
           notes.map((note) => { */}

          {/* //   return <NoteItem key={note._id}   note={note} />
          // })
          // :
          // null
          // && notes.length    
        } */}
      </div>

      <a href='#ho'><button className='btn btn-primary'>Goto Top</button></a>
    </div>
    
  )
}

export default Notes
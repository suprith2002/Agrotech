import React, { useRef } from 'react'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = (props) => {
  // const[note, setNote] = useState({id :"", etitle: "", edescription: "", etag: "", enumber3:""})
  // const [notee, setnotee] = useState({id: "", edtitle:"", eddescription: "", edtag: "", ednumber3: "", edlocation: "", edhour: ""})
  const [noy, setnoy] = useState({id: "", ntitle: "", ndescription: "", ntag: "", nnumber3: "", nlocation: "", nhour: ""})
  
  let navigate = useNavigate()
  const [len, setlen] = useState(":")
  const [redd, setredd] = useState(null)

    const handleClick = (e)=>{
    e.preventDefault();
    console.log("Saved Your Changes", noy)
    e.preventDefault()
    if((noy.nnumber3.toString().charAt(0) == 6) || (noy.nnumber3.toString().charAt(0) == 7) || (noy.nnumber3.toString().charAt(0) == 8) || (noy.nnumber3.toString().charAt(0) == 9) && (noy.nnumber3.toString().length == 10) )
    { 
       setlen(":")
       editNote(noy.id, noy.ntitle, noy.ndescription, noy.ntag, noy.nnumber3, noy.nlocation, noy.nhour)
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
     setlen(": Should Be 10 Digits")
  }

}
const onChange = (e)=>{
    // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
    setnoy({...noy, [e.target.name]: e.target.value})
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
    setnoy({id: currentNote._id, ntitle: currentNote.title , ndescription:currentNote.description, ntag:currentNote.tag, nnumber3:currentNote.number3, nlocation:currentNote.location, nhour:currentNote.hour})
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
          <meta charset="utf-8" />

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
                  <label htmlfor="ntitle" className="form-label">Your Title</label>
                  <input type="text" className="form-control tw-bg-stone-300" name='ntitle' id="ntitle" aria-describedby="emailHelp" value={noy.ntitle} onChange={onChange}  minLength={5} required/>
                  <div id="emailHelp" className="form-text">Boom</div>
                </div>
                <div className="mb-3">
                  <label htmlfor="ndescription" className="form-label">Description</label>
                  <input type="text" className="form-control tw-bg-stone-300" name='ndescription' id="ndescription" value={noy.ndescription} onChange={onChange} minLength={5} required/><br/>
                  <label htmlfor="nnumber3" className="form-label" style={redd}>Mobile Number{len}
         <input type="number" className="form-control tw-bg-stone-300" name='nnumber3' id="nnumber3" value={noy.nnumber3} pattern="[6||7||8||9]+" required onChange={onChange}/><br/>
         </label><br/>
         <label htmlfor="nlocation" className="form-label" >Location
         <input type="text" className="form-control tw-bg-stone-300" name='nlocation' id="nlocation" value={noy.nlocation}  required onChange={onChange}/><br/>
         </label><br/>
         <label htmlfor="nhour" className="form-label tw-bg-stone-300" >Price Per Hour
         <input type="number" className="form-control" name='nhour' id="nhour" value={noy.nhour}  required onChange={onChange}/><br/>
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
              <button ref={refClose} type="button" className="berebuttonS tw-bg-blue-600" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="berebuttonS tw-bg-blue-600"  >Save</button>
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

      <a href='#ho'><button className='tw-bg-blue-600 berebutton'>Goto Top</button></a>
    </div>
    
  )
}

export default Notes
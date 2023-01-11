import React, { useRef } from 'react'
import { useContext, useEffect, UseRef , useState } from "react";
import { useNavigate } from 'react-router-dom';
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import Navbar from './Navbar';
import NoteItem from './NoteItem';

const Notes = (props) => {
  const[note, setNote] = useState([{id :"", etitle: "", edescription: "", etag: ""}])
  let navigate = useNavigate()




  const context = useContext(noteContext)

  const { notes, getnotes, editNote, editorder } = context;
  const onchange2 = (e)=>{
    const newNotes = notes.filter((note)=>{return note.etag==e.target.value})
    console.log(newNotes)
      setNote(newNotes)
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      getnotes()

    }
    else{
      navigate("/login")
    }



  }, [])

  const [email, setemail] = useState("")
  const em = async()=>{
  const response = await fetch("http://localhost:5001/api/auth/getuseremail2", {
    method: 'POST',
    headers: {
      "auth-token":sessionStorage.getItem('token'),
      // "auth-token": localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({title, description, tag})
  })
  const json = await response.json();
  setemail(json)
  console.log(json);
  //Harry Bhai Method to fetch notes instantly
    // const note =  {
    //     "_id": "6391d8534098b1c133b9f65g",
    //     "user": "6391d39bb6ea954cc189d75d",
    //     "title": title,
    //     "description": description,
    //     "tag": tag,
    //     "date": "1670502483505",
    //     "__v": 0
    //   };   
    // setNote(notes.concat(note))
 //my method to fetch notes instantly
    // getnotes()
}
useEffect(() => {
 em()

}, [])




  return (
    <div>
        {/* <Navbar/> */}


      <div className='row my-3'>
        {
           
        }
        {/* <select onChange={onchange2}>
          <option value="Personal">Personal</option>
          <option value="Hehe" >Hehe</option>


        </select> */}
        <h2>Your Equipments This Is Notes23 {email}</h2>
        <span> {notes.length===0 && "No Equipments To Display"} </span>
        {/* { 
            notes.map((note) => {
            return <NoteItem key={note._id} note={note} showAlert={props.showAlert} />
          })
          
          } */}
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


    </div>
  )
}

export default Notes
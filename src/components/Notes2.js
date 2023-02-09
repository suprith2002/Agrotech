import React, { useRef } from 'react'
import { useContext, useEffect, UseRef , useState } from "react";
import { useNavigate } from 'react-router-dom';
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import Navbar from './Navbar';
import NoteItemUser2 from './NoteItemUser2';

const Notes = (props) => {
  const notesIntitial = []
  const[notes, setNote] = useState(notesIntitial)
  // [{id :"", title: "", description: "", tag: "", number: ""}]
  let navigate = useNavigate()




  const context = useContext(noteContext)

  const { editNote, editorder } = context;


  useEffect(() => {
    if(sessionStorage.getItem('token2')){
      AllnoteU2()

    }
    else{
      navigate("/fulllog")
    }



  }, [])

  const [email, setemail] = useState("")
  const em = async()=>{
  const response = await fetch("http://localhost:5001/api/auth/getuseremail2", {
    method: 'POST',
    headers: {
      "auth-token":sessionStorage.getItem('token2'),
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
const AllnoteU2= async ()=>{

  const response= await fetch("http://localhost:5001/api/notes/fetchallnotesuser2",
  {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',

      "auth-token":sessionStorage.getItem('token2')
      // "auth-token":sessionStorage.getItem('token')

    }
  })
  const json=await response.json()
  console.log(json)
  // setNote2(json)
  setNote(json)
  // const c=  await getnotes();
  // setNote2(c)
  


}




  return (
    <div>
        {/* <Navbar/> */}


    
        {
           
        }
        {/* <select onChange={onchange2}>
          <option value="Personal">Personal</option>
          <option value="Hehe" >Hehe</option>
        </select> */}
        <h2>Your Equipments This Is Notes23 {email}</h2>
        <span> {notes.length===0 && "No Equipments To Display"} </span>
        <div className='tw-bg-purple-800 tw-rounded-3xl tw-text-slate-300 tw-text-2xl tw-h-20 tw-w-fit  tw-block tw-mx-14'><div className='mx-4 tw-w-auto'><marquee>Welcome User</marquee></div> <span className='mx-4 tw-animate-pulse tw-text-rose-300'> {email} </span></div><br/>
        <div className='row my-3'>
          { 
            notes.map((note) => {
            return <NoteItemUser2 key={note._id} note={note}  showAlert={props.showAlert}/>
          })
          
          }
         

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
import React from 'react'
import { useContext, useState, useEffect } from "react";

import noteContext from "../context/noteContext";




const Noteitem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote,test, editorder, user2em, setuser2em } = context;
  const bo =()=>{
    // deleteNote(note._id)
  }

    const {note , updateNote, noorder } = props;
  const [em23, setem23] = useState({email:"", number2:""})


    

      const em2 = async()=>{
        const response = await fetch("http://localhost:5001/api/auth/getuseremail2order", {
          method: 'POST',
          headers: {
            // "auth-token":sessionStorage.getItem('token'),
            // "auth-token": localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id:note.user2})
        })
        const json = await response.json();
        setem23({email:json.email, number2:json.number2})
        console.log("Em23 " + json);
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
        em2()
      }, [])
    

    


    // const updateNote2 = () => {
    //   ref.current.click()
    // }
    // const ref = useRef(null);
    // const noorder = (id)=>{
    //   console.log(id)
    //   const b = null
    //   editorder(id, b)
    // }
   
  return (


    <>

         <div className='card col-md-5 mx-3 my-3 tw-mx-auto cardguru tw-relative'>
 
  <div className="cd-grid-1fr">
    {(note.order !== "Hehe")&& <><div className='tw-bg-green-600 tw-h-5 tw-w-5 tw-rounded-full tw-absolute tw-top-1 tw-left-2'></div><div className='tw-bg-green-600 tw-h-5 tw-w-5 tw-rounded-full tw-absolute tw-top-1 tw-left-2 tw-animate-ping'></div></>}
  <h5 className="card-title tw-text-2xl tw-font-semibold tw-my-2 tw-text-purple-600">{note.title}
  <button onClick={()=>{updateNote(note)}}><i className='fa fa-edit mx-2 tw-text-black tw-absolute tw-top-0 tw-right-10'></i></button>
  <button className=""  onClick={()=>{return deleteNote(note._id);}}>    <i className='fa-solid fa-delete-left mx-2 tw-absolute tw-top-0 tw-right-0 tw-text-red-600'></i>
</button></h5>
  <p className='tw-text-violet-400'>Type</p>
    <p className='tw-text-xl tw-text-violet-600'>{note.tag}</p><br/>
    {/* FontAwesome avraddu */}
    {/* <p className="card-text">  {note.description}
  <i className="fa-solid fa-trash mx-5" ></i>
    
</p> */}
 <p className="card-text tw-mx-2 tw-border-2 tw-border-purple-600 tw-border-dotted">{note.description}</p>
    {/* <span>{note.tag}</span> */}
    <span className='tw-text-violet-400 tw-my-4'>Your Mobile Number {note.number3}</span>
    {/* <button className="btn btn-primary mx-2" >Jai Raaja</button> */}
    {(note.order == "Hehe")?<span>No Orders</span>:<div className='tw-mx-auto'><iframe src={`https://www.google.com/maps/embed/v1/directions
?key=AIzaSyAHkI40OavSiT8UC01XHhgln5z7O5Thv7A
&origin=${note.location}
&destination=${note.order}
&avoid=tolls|highways`} frameborder="0" width="500" height="500"></iframe></div>}

<p className="card-text tw-mx-2 tw-my-2 tw-border-2 tw-border-purple-600 tw-border-dotted">{(note.order == "Hehe")?"No Orders":<div> Order Received To Destination <span className='tw-text-xl tw-text-amber-600'>{note.order} </span>  from <span className='tw-text-xl tw-text-amber-600'>{em23?.email}</span> and mobile number <span className='tw-text-xl tw-text-violet-600'> {em23?.number2} </span></div> }<button type='button' className='tw-mx-2 tw-bg-blue-600 berebuttonS' onClick={()=>{noorder(note)}}>reset</button><div></div> </p>
    {/* <a href="/usa" className="btn btn-primary mx-2"  >Jai Raaja</a> */}
    <div></div>
    </div>
  </div>
{/* btn btn-sm btn-primary */}

</>
    
  )
}

export default Noteitem; 
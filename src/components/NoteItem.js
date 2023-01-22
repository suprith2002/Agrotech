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
        console.log(em23);
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
          {/* <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
            {/* <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlfor="title" className="form-label">Your Title</label>
                  <input type="text" className="form-control" name='etitle' id="etitle" aria-describedby="emailHelp"  />
                  <div id="emailHelp" className="form-text">Boom</div>
                </div>
                <div className="mb-3">
                  <label htmlfor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" name='edescription' id="edescription"  />
                </div> */}
                {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
    </div> */}
                {/* <div className="mb-3">
                  <label htmlfor="tag" className="form-label">tag</label>
                  <input type="text" className="form-control" name='etag' id="etag"  />
                </div>
                <button type="submit" className="btn btn-primary" >Serisi</button>
              </form>            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" >Save changes</button>
            </div> */}
          {/* </div>
        </div>
      </div> */}
   
     


         <div className='card col-md-5 mx-3 my-3 '>
 
  <div className="cd-grid-1fr">
    <h5 className="card-title">  {note.title} 
  <button onClick={()=>{updateNote(note)}}><i className='fa fa-edit mx-2'></i></button></h5>
    <p className="card-text">  {note.description}
  <i className="fa-solid fa-trash mx-5" ></i>
    <button className=""  onClick={()=>{return deleteNote(note._id);}}>    <i className='fa-solid fa-delete-left mx-2'></i>
</button>

</p>
    <span>{note.tag}</span>
    <span>Your Mobile Number {note.number3}</span>
    <button className="btn btn-primary mx-2" >submit</button>
    {(note.order == "Hehe")?<span>No Orders</span>:<iframe src={`https://www.google.com/maps/embed/v1/directions
?key=AIzaSyAHkI40OavSiT8UC01XHhgln5z7O5Thv7A
&origin=${note.order}
&destination=court+sirsi
&avoid=tolls|highways`} frameborder="0" width="600" height="600"></iframe>}

<p>{(note.order == "Hehe")?"No Orders":`Anna Order Bantu ${note.order} from ${em23?.email} and mobile number ${em23?.number2}` }<button type='button' className='btn btn-primary mx-2 my-2' onClick={()=>{noorder(note)}}>reset</button> </p>
    {/* <a href="/usa" className="btn btn-primary mx-2"  >Jai Raaja</a> */}
    </div>
  </div>
{/* btn btn-sm btn-primary */}
</>
    
  )
}

export default Noteitem; 
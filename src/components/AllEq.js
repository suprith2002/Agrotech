import React from 'react'
import  { useRef } from 'react'
import { useContext, useEffect, UseRef , useState } from "react";
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import NoteItem2 from './NoteItem2';
import img from "./hoho.jpg"
import img2 from "./ho.jpg"
import Googlepay from './Googlepay';

const AllEq = () => {
    const context = useContext(noteContext)
    const { notes2, notes, getnotes, editNote,allnotes,setnotes2, editorder } = context;
    const [tag2, settag2] = useState("All")
    const ref = useRef(null);
    const refClose = useRef(null);
    const [inputt, setinputt] = useState({order: ""})
    const [hour, sethour] = useState("")
    const [noid, setnoid] = useState("")

    const [order, setorder] = useState({id:"", order: ""})
    const [email, setemail] = useState({email: "", number2: ""})
    const [su1, setsu1] = useState("")

    
    // const [src, setsrc] = useState("")
    
    // switch(notes2.tag){
    //     case "Personal": setsrc(img);
    //     break;
    //     case "Hehe": setsrc(img2);
    //     break;
    //     default : setsrc("...");
    // }
    useEffect(() => {
        allnotes(tag2)  
        em()
    
    
    
      }, [])
    const onchange2 = async (e)=>{
        // const hooo = await 
        // settag2(hooo)
        // console.log(tag2)
        console.log(e.target.value)

        allnotes(e.target.value)  
    

      }
      const handleClick = async(e)=>{
        console.log(order.id)
        e.preventDefault();
        // setinputt(document.getElementsByName("order").value)
        // console.log(document.getElementsByName("order").value)
        addU2(order.id)
        editorder(order.id,order.order)

        // refClose.current.click()


      }
      const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setorder({...order, [e.target.name]: e.target.value})
    }
      const updateOrder = async (CurrentNote)=>{
        ref.current.click()
       let U1 = await sendU1(CurrentNote._id)
        
        setorder({id:CurrentNote._id, order: CurrentNote.order})
        sethour(CurrentNote.hour)
        setnoid(CurrentNote._id)
        sendemail(U1, email.email, email.number2)

        
        // editorder(CurrentNote._id,order)

      }
      const addU2 = async(id)=>{
        //API call
        const response = await fetch(`http://localhost:5001/api/notes/updatenote1234/${id}`, {
          method: 'PUT',
          headers: {
            "auth-token":sessionStorage.getItem('token2'),
            // "auth-token": sessionStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify({order})
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
    const sendU1 = async(id)=>{
      //API call
      const response = await fetch("http://localhost:5001/api/notes/sendU1", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      })
      const json = await response.json();
      setsu1(json)
      console.log("hoho manwith " + json)
      return json


  
  }
   
    const em = async()=>{
    const response = await fetch("http://localhost:5001/api/auth/getuseremail240", {
      method: 'POST',
      headers: {
        "auth-token":sessionStorage.getItem('token2'),
        // "auth-token": localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({title, description, tag})
    })
    const json = await response.json();
    setemail({email:json.email,number2:json.number2})
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

    const sendemail = async( U1, emailU, mobileU) => {
      const response = await fetch("http://localhost:5001/api/sendmail", {
        method: 'POST',
        headers: {
          // "auth-token":sessionStorage.getItem('token2'),
          // "auth-token": sessionStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ U1, emailU, mobileU})
      })

    }

  return (
    ( sessionStorage.getItem('token2')) && <div className='tw-text-center tw-mx-auto'>
        
          {/* <select onClick={onchange2} >
          <option value="All" >All</option>
          <option value="Personal" >Personal</option>
          <option value="Hehe" >Hehe</option>
        </select> */}
        <label htmlFor='tag'style={{backgroundColor :' '}} className=' tw-bg-violet-800 tw-py-3 tw-px-3 tw-rounded-3xl tw-text-slate-300 tw-font-semibold hover:tw-text-stone-100'>
         <span className='tw-text-2xl'> Apply filter For Search </span>
        <select name="tag" id="tag"  onClick={onchange2} className=' tw-text-stone-100 tw-mx-3 tw-bg-rose-400 tw-rounded-full tw-px-2 tw-py-2 tw-border-2 tw-border-violet-600 tw-border-dashed tw-transform tw-duration-500' >
          <option value="All">All</option>
          <option value="Jcb" onchange={onchange2} >Jcb</option>

          <option value="Tractor" onchange={onchange2}  >Tractor</option>
          <option value="Tiller" onchange={onchange2}  >Tiller</option>
        </select>
        </label>
        
<button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Enter location</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input type="text" className='tw-bg-stone-300' name="order" pattern="[A-Za-z]+" minLength={3} title="Only Texts Are Allowed" onChange={onChange} required/>
            <button type='button' className='berebuttonS tw-bg-blue-600' onClick={handleClick}>Submit</button>
            <Googlepay clickk={handleClick} hour={hour}/>
         </form>
      </div>
      <div class="modal-footer">
        <button ref={refClose} type="button" class="berebuttonS tw-bg-blue-600" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

<div className='row my-3 tw-mx-5'>
{ 
     (notes2?.length==0)? <div>No Equipment</div>:
        notes2.map((note) => {
        return <NoteItem2 key={note._id} note={note} updateOrder={updateOrder} />
      })
      
      }
      </div>
      {/* <NoteItem2/> */}
    </div>
  )
}

export default AllEq
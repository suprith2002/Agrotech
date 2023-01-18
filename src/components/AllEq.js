import React from 'react'
import  { useRef } from 'react'
import { useContext, useEffect, UseRef , useState } from "react";
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import NoteItem2 from './NoteItem2';
import img from "./hoho.jpg"
import img2 from "./ho.jpg"

const AllEq = () => {
    const context = useContext(noteContext)
    const { notes2, getnotes, editNote,allnotes,setnotes2, editorder } = context;
    const [tag2, settag2] = useState("All")
    const ref = useRef(null);
    const refClose = useRef(null);
    const [inputt, setinputt] = useState({order: ""})

    const [order, setorder] = useState({id:"", order: ""})
    
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
    
    
    
      }, [])
    const onchange2 = async (e)=>{
        // const hooo = await 
        // settag2(hooo)
        // console.log(tag2)
        console.log(e.target.value)

        allnotes(e.target.value)  
    

      }
      const handleClick = (e)=>{
        console.log(order.id)
        e.preventDefault();
        // setinputt(document.getElementsByName("order").value)
        // console.log(document.getElementsByName("order").value)
        addU2(order.id)
        editorder(order.id,order.order)
        refClose.current.click()


      }
      const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setorder({...order, [e.target.name]: e.target.value})
    }
      const updateOrder = (CurrentNote)=>{
        ref.current.click()
        
        setorder({id:CurrentNote._id, order: CurrentNote.order})
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

  return (
    <div>
        
          {/* <select onClick={onchange2} >
          <option value="All" >All</option>
          <option value="Personal" >Personal</option>
          <option value="Hehe" >Hehe</option>
        </select> */}
        <select name="tag" id="tag"  onClick={onchange2} >
          <option value="All">All</option>
          <option value="Jcb" onchange={onchange2} >Jcb</option>

          <option value="Tractor" onchange={onchange2}  >Tractor</option>
          <option value="Tiller" onchange={onchange2}  >Tiller</option>
        </select>
        
<button ref={ref} type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input type="text" name="order" pattern="[A-Za-z]+" minLength={3} title="Only Texts Are Allowed" onChange={onChange} required/>
            <button type='button' onClick={handleClick}>Submit</button>
         </form>
      </div>
      <div class="modal-footer">
        <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div className='row my-3'>
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
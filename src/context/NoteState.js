import react  from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
import { Alert } from "../components/Alert";



const NoteState = (props) =>{
    // const s1 ={

    //     "name":"Shreesha",
    //     "class":"5b"
    // }
    // const [state, upstate] = useState(s1)
    // const update = () => {

    //     setTimeout(() => {
    //         upstate({

    //             "name":"Shreesha Hegderu",
    //             "class":"Chief"
    //         })
            
    //     }, 1000);
    // }
    const host = "http://localhost:5001"
    const notesInitial = []
    // {
    //   "_id":
    //   "6391d8534098b1c133b9f65a",
    //   "user":
    //   "6391d39bb6ea954cc189d75d",
    //   "title":
    //   "Nande Raajya NANDE RULES Updated",
    //   "description":
    //   "NANDE RAAJYA NAANE RAAJA NINE RAANI",
    //   "tag":
    //   "Personal",
    //   "date":
    //   "1670502483505",
    //  "__v":
    //   0}
    const notesInitial2 = [
    // {
    //   "_id":
    //   "6391d8534098b1c133b9f65a",
    //   "user":
    //   "6391d39bb6ea954cc189d75d",
    //   "title":
    //   "Nande Raajya NANDE RULES Updated",
    //   "description":
    //   "NANDE RAAJYA NAANE RAAJA NINE RAANI",
    //   "tag":
    //   "Personal",
    //   "date":
    //   "1670502483505",
    //  "__v":
    //   0},
    //   {
    //     "_id":
    //     "6391d8534098b1c133b9f65b",
    //     "user":
    //     "6391d39bb6ea954cc189d75d",
    //     "title":
    //     "Nande Raajya NANDE RULES Full Updated",
    //     "description":
    //     "NANDE RAAJYA NAANE RAAJA NINE RAANI",
    //     "tag":
    //     "Personal",
    //     "date":
    //     "1670502483505",
    //    "__v":
    //     0}
      ]
    const [notes, setNote] = useState(notesInitial)
    const [notes2, setNote2] = useState(notesInitial2)


    const [altmsg , upaltmsg] = useState("ho");
    const [test, settest] = useState({email:"", password:""})
    const [user2em, setuser2em] = useState("")
    const [block, setblock] = useState(false)
   
    const getnotes= async ()=>{

      const response= await fetch(`${host}/api/notes/fetchallnotes`,
      {
        method:'GET',
        headers:{
          'Content-Type': 'application/json',

          "auth-token":sessionStorage.getItem('token')
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

        
        
       
        const addNote = async (title, description, tag, number3)=>{
          //ToDo API call 
          const response = await fetch("http://localhost:5001/api/notes/addnote", {
            method: 'POST',
            headers: {
              "auth-token":sessionStorage.getItem('token'),
              // "auth-token": sessionStorage.getItem('token'),
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description, tag, number3})
          })
          const json = response.json();
          console.log("Adding A New Note");
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
            getnotes()

        }
        const deleteNote = async (id)=>{
        
          const a = window.confirm("do you want to delete?");
          if(a){
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
              "auth-token":sessionStorage.getItem('token'),
              // "auth-token": sessionStorage.getItem('token'),
              'Content-Type': 'application/json'
            },
          })
          const json = response.json();
          console.log(json);
            console.log("Deleting the note with id"+id);
           
           //Harry Bhai method
          //  const newNotes = notes.filter((note)=>{return note._id!==id})
          //  setNote(newNotes)
           //Nanna Method , Harry Bhai Method Athva Idu
          getnotes()
          }
           else{
            alert("cancelled");
          //  upaltmsg("cancelled")
           }
           
        }
        //Edit The Note
        const editNote = async (id, title, description, tag, number3)=>{
          //API call
          const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
              "auth-token":sessionStorage.getItem('token'),
              // "auth-token": sessionStorage.getItem('token'),
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description, tag, number3})
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
          // setNote(notes)
          //my method
          getnotes();
         
         
        }
        const allnotes = async (tag)=>{
          const response = await fetch("http://localhost:5001/api/auth/getuser", {
            method: 'POST',
            headers: {
              "auth-token":sessionStorage.getItem('token'),
              // "auth-token": sessionStorage.getItem('token'),
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({tag})
          })
          const json = await response.json();
          console.log(json);
          // (json.length == 0)?
         setNote2(json)
       
            getnotes()
        }
        const editorder = async(id, order)=>{
                  //API call
                  const response = await fetch(`${host}/api/notes/updatenoteorder/${id}`, {
                    method: 'PUT',
                    headers: {
                      "auth-token":sessionStorage.getItem('token'),
                      // "auth-token": sessionStorage.getItem('token'),
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({order})
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
               allnotes("All")
              
                  //my method
                //  const c=  await getnotes();
                //  setNote2(json)


        }

        const AllnoteU2= async ()=>{

          const response= await fetch("http://localhost:5001/api/notes/fetchallnotesuser2",
          {
            method:'GET',
            headers:{
              'Content-Type': 'application/json',
        
              "auth-token":sessionStorage.getItem('token')
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


    return(


        //state , update
        <NoteContext.Provider value={{notes,notes2, altmsg, test, user2em, block, setblock, setuser2em, setNote,setNote2, settest, addNote, deleteNote, editNote, editorder, getnotes, allnotes}}>

        {props.children}

        </NoteContext.Provider>
    )

}


export default NoteState;
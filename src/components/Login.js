import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import  { useRef } from 'react'

import { useContext, useEffect} from 'react'
import noteContext from "../context/noteContext";
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as ANNA,
  Routes as TIRUGU,
  Route as HOGU,
  Link as KONDI,
  useLocation,
} from "react-router-dom";

// import { RenderErrorBoundary } from 'react-router/dist/lib/hooks'

const Login = (props) => {
    // const {test, settest, useremail, setuseremail} = useContext(noteContext)

    const mystyle ={
      color:"#ccc",
      fontSize:"10px",
       textAlign:"right",
        width:"230px"}
    const context = useContext(noteContext)
    const {test, settest, block, setblock } = context;

    const [credentials, setcredentials] = useState({email:"", password:""})
    const ref = useRef(null);

    const onchangehandle = () => {
      ref.current.click()
    }


  

    let navigate = useNavigate()
   const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setcredentials({...credentials, [e.target.name]: e.target.value})

        settest({...test, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
      
        e.preventDefault()
        const response= await fetch("http://localhost:5001/api/auth/login",
        {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
  
            // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MWQzOWJiNmVhOTU0Y2MxODlkNzVkIn0sImlhdCI6MTY3MDUxODkxMn0.OJPf3iCjchdsN5MtYS7TfLCOUFu4-93rHnhDWI84XGU"
            "auth-token":sessionStorage.getItem('token')
  
          },
          body: JSON.stringify({email:credentials.email})
        })
        const json = await response.json()
       
        console.log(json)
      
        if (json.success) {
            //redirecting
            sessionStorage.setItem('token', json.AUthtoken)
            props.showAlert("Successfully logged In","success")
            setblock(true)
            navigate("/")



            
        }
        else{
          // props.showAlert("Invalid Credentials","danger")
          props.showAlert("Please Register before login","danger")
        }

    }
    // setuseremail({email:a})
    // console.log(useremail)

    // google login
    const handleCallbackResponse = (response)=>{
      console.log("Anna JWT Token" + response.credential);
      const User = jwt_decode(response.credential)
      console.log(User)
      setcredentials({email:User.email})








    }
    useEffect(() => {
     /* global google */
     google.accounts.id.initialize({
      client_id: "811773551912-667umsl4ledvaujamil6gqn1v5vnou1q.apps.googleusercontent.com",
      callback: handleCallbackResponse
     });
     google.accounts.id.renderButton(document.getElementById("signInDiv"),{theme: "outline", size: "large"});
  
    }, [])


  return (
    <div className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
      <div className='tw-text-3xl tw-text-emerald-800 tw-font-serif tw-font-extrabold'>Rent Giver Login</div>
      {/* <div className='w-25'><h1><marquee>WelCome User</marquee></h1></div> */}
    <div className='tw-w-1/2 tw-bg-slate-200 tw-flex tw-flex-col tw-justify-center tw-text-center tw-py-5 tw-rounded-3xl tw-my-5'>
      <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4 ">
          <label className="form-label tw-text-rose-700 tw-text-2xl" htmlfor="form2Example1" >Sign In With Google</label>
    <input type="email" id="form2Example1" className="form-control tw-w-1/2 tw-mx-auto tw-my-3" name='email' value={credentials.email} onChange={onChange} readOnly/>
  </div>




  <button ref={ref} disabled={credentials.email.length<1} type="submit" className="btn tw-bg-blue-600 berebutton  tw-mx-auto" >Sign in</button>

  <div className="text-center">
 
  </div>
</form>
{/* <div className=""> */}
    <div className=' tw-flex tw-justify-center tw-py-3' >
      <div  className='tw-h-24' id="signInDiv" onChange={onchangehandle}></div>
      </div>

      <p>Not a member? <KONDI to="/signup"><span className='tw-text-green-600 tw-text-xl tw-font-bold hover:tw-text-pink-600 tw-transform tw-duration-500'>Signup</span></KONDI></p>

      </div>
    


    </div>
  )
}

export default Login
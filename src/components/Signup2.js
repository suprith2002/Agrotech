import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
// && (credentials.number1?.length == 10 )


const Signup2 = (props) => {
    // const [credentials, setcredentials] = useState({name:"", email:"", number1:""})
    const [first, setfirst] = useState({name:"", email:"", number2:0})
    let navigate=useNavigate()
    const [len, setlen] = useState(":")
    const [redd, setredd] = useState(null)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if( ((first.number2.charAt(0) == 6) || (first.number2.charAt(0) == 7) || (first.number2.charAt(0) == 8) || (first.number2.charAt(0) == 9) ) && (first.number2.length == 10 )){
        const response= await fetch("http://localhost:5001/api/auth/createuser2",
        {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
  
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MWQzOWJiNmVhOTU0Y2MxODlkNzVkIn0sImlhdCI6MTY3MDUxODkxMn0.OJPf3iCjchdsN5MtYS7TfLCOUFu4-93rHnhDWI84XGU"
            // "auth-token":localStorage.getItem('token')
  
          },
          body: JSON.stringify({name:first.name, email:first.email, number2:first.number2})
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //redirecting
            localStorage.setItem('token', json.authtoken)
            navigate("/")
            props.showAlert("Successfully Registered as user 2","success")

            
        }
        else{
          props.showAlert("You Are Already Registered Please Login","danger")
        }

      }
      else{
        setredd({
          color:'red'
        })
         setlen(": Should Be 10 Digits And Start With 6 or 7 or 8 or 9")
      }

    }

    const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setfirst({...first, [e.target.name]: e.target.value})
    }


        // google login
        const handleCallbackResponse = (response)=>{
          console.log("Anna JWT Token" + response.credential);
          const User = jwt_decode(response.credential)
          console.log(User)
          setfirst({email:User.email, name:User.name})
    
    
    
    
    
    
    
    
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
        <div className='tw-w-1/2 tw-bg-slate-200 tw-flex tw-flex-col tw-justify-center tw-text-center tw-py-5 tw-rounded-3xl tw-my-5'>
        <div className='w-25 tw-mx-auto tw-flex tw-justify-center tw-items-center'><h1><marquee>Join With Us 🤝</marquee></h1></div>
        <label className="form-label tw-text-rose-700 tw-text-2xl" htmlfor="form2Example1" >Sign Up With Google</label>

        {/* value={credentials.email} onChange={onChange} */}
        <form onSubmit={handleSubmit} >
       Name: <input type="text"  className="form-control tw-w-1/2 tw-mx-auto tw-my-3" placeholder="Name"  name='name' onChange={onChange} pattern="[A-Za-z]+" title='Only Letters Are Allowed' /> <br/>
       Email <input type="email" className="form-control tw-w-1/2 tw-mx-auto tw-my-3"  placeholder="Email" name='email' onChange={onChange} value={first.email} readOnly  /> <br/>
       {/* Password <input type="password"  className="form-control"  placeholder="Password" name='password' minLength={5} onChange={onChange}/> <br/>
       Confirm Password <input type="password"  className="form-control" name='cpassword'  placeholder="Confirm Password" minLength={5} onChange={onChange}/> <br/> */}
      <span style={redd}> Number:{len} <br/> <input type="number" name="number2" className='tw-w-1/2 tw-mx-auto tw-my-3' onChange={onChange} required></input></span> <br/>
       <button disabled={first.email.length<1 } type="submit" className="btn tw-bg-blue-600 berebutton  tw-mx-auto" >Signup</button>

       
       </form>


       <div className="App tw-flex tw-justify-center tw-my-3">
      <div id="signInDiv"></div>
    </div>
    </div>
        </div>
  )
}

export default Signup2
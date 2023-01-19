import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import noteContext from "../context/noteContext";
import {
  BrowserRouter as ANNA,
  Routes as TIRUGU,
  Route as HOGU,
  Link as KONDI,
  useLocation,
} from "react-router-dom";
// import jwt_decode from "jwt-decode";

// import { RenderErrorBoundary } from 'react-router/dist/lib/hooks'

const Login = (props) => {
    // const {test, settest, useremail, setuseremail} = useContext(noteContext)
    const context = useContext(noteContext)
    const {test, settest, block, setblock } = context;

    const [credentials, setcredentials] = useState({email:"", password:""})
  

    let navigate = useNavigate()
   const onChange = (e)=>{
        // Illi mooru dot ... hesru spread operator andre note allira value + munde koda value
        setcredentials({...credentials, [e.target.name]: e.target.value})

        settest({...test, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
      
        e.preventDefault()
        const response= await fetch("http://localhost:5001/api/auth/login2",
        {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
  
            // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MWQzOWJiNmVhOTU0Y2MxODlkNzVkIn0sImlhdCI6MTY3MDUxODkxMn0.OJPf3iCjchdsN5MtYS7TfLCOUFu4-93rHnhDWI84XGU"
            "auth-token":sessionStorage.getItem('token2')
  
          },
          body: JSON.stringify({email:credentials.email})
        })
        const json = await response.json()
       
        console.log(json)
      
        if (json.success) {
            //redirecting
            sessionStorage.setItem('token2', json.AUthtoken)
            props.showAlert("Successfully logged In","success")
          
            navigate("/notes2")



            
        }
        else{
          props.showAlert("Please Register before login","danger")
        // alert("Invalid")
        }

    }
    // setuseremail({email:a})
    // console.log(useremail)

    //google login
    // const handleCallbackResponse = (response)=>{
    //   console.log("Anna JWT Token" + response.credential);
    //   const User = jwt_decode(response.credential)
    //   console.log(User)
    // }
    // useEffect(() => {
    //  /* global google */
    //  google.accounts.id.initialize({
    //   client_id: "811773551912-667umsl4ledvaujamil6gqn1v5vnou1q.apps.googleusercontent.com",
    //   callback: handleCallbackResponse
    //  });
    //  google.accounts.id.renderButton(document.getElementById("signInDiv"),{theme: "outline", size: "large"});
  
    // }, [])


  return (
    <div><div className='w-25'><h1><marquee>WelCome User</marquee></h1></div>
    <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" name='email' value={credentials.email} onChange={onChange} />
    <label className="form-label" htmlfor="form2Example1">Email address</label>
  </div>

  {/* <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" value={credentials.password} name='password'  onChange={onChange} minLength={5}/>
    <label className="form-label" htmlfor="form2Example2">Password</label>
  </div> */}

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4" >Sign in</button>

  <div className="text-center">
  <p>Not a member? <KONDI to="/signup2">Signup</KONDI></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
<p></p>
{/* <div className="App">
      <div id="signInDiv"></div>
    </div> */}


    </div>
  )
}

export default Login
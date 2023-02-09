import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mane from './components/Home';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as ANNA,
  Routes as TIRUGU,
  Route as HOGU,
  Link
} from "react-router-dom";

import NoteState from './context/NoteState';
import { useContext , useEffect, useState} from "react";
import  Alert  from './components/Alert';
import Login from './components/Login';
import Login2 from './components/Login2';
import Notes2 from './components/Notes2';
import News from './components/News';



import Signup from './components/Signup';
import Signup2 from './components/Signup2';
import AllEq from './components/AllEq';
import Email from './components/Email';
import Footer from './components/Footer';
import { WeatherACC } from './components/WeatherACC';
import AddNote from './components/AddNote';
import Fulllog from './components/Fulllog';
import Googlepay from './components/Googlepay';
// import noteContext from "./context/noteContext";




function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000);
  }
 
  return (
    <div className="">
     
      <ANNA>
      <NoteState>
    <Navbar/>
   
    <Alert alert={alert}/>
    <TIRUGU>
    {/* <HOGU exact path="/" element={<><Navbar/> <Alert alert={alert}/><Mane showAlert={showAlert}/>  </>}/>
    <HOGU exact path="/about" element={<><Navbar/> <Alert alert={alert}/><AboutUs/></>}/>
    <HOGU exact path="/login" element={<><Navbar/> <Alert alert={alert}/><Login showAlert={showAlert}/></>}/>
    <HOGU exact path="/login2" element={<><Navbar/> <Alert alert={alert}/><Login2 showAlert={showAlert}/></>}/>
    <HOGU exact path="/signup" element={<><Navbar/> <Alert alert={alert}/><Signup showAlert={showAlert}/></>}/>
    <HOGU exact path="/notes2" element={<Notes2/>}/>
    <HOGU exact path="/alln" element={<><Navbar/> <Alert alert={alert}/><AllEq/></>}/> */}


    {/* <HOGU exact path="/users" element={<AboutUs/>}/> */}


    <HOGU exact path="/" element={<><Mane showAlert={showAlert}/>  </>}/>

    <HOGU exact path="/about" element={<><AboutUs/></>}/>
    <HOGU exact path="/login" element={<><Login showAlert={showAlert}/></>}/>
    <HOGU exact path="/login2" element={<><Login2 showAlert={showAlert}/></>}/>

    <HOGU exact path="/signup" element={<><Signup showAlert={showAlert}/></>}/>
    <HOGU exact path="/signup2" element={<><Signup2 showAlert={showAlert}/></>}/>

    <HOGU exact path="/notes2" element={<Notes2 showAlert={showAlert}/>}/>

    <HOGU exact path="/alln" element={<><AllEq/></>}/>

    <HOGU exact path="/news" element={<><News/>  </>}/>
    <HOGU exact path="/weather" element={<><WeatherACC/> </>}/>
    <HOGU exact path="/email" element={<><Email/>
 </>}/>
   <HOGU exact path="/fulllog" element={<> <Fulllog/> </>}/>
   <HOGU exact path="/gpay" element={<> <Googlepay/> </>}/>

 <HOGU exact path="/addeq" element={<><AddNote showAlert={showAlert}/> </>}/>


    
    

    </TIRUGU>
    <Footer/>
    </NoteState>
    </ANNA>
 
    </div>
  );
}

export default App;
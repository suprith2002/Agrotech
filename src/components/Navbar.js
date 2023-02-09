import React, {useEffect, useContext} from 'react'
import {
    BrowserRouter as ANNA,
    Routes as TIRUGU,
    Route as HOGU,
    Link as KONDI,
    useLocation,
    useNavigate
  } from "react-router-dom";
  import noteContext from "../context/noteContext";
  import Log from "./favicon.ico.jpg";



const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate()
    const context = useContext(noteContext)

    const { notes, getnotes, editNote, editorder, block, setblock } = context;

    const handleLogout = () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('token2');
      setblock(false)
      navigate("/login")

    } 
    // React.useEffect(() => {


    //     console.log(location)
    // }, [location])
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark tw-bg-purple-900 tw-h-16  tw-items-center tw-flex tw-justify-between">
        <img src={Log} className='tw-h-14 tw-w-14 tw-lg:w-14  tw-rounded-3xl tw-py-2 tw-px-0 dappablu'></img>
  <div className="container-fluid">
    <a className="navbar-brand tw-text-stone-100 tw-text-2xl tw-font-semibold tw-text-opacity-80 tw-hover:text-pink-600 tw-transform tw-duration-500" href=""><marquee scrollamount="4">AGROTECH</marquee></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse tw-items-center tw-flex tw-justify-between" id="navbarSupportedContent">
      <ul className="navbar-nav tw-space-x-4 tw-space-y-2 mb-lg-0 tw-mx-4">
        <li className="nav-item navlogo">
         {(sessionStorage.getItem('token'))&& <KONDI className={` ${(location.pathname === "/")?"tw-text-stone-100 tw-text-2xl":'tw-text-pink-300 hover:tw-text-stone-300'}`} aria-current="page" to="/">Home</KONDI>}

        </li>
        <li className="nav-item navlogo">
         {( sessionStorage.getItem('token2')) && <KONDI className={` ${(location.pathname === "/notes2")?"tw-text-stone-100 tw-text-2xl":'tw-text-pink-300 hover:tw-text-stone-300'}`} aria-current="page" to="/notes2">YourHome</KONDI>}
        </li>
        <li className="nav-item  hover:tw-text-2xl tw-font-semibold tw-cursor-pointer tw-transform tw-duration-500  tw-text-pink-600 ">
          <KONDI className={`${(location.pathname === "/about")?"tw-text-stone-100 tw-text-2xl":'tw-text-pink-300 hover:tw-text-stone-300'} `} to="/about">AboutUs</KONDI>
        </li>
        <li className="nav-item navlogo">
         {(sessionStorage.getItem('token2')) && <KONDI className={` ${(location.pathname === "/alln")?"tw-text-stone-100 tw-text-2xl":'tw-text-pink-300 hover:tw-text-stone-300'}`} aria-current="page" to="/alln">All Equipment</KONDI>}
        </li>
        <li className="nav-item hover:tw-text-pink-600 hover:tw-text-2xl tw-font-semibold tw-cursor-pointer tw-transform tw-duration-500  tw-text-pink-600 tw-my-2">
         <KONDI className={` ${(location.pathname === "/news")?" tw-text-stone-100tw-text-2xl ":' tw-text-pink-300 hover:tw-text-stone-300'}`} aria-current="page" to="/news">News English</KONDI>
        </li>
        <li className="nav-item hover:tw-text-pink-600 hover:tw-text-2xl tw-font-semibold tw-cursor-pointer tw-transform tw-duration-500  tw-text-pink-600 tw-my-2">
         <KONDI className={` ${(location.pathname === "/weather")?" tw-text-stone-100tw-text-2xl ":' tw-text-pink-300 hover:tw-text-stone-300'}`} aria-current="page" to="/weather">Weather</KONDI>
        </li>
      

      </ul>
     
      {!(sessionStorage.getItem('token') || sessionStorage.getItem('token2') )? <div className=" tw-space-x-2 tw-space-y-2  tw-mx-4  tw-flex-row tw-text-right tw-items-center tw-flex tw-justify-between "><ul className='tw-flex tw-flex-row tw-space-x-4'>
       <li> <KONDI className="hover:tw-text-stone-300" to="/fulllog" role="button"><button className={` ${(location.pathname === "/fulllog")?"logbuttonactive tw-py-2":'logbutton hover:tw-text-stone-300'}`}>Login</button></KONDI></li>
       {/* <li> <KONDI className="" to="/login2" role="button"><button className={` ${(location.pathname === "/login2")?"logbuttonactive tw-py-2":'logbutton'}`}>Rent Taker</button></KONDI></li> */}

       {/* <li> <KONDI className="" to="/signup" role="button"><button className='logbutton'>Signup</button></KONDI></li> */}

       </ul></div>:<button className="logbutton" onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
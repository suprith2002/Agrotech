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
  import Log from "./Log.png";



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
        <img src={Log} className='tw-h-14 tw-w-14 tw-lg:w-14  tw-rounded-3xl tw-py-2 tw-px-0'></img>
  <div className="container-fluid">
    <a className="navbar-brand tw-text-stone-100 tw-text-2xl tw-font-semibold tw-text-opacity-40 tw-hover:text-pink-600 tw-transform tw-duration-500" href="">AGROTECH</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse tw-items-center tw-flex tw-justify-between" id="navbarSupportedContent">
      <ul className="navbar-nav tw-space-x-4 tw-space-y-2 mb-lg-0 tw-mx-4">
        <li className="nav-item navlogo">
         {(sessionStorage.getItem('token'))&& <KONDI className={` ${(location.pathname === "/")?"tw-text-slate-300 tw-text-2xl":'tw-text-pink-700'}`} aria-current="page" to="/">Home</KONDI>}

        </li>
        <li className="nav-item navlogo">
         {( sessionStorage.getItem('token2')) && <KONDI className={` ${(location.pathname === "/notes2")?"tw-text-slate-300 tw-text-2xl":'tw-text-pink-700'}`} aria-current="page" to="/notes2">YourHome</KONDI>}
        </li>
        <li className="nav-item hover:tw-text-pink-600 hover:tw-text-2xl tw-font-semibold tw-cursor-pointer tw-transform tw-duration-500  tw-text-pink-600 ">
          <KONDI className={`${(location.pathname === "/about")?"tw-text-slate-300 tw-text-2xl":'tw-text-pink-700'} `} to="/about">AboutUs</KONDI>
        </li>
        <li className="nav-item navlogo">
         {(sessionStorage.getItem('token2')) && <KONDI className={` ${(location.pathname === "/alln")?"tw-text-slate-300 tw-text-2xl":'tw-text-pink-700'}`} aria-current="page" to="/alln">All Equipment</KONDI>}
        </li>
        <li className="nav-item hover:tw-text-pink-600 hover:tw-text-2xl tw-font-semibold tw-cursor-pointer tw-transform tw-duration-500  tw-text-pink-600 tw-my-2">
         <KONDI className={` ${(location.pathname === "/news")?" tw-text-zinc-400 tw-text-2xl ":' tw-text-pink-600 '}`} aria-current="page" to="/news">News English</KONDI>
        </li>
{/*        
        <li className="nav-item dropdown">
        <KONDI className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </KONDI>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
     
      {!(sessionStorage.getItem('token') || sessionStorage.getItem('token2') )? <ul className=" tw-space-x-2 tw-space-y-2  tw-mx-4 tw-flex tw-flex-row tw-text-right">
       <li> <KONDI className="" to="/login" role="button"><button className='tw-bg-fuchsia-400 tw-w-14 tw-h-10 tw-rounded-full'>Login</button></KONDI></li>
        <li><KONDI className="btn btn-primary" to="/login2" role="button">Login2</KONDI></li>

       <li> <KONDI className="btn btn-primary mx-2" to="/signup" role="button">Signup</KONDI></li>

      </ul>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
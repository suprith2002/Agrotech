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



const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate()
    const context = useContext(noteContext)

    const { notes, getnotes, editNote, editorder, block, setblock } = context;

    const handleLogout = () => {
      sessionStorage.removeItem('token');
      setblock(false)
      navigate("/login")

    } 
    // React.useEffect(() => {


    //     console.log(location)
    // }, [location])
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand " href="">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         {(sessionStorage.getItem('token') &&
(block))&& <KONDI className={`nav-link ${(location.pathname === "/")?"active bg-danger":'bg-success'}`} aria-current="page" to="/">Home</KONDI>}


<li className="nav-item">
         {((!block) && sessionStorage.getItem('token')) && <KONDI className={`nav-link ${(location.pathname === "/notes2")?"active bg-danger":'bg-success'}`} aria-current="page" to="/notes2">YourHome</KONDI>}
        </li>

        </li>
        <li className="nav-item">
          <KONDI className={`nav-link ${(location.pathname === "/about")?"active bg-danger":'bg-success'}`} to="/about">AboutUs</KONDI>
        </li>
        <li className="nav-item">
         {((!block) && sessionStorage.getItem('token')) && <KONDI className={`nav-link ${(location.pathname === "/alln")?"active bg-danger":'bg-success'}`} aria-current="page" to="/alln">All Equipment</KONDI>}
        </li>
        <li className="nav-item">
         <KONDI className={`nav-link ${(location.pathname === "/news")?"active bg-danger":'bg-success'}`} aria-current="page" to="/news">News English</KONDI>
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
      {!sessionStorage.getItem('token')? <form className="d-flex" role="search">
        <KONDI className="btn btn-primary" to="/login" role="button">Login</KONDI>
        <KONDI className="btn btn-primary" to="/login2" role="button">Login2</KONDI>

        <KONDI className="btn btn-primary mx-2" to="/signup" role="button">Signup</KONDI>

      </form>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
import React from 'react'
import {
    Link
    ,useNavigate,
    useLocation
    } from "react-router-dom";
    import './stylefooter.css'
    import pic from './favicon.ico.jpg'

const Footer = () => {
    
  return (
    <div> <footer style={{'margin-top':'30px'}}  class="footer ">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/weather">Weather</Link></li>

                    {/* <li><Link to="/">Home</Link></li> */}
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://github.com/SHREESHA-HEGDE14" target='_blank'><i class="fab fa-github"></i></a>
                    <a href="https://github.com/suprith2002/Agrotech.git" target='_blank' ><i class="fab fa-github"></i></a>
                    {/* <div class="footer-col">
                    <h4>Contact Us</h4>
                    <a href='https://wa.me/+918277549037'  target='_blank'><i className="fa-brands fa-whatsapp tw-text-4xl tw-text-green-600"></i></a>
                    <a href='https://wa.me/+918277549037'  target='_blank'><i className="fa-brands fa-whatsapp tw-text-4xl tw-text-green-600 "></i></a>
                    </div> */}

                </div>
            </div>
            <div class="footer-col">
                    <h4>Contact Us</h4>
                    <a href='https://wa.me/+918277549037'  target='_blank'><i className="fa-brands fa-whatsapp tw-text-4xl tw-text-green-600 hover:tw-text-stone-100"></i></a>
                    <a href='https://wa.me/+917337800848'  target='_blank'><i className="fa-brands fa-whatsapp tw-text-4xl tw-text-green-600 tw-mx-4 hover:tw-text-stone-100"></i></a>
                    </div>
            <div class="footer-col">
             <div class="img1">
                     <img style={{
                        backgroundColor : '#beef00'
                     }} className='tw-h-40 tw-w-40 tw-rounded-full' src={pic} alt='' />
             </div>
         </div>
        </div>
    </div>
  <div style={{'padding-top':'10px'}} class="footer-bottom">
     {/* <p>Copyright Reserved &copy; 2023 </p> */}
  </div>
  
</footer></div>
  )
}

export default Footer
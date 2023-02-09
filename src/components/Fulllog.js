import React from 'react'
import {
    BrowserRouter as ANNA,
    Routes as TIRUGU,
    Route as HOGU,
    Link as KONDI,
    useLocation,
    useNavigate
  } from "react-router-dom";

const Fulllog = () => {
  return (
    <div>
        <div className='tw-flex tw-flex-row tw-justify-evenly'>
        <div className='left tw-h-56 tw-w-full tw-bg-teal-600 tw-mx-3 tw-rounded-full tw-relative'>
        <span className="tw-text-5xl tw-text-lime-300  tw-absolute tw-top-20 tw-left-24 hover:tw-text-6xl tw-transform tw-duration-700">
          <KONDI className='hover:tw-text-stone-300 ' to="/login">Rent Giver Login</KONDI>

        </span>
        </div>
        <div className='right tw-h-56 tw-w-full tw-bg-emerald-600 tw-mx-3 tw-rounded-full tw-relative'>
        <span className="tw-text-5xl tw-text-amber-300 tw-absolute tw-top-20 tw-left-24 hover:tw-text-6xl tw-transform tw-duration-700">
          <KONDI className='hover:tw-text-stone-300 ' to="/login2">Rent Taker Login</KONDI>

        </span>
        </div>

        </div>

        
    </div>
  )
}

export default Fulllog
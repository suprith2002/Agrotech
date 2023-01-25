import axios from 'axios';
import { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/feather/search'
import { WeatherViewer } from './WeatherViewer'
import "./weatherstyle.css"
import { Forecast } from './Forecast';

    
    export const WeatherACC = () => {
      const [citySearch, setCitySearch] = useState('');
      const [cityData, setCityData]=useState(null);
        const fetchCity = (e) =>{
          e.preventDefault();
          axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ICfOrVGI3ofdnGODMlLrRMwyPbISOCdO&q=${citySearch}`)
          .then((res)=>{
            setCityData(res.data[0]);
            setCitySearch('');
          }).catch(err=>console.log(err.message));
        }
        

      return (
        <div className="wrapper we">
        <h1 className="headline">Weather Report</h1>
        <form className='form-group custom-form' autoComplete='off'
        onSubmit={fetchCity}>
          <label>Search for a city to get weather data</label>
          <div className='search-box'>
            <input className='form-control' required placeholder='Enter city name...'
            value={citySearch} onChange={(e)=>setCitySearch(e.target.value)}/>
            <button type='submit' className="btn btn-secondary btn-sm">
              <Icon icon={search} size={22}/>
            </button>
          </div>
        </form>
       <div className='tw-flex tw-flex-row'>{cityData&& <div className='tw-w-1/2' style={{padding:10+'px'}}><WeatherViewer cityData={cityData}/></div>}
        {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script> */}
       <> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<Forecast/></>
        </div> 
      </div>
      )
    }
    
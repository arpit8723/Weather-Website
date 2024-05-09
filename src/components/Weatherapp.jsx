import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from '../components/assets/search.png'
import clear_icon from '../components/assets/clear.png'
import cloud_icon from '../components/assets/cloud.png'
import drizzle_icon from '../components/assets/drizzle.png'
import humidity_icon from '../components/assets/humidity.png'
import rain_icon from '../components/assets/rain.png'
import snow_icon from '../components/assets/snow.png'
import wind_icon from '../components/assets/wind.png'


const Weatherapp = () => {
  let api_key ="3cb7a12102482052cffdf2cf96a1d46e";

  const[Wicon,setWicon] = useState(cloud_icon);


  const search = async () => {
    const element = document.getElementsByClassName("cityId")
    if(element[0].value==="")
    {
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response= await fetch(url);
    let data= await response.json();
    const humidity= document.getElementsByClassName("humidity-percent");
    const wind= document.getElementsByClassName("wind-speed");
    const temperature= document.getElementsByClassName("weathertemp");
    const location= document.getElementsByClassName("weatherlocation");
    humidity[0].innerHTML= data.main.humidity+"%";
    wind[0].innerHTML= data.wind.speed+"km/h";
    temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
    location[0].innerHTML= data.name;

    if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setWicon(clear_icon);
     
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setWicon(drizzle_icon);
      return{
        
      }
    
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon=="04n")
    {
      setWicon(drizzle_icon);
    
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setWicon(snow_icon);
    }
    else
    {
      setWicon(clear_icon);
    }

  }
  return (
        <div className = 'container'>
            <div className='top-bar'>
             <input type='text' className="cityId" placeholder='search'></input>   
             
              <div className='search_icon' onClick={()=>{search()}}>
             <img src={search_icon} alt="" />
              </div>
              

            </div>
            <div className='weather_img'>
                <img src={Wicon} alt="" />
              </div>
              <div className='weathertemp'>मौसम </div>
              <div className='weatherlocation'>weather companion</div>
              <div className='data-container'>
              <div className='element'>
                <img src={humidity_icon} alt="" className='icon' />
                <div className='data'>
                  <div className="humidity-percent"></div>
                  <div className='text'>Humidity</div>
                </div>     
                </div>
                <div className='element'>
                <img src={wind_icon} alt="" className='icon' />
                <div className='data'>
                  <div className="wind-speed"></div>
                  <div className='text'>Wind Speed</div>
                </div>
                 
                </div></div>        
        </div>
  )
}

export default Weatherapp
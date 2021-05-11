import { useState } from 'react';
import Loader from "react-loader-spinner";

import './App.css';

function App() {

let  [state, setState] = useState({});



navigator.geolocation.getCurrentPosition( function (data){


const long = data.coords.longitude;
const lat = data.coords.latitude;

fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoiZGV4Y2FybG9zIiwiYSI6ImNrb2hzNmd6MjBudGQybmxsMHFybjNvZW0ifQ.VTlqEeCl-zmlMFe-5_fYJQ`)
.then(res => res.json())
.then(data => {

})
})



function search(){
  let st ='';
  navigator.geolocation.getCurrentPosition(function (data){
    const long = data.coords.longitude;
const lat = data.coords.latitude;

  

  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoiZGV4Y2FybG9zIiwiYSI6ImNrb2hzNmd6MjBudGQybmxsMHFybjNvZW0ifQ.VTlqEeCl-zmlMFe-5_fYJQ`)
.then(res => res.json())
.then(data => {

  st = data.features[1].text

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${st}&appid=083e4b0bf8cb597569ee64c1d1334c6e`)
.then(res => res.json())
.then(result => {
  setState(result)
})
})
})
}


  return (

   
        

    <div className="App">
       <Loader 
        type="Puff"
        color="black"
        height={230}
        width={230}
        timeout={3000}
        className="load" //3 secs
      />

      <div className="container">
     
<h1>Wheater App</h1>
  {(typeof state.main != "undefined") ? (
      <div>
        <div className="box">
         {state.name}, {state.sys.country}
        </div>
        <div className="box">
        
            {Math.round(state.main.temp)}°c
          </div>
          <div className="box">
            {state.weather[0].main}
            </div>
          <div className="box">
            {state.weather[0].description}
            </div>
          <div className="box">
            wind: {state.wind.speed}
            </div>

           

        </div>
      
      ) : (
        <div className="location-box"></div>
      )}
      </div>
      <div className="box">
            <button onClick={search}>Obtener</button>

            </div>
    </div>
      

  );
  
}

export default App;

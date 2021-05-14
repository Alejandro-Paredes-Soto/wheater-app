import { useState, useEffect } from 'react';
import Service from './services/Service';
import ServiceWheater from './services/ServiceWeather';

import './App.css';

function App() {
const [weather, setWeather] = useState({});



useEffect(() => {
  navigator.geolocation.getCurrentPosition( function (data){
    Service(data.coords.longitude,data.coords.latitude).then(data => {

      let stateTwo = data.features[1].text;

      ServiceWheater(stateTwo).then(result => setWeather(result))

     
    }) 



  
  })
 
 
}, [])







  return (

   <div className="app">

   

         {(typeof weather.main != "undefined") ? (

           <div className="container">
             <h1>Weather-App</h1>
               <div className="box city">
              <h6>City:</h6>    {weather.name}
 
          </div>

       <div className="box country">
       <h6>Country:</h6>  {weather.sys.country}
 
          </div>

          <div className="box temp">
          <h6>Temperature:</h6>   {weather.main.temp}
          
      

          </div>

          <div className="box description">
          <h6>Description:</h6>    { weather.weather[0].main}

            </div>


            <div className="box description">
            <h6>Description:</h6>     {'  '+weather.weather[0].description}

            </div>


           
           </div>
          
         
         ):('')}
        

       

     </div>

   
        


  )
  
}

export default App;

import React, { useEffect, useState } from "react";
// import axios from 'axios';

// const[data,setData] = useState({})
// const[location,setLocation] = useState("")

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b7aaa2a7fb5cb5438c38e3dce0b9b033`

// const searchLocation =(event) =>{
//   if (event.key === 'Enter'){
//     axios.get(url).then((response) => {
//       setData(response.data)
//     })
//   }
//   }
function App() {
const [city,setCity] = useState(" ");
const[search,setSearch]=useState(" ");

useEffect( () => {
const fetchApi = async() =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b7aaa2a7fb5cb5438c38e3dce0b9b033`
   const response = await fetch(url);
   const resJson = await response.json();
  //  console.log(resJson);
  setCity(resJson);
}

  fetchApi();
})


  return (
    <div className="App">
      <div className="inputdata">
        <input
           // type="search"
           value={search}
           className="inputFeild"
           onChange={ (event) => { setSearch(event.target.value) } }
           placeholder="Enter Location" 
           type="text"/>
      </div>

{
  !city ? (
        <p> data not found</p>
  ) :(
        <div className="container">

        <div className="top">
           <div className="location"><h1>{city.name}</h1></div> 
           <div className="tamp">
               {city.main ? <h1>{city.main.temp} °C</h1>:null} 
               {/* <h1>{city.main.temp.toFixed()} for fixed value of tempreture°C</h1> */}
           </div>
           <div className="description"> {city.weather ? <p>{city.weather[0].main}</p>:null} </div>
        </div>
    
    <div className="bottom">
      <div className="feels"> {city.main ? <p className="bold">{city.main.feels_like} °C</p>:null} <p> Feels like</p></div>
      <div className="humidity">{city.main ? <p className="bold">{city.main.humidity} %</p>:null} <p>Humidity</p></div>
      <div className="wind"> {city.wind ? <p className="bold">{city.wind.speed} MPH</p>:null} <p> Wind Speed</p></div>
      </div> 
  </div>
  )
}
     
    </div>
  );
}

export default App;

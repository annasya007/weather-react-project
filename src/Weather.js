import React from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}`);
    }

let apiKey = "ce3605cd0ccb1bd651f8e3fb805629f6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);



    return (
        <Loader
        type="Puff"
        color="orange"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
}

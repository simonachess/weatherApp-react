import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    let [temperature, setTemperature] = useState(null);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

    if (props.city) {
        axios.get(url).then(showTemperature);
    }

    function showTemperature(response) {
        setTemperature(response.data.main.temp);
    }

    if (temperature) {
        return (
            <div className="weather-info">
                <h2>{props.city}</h2> 
                <h1>{Math.round(temperature)} °C</h1>
            </div>
        );
    } else {
        return <p className="local-temp">Local temperature</p>;
    }
}
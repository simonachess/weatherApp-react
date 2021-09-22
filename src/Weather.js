import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
            <div className="weather-info">
                <h2>{props.city}</h2> 
                <h1><span className="temperature">{Math.round(weatherData.temperature)}°</span>
                <span className="unit">C</span> </h1>
                <h5>{weatherData.description}</h5>
                <h5>Humidity:{weatherData.humidity}</h5>
                <h5>Wind:{weatherData.wind}</h5>
            </div>
        );
    } else {
        const apiKey = "3a94f3778290bfeee61278505dbbe51d";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

        if (props.city) {
            axios.get(url).then(handleResponse);
        }
        return <p className="local-temp">Local temperature</p>;
    }
}
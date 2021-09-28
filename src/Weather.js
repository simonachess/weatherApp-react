import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    
    React.useEffect(() => {
        const apiKey = "3a94f3778290bfeee61278505dbbe51d";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

        if (props.city) {
            axios.get(url).then(handleResponse);
        }
    }, [props]);

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

        });
    }

    if (weatherData.ready) {
        return (
            <div className="weather-info">
                <h2>{props.city}</h2> 
                <p><img alt="weather-icon" src={weatherData.iconUrl}/><span className="temperature">{Math.round(weatherData.temperature)}°</span>
                <span className="unit">C</span> </p>
                <h4 className="desc">{weatherData.description}</h4>
                <h4>Humidity: {weatherData.humidity} %</h4>
                <h4>Wind: {weatherData.wind} km/h</h4>
                <div>Last updated: <FormatedDate date= {weatherData.date} /></div>
            </div>
        );
    } else {

        return <p className="local-temp">Local temperature</p>;
    }
}
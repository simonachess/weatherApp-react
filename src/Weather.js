import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    
    useEffect(() => {
        const apiKey = "3a94f3778290bfeee61278505dbbe51d";
        // let longitude = 40.7;
        // let latitude= 74;
        // let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

        if (props.city) {
            axios.get(url).then(handleResponse);
        }
    }, [props]);

    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready:true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            // iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

        });
    }

    if (weatherData.ready) {
        return (
            <div className="weather-info">
                <h2>{props.city}</h2> 
                <p><WeatherIcon code={weatherData.icon} size={78}/>
                <span className="temperature">{Math.round(weatherData.temperature)}°</span>
                <span className="unit">C</span> </p>
                <h3 className="desc">{weatherData.description}</h3>
                <h3>Humidity: {weatherData.humidity} %</h3>
                <h3>Wind: {weatherData.wind} km/h</h3>
                <small className="last-updated">Last updated: <FormatedDate date= {weatherData.date} /></small>
                <Forecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {

        return <div className="local-temp"><p >Loading...</p> </div>;
    }
}
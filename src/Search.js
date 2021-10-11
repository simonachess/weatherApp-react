import React, { useState, useEffect } from "react";
import LocalTime from "./LocalTime";
import "./Search.css";
import Weather from "./Weather";
import axios from "axios";


export default function Search() {
    
    useEffect(() => {
        const apiKey = "3a94f3778290bfeee61278505dbbe51d";
         navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then((response) => {
            setCity(response.data.name);
        })
    });

    }, []);

    let [city, setCity] = useState("");
    let inputValue = '';

    function handleSubmit(event) {
        event.preventDefault();
        setCity(inputValue);
    }

    function updateCity(event) {
        inputValue=event.target.value;
    }

    return (
        <div className="search-date-container">
            <div className="city-container">
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={updateCity} autoFocus="on"/>
                    <input type="submit" value="Search" />
                </form>
                <div className="date-container">
                    <LocalTime />
                </div>
            </div>
            <div>
                <Weather city={city}/>
            </div>
        </div>
    );
}
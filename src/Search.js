import React, { useState } from "react";
import LocalTime from "./LocalTime";
import "./Search.css";
import Weather from "./Weather";


export default function Search() {
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
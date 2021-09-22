import React, { useState } from "react";
import "./Search.css";
import Weather from "./Weather";

export default function Search() {
    let [city, setCity] = useState("");
    let [inputValue, setInputValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setCity(inputValue);
    }

    function updateCity(event) {
        setInputValue(event.target.value);
    }

    return (
        <div className="search-date-container">
            <div className="city-container">
                
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={updateCity} />
                    <input type="submit" value="Search" />
                </form>
                
                <div className="date-container">
                    <p>September 22</p>
                    <p><span>Tuesday </span><span>11:05</span></p>
                </div>
            </div>
            <div>
                <Weather city={city} />
            </div>
        </div>
    );
}
import React, { useState } from "react";
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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={updateCity} />
                <input type="submit" value="Search" />
            </form>
            <Weather city={city} />
        </div>
    );
}
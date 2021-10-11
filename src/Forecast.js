import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
// import { useState } from "react/cjs/react.development";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null)
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
    }, [props])

    if (loaded) {
        return (<div className="forecast-container">
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
                        <div key={index}>
                            <ForecastDay data={dailyForecast} />
                        </div>)
                }
            })}
        </div>);
    }
    else {
        const apiKey = "3a94f3778290bfeee61278505dbbe51d";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

        axios.get(url).then(handleResponse);

        return null;
    }

}
import React from "react";

export default function ForecastDay(props) {

    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}℃`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}℃`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    return (<div>
        <div>Mon</div>
        <div>{day()}</div>
        {/* <div>{props.data.weather[0].icon}</div> */}
        <div>{maxTemp()}</div>
        <div>{minTemp()}</div>
    </div>)
}
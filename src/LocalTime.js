import React from "react";
import "./LocalTime.css"

export default function LocalTime() {

    function getDate() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();


        if (month.toString().length === 1) {
            month = '0' + month;
        }
        if (day.toString().length === 1) {
            day = '0' + day;
        }


        // let dateTime = `${year} ${month} ${day}\n${hour}:${minute}`;
        let showDate = year + '/' + month + '/' + day;
        return showDate;
    }


    function getTime() {
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        if (hour.toString().length === 1) {
            hour = '0' + hour;
        }
        if (minute.toString().length === 1) {
            minute = '0' + minute;
        }
        var showTime = hour + ':' + minute;
        return showTime
    }

    return <div className="local-time">
        <p>{getDate()}</p>
        <p>{getTime()}</p>
    </div>
}
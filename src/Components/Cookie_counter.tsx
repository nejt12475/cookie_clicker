import React from 'react';
import '../Styles/Cookie_counter.css';
const cookie_count =function (cookies: number) {
    if (cookies < 1000) {
        return cookies.toString();
    } else if (cookies >= 1000 && cookies < 1000000) {
        return (cookies / 1000).toFixed(1) + "K";
    } else if (cookies >= 1000000 && cookies < 1000000000) {
        return (cookies / 1000000).toFixed(1) + "M";
    } else if (cookies >= 1000000000 && cookies < 1000000000000) {
        return (cookies / 1000000000).toFixed(1) + "B";
    } else if (cookies >= 1000000000000 && cookies < 1000000000000000) {
        return (cookies / 1000000000000).toFixed(1) + "T";
    }}
const Cookie_counter =  (props:{cookies: number})=> {
const cookies = props.cookies


    return (
    <div className={"cookie_counter"}>{cookie_count(cookies)}</div>
        )
};
export default Cookie_counter;

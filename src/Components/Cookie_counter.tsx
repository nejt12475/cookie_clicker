import React from 'react';
import '../Styles/Cookie_counter.css';

const Cookie_counter =  (props:{cookies: number})=> {

    return (
    <div className={"cookie_counter"}>{props.cookies}</div>
        )
};
export default Cookie_counter;

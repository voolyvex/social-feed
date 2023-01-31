import React, { useState } from 'react';
import { HiOutlineLightBulb } from "react-icons/hi";

const BulbButton = () => {
    const [bulbLit, setBulbLit] = useState(false)

    return (
        <div classname="button-container">
            <label>Like</label>
            <button className={bulbLit ? "bulb-active" : "bulb-inactive"} onClick={() => setBulbLit(!bulbLit)}>
            Bulb 
            <HiOutlineLightBulb color={bulbLit? "orange" : "black"} fill={bulbLit? "yellow" : "darkgray"}/>
            </button>
        </div>
    )
}
export default BulbButton;
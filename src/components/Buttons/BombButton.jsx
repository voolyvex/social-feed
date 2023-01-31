import React, { useState } from 'react';
import { BiBomb } from "react-icons/bi";

const BombButton = () => {
    const [bombLit, setBombLit] = useState(false)

    return (
        <div classname="button-container">
            <label>Dislike</label>
            <button className={bombLit ? "bomb-active" : "bomb-inactive"} onClick={() => setBombLit(!bombLit)}
            >Bomb 
            <BiBomb color={bombLit? "red" : "black"} fill={bombLit? "crimson" : "black"}/>
            </button>
        </div>
    )
}
export default BombButton;
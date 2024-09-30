"use client"
import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1); 

    let currentQuantity = quantity;

    const increment = () => {
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        if (currentQuantity > 1) {
            setQuantity(currentQuantity - 1);
        }
    }

    let decrementButtonStyle = "text-white mr-2 bg-red-500 pl-3.5 pr-3.5 rounded";
    let incrementButtonStyle = "text-white bg-blue-500 pl-3 pr-3 rounded";

    if (currentQuantity >= 20) {
        incrementButtonStyle = "text-white bg-slate-400 pl-3 pr-3 rounded";
    }

    if (currentQuantity <= 1) {
        decrementButtonStyle = "text-white mr-2 bg-slate-400 pl-3.5 pr-3.5 rounded";
    }

    return (
        <div className="flex justify-center">
            <div className="flex justify-center items-center bg-white p-2 mt-2 w-fit">
                <p className="text-black mr-5 p-2">{currentQuantity}</p>
                <button className={decrementButtonStyle} onClick={decrement}>-</button>
                <button className={incrementButtonStyle} onClick={increment}>+</button>
            </div>
        </div>
    );
}
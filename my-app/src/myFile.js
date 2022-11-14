import React, {useState} from "react";
export default function MyFile(){

    const[temp,setTemp] =useState(14)
    const[mode,setMode] = useState("Cold")
    const[scale, setScale] = useState("°C")
    
    function convertScale(){

        if (scale === "°C"){
            setTemp((temp*9/5)+32)
            setScale("°F")

        }
        if (scale === "°F"){
            setTemp((temp-32)*5/9)
            setScale("°C")

        }
    }

    return(

        <div>
            <h2>Mode: {mode}</h2>
            <h1>Temperature is: {temp} {scale}</h1>
            <button onClick = {() =>{setTemp(temp+1)}}>+</button>
            <button onClick = {() =>{setTemp(temp-1)}}>-</button>
            <hr/>
            <hr/>
        <button onClick = {()=> {setMode("Cold")}}>Cold</button>
        <button onClick = {()=> {setMode("Heat")}}>Heat</button>
        <button onClick = {()=> {setMode("Auto")}}>Auto</button>
        <hr/>
        <button onClick = {()=> {setScale("°C")}}>Celsius</button>
        <button onClick = {()=> {setScale("°F")}}>Farniente</button>
        <button onClick = {()=> {convertScale()}}>Convert</button>
        

        </div>
    )
    }
import { useState } from 'react'

export default function DarkMode(props) {

    const style = {
        background: props.isDarkMode ? "#697384" : "#ECF0F6",
        color: props.isDarkMode ? "#ECF0F6" : "#697384",
        transition: "all 0.2s ease"
    }

    // background: !isDarkMode ? "#a7d1e9" : "#293b5f",
    return (
        <div onClick={() =>
            props.setIsDarkMode(prevTheme => !prevTheme)} style={style} className="theme-btn">
           <ion-icon  name={props.isDarkMode ? "moon-sharp" : "sunny-sharp"}></ion-icon> 
        </div>
    )
}
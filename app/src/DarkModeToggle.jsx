import { useState } from 'react'

export default function DarkMode(props) {

    const style = {
        background: props.isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
        color: props.isDarkMode ? "#666" : "#f2f2f2",
        transition: "all 0.2s ease"
    }

    return (
        <div onClick={() =>
            props.setIsDarkMode(prevTheme => !prevTheme)} style={style} className="theme-btn">
           <ion-icon  name={props.isDarkMode ? "moon-sharp" : "sunny-sharp"}></ion-icon> 
        </div>
    )
}
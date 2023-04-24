import { useState } from 'react'

export default function DarkMode(props) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const style = {
        background: isDarkMode ? "white" : "#697384",
        color: isDarkMode ? "#697384" : "white",
        transition: "all 0.2s ease"
    }

    return (
        <div onClick={() => setIsDarkMode(prevTheme => !prevTheme)} style={style} className="theme-btn">
           <ion-icon  name={isDarkMode ? "moon-sharp" : "sunny-sharp"}></ion-icon> 
        </div>
    )
}
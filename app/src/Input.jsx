import { useState } from 'react'

export default function Input(props) {

    const [input, setInput] = useState("")
    const [location, setLocation] = useState([])

    function handleInputChange(e) {
        setInput(e.target.value)
      }
      
     function handleSubmit(e) {
       e.preventDefault()
       props.setApi(prevState => ({...prevState, location: input}))
       props.setIsSubmitted(true)
       props.setCount(prevCount => prevCount + 1)
       setInput("")
     }

     function handleLocationClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => setLocation({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }))
        }
     }


    return (
        <div className="weather-input">
            <form 
            className="weather-input-form" 
            onSubmit={handleSubmit}>
                <input value={input} className="weather-input-el" placeholder="Search location (e.g. New York, USA)" onChange={handleInputChange} type="text"/>
                <button className="weather-input-btn" type="submit"><ion-icon name="search-sharp"></ion-icon></button>
            </form>
            <button onClick={handleLocationClick}><ion-icon name="navigate"></ion-icon></button>
        </div>
    )
}
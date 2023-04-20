import { useState } from 'react'

export default function Input(props) {

    const [input, setInput] = useState("")
   

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





    return (
        <div className="weather-input">
            <div className="weather-input-container">
                <form 
                className="weather-input-form" 
                onSubmit={handleSubmit}>
                    <input value={input} className="weather-input-el" placeholder="Search location (e.g. New York, USA)" onChange={handleInputChange} type="text"/>
                    <button className="weather-input-btn" type="submit"><ion-icon name="search-sharp"></ion-icon></button>
                </form>
                <button className="weather-input-geo-btn" onClick={props.handleGeoSubmit}><ion-icon name="navigate"></ion-icon></button>
            </div>
        </div>
    )
}
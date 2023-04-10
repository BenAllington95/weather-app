import { useState } from 'react'

export default function Input(props) {

    const [input, setInput] = useState("")
    const [isSubmitted, setIsSubmitted] = useState("")

    function handleInputChange(e) {
        setInput(e.target.value)
      }
      
     function handleSubmit(e) {
       e.preventDefault()
       props.setApi(prevState => ({...prevState, location: input}))
       props.setIsSubmitted(prevState => !prevState)
     }


    return (
        <div className="weather-input">
            <form className="weather-input-form" onSubmit={handleSubmit}>
                <input className="weather-input-el" placeholder="Search for a location" onChange={handleInputChange} type="text"/>
                <button className="weather-input-btn" type="submit">Search</button>
            </form>
        </div>
    )
}
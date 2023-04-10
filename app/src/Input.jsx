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
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search for a location" onChange={handleInputChange} type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
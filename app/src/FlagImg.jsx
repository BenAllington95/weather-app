import React, { useState, useEffect } from "react";

function FlagImage(props) {
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {

    const apiUrl = `https://restcountries.com/v3.1/alpha/gb?fields=flags`;
    
    fetch(apiUrl)
      .then(res => res.json())
        then(data => console.log(data))
        
  }, []);

  return (
    // <img src={flagUrl} 
    // alt={`${props.countryCode} flag`} 
    // width={props.width} />
    <></>
  )
}

export default FlagImage;

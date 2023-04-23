import React, { useState, useEffect } from "react";

function FlagImage(props) {

  const style={
    borderRadius: "5px"
  }

  return (
    <img src={props.flagUrl} 
    alt={`${props.countryCode} flag`} 
    width={props.width} 
    height={props.height}
    style={style}

    /> 
  )
}

export default FlagImage;

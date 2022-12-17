import React from 'react'
import './style.css'





const CityCard = ({ city }) => {

  const cityCardStyle = {
    color: "white",
    textAlign: "center",
    height: "100px",
    fontSize: "12px",
    border: "dotted black 2px",
    backgroundImage: `url("${city.image_url}")`,
  }
  
  return (
    <div id="cityCard" style={cityCardStyle}>
      <h1>{city.name}</h1>
      <h2>{city.property_count}</h2>
    </div>
  )
}

export default CityCard
import React from 'react'
import './style.css'





const CityCard = ({ city }) => {

  const cityCardStyle = {
    color: "white",
    textAlign: "center",
    height: "300px",
    width: "400px",
    marginTop: "30px",
    fontSize: "12px",
    border: "dotted black 2px",
    backgroundImage: `url("${city.image_url}")`,
    backgroundSize: "cover",
    borderRadius: "24px"
  }

  const paddingTop= {padding: "150px 0 0 0"}

  return (
    <div id="cityCard" style={cityCardStyle}>
      <h1 style={paddingTop}>{city.name}</h1>
      <h2>{city.property_count} properties</h2>
    </div>
  )
}

export default CityCard
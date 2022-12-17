import React from 'react'
import './style.css'


const CityCard = ({city}) => {


  return (
    <div>
      <h1>{city.name}</h1>
      <h1>{city.property_count}</h1>
    </div>
  )
}

export default CityCard
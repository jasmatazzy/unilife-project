import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'


const CityCard = (props) => {


  return (
    <div>
      <div>{props.city.name}</div>
    </div>
  )
}

export default CityCard
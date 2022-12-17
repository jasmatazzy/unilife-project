import React from 'react'

const CompareCard = (props) => {
  return (
    <div>
        <img src={props.srcURL} alt="icon"/>
        <h2>{props.CTA}</h2>
        <h3>{props.description}</h3>
    </div>
  )
}

export default CompareCard
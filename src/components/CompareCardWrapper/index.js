import React from 'react'
import CompareCard from '../CompareCard'
import searchIcon from "../../assets/icon-search.png"
import compareIcon from "../../assets/icon-compare.png"
import billsIncludedIcon from "../../assets/icon-compare.png"

const CompareCardWrapper = () => {

  const compareCardSectionStyle ={
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
  }

  const compareCardStyle={
    height: "30px",
    width: "100px",
  }
  return (
    <section id="compareCardPartOne" style={compareCardSectionStyle}>
      <div>
        <CompareCard style={compareCardStyle}
          srcURL={searchIcon}
          CTA="Search"
          description="Find your dream home in the perfect area near your university."
        />
        <CompareCard style={compareCardStyle}
          srcURL={compareIcon}
          CTA="Compare"
          description="Compare student accommodation to find the right home for you."
        />
        <CompareCard style={compareCardStyle}
          srcURL={billsIncludedIcon}
          CTA="Bills Included"
          description="Bills are included in all rent prices. No hidden fees."
        />
      </div>
    </section>
  )
}

export default CompareCardWrapper
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CityCard from '../../components/CityCard';
import "./style.css"



function Homepage() {
    const [cities, setCities] = useState([]);

    const cardWrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
    useEffect(
        () => {
            axios.get('https://unilife-server.herokuapp.com/cities')
                .then((response) => {
                    console.log(response.data.response);
                    setCities(response.data.response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []
    )

    return (
        <div>
            <div style={cardWrapperStyle}>
                {cities.map(
                    (city) => {
                        return <CityCard
                            city={city}
                            id={city.id}
                        />
                    }
                )}
            </div>
            <button>See All Cities</button>
        </div>
    )
}

export default Homepage
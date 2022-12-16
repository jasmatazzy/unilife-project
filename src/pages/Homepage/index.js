import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CityCard from '../../components/CityCard';



function Homepage() {
    const [cities, setCities] = useState([]);

    useEffect(
        () => {
            axios.get('https://unilife-server.herokuapp.com/cities?limit=7')
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
            {cities.map(
                // (city)=>JSON.stringify(city.name, null, 2)
                (city) => <CityCard
                    city={city}
                    key={city._id}
                />
            )}
        </div>
    )
}

export default Homepage
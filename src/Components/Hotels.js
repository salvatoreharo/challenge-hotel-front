import React, { useState, useEffect } from "react";
import HotelActive from './HotelActive';

const API_HOST = "http://localhost:8000/api/";

const Hotels = () => {
  const [hotels, setHotels] = useState(null)
  const [activeHotelId, setActiveHotelId] = useState(null)

  useEffect(() => {
    fetch(`${API_HOST}hotels/avaliable`)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data)
      })
  }, [])

  return (
    hotels && (
      <>
        <h1>Hoteles Disponibles</h1>
        <ul>
            {hotels.map((hotel, i) => {
                return <li key={i} onClick={() => setActiveHotelId(hotel.id)}>{hotel.name}</li>
            })}
        </ul>
        { activeHotelId && <HotelActive hotelId={activeHotelId}/> }
      </>
    )
  )
}

export default Hotels;

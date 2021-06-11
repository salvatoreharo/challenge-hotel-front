import React, { useState, useEffect } from "react";

const API_HOST = "http://localhost:8000/api/";

const HotelActive = (props) => {
  const [rooms, setRooms] = useState(null)
  const [hotelName, setHotelName] = useState('')

  useEffect(() => {
    fetch(`${API_HOST}rooms/types/${props.hotelId}`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data)
        if (data.length) {
            setHotelName(data[0].hotelName)
        }
      })
  }, [props.hotelId])

  return (
    rooms && (
      <>
        <h1>Habitaciones Disponibles en {hotelName}</h1>
        <ul>
            {rooms.map((room, i) => {
                return <li key={i} onClick={() => null}>{room.roomType}</li>
            })}
        </ul>
        
      </>
    )
  )
}

export default HotelActive;

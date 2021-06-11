import React, { useState, useEffect } from "react";
import AppSpinner from "./AppSpinner";

const API_HOST = "http://localhost:8000/api/";

const HotelActive = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState(null);
  const [hotelName, setHotelName] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_HOST}rooms/types/${props.hotelId}`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        if (data.length) {
          setHotelName(data[0].hotelName);
          setIsLoading(false);
        }
      });
  }, [props.hotelId]);

  return (isLoading) ? <AppSpinner /> : (
    rooms && (
      <>
        <div className="card mt-4">
          <img
            className="card-img-top"
            src="https://www.riu.com/fr/binaris/habitacion-room_tcm57-54085.jpg?v=tm270120_0852"
            alt="Habitacion de hotel"
            style={{ height: "180px", width: "100%", display: "block" }}
          />
          <div className="card-body">
            <div className="card-title h5">Habitaciones en {hotelName}</div>
            <p className="card-text">
              Ahora selecciona la habitacion de tu preferencia
            </p>
          </div>
          <div className="list-group-flush list-group">
            {rooms.map((room, i) => {
              return (
                <button
                  key={i}
                  className={"list-group-item list-group-item-action "}
                  onClick={() => null}
                >
                  {room.roomType}
                  <span className="badge text-success float-right mt-1">
                    {room.total} disponibles
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </>
    )
  );
};

export default HotelActive;

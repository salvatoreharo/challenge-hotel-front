import React, { useState, useEffect } from "react";
import MySpinner from "./MySpinner";
import FormReservation from "./FormReservation";

const API_HOST = "http://localhost:8000/api/";

const HotelActive = (props) => {
  const [rooms, setRooms] = useState(null);
  const [hotelName, setHotelName] = useState("");
  const [roomType, setRoomType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updated, setUpdated] = useState(1);

  const closedModal = (saved=null) => {
    setRoomType(null);
    if (saved === true) {
      setUpdated(updated+1)
    }
  };

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
  }, [props.hotelId, updated]);

  return isLoading ? (
    <MySpinner />
  ) : (
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
                  onClick={() => setRoomType(room.roomType)}
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
        {roomType && (
          <FormReservation
            hotelId={props.hotelId}
            hotelName={hotelName}
            roomType={roomType}
            closed={closedModal}
          />
        )}
      </>
    )
  );
};

export default HotelActive;

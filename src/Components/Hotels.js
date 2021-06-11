import React, { useState, useEffect } from "react";
import HotelActive from "./HotelActive";

const API_HOST = "http://localhost:8000/api/";

const Hotels = () => {
  const [hotels, setHotels] = useState(null);
  const [activeHotelId, setActiveHotelId] = useState(null);

  useEffect(() => {
    fetch(`${API_HOST}hotels/avaliable`)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
      });
  }, []);

  return (
    hotels && (
      <>
        <div className="card mt-4">
          <div className="card-body">
            <div className="card-title h5">Hoteles</div>
            <div className="mb-2 text-muted card-subtitle h6">
              Elige una habitacion en la lista de hoteles disponibles
            </div>
            <div className="list-group">
              {hotels.map((hotel, i) => {
                  let activeClass = hotel.id === activeHotelId ? 'active' : '';
                return (
                  <button
                    key={i}
                    className={"list-group-item list-group-item-action " + activeClass}
                    onClick={() => setActiveHotelId(hotel.id)}
                  >
                    {hotel.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {activeHotelId && <HotelActive hotelId={activeHotelId} />}
      </>
    )
  );
};

export default Hotels;

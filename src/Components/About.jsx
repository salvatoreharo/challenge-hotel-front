import React, { useState } from "react";
import Reservations from "./Reservations";

const API_HOST = "http://localhost:8000/api/";

const About = () => {
  const [email, setEmail] = useState('');
  const [reservations, setReservations] = useState(null);

  const search = (e) => {
    fetch(`${API_HOST}reservations/email/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
      });
  }

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="card-title h5">Mis Reservaciones</div>
          <div className="mb-2 text-muted card-subtitle h6">
            Usa tu correo para consultar tus reservaciones
          </div>
          <div className="mt-4">
            <div className="mb-3 input-group">
              <span className="input-group-text">Correo</span>
              <input
                aria-label="First name"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={(e) => search(e)}>BUSCAR</button>
          </div>
        </div>
      </div>
      {email && reservations && <Reservations email={email} reservations={reservations} />}
    </>
  );
};

export default About;

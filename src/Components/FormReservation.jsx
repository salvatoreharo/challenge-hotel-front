import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SweetAlert from 'react-bootstrap-sweetalert';

const API_HOST = "http://localhost:8000/api/";

const FormReservation = (props) => {
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(null);
  
  const onSave = () => {
    let data = {
      hotelId: props.hotelId,
      roomType: props.roomType,
      email: email
    }
    fetch(`${API_HOST}reservations/user`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      setSaved(true);
    });
  }

  const closeAlert = () => {
    setSaved(null);
    props.closed(true);
  }

  return (
    <>
      {
        saved === true && <SweetAlert success title="Reservado!" onConfirm={closeAlert}>
          Gracias tu reservacion fue registrada correctamente
        </SweetAlert>
      }
      <Modal show={true} onHide={props.closed}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar Habitacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Completa la siguiente informacion y reservaremos la habitacion{" "}
          {props.roomType} en {props.hotelName}
          <div className="mt-4">
            <div className="mb-3 input-group">
              <span className="input-group-text">Correo</span>
              <input aria-label="First name" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closed}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onSave}>
            Reservar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormReservation;

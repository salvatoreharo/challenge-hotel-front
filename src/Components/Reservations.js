import React from "react";

const printList = (reservations) => {
  return reservations.map((reservation, i) => {
    return (
      <button
        key={i}
        className={
          "list-group-item list-group-item-action "
        }
      >
        {reservation.hotelName + ' - ' + reservation.roomType}
      </button>
    );
  })
}

const printEmpty = (email) => {
  return (
    <>No hay reservaciones con el email {email}</>
  )
}

const Reservations = ({ email, reservations }) => {
  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          { reservations.length ? printList(reservations) : printEmpty(email)}
        </div>
      </div>
    </>
  );
};

export default Reservations;

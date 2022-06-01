import React, { useState } from "react";

export default function Card({
  username,
  name,
  email,
  deleteItem,
  index,
  address,
  website,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="card__item" onClick={() => setOpen(true)}>
        <h3>{name}</h3>
        <hr />
        <p className="main__text">
          <b>Username:</b> {username}
        </p>
        <p className="main__text">
          <b>Email:</b> {email}
        </p>
        <button className="btn" onClick={() => deleteItem(index)}>
          Delete
        </button>
      </li>
      {open && (
        <div className="modal__container" onClick={() => setOpen(false)}>
          <div className="modal">
            <h3 className="modal__title">{name}</h3>
            <button className="popup__btn" onClick={() => setOpen(false)}>
              <img
                className="popup__btn__img"
                src="./close_btn.png"
                alt="close button"
              />
            </button>
            <p className="main__text--popup">
              <b>City:</b> {address.city}
              <hr />
            </p>
            <p className="main__text--popup">
              <b>Street:</b> {address.street}
              <hr />
            </p>
            <p className="main__text--popup">
              <b>Website: </b>
              {website}
              <hr />
            </p>
          </div>
        </div>
      )}
    </>
  );
}

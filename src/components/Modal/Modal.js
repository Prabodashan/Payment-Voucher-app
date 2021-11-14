import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ setmodeldata, lock }) {
  if (lock) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {
        <div className="modal">
          <div onClick={setmodeldata} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={setmodeldata}>
              X
            </button>
            <h2>Terms and Conditions</h2>
            <p>
              <br />
              This is an open source website <br />
              (github repository :
              https://github.com/Prabodashan/Payment-Voucher-app.git ).
              <br /> As the developer, we do not accept any responsibility for
              the content you include in the PDF you obtain using this
              application and for any use of it. <br /> As a user you are
              responsible for how this is used and what is done using it.
            </p>
          </div>
        </div>
      }
    </>
  );
}

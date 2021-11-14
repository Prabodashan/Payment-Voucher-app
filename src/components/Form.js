import React from "react";
import { useState } from "react";

export const Form = ({ setVoucherData }) => {
  const [Voucher, setFormVoucherData] = useState({
    Date: "",
    Name: "",
    Address: "",
    Description: "",
    Rate: 0,
    Hours: 0,
  });

  function changeVoucherData(e) {
    setFormVoucherData({ ...Voucher, [e.target.name]: e.target.value });
  }

  function submitDataHandler() {
    setVoucherData(Voucher);
  }

  return (
    <>
      <div>
        <label>Enter Date:</label>
        <input
          type="date"
          name="Date"
          value={Voucher.Date}
          onChange={changeVoucherData}
        />
        <label>Enter Payer name:</label>
        <input
          type="text"
          name="Name"
          value={Voucher.Name}
          onChange={changeVoucherData}
        />
        <label>Enter Payer Address:</label>
        <input
          type="text"
          name="Address"
          value={Voucher.Address}
          onChange={changeVoucherData}
        />
        <br />
        <label>Enter Description:</label>
        <textarea
          type="text"
          name="Description"
          value={Voucher.Description}
          onChange={changeVoucherData}
        />
        <br />
        <label>Enter Rate:</label>
        <input
          type="number"
          name="Rate"
          value={Voucher.Rate}
          onChange={changeVoucherData}
        />
        <br />
        <label>Enter No. Hours:</label>
        <input
          type="number"
          name="Hours"
          value={Voucher.Hours}
          onChange={changeVoucherData}
        />
        <button onClick={submitDataHandler}>Submit</button>
      </div>
    </>
  );
};

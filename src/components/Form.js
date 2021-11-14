import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = ({ setVoucherData, setmodeldata, printDiv }) => {
  const [Voucher, setFormVoucherData] = useState({
    Date: "",
    Name: "",
    Address: "",
    Description: "",
    Rate: 0,
    Hours: 0,
  });

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  function changeVoucherData(e) {
    setFormVoucherData({ ...Voucher, [e.target.name]: e.target.value });
  }

  function submitDataHandler() {
    if (checked) {
      setVoucherData(Voucher);
    } else {
      toast.error("team and condtion");
    }
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
        <div className="left1">
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <p>
            By clicking here, I state that I have read and understood the{" "}
            <a onClick={setmodeldata}>terms and conditions</a> .
          </p>
        </div>
        <br />
        <button className="btn-submit" onClick={submitDataHandler}>
          Submit
        </button>
        <button className="btn-submit" onClick={printDiv}>
          Print
        </button>

        <ToastContainer />
      </div>
    </>
  );
};

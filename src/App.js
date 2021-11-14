import { PaymentVoucher } from "./components/PaymentVoucher";
import { Form } from "./components/Form";

import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [appVoucher, setappVoucherData] = useState({
    Date: "",
    Name: "",
    Address: "",
    Description: "",
    Rate: 0,
    Hours: 0,
  });

  const [modal, setModal] = useState(false);

  const [print, setprint] = useState(false);

  function showmodel(e) {
    e.preventDefault();
    setModal(!modal);
  }

  function printReport() {
    setprint(!print);
    console.log(print);
  }

  return (
    <div className="main">
      <div className="leftSide">
        <Form
          setVoucherData={setappVoucherData}
          setmodeldata={showmodel}
          printDiv={printReport}
        />
      </div>
      <div className="rightSide">
        <PaymentVoucher
          voucherdata={appVoucher}
          printValue={print}
          printDiv={printReport}
        />
      </div>
      {modal && <Modal setmodeldata={showmodel} lock={modal} />}
    </div>
  );
};

export default App;

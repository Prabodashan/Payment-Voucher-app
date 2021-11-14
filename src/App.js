import { PaymentVoucher } from "./components/PaymentVoucher";
import { Form } from "./components/Form";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [appVoucher, setappVoucherData] = useState({});

  return (
    <div className="main">
      <div className="leftSide">
        <Form setVoucherData={setappVoucherData} />
      </div>
      <div className="rightSide">
        <PaymentVoucher voucherdata={appVoucher} />
      </div>
    </div>
  );
};

export default App;

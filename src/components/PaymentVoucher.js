import React from "react";
import converter from "number-to-words";

import "./PaymentVoucher.css";

export const PaymentVoucher = ({ voucherdata }) => {
  const num = voucherdata.Rate * voucherdata.Hours;
  const word = "";
  if (num) {
    word = converter.toWords(num);
  }
  return (
    <div className="Vmain">
      <section className="center">
        <p className="hdr">ශ්‍රී ලංකාවේ විවෘත විශ්වවිද්‍යාලය</p>
        <p className="hdr">THE OPEN UNIVERSITY OF SRI LANKA</p>
      </section>
      <br />
      <br />
      <table className="left width tbl">
        <tbody>
          <tr>
            <th width="18%">මුදල් වර්ෂය</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2" width="30%">
              123456789
            </th>
            <th width="18%">වවුචර් අංකය</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2" width="30%"></th>
          </tr>
          <tr>
            <td>Financial Year</td>
            <td>Voucher No.</td>
          </tr>
          <tr>
            <th>පීඨය</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2">123456789</th>
            <th>චෙක්පත් අංකය</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2"></th>
          </tr>
          <tr>
            <td>Faculty</td>
            <td>Cheque No.</td>
          </tr>
          <tr>
            <th>දෙපාර්තමේන්තුව / අංශය</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2">123456789</th>
            <th>දිනය</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2"></th>
          </tr>
          <tr>
            <td>Department / Division</td>
            <td>Date</td>
          </tr>
          <tr>
            <th>පාඨමාලාව</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2">123456789</th>
            <th>වැය ලේජර පිටුව </th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2"></th>
          </tr>
          <tr>
            <td>Program</td>
            <td>Votes Ledger Folio</td>
          </tr>
          <tr>
            <th>ගිණුම</th>
            <th rowSpan="2">{"}"}</th>
            <th rowSpan="2"></th>
          </tr>
          <tr>
            <td>Account</td>
          </tr>
        </tbody>
      </table>
      <div className="padding width">
        <p className="floatleft">Payable to &emsp;</p>
        <p className="floatleft">{voucherdata.Name}</p>
        <p className="floatright">ට ගෙවිය යුතුයි</p>
        <br />
        <br />
        <p>ලිපිනය / Address &emsp; {voucherdata.Address}</p>
        <br />
        <hr />
      </div>
      <table className="width tablet ">
        <tbody>
          <tr>
            <th rowSpan="2" width="10%">
              දිනය <br /> date
            </th>
            <th rowSpan="2" width="50%">
              ඉටුකළ සේවයේ හො කරන ලද වැඩයේ හෝ සැපයු බඩුවල හෝ <br /> විස්තරත්
              අවශ්‍ය නම් අනුමත කරන ලද නිලධාරියාගේ සහතිකයත්
              <br />
              Description of services rendered, work executed or good supplied,{" "}
              <br />
              and authorizing officer’s certificate where necessary
            </th>
            <th rowSpan="2" width="20%">
              ගාස්තු ප්‍රමාණය <br /> Rate
            </th>
            <th colSpan="2" className="padding">
              මුදල <br />
              Amount
            </th>
          </tr>
          <tr>
            <th>
              රු <br /> Rs.
            </th>
            <th>
              ශත <br /> Cts
            </th>
          </tr>
          <tr>
            <th className="divtext">{voucherdata.Date}</th>
            <th>
              <p className="left height divtext">{voucherdata.Description}</p>
              <p className="left">
                ගෙවිමට ඇති බලය සහ ගොනු සම්බන්ධ <br />
                Authority for payment and reference to file
                <br />
                <br />
                <br />
                <br />
              </p>
            </th>
            <th className="divtext">
              {voucherdata.Rate} X {voucherdata.Hours}
            </th>
            <th className="divtext">{voucherdata.Rate * voucherdata.Hours}</th>
            <th>00</th>
          </tr>
          <tr>
            <th>
              එකතුව වචනයෙන්
              <br />
              Total in Words
            </th>
            <th className="left">
              රුපියල්
              <br />
              Rupees : {word} Only
            </th>
            <th>
              එකතුව ඉලක්කමෙන්
              <br />
              Total in Figures
            </th>
            <th className="divtext">{voucherdata.Rate * voucherdata.Hours}</th>
            <th className="divtext">00</th>
          </tr>
        </tbody>
      </table>
      <br />
      <section className="width dis">
        <div className="floatleft height justify paddingtleft ">
          <p className="divtext">
            අදාළ ලියකියවිලි නිවැරදියි
            <br />
            වවුචරය සකස් කරන ලද්දේ
            <br />
            .......................................
            <br />
            වි.ලි./කාය්‍යීභාර නිලධාරි
            <br />
            දිනය :..............................
            <br />
            .......................................
            <br />
            නිවැරදි ගාස්තු ප්‍රමාණය
            <br />
            වැය ශිර්ෂය විධි වු අවසරය
            <br />
            හා ගණන් බැලිම් පරික්ෂා කළේ
            <br />
            .......................................
            <br />
            වි.ලි./ පරික්ෂා කළ නිළධාරි
            <br />
            දිනය :..............................
          </p>
        </div>
        <div className="floatleft height center paddingtleft">
          <p className="divtext">
            විධි වු අවසරලත් ආදායකයා
            <br />
            සේවය/සැපයීම නිවැරදි බව
            <br />
            සහතික කරමි.
            <br />
            .................................
            <br />
            සේවය/සැපයිම සහතික කරන
            <br />
            නිලධාරියා
            <br />
            දිනය :..............................
          </p>
        </div>
        <div className="height justify paddingtleft">
          <p className="divtext">
            ගෙවිම අනුමත කරමි. <br />
            ...................................... <br />
            තනතුර :-
            <br />
            දිනය:-
            <br />
            නිල මුද්‍රව තබන්න
            <br />
            ඉහත සදහන් සැපයිම්/සේවාවන්/වැඩ විධිමත් අනුමැතිය යටතේ <br />
            ඉටු වී ඇති බවත්, ගෙවිම රෙගුලාසිවලට අනුකුල වන බවත්
            <br />
            සහතික කරමි. ගෙවිය යතු මුදල රු ..............
            <br />
            ශත ............. කි.
            <br />
            ............................................
            <br />
            වියදම් සහතික කරන නිලධාරි
            <br />
            දිනය :..............................
          </p>
        </div>
      </section>
      <hr />
      <section className="padding width">
        <p className="divtext">
          ඉහත සදහන් ගණනය වෙනුවෙන් රුපියල්
          ...................................................................................................................
          <br />
        </p>
        <p className="floatleft divtext">20.............මස </p>
        <p className="floatright divtext">වෙනිදා වන මෙදින</p>
        <br />
        <p className="floatleft divtext">
          භාර ගතිමි.
          <br />
          Received this
          .....................................................................................................
          day of .........................................
          20......................................... in payment of the above{" "}
          <br />
          account, the sum of rupees
        </p>
      </section>
      <br />
      <section>
        <br />
        <br />
        <br />
        <table className="left width tbl ">
          <tbody>
            <tr>
              <td className="divtext">
                <div>
                  සාක්ෂිකාරයො : <br /> Witnesses
                </div>
              </td>
              <td rowSpan="2">
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              </td>
              <td className="dis" rowSpan="2">
                <div className="divtext">
                  ලබන්නාගේ <br /> Signature of
                </div>
                <div className="box"></div>
                <div className="divtext">
                  අත්සන <br /> Reciever
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <br />
        <hr />

        <p className="divtext">
          ගෙවන නිලධාරියාගේ අත්සන සහ දිනය <br /> Signature of Paying Officer and
          Date
        </p>
        <hr />
      </section>
    </div>
  );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style-footer.scss";
export default function Footer() {
  return (
    <>
      <div className="font-footer">
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <h1>CONTACT US</h1>
              <h2>บริษัท ออลล์เว็บ เทคโนโลยี จำกัด</h2>
              <h3>สาขาปทุมธาน </h3>
              <p>
                14880 หมู่ 1 ต.บ้านกลาง อ.เมืองปทุมธานี จ.ปทุมธานี 1200 โns.
                081-5359230 , 099-2863635
              </p>
              <h3>สาขานครราชสีมา</h3>
              <p>
                3279/24 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000
                โnS.044-353-569, 044-353-298 มือถือ 081-535-9230
              </p>
            </Col>
            <Col md={6} lg={6}>
              <h3>Allweb technology Company Limited</h3>
              <p>
                14880 Moo 1 Banklang, Mueng Pathum Thani, Pathum Thani 12000
                327924 Suebsiri Rd., T.Nimueng,
                A.Mueng,NakhonRatchasima,Thailand 30000 E-mail
                allweb.technology@gmail.com Tel.+6644353569,+6644353298,
                +66815359230 ID Line allwebcctv
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="Picture/Footer/line-P-poun.jpg"
                        alt=""
                        width="100%"
                      ></img>
                    </td>

                    <td className="td-img">
                      <a
                        href="https://line.me/R/ti/p/%40hua8211q"
                        target="_black"
                      >
                        <img src="Picture/Footer/line-icon.png" alt=""></img>
                        <br />
                      </a>
                      <a
                        href="https://www.facebook.com/allwebtechnology/"
                        target="_black"
                      >
                        <img
                          src="Picture/Footer/Facebook-Logo.png"
                          alt=""
                        ></img>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

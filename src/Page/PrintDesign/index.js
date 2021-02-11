import React, { useState } from "react";
import "./style-print.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
export default function PrintDesign() {
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  const [state3, setstate3] = useState(false);
  const [state4, setstate4] = useState(false);
  const [state5, setstate5] = useState(false);
  const [state6, setstate6] = useState(false);
  return (
    <>
      <div className="print-header">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div className="print-header-img">
                <Fade left>
                  <img src="Picture/p-home/icon-service-2.png" alt=""></img>
                </Fade>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="print-header-text">
                {" "}
                <Fade bottom>
                  <h1>ออกแบบสื่อสิ่งพิมพ์</h1>
                  <p>
                    ใช้ความคิดสร้างสรรค์ของเราและประสบการณ์ที่ลึกซึ้งของเรา
                    เพื่อมอบโซลูชั่นการออกแบบการพิมพ์ที่ไม่เหมือนใคร
                  </p>
                </Fade>{" "}
                <Fade bottom>
                  <Link to="/contact">
                    <button>
                      <span>ติดต่อเรา</span>
                    </button>
                  </Link>{" "}
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="print-photos">
        <div className="print-photos-text">
          <Fade bottom>
            <h1>ตัวอย่างงาน</h1>
            <p>
              ด้วยประสบการณ์มากกว่า 10 ปี เราสามารถสร้างงานตามความต้องการของคุณ
            </p>
          </Fade>
        </div>

        <div className="print-photos-1">
          <div class="card">
            <img
              class="card-image"
              src="Picture/printdesig/re-5.jpg"
              alt="card"
              style={{ cursor: "pointer" }}
              onClick={() => setstate1(true)}
            />
            {state1 ? (
              <div className="card-onclick" onClick={() => setstate1(false)}>
                <img
                  src="Picture/printdesig/re-5.jpg"
                  alt="card"
                  className="img-1"
                ></img>
                <span class="button-1">close</span>
              </div>
            ) : null}
            <div class="card-body">
              <h3 class="card-title">สื่อสิ่งพิมพ์</h3>
              {/* <p class="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
            </div>
          </div>
          <div class="card">
            <img
              class="card-image"
              src="Picture/printdesig/re-2.jpg"
              alt="card"
              style={{ cursor: "pointer" }}
              onClick={() => setstate2(true)}
            />{" "}
            {state2 ? (
              <div className="card-onclick" onClick={() => setstate2(false)}>
                <img
                  src="Picture/printdesig/re-2.jpg"
                  alt="card"
                  className="img"
                ></img>
                <span class="button-1">close</span>
              </div>
            ) : null}
            <div class="card-body">
              <h3 class="card-title">โปสการ์ด</h3>
              {/* <p class="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
            </div>
          </div>
          <div class="card">
            <img
              class="card-image"
              src="Picture/printdesig/re-1.jpg"
              alt="card"
              style={{ cursor: "pointer" }}
              onClick={() => setstate3(true)}
            />{" "}
            {state3 ? (
              <div className="card-onclick" onClick={() => setstate3(false)}>
                <img
                  src="Picture/printdesig/re-1.jpg"
                  alt="card"
                  className="img"
                ></img>
                <span class="button-1">close</span>
              </div>
            ) : null}
            <div class="card-body">
              <h3 class="card-title">สื่อสิ่งพิมพ์</h3>
              {/* <p class="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
            </div>
          </div>
          <div class="card">
            <img
              class="card-image"
              src="Picture/printdesig/re-7.jpg"
              alt="card"
              style={{ cursor: "pointer" }}
              onClick={() => setstate4(true)}
            />{" "}
            {state4 ? (
              <div className="card-onclick" onClick={() => setstate4(false)}>
                <img
                  src="Picture/printdesig/re-7.jpg"
                  alt="card"
                  className="img"
                ></img>
                <span class="button-1">close</span>
              </div>
            ) : null}
            <div class="card-body">
              <h3 class="card-title">นิทรรศการป๊อปอัพ</h3>
              {/* <p class="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
            </div>
          </div>
          <div class="card">
            <img
              class="card-image"
              src="Picture/printdesig/re-11.jpg"
              alt="card"
              style={{ cursor: "pointer" }}
              onClick={() => setstate5(true)}
            />{" "}
            {state5 ? (
              <div className="card-onclick" onClick={() => setstate5(false)}>
                <img
                  src="Picture/printdesig/re-11.jpg"
                  alt="card"
                  className="img-1"
                ></img>
                <span class="button-1">close</span>
              </div>
            ) : null}
            <div class="card-body">
              <h3 class="card-title">ปฏิทิน</h3>
              {/* <p class="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
            </div>
          </div>

          <div class="card">
            <img
              class="card-image"
              src="Picture/printdesig/re-12.jpg"
              alt="card"
              style={{ cursor: "pointer" }}
              onClick={() => setstate6(true)}
            />{" "}
            {state6 ? (
              <div className="card-onclick" onClick={() => setstate6(false)}>
                <img
                  src="Picture/printdesig/re-12.jpg"
                  alt="card"
                  className="img"
                ></img>
                <span class="button-1">close</span>
              </div>
            ) : null}
            <div class="card-body">
              <h3 class="card-title">โปสการ์ด</h3>
              {/* <p class="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="print-solutions">
        <div className="print-solutions-text">
          <h1>โซลูชันการออกแบบการพิมพ์ของเราประกอบด้วย</h1>
        </div>
        <div className="print-solutions-img">
          <Container>
            <Row>
              <Col md={6}>
                <div className="Brochure">
                  <h2>การออกแบบโบรชัวร์</h2>
                </div>
              </Col>
              <Col md={6}>
                <div className="poster">
                  <h2>การออกแบบโปสเตอร์และโฆษณา</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="print-tools">
        <div className="print-tools-text">
          <h1>เครื่องมือออกแบบ</h1>
        </div>
        <div className="print-tools-case-1">
          <img src="Picture/web design/tools/adobe.png" alt="tools"></img>
          <h1>adobe suite</h1>
          <p>ทีมงานจะใช้ซอฟต์แวร์ adobe ในการผลิตงานศิลปะที่ดีที่สุด</p>
        </div>
      </div>
      <div className="print-contact">
        <h3>อยากให้การออกแบบเป็นเรื่องง่ายติดต่อเรา</h3>
        <Link to="/contact">
          <button>
            <span>ติดต่อเรา</span>
          </button>
        </Link>
      </div>
    </>
  );
}

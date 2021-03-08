import React from "react";
import "./style-home.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
export default function Home() {
  return (
    <>
      <div className="home-header">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="Picture/p-home/p-home-header.png"
                alt=""
                width="100%"
              ></img>
            </Col>
            <Col className="text-header" md={6}>
              <h1>
                กราฟฟิคครีเอทีพในออลล์เว็บดีไซน์
                <br />
                ผู้เชี่ยวชาญในด้านการสร้างเว็บไซต์ และสื่อสิ่งพิมพ์
              </h1>

              <p>
                ด้วยประสบการณ์ที่มากกว่า 10 ปี
                ที่เราได้ช่วยเหลือดูแลลูกค้าในประเทศไทย และ ทั่วโลก
              </p>
              <div className="home-header-buttion">
                <Link to="/contact">
                  <button>
                    <span>ติดต่อเรา</span>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-project">
        <div className="home-project-text">
          <Reveal effect="fadeInUp" effectOut="fadeOutLeft">
            <h1>ตัวอย่างงาน</h1>

            <p>ออลล์เว็บดีไซน์มีงานที่หลากหลาย และทันสมัย</p>
          </Reveal>
        </div>
        <div className="home-project-1">
          <Link to="/webdesign">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/vip fitness.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">VIP Fitness</h3>
                {/* <p className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </Link>
          <Link to="/webdesign">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/siri.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">ศิริมงคลพระเครื่อง</h3>
                {/* <p className="card-content">
                
              </p> */}
              </div>
            </div>{" "}
          </Link>
          <Link to="/webdesign">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/mit.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title"> มิตรภาพการพิมพ์ </h3>
                {/* <p className="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </Link>
          <Link to="/printdesign">
            <div className="card">
              <img
                className="card-image"
                src="Picture/printdesig/re-7.jpg"
                alt="card"
              />
              <div className="card-body">
                <h3 className="card-title">นิทรรศการป๊อปอัพ</h3>
                {/* <p className="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
              </div>
            </div>{" "}
          </Link>
          <Link to="/printdesign">
            <div className="card">
              <img
                className="card-image"
                src="Picture/printdesig/re-11.jpg"
                alt="card"
              />
              <div className="card-body">
                <h3 className="card-title">ปฏิทิน</h3>
                {/* <p className="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
              </div>
            </div>
          </Link>
          <Link to="/printdesign">
            <div className="card">
              <img
                className="card-image"
                src="Picture/printdesig/re-12.jpg"
                alt="card"
              />
              <div className="card-body">
                <h3 className="card-title">โปสเตอร์ การ์ด</h3>
                {/* <p className="card-content">เราใส่ใจทุกความต้องการของลูกค้า</p> */}
              </div>
            </div>{" "}
          </Link>
        </div>
      </div>
      <div className="home-services ">
        <div className="home-services-text ">
          <h1>บริการของเรา</h1>
          <p>ความต้องการของคุณและจินตนาการของเราเพื่อสร้างอัตลักษณ์ของคุณ</p>
        </div>
        <Container>
          <Row>
            <Col md={6} className="home-services-scale">
              <Link to="/webdesign">
                <img src="Picture/p-home/icon-service-1.jpg" alt=""></img>
                <h1>เว็บดีไซน์</h1>
              </Link>
            </Col>

            <Col md={6} className="home-services-scale">
              <Link to="/printdesign">
                <img src="Picture/p-home/icon-service-2.png" alt=""></img>
                <h1>ออกแบบสิ่งพิมพ์</h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home-contact">
        <h1>สร้างผลงานที่ยอดเยี่ยม...</h1>
        <Link to="/contact">
          <button className="button button1">ติดต่อ</button>
        </Link>
      </div>
    </>
  );
}

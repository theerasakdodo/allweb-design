import React from "react";
import Iframe from "react-iframe";
import "./style-contact.scss";
import { Container, Row, Col } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      {/* <div className="cotact-header">
        <Container>
          <h1>Contact</h1>
        </Container>
      </div> */}
      <div className="cotact-header-title">
        <Container>
          <Row className="col-contact">
            <Col md={6} sd={2}>
              <div class="demo-solution demo-solution--flexbox">
                <img src="Picture/contact/gmail.png" alt="gmail-icon" />
                <h6>Email</h6>
              </div>
              <p>allweb.technology@gmail.com</p>
            </Col>
            <Col md={6} sd={2}>
              <div class="demo-solution demo-solution--flexbox">
                <img src="Picture/contact/telephone.png" alt="gmail-icon" />
                <h6>โทรศัพท์</h6>
              </div>
              <p>Tel.+6644353569,+6644353298, +66815359230</p>
            </Col>
            <Col md={6} sd={2}>
              <div class="demo-solution demo-solution--flexbox">
                <img src="Picture/contact/facebook.png" alt="gmail-icon" />
                <h6>FB Messenger</h6>
              </div>
              <p> allweb technology</p>
            </Col>
            <Col md={6} sd={2}>
              <div class="demo-solution demo-solution--flexbox">
                <img src="Picture/contact/line.png" alt="gmail-icon" />
                <h6>LINE@</h6>
              </div>
              <p>ID Line allwebcctv</p>
            </Col>
          </Row>
          <div className="map-contact">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3297.513882741723!2d102.057141!3d14.957799000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7452cdb34eed27fe!2sAll%20Web%20Technology!5e1!3m2!1sth!2sth!4v1611737474418!5m2!1sth!2sth"
              width="100%"
              height={200}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

import React from "react";
import "./style-WebDesign.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function WebDesign() {
  return (
    <>
      <div className="web-header" alt="">
        <img src="Picture/web design/web-header.png" alt=""></img>
        <div className="web-header-text">
          <h1>
            สร้างเว็บไซต์อย่างมีประสิทธิภาพ โดดเด่น มีเอกลักษณ์ และทันสมัยกว่า
          </h1>
          <Link to="/contact">
            <button>
              <span>ติดต่อเรา</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="web-picture">
        <div className="web-picture-text">
          <h1>ผลงานของเรา</h1>
        </div>
        <div className="ek">
          <Container>
            <h1>หน่วยงานรัฐ</h1>
          </Container>{" "}
          <a href="http://sukkasaem.com/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/rat/rat-1.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title"> เทศบาลตำบลหัวทะเล </h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>{" "}
          <a href="http://www.klongpaicentralprison.go.th/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/rat/rat-2.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">เรือนจำกลางคลองไผ่</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a href="  http://www.lamprapleng.com/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/rat/rat-3.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">โครงการส่งน้ำ</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a
            href="https://bankhwao.go.th/%e0%b8%ab%e0%b8%99%e0%b9%89%e0%b8%b2%e0%b9%81%e0%b8%a3%e0%b8%81/"
            target="_black"
          >
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/rat/rat-4.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">เทศบาลตำบลบ้านเขว้า</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a
            href="https://chae.go.th/%e0%b8%ab%e0%b8%99%e0%b9%89%e0%b8%b2%e0%b9%81%e0%b8%a3%e0%b8%81/"
            target="_black"
          >
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/rat/rat-5.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">อบต.แชะ</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>
          </a>
          <a href="https://lamnangkaeo.go.th/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/rat/rat-6.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">เทศบาลตำบลลำนางแก้ว</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>
          </a>
        </div>
        <div className="rat">
          <Container>
            <h1>หน่วยงานเอกชน</h1>
          </Container>
          <a href="  http://vipfit.co.th/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/vip fitness.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">VIP Fitness</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a href=" http://www.sirimongkols.com/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/siri.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">ศิริมงคลพระเครื่อง</h3>
                {/* <p class="card-content">
                
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a href=" http://www.print-dee.com/" target="_black">
            <div className="card">
              <img
                class="card-image"
                src="Picture/web design/ek/mit.png"
                alt=""
              />
              <div className="card-body">
                <h3 class="card-title"> มิตรภาพการพิมพ์ </h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a href=" http://www.thepsatitview.com/" target="_black">
            <div className="card">
              <img
                class="card-image"
                src="Picture/web design/ek/lnw.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title"> เทพสถิตวิวล์ รีสอร์ท</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a href=" https://www.kspavilion.com/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/ks.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title"> โรงแรม เค.เอส. พาวิลเลี่ยน</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>{" "}
          </a>
          <a href=" http://www.cadetgroup.com/" target="_black">
            <div className="card">
              <img
                className="card-image"
                src="Picture/web design/ek/Cadet Group.png"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">Cädet Group</h3>
                {/* <p class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              </div>
            </div>
          </a>
        </div>
        <div className="web-picture-button">
          <h1>สร้างเว็บไซต์อย่างมีประสิทธิภาพของคุณ...</h1>
          <Link to="/contact">
            <button>
              <span>ติดต่อเรา</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="web-tools">
        <div className="web-tools-text">
          <h1>เครื่องมือ</h1>
        </div>
        <div className="web-tools-picture">
          <Container>
            <Row>
              <Col md={4}>
                <div className="web-tools-1">
                  <img
                    src="Picture/web design/tools/react.png"
                    alt="tools-react"
                  ></img>
                  <h1>React</h1>
                </div>
              </Col>
              <Col md={4}>
                <div className="web-tools-2">
                  <img
                    src="Picture/web design/tools/adobe.png"
                    alt="tools-adobe"
                  ></img>
                  <h1>Adobe</h1>
                </div>
              </Col>
              <Col md={4}>
                <div className="web-tools-3">
                  <img
                    src="Picture/web design/tools/node-js.png"
                    alt="tools-node"
                  ></img>
                  <h1>Node js</h1>
                </div>
              </Col>
              <Col md={4}>
                <div className="web-tools-4">
                  <img
                    src="Picture/web design/tools/responsive.png"
                    alt="tools-node"
                  ></img>
                  <h1>Responsive</h1>
                </div>
              </Col>
              <Col md={4}>
                <div className="web-tools-5">
                  <img
                    src="Picture/web design/tools/wordpress.png"
                    alt="tools-wordpress"
                  ></img>
                  <h1>Wordpress</h1>
                </div>
              </Col>
              <Col md={4}>
                <div className="web-tools-6">
                  <img
                    src="Picture/web design/tools/google.png"
                    alt="tools-wordpress"
                  ></img>
                  <h1>Google Analytics</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

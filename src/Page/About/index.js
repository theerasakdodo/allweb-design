import React from "react";
import "./style-about.scss";

export default function About() {
  return (
    <>
      <div className="header-about">
        <div className="header-about-img-1">
          <img src="Picture/about/about-icon.png" alt=""></img>
        </div>
        <div className="header-about-text">
          <h1>about</h1>
          <div className="text-p">
            <p>
              <span>มากกว่าสิบปี</span> ที่ ออลล์เว็บ ดีไซน์
              ได้บริหารและพัฒนาระบบงานอย่างต่อเนื่องเพื่อมุ่งมั่นพัฒนาสินค้า
              <br />
              และงานบริการของเราอย่างสร้างสรรค์
              พร้อมกับตอบสนองความต้องการของลูกค้าต่อไป
              <br />
              โดยเราได้รับความไว้วางใจจากลูกค้า ต้องอาศัยหลักการทำงานที่ว่า
              <span>“ความซื่อสัตย์ </span>คือ <span>คุณธรรมของเรา”</span>
              <br /> นี่เป็นบทพิสูจน์ได้ว่า ออลล์เว็บ ดีไซน์
              จะอยู่เคียงข้างคุณในด้านผู้ให้บริการอย่างมีคุณภาพตราบนานเท่านาน
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

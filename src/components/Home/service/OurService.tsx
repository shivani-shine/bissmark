import React from "react";
import { howitwork } from "Common/constants";
import ServicesCard from "Common/components/ServicesCard";
import OurServiceStyle from "Styles/Home/OurService.module.css";
import { Card, Col, Row } from "react-bootstrap";

const OurService = () => {
  return (
    <section className={OurServiceStyle.w_c_section}>
      <div className="container">
        <div
          className={`${OurServiceStyle.what_we_can_do_for_you} text-center`}
        >
          <div className={OurServiceStyle.heading_wrapper}>
            <span>WORKING PROCESS</span>
          </div>
          <h2 className={OurServiceStyle.heading}>HOW IT WORKS</h2>
          {/* <p className={OurServiceStyle.sub_heading}>
            Open the path to great business opportunities and grow your business
            with our web designing and development services.
          </p> */}
        </div>
        <div className="row">
          {howitwork.map((item) => (
            <ServicesCard
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              body={item.body}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;

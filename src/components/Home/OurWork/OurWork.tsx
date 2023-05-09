import { useState, useEffect } from "react";
import OurWorkStyle from "Styles/Home/OurWork.module.css";
import { trademarklayers } from "Common/constants";
import ServicesCardtwo from "Common/Servicecomponents/ServiceCardtwo";
import Image from "next/image";

const OurWork = () => {
  return (
    <section className={OurWorkStyle.works_our}>
      <div className="container">
        <div className={`${OurWorkStyle.our_work} text-center`}>
          <div className={OurWorkStyle.heading_wrapper}>
            <span>Service's We Offer</span>
          </div>
          <h2 className={OurWorkStyle.heading}>
          We are trademark lawyers committed to doing registration
          </h2>
        </div>
        <div className="row">
          {trademarklayers.map((item) => (
            <ServicesCardtwo
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

export default OurWork;

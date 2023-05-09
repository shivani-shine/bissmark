import React from "react";
import HireForm from "../HireForm/HireForm";
// import "./HireBanner.css";
import styles from 'Styles/Hire/HireBanner.module.css'

const HireBanner = (props:any) => {
  const { setShowSideBar } = props;
  return (
    <section className={`${styles.home_banner} ${styles.banner} ${styles.hireBanner}`}>
      <div className={styles.banner_contact}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h1>{props.heading}</h1>
              <p>{props.desc}</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className={styles.banner_form}>
                <HireForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireBanner;

import React, { useEffect, useRef, useState } from "react";
import aboutimg1 from "Assets/images/about/office-img-1.png";
import Planning from "Assets/images/ourprocess/planning_icon.png";
import Solution from "Assets/images/ourprocess/solution.png";
import Design from "Assets/images/ourprocess/design.png";
import app from "Assets/images/ourprocess/app.png";
import Devops from "Assets/images/ourprocess/devops.png";
import Support from "Assets/images/ourprocess/support.png";
import styles from "Styles/OurProcess.module.css";
import Image from "next/image";
import Technologies from "Components/Home/Technologies/Technologies";

const OurProcess = () => {
  return (
    <div className="our-process-container">
      <section className={`${styles.aboutBanner}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-6 text-section">
              <h1>Our Process</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row align-items-end">
                {/* <div className="col-sm-12 col-lg-8">
                  <video autoPlay loop muted id="myVideo">
                    <source
                      src={"Assets/video/OurTeam.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div> */}
                {/* <div className="col-sm-4 d-xs-none d-md-block "> */}
                  <Image className={styles.ourprocessImg} src={aboutimg1} alt="aboutimg"/>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* T E C H N O L O G I E S   S E C T IO N   */}

      <div>
        <Technologies />
      </div>

      <section className={`${styles.our_process_content}`}>
        <div className={styles.container_2}>
          <div className={`${styles.our_process_content}`}>
            <div className={`${styles.line_layout_row}`}>
              <div className={`col-xs-3 col-sm-3 ${styles.img_section_op}`}>
                <span>
                  <Image  className={styles.img} src={Planning} alt="planing"/>
                </span>
              </div>
              <div className={`col-xs-9 col-sm-9 ${styles.pl45} ${styles.Project_planning_content}`}>
                <span>Project planning</span>
                <p>
                  The idea for the project is explored and elaborated; decisions
                  are made concerning the time and cost budgets. Project
                  proposal including business plans and grant applications is
                  created.
                </p>
              </div>
            </div>
            <div className={`${styles.line_layout_row}`}>
              <div className={`col-xs-9 col-sm-9 ${styles.pr45} ${styles.Project_planning_content}`}>
                <span>solution architecture</span>
                <p>
                  The idea for the project is explored and elaborated; decisions
                  are made concerning the time and cost budgets. Project
                  proposal including business plans and grant applications is
                  created.
                </p>
              </div>
              <div className={`col-xs-3 col-sm-3 ${styles.img_section_op}`}>
                <span>
                  <Image className={styles.img} src={Solution} alt= "solution"/>
                </span>
              </div>
            </div>
            <div className={`${styles.line_layout_row}`}>
              <div className={`col-xs-3 col-sm-3 ${styles.img_section_op}`}>
                <span>
                  <Image className={styles.img} src={Design} alt="design"/>
                </span>
              </div>
              <div className={`col-xs-9 col-sm-9 ${styles.pl45} ${styles.Project_planning_content}`}>
                <span>UI Design</span>
                <p>
                  Depending on the subject of the project, the products of the
                  design phase can include dioramas, sketches, flow charts, site
                  trees, HTML screen designs, prototypes, photo impressions and
                  UML schemas. The project supervisors use these designs to
                  choose the definitive design that will be produced in the
                  project. This is followed by the development phase.
                </p>
              </div>
            </div>
            <div className={`${styles.line_layout_row}`}>
              <div className={`col-xs-9 col-sm-9 ${styles.pr45} ${styles.Project_planning_content}`}>
                <span>App/Web-dev &amp;QA</span>
                <p className="col-sm-9">
                  The project takes shape during the implementation phase. This
                  phase involves the construction of the actual project result.
                  Programmers are occupied with encoding, designers are involved
                  in developing graphics and testers in chasing the bugs.
                </p>
              </div>
              <div className={`col-xs-2 col-sm-3 ${styles.img_section_op}`}>
                <span>
                  <Image className={styles.img} src={app}  alt="app"/>
                </span>
              </div>
            </div>
            <div className={`${styles.line_layout_row}`}>
              <div className={`col-xs-3 col-sm-3 ${styles.img_section_op}`}>
                <span>
                  <Image className={styles.img} src={Devops}  alt="devops"/>
                </span>
              </div>
              <div className={`col-xs-9 col-sm-9 ${styles.pl45} ${styles.Project_planning_content}`}>
                <span>Devops &amp; Deployment</span>
                <p>
                  Depending on the subject of the project, the products of the
                  design phase can include dioramas, sketches, flow charts, site
                  trees, HTML screen designs, prototypes, photo impressions and
                  UML schemas. The project supervisors use these designs to
                  choose the definitive design that will be produced in the
                  project. This is followed by the development phase.
                </p>
              </div>
            </div>
            <div className={`${styles.line_layout_row}`}>
              <div className={`col-xs-9 col-sm-9 ${styles.pr45} ${styles.Project_planning_content}`}>
                <span>Support &amp; Maintenance</span>
                <p>
                  The project takes shape during the implementation phase. This
                  phase involves the construction of the actual project result.
                  Programmers are occupied with encoding, designers are involved
                  in developing graphics and testers in chasing the bugs.
                </p>
              </div>
              <div className={`col-xs-3 col-sm-3 ${styles.img_section_op}`}>
                <span>
                  <Image className={styles.img} src={Support}  alt="support"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;

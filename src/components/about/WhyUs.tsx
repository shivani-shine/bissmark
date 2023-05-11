import React, { useEffect, useRef, useState } from "react";
import styles from "Styles/WhyUs.module.css";

const WhyUs = () => {
  return (
    <div>
      <div className={`${styles.aboutBanner}`}>
        <div className="container">
          <div className="row">
            <h1 className={styles.whyus_main_text}>Why Us ?</h1>
            <div style={{ textAlign:'center'}}>
            <button className={styles.btn_online}>Everything Online!</button>
            <button className={styles.start_btn}>START NOW!</button>
            </div>
          </div>
        </div>
      </div>

      <section className={`${styles.welcome_section}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              {/* <div className={`${styles.heading_wrapper}`}>
                <span>why us ?</span>
              </div> */}
              {/* <h2>Leading Web, App, and Software Development Agency</h2> */}
              <p className="mb-0" style={{ fontSize:"16px"}}>
                Once upon a time, there was an entrepreneur named Joseph. He had
                started his own business selling perfumes and was excited to see
                it grow. As time passed, he began to gain popularity in the
                market and became famous all over the U.S. However, after
                sometime a similar brand was launched by a smaller vendor into
                the market with similar goods. He got to know about it with his
                friend Wendy, and then Wendy suggested, he should protect his
                brand by registering a trademark so that he could protect his
                brand from infringement and circulating similar products in the
                market by his brand name.{" "}
              </p>{" "}
              <br />
              <p style={{ fontSize:"16px"}}>
                However, Joseph had no idea where to start, to whom he should
                consult about the Trademark registration. So he asked Wendy
                about the Trademark registration services, and who is best in
                the market. Then, Wendy knew about a trademark firm that boasted
                a team of experienced attorneys and promised to deal with all
                aspects of the trademark registration process. Wendy suggested a
                trademark registration firm known as <span>“Bissmarks”</span> to
                Joseph. Intrigued, Joseph decided to learn more and contact
                Bissmarks Attorneys who had provided all details about
                protecting his brand with a trademark.
              </p>
              <p style={{ fontSize:"16px"}}>
                Joseph decided to work with the Bissmarks team for protecting
                his brand and his belief came true. Today, his brand is
                successfully registered as a Trademark in the U.S. There are
                several companies, enterprises, and individuals like Joseph, who
                believe in Bissmarks's team and successfully obtain trademark
                registrations. When it comes to safeguarding your brand,
                selecting the correct trademark firm makes all difference. Here
                are some reasons why our firm stands out from the rest:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.why_choose_section}>
        <div className="container">
          <div className={`row ${styles.choose_services}`}>
            <div
              className={`col-lg-3 col-md-6 col-sm-6 ${styles.whyus_heading}`}
            >
              <div className={`${styles.detailed_web_sol}`}>
              {/* <span className={`${styles.numbers_style}`}>
                01. */}
                  {/* <Image src={Delivery} alt="delivery" /> */}
                {/* </span> */}
                <h4>Comprehensive services</h4>
                <p>
                  Our team has done thorough trademark searches and filing
                  applications to manage enforcement actions along with
                  resolving disputes. Bissmarks provides a comprehensive range
                  of trademark services. We handle every process of trademark
                  registration by providing end-to-end support to protect your
                  brand. By believing and handing over your brand protection to
                  us, now you can focus on your business while we deal with
                  legal complexity.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-3 col-md-6 col-sm-6 ${styles.whyus_heading}`}
            >
              <div className={`${styles.detailed_web_sol}`}>
              {/* <span className={`${styles.numbers_style}`}>
                02. */}
                  {/* <Image src={Team} alt="team" /> */}
                {/* </span> */}
                <h4>Experience and Expertise</h4>
                <p>
                  The Bissmarks has a team of highly qualified and years of
                  experienced trademark attorneys. They are well-versed in the
                  complexity of trademark law and have a track record of success
                  in registering trademarks for clients.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-3 col-md-6 col-sm-6 ${styles.whyus_heading}`}
            >
              <div className={`${styles.detailed_web_sol}`}>
                <h4>Effective and Timely service</h4>
                <p>
                  Time is the key element in each process, especially in
                  trademark protection. Bissmarks prioritizes efficiency and
                  aims to give prompt services without compromising quality. Our
                  team understand the importance of meeting deadlines and will
                  work carefully to ensure your trademark application is filed
                  and processed promptly.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-3 col-md-6 col-sm-6 ${styles.whyus_heading}`}
            >
              <div className={`${styles.detailed_web_sol}`}>
                <h4>Personalized approach</h4>
                <p>
                  The Bissmarks team has adopted the personalized approach,
                  unlike other online services that give a one-size-fits-all
                  solution. Bissmarks offered tailored advice based on each
                  client’s unique needs. They took the time to understand
                  Joseph’s business and provided him with personalized
                  recommendations on how to best protect his brand.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-3 col-md-6 col-sm-6 ${styles.whyus_heading}`}
            >
              <div className={`${styles.detailed_web_sol}`}>
                <h4>Client’s Satisfaction</h4>
                <p>
                  Bissmarks track record speaks for itself. We have a long list
                  of satisfied clients who believed in us with their trademark
                  requirements. Our client’s success stories and testimonials
                  provide a testament to our excellence, commitment, and
                  satisfaction of clients. Our team is fully dedicated to
                  providing exceptional outcomes and forgoing long-term work
                  commitments with our clients.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-3 col-md-6 col-sm-6 ${styles.whyus_heading}`}
            >
              <div className={`${styles.detailed_web_sol}`}>
                <h4>Transparency and Communication</h4>
                <p>
                  Bissmarks commits to transparency with its clients. The firm
                  provided a clear breakdown of all costs associated with the
                  trademark registration process upfront. So, there were no
                  surprises or hidden fees. Our firm also kept Joseph informed
                  at each step of the way and gave regular updates on the
                  progress of his application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        {" "}
        <div className="container">
          <p style={{ fontSize:"16px"}}>
            Selecting the correct trademark is a vital decision for successfully
            attaining the protection of your brand. However, now it is not tough
            with our team’s comprehensive search, experience and expertise,
            communication and transparency, personalized approach, and proven
            client satisfaction. Our global presence and Attorney’s huge
            experience will make you believe in us and choose Bissmarks. We are
            confident enough to become your ideal Attorney and protect your IP
            assets.
          </p>
          <p style={{ fontSize:"16px", marginBottom:"40px"}}>
            You are free to contact us and our team today to discuss your
            trademark requirements and take the first step towards securing and
            protecting your brand identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
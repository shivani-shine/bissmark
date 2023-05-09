import React from "react";
import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import OurProcess from "./Components/OurProcess/OurProcessSection";


const HireDataScientist = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Data Scientist.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Data Science is an emerging technology trend incorporated 
        by various businesses globally. To retrieve particular information 
        from data you need a data scientist. The data scientists have hands-on 
        experience in dealing with both structured and unstructured data. 
        These experts apply processes, algorithms, and scientific methods to fetch
         it and perform actionable insights on an enormous amount of data. Our data scientists
          would revolutionize your business and enhance your work process. It would help you
           predict the future and make precise decisions based on the data. This is why 
           every business needs data scientists to make their work smooth.`}
      />
      <section className={styles.dataScientist}>
        <div className="container">
          <p className="text-center">
            Our data scientist will incorporate the latest marketing trend and
            provide a complete report. Our data scientists help you comprehend
            the marketing curve and help you implement ways of doing modern
            business. Our team consists of both data analytics and data mining
            experts. Our data scientists implement mathematical techniques
            precisely and devise algorithms used to analyze the data. Our data
            scientists would resolve any concerns experienced by you and give
            updates from time to time. Meeting the client's requirements and
            improving the business is our ultimate goal.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            Services Offered by Our Skilled Team of Data Scientists
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Data Science Strategy</h5>
                <p>
                  We curate a data science strategy to help the business
                  prosper. An accurate strategy is formed by including the
                  concepts of machine learning and statistical techniques. The
                  data is leveraged with methods and sources and has opened
                  multiple identifications with data science techniques.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Data Science Consulting</h5>
                <p>
                  Our data scientists have hands-on experience in providing data
                  visualization services. We incorporate it so that every format
                  or workflow is visible to them. The visualization is
                  implemented in real-time and general interactions related to
                  data occur. Data visualization helps them make a beneficial
                  and manageable decisions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Development in Data Science</h5>
                <p>
                  Data development is an integral part of our services. Our data
                  scientists devise plans to optimize and implement them to
                  deliver the desired results. The plans are implemented after
                  having a word with the clients.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Secure Data Development</h5>
                <p>
                  We understand how precious the data is for you. Our data
                  scientists take the responsibility to keep the data secure and
                  minimize risk management. We help you comprehend the analytics
                  of the use of data along with the debugging function. Secure
                  data development prevents your data from being hacked, lost,
                  or misused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ProcessSection}>
        <div className="container">
          <h3 className="innerHeading">
            Why Hire Data Scientists from Spineor Web Services?
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Experts in Data Structure and Modelling</h5>
                <p>
                  Data science consists of two main parts structured and
                  unstructured data. To handle both types of data, we need
                  experts who possess sound knowledge of data structure and
                  modeling. Additionally, valuable information from the data is
                  retrieved that contributes to business growth.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Access to Upgrade Tools</h5>
                <p>
                  Our data scientists know the traditional methods and make
                  strenuous efforts to keep themselves up to date with the
                  latest techniques. In addition, our data scientists devise
                  unique techniques based on the requirements and provide the
                  results that you're looking for. The entire work is performed
                  efficiently by our team of experts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Provide Quality Results</h5>
                <p>
                  Delivering quality results has been our topmost priority.
                  Every project is tested against a quality meter until the
                  desired results aren't achieved. We provide solutions to
                  transform your regular data into a high-quality one. This
                  would heighten your business and enhance its performance.
                  Quality assurance and timely delivery is our ultimate goal.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Support & Maintenance</h5>
                <p>
                  Forming an enduring relationship with our clients is our main
                  objective. Our data scientists render 24/7 support in case you
                  have any queries or concerns. The clients can contact us
                  directly as we believe open and honest communication is the
                  key to long-lasting relationships. Our work doesn't complete
                  after project delivery; timely maintenance is also an integral
                  part of our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurProcess/>
      <Process />
    </div>
  );
};

export default HireDataScientist;

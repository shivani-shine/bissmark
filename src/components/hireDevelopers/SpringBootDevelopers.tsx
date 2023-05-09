import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import processStyles from "Styles/Hire/OurProcessSection.module.css"
const SpringBootDevelopers = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Spring Boot Developers.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Spring Web was introduced in 2002 and is popular as a Java-based framework used to create both web and mobile applications. It has numerous features and functionalities and also fulfills cutting-edge business requirements across the globe. Transform your existing project into a spring Boot framework under the guidance of a spring boot developer.
        `}
      />
      <section className={styles.ourProcessSection}>
        <div className="container">
          <p>
            Several working apps take advantage of Java Spring boot as it loads
            promptly and is safe. Another main reason for using Spring Boot is
            the ease of comprehension. Just code once and operate the
            application anywhere. Application transfer won't be a hassle as the
            framework doesn't need vendor-specific installation descriptors. You
            can organize beans in various methods, including XML, Annotations,
            and Java Configurations. The number of Java Spring boot development
            firms has grown drastically, which has surged the demand for spring
            applications.
          </p>
        </div>
      </section>
      <section className={styles.ourProcessSection}>
        <div className="container">
          <h3 className="innerHeading">
            Take Advantage of Intuitive Spring Boot Development
          </h3>
          <p>
            Our Java Spring Boot developers possess extensive experience and
            expertise in building optimally performing Spring Boot Applications.
            We have the most qualified coders who would perform a developer
            assessment on your project. We provide training to our developers on
            the latest tools and technologies, handle the pressure with ease and
            contribute to your company's growth in the best possible manner. We
            hold years of experience working with talented minds and putting
            them through Spring Boot challenges from time to time.
          </p>
        </div>
      </section>
      <section className={styles.ourProcessSection}>
        <div className="container">
          <h3 className="innerHeading">
            Services Rendered by Spring Boot Developers at Spineor Web Services
          </h3>
          <br />
          <div className={processStyles .ProcessWrapper}>
            <div className={`${processStyles .comment} ${processStyles .left}`}>
              <div className={processStyles .commentText}>
                <h3>Spring App Development</h3>
                <p>
                  The Spring applications devised by our team perform
                  efficiently when calibrated in terms of both quality and
                  performance.
                </p>
                <div className={processStyles .pointed}></div>
              </div>
            </div>
            <div className={`${processStyles .comment} ${processStyles .right}`}>
              <div className={processStyles .commentText}>
                <h3>Custom App Development</h3>
                <p>
                  Our custom app development experts provide optimum solutions
                  to businesses of all sizes.
                </p>
                <div className={processStyles .pointed}></div>
              </div>
            </div>
            <div className={`${processStyles .comment} ${processStyles .left}`}>
              <div className={processStyles .commentText}>
                <h3>Spring Application QA/Testing</h3>
                <p>
                  Apps developed by our team are thoroughly tested before
                  launch.
                </p>
                <div className={processStyles .pointed}></div>
              </div>
            </div>
            <div className={`${processStyles .comment} ${processStyles .right}`}>
              <div className={processStyles .commentText}>
                <h3>Spring App Upgradation</h3>
                <p>
                  Our Spring boot experts leave no stone unturned in upgrading
                  the app from time to time.
                </p>
                <div className={processStyles .pointed}></div>
              </div>
            </div>
            <div className={`${processStyles .comment} ${styles.left}`}>
              <div className={processStyles .commentText}>
                <h3>Spring App Support/Maintenance</h3>
                <p>
                  The app's working is checked from time to time by our Spring
                  app support/maintenance professionals.
                </p>
                <div className={processStyles .pointed}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.DevelopmentTeamSection} ${styles.letOurWork}`}>
        <div className="container">
          <h3 className="innerHeading">
            Why Choose Spineor Web Services for Spring Development?
          </h3>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Dedicated Team</h5>
                <p>
                  Our Spring Boot developers will be dedicated to your project
                  and will respond instantly to your requests.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>24/7 Support</h5>
                <p>
                  Our engineers will assist you both pre & post-development. In
                  addition, our team of experts will be there to resolve all
                  your queries or concerns.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Excellent Client Retention Rate</h5>
                <p>
                  Our exceptional coding skills and exhilarating user experience
                  are how we've retained many of our clients.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Timely Delivery </h5>
                <p>
                  Our experts complete the projects and deliver them on time.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Non-Disclosure Agreement</h5>
                <p>
                  Client data is vital for business. Therefore, we sign a
                  non-disclosure agreement with the clients to keep the data
                  safe & secure.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Progressive Roadmap</h5>
                <p>
                  We incorporate a result-driven strategy and understand the ins
                  and outs of the project before providing a solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Process />
    </div>
  );
};

export default SpringBootDevelopers;

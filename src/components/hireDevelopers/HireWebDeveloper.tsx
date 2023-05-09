import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import OurProcess from "./Components/OurProcess/OurProcessSection";

const HireWebDevelopers = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Web Developers`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Did you know that 70-80% of businesses will lose business without 
        a website? Nowadays, every business needs to have a strong digital presence. 
        This is only possible when you have an optimally performing website that informs 
        the customers about your products or services. Even a well-established business 
        needs a website that helps it expand globally.`}
      />
      <section className={styles.webDevelopers}>
        <div className="container">
          <p className="mb-0">
            Turn your dreams of having your website with the skills and
            expertise of web developers at Spineor Web Services. Our web
            developers bring stunning and interactive web designs that you won't
            find elsewhere. Our web development solutions make your website
            stand out and grab the customers' attention. We render web
            development solutions to e-commerce portals, PWAs platforms, PWAs,
            large-scale websites, custom web applications, SaaS solutions
            devised to meet the objectives of large-scale and end-users.
          </p>
        </div>
      </section>
      <section className={styles.bgColor}>
        <div className="container">
          <h3 className="innerHeading">
            Why Hire Web Developers from Spineor Web Services?
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Innovative Approach</h5>
                <p>
                  Our web developers possess sound knowledge of developing and
                  building websites using the latest tools and techniques. Even
                  after making the website, we offer constant support and
                  maintain it from time to time. We adopt an innovative approach
                  that makes your website stand out and performs optimally.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Delivery Before Deadline</h5>
                <p>
                  Every project that comes to us comes with a deadline. It is
                  the responsibility of our web developers to deliver the
                  website on time and won't let your business halt due to any
                  reason. Not only this, information regarding the project
                  status is shared from time to time.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Easy to Access</h5>
                <p>
                  Hire our web developers and stop worrying about accessibility
                  issues. You can access the project anywhere globally or even
                  from your home.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Offer Value-Based Solutions</h5>
                <p>
                  We bring optimum quality solutions that match individual
                  business requirements and add value to it.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Bug-Free Coding</h5>
                <p>
                  Get error-free, optimized, and bug-free codes tailored by our
                  web developers to make your application run without any
                  hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.DevelopmentTeamSection}>
        <div className="container">
          <h3 className="innerHeading">Our Simple & Quick Hiring Process</h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Discuss your Requirements</h5>
                <p>
                  Our professionals would interact and gather all your
                  project-related requirements. Our work process and methodology
                  will be discussed in detail during this step.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Delegating Tasks to the Team</h5>
                <p>
                  After gathering your requirements, we will delegate the tasks
                  to the team or dedicate a web developer for your project. Our
                  dedicated professionals will leave no stone unturned in
                  accomplishing the goals.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Work and Inform</h5>
                <p>
                  Our dedicated team will assist you at every step of web
                  development. If you are experiencing any concerns, discuss
                  them with us get them resolved in no time. Spineor Web
                  Services aims to deliver excellent results that match the
                  client's objectives.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Final Selection</h5>
                <p>
                  We assign the project to that developer or the team members
                  you choose. The final product will bring 100% satisfaction to
                  you.
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

export default HireWebDevelopers;

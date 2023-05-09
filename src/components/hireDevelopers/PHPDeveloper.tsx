import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import OurProcess from "./Components/OurProcess/OurProcessSection";


const PHPDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire PHP Developer for Your Website?`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Before integrating PHP code into a website, it's vital to understand
        the ins and outs of the code and how our developers can help you
        implement it. Web pages are generally created using PHP code to help
        your website operate on a PHP server. Informal terminology is known
        as Server Side Scripting Language.  The question that arises here is what's the
        role of PHP code. `}
      />
      <section className={styles.phpDeveloper}>
        <div className="container">
          <p>
            The answer is with the right Php code; you'll be able to view the
            right image or text on your website. The biggest advantage is that
            the PHP developer would build the kind of website you've been
            dreaming of.
          </p>
          <p>
            Besides this, PHP is an open-source language and doesn't need any
            licensing fee to use it. As a result, the market is flooded with
            several PHP developers. When it comes to projects, we often seek
            someone carrying extensive experience and expertise in handling PHP
            projects, and consulting our team of experts having both is the best
            approach.
          </p>
          <p>
            Did you know that businesses will suspect 30% vulnerabilities as per
            the reports furnished by NVD(National Vulnerability Database)? These
            vulnerabilities are often identified when the team of experts
            doesn't adopt best practices.
          </p>
          <p>
            If you hire a PHP developer for your website, ensure that all the
            pages are thoroughly tested by them so that errors can be spotted
            and resolved there and then. This will bring you a quality website
            for the price you pay to the PHP developer at Spineor Web Services.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            Why Choose Spineor Web Services for Php Development?
          </h3>
          <p className={styles.text_center}>
            Being a reputed PHP development firm, PHP is known to cater to
            modern business requirements, thereby providing the best value and
            compliance. Here are the compelling reasons for hiring PHP
            developers from Spineor Web Services:
          </p>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>100% Customer Satisfaction</h5>
                <p>
                  We use state-of-the-art tools and the latest technology to
                  bring scalable, safe, and innovative business solutions to
                  you.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Dedicated Team of Experts</h5>
                <p>
                  Our dedicated team of experts gives high-end business
                  solutions based on the frameworks and technologies.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Adaptable Framework Model</h5>
                <p>
                  Instead of adopting any rigid approach towards framework
                  models, we recommend choosing several framework models.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Agile Procedure</h5>
                <p>
                  We implement Agile methods and conduct scrum events to build
                  well-optimized practices and methods to deliver the finest
                  results to you.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Honesty & Transparency</h5>
                <p>
                  We pay heed to your project ideas and vision. Also, we don't
                  hesitate to offer and take recommendations from you when
                  required.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Competitive Pricing</h5>
                <p>
                  At Spineor Web Services, you get the best combination of
                  cost-effective services & top-quality work.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Clear Communication</h5>
                <p>
                  Project updates are given from time to time. In addition, we
                  update you by sending real-time project status reports and
                  keep the lines of communication on Skype and email open.
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

export default PHPDeveloper;

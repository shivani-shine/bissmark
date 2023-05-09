
import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import appIcon from "Assets/images/our-work-icon/app-development.svg";
import designIcon from "Assets/images/our-work-icon/web-design.svg";
import retention from "Assets/images/our-work-icon/client-retention.svg";
import developers from "Assets/images/our-work-icon/no-developers.svg";
import strategy from "Assets/images/our-work-icon/strategy.svg";
import Solutions from "Assets/images/our-work-icon/IoT Solutions.svg";
import data from "Assets/images/our-work-icon/data.svg";
import styles from "Styles/Hire/HireDevelopers.module.css"
import Image from "next/image";
import OurProcess from "./Components/OurProcess/OurProcessSection";

const HireSoftwareDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Software Developers.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Software development is the process of developing an individual or group of software using a programming language. Designing, programming, bug fixing, and testing are the integral aspects that are covered while building a software. Our team builds customized and personalized software based on the clients' needs. Businesses can thrive in competitive marketing by incorporating innovation and efficiency. Our software developers turn your business goals into reality.`}
      />
      <section className={styles.DevelopmentTeamSection}>
        <div className="container">
          <h3 className="innerHeading">Why Choose Spineor Web Services?</h3>
          <p className="text-center">
            If you are seeking quality services at affordable rates, then avail
            of the services of Spineor. Our team possesses expert knowledge and
            expertise that meets clients' objectives. We implement
            state-of-the-art technology and tools also deliver desired results
            within a given timeframe. Our developers offer innovative approaches
            and regularly update about the project's stage.
          </p>
        </div>
      </section>
      <section className={styles.bgColor}>
        <div className="container">
          <h3 className="innerHeading">
            What Makes Our Software Developers Unique?
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                {" "}
                <h5>Proficient Consulting</h5>
                <p>
                  You won't find consultation offered by our team of experts
                  anywhere else. We devise cost-effective strategies and give
                  desired results in the least time. Our team answers questions,
                  including which technology and method are appropriate? Our
                  developers will be aware of the challenges based on your
                  information and data. The team recommends the development that
                  aligns perfectly with your business needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Trustworthy Resources</h5>
                <p>
                  Our development approach is reliable and scalable. Intrinsic
                  details must be kept in mind during the development phase,
                  which the team generally considers before commencing the
                  project. End-result and the performance gives an idea about
                  the quality of work performed by our team of experts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Creative Approach</h5>
                <p>
                  Our team of developers offers an innovative approach during
                  the development. The experts possess sound knowledge of
                  software development and know when to apply it during the
                  development process. Different methods are adopted during the
                  development phase and are distinct from other projects. These
                  approaches are crucial and are incorporated as per the demands
                  of the industry.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Optimum Quality and Experienced</h5>
                <p>
                  Our professionals are proficient in their work and offer an
                  exhilarating experience to the users. There are no compromises
                  when it comes to software quality and popularity for our
                  world-class services. Whether it is a project, product, or a
                  specific application, the quality of the project remains
                  intact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.letOurWork}>
        <div className="container">
          <h3 className="innerHeading">Let’s Look at Our Work</h3>
          <div className="row">
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={appIcon} alt="app"/>
                </div>
                <h6>Apps Developed</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={designIcon} alt="desginicon" />
                </div>
                <h6>Website Designed</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={retention} alt="retenticon" />
                </div>
                <h6>Client Retention</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={developers} alt="devicon" />
                </div>
                <h6>No. of Developers</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={strategy} alt="strategy" />
                </div>
                <h6>Salesforce Solutions</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={Solutions} alt="solutions"/>
                </div>
                <h6>AI & IoT Solutions</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <div className={styles.our_work_icon}>
                  <Image src={data} alt="data" />
                </div>
                <h6>Data Science</h6>
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

export default HireSoftwareDeveloper;

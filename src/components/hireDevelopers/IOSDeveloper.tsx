import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import OurProcess from "./Components/OurProcess/OurProcessSection";

const IOSDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`IOS: What Makes it the Leading & In-Demand Platform.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`iOS is the second biggest mobile operating system that holds more than 15% of the market share
        Every year more than 2 Million applications are deployed on Playstore
        These applications perform exceptionally well and are business-oriented
        Gives seamless and enriches the experience of the users
        Makes it efficient and brings more revenue`}
      />
      <section className={styles.letOurWork}>
        <div className="container">
          <h3 className="innerHeading">
            Take Advantage & Connect with Dedicated iOS Developers
          </h3>
          <p className="text-center">
            Have an idea in mind? Consult the dedicated iOS developers at
            Spineor Web Services that bring tailor-made mobile applications to
            you. Spineor brings you affordable and flexible models while
            customizing applications based on your needs and preferences. iOS
            developers at Spineor Web Services give you complete control over
            your project and help you effectively communicate with the
            developers. Our project managers will update you with the status of
            the project. The project source code solely belongs to you and
            provides all the intellectual rights. Regardless of your project
            idea, our professionals would turn them into reality. The experts
            would give you suggestions based on their technical knowledge and
            extensive development experience.
          </p>
        </div>
      </section>
      <section className={styles.DevelopmentTeamSection}>
        <div className="container">
          <h3 className="innerHeading">
            How App Developers at Spineor Web Services Help You Stand Ahead of
            the Competitors?
          </h3>
          <div className="row">
            <p>
              You aren't just hiring iOS developers at Spineor Web Services but
              also the resource which is exclusively dedicated to your project.
              Our iOS app developers offer you the following advantages:
            </p>
            <div className={styles.offered}>
              <div className="row">
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Competitive rates</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Effective communication</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Skilled and experienced developers</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Integrating state-of-the-art tools and technology</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>
                      Check the status of the projects through daily reports
                    </h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Authorized source code</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Timely Delivery</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Rigorous quality control methodologies</h6>
                  </div>
                </div>
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

export default IOSDeveloper;

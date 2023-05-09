import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
// import data from "Assets/images/our-work-icon/data.svg";
import styles from "Styles/Hire/HireDevelopers.module.css"

const HireKotlinDevelopers = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Kotlin Developers`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Kotlin is a language exclusively designed for virtual machines. It is the developers' 
        second most preferred programming language, as stated in the Stack Overflow Survey. Kotlin offers valuable 
        support to Android Studio 3.0 and other versions. We possess experience in tailoring projects in Kotlin or 
        transforming the old Kotlin files into Java code. Kotlin programming allows developers to code apps speedily that 
        can be operated without any hassle. This modern technology leaves no stone unturned in increasing the developers' productivity.`}
      />
      <section className={styles.kotlinDevelopers}>
        <div className="container ">
          <h3 className="innerHeading">
            Hire Our Kotlin Developers to Build Impressive Android Apps
          </h3>
          <p>
            Kotlin developers at Spineor Web Services carry years of experience
            in building interactive and impeccably designed Kotlin applications.
            Our team of experts ensures that the project is in the right hands
            and updates you about the existing project development stage from
            time to time. Our contract is quite flexible and offers numerous
            advantages to the client.
          </p>
          <p>
            Kotlin has built robust and stunning web apps for browsers, Android,
            and Native applications. Kotlin is growing at a fast pace and has
            become stronger than ever. If you aspire to build apps in Kotlin,
            then Java doesn't think and get what you desire with our Kotlin
            experts.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className={styles.hereing_content_java}>
                <h5>Take Advantage of the Following Kotlin Services with Us</h5>
                <ol>
                  <li>App development</li>
                  <li>App Upgradation</li>
                  <li>Migration in Kotlin platform</li>
                  <li>App optimization</li>
                  <li>Kotlin app testing</li>
                  <li>Kotlin app migration</li>
                  <li>Maintenance &amp; Support</li>
                </ol>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className={styles.hereing_content_java}>
                <h5>
                  A Glimpse of the Services Rendered by Our Python Developers
                </h5>
                <ol>
                  <li>Certified &amp; Experienced team</li>
                  <li>The team that works exclusively for your project</li>
                  <li>An agile approach to mobile app development</li>
                  <li>Emphasis on UI/UX design</li>
                  <li>Years of professional experience</li>
                  <li>Reports are generated and shared on a regular basis</li>
                  <li>Authorized source code</li>
                  <li>Domain expertise</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.letOurWork}>
        <div className="container">
          <h3 className="innerHeading">What Helps Us Stand Out From Others?</h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                {" "}
                <h5>Quality is Our Primary Focus</h5>
                <p>
                  Our dedicated team of experts puts their best foot forward and
                  delivers top-quality & submit the projects on time. If you are
                  thinking of availing of high-quality services, our experts are
                  just a call away.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Precise Rates</h5>
                <p>
                  No matter whether the project is small or big, our experts
                  offer an optimum solution. Bringing 100% client satisfaction
                  is our ultimate goal.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Powerful Solutions</h5>
                <p>
                  We deliver exceptional services to our clients worldwide and
                  take care of everything for them. Every kind of customer query
                  is resolved within minutes by our experts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Quick & Efficient Project Delivery</h5>
                <p>
                  Our ultimate goal is to inculcate the right set of
                  technologies timely and efficient delivery.
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

export default HireKotlinDevelopers;

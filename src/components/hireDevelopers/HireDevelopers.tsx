import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import appBanner from "Assets/images/hire/app.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import OurProcess from './Components/OurProcess/OurProcessSection'


const HireDevelopers = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire App Developers`}
        imageSrc={appBanner}
        imageClassName={"appBanner"}
        desc={`According to Zenith Reports, did you know that 75% of internet traffic comes from mobile devices? The demand for mobile app development is surging at a fast pace. In the past, desktops and computers were the only sources that gives information. Browsing a website or booking a taxi has become easier than ever with the arrival of mobile apps.`}
      />
      <section className={styles.pb_0}>
        <div className="container">
          <p>
            Spineor Web Services isn't another app development company but is a
            team of skilled and passionate mobile app developers. Our mobile app
            developers build rich and optimally performing apps based on
            individual business requirements.No matter; whether you're running a
            startup or an established business, we bring affordable mobile app
            development solutions to you. We have delivered promising results to
            over 100 clients from different industries and aim to render quality
            services in the years to come. Our team of experts recommends
            innovative solutions, which in turn would enrich the experience of
            the users. Hire Web App Developers from Spineor Web Services and
            build a competitive and customer-friendly business.
          </p>
        </div>
      </section>
      <section className={styles.DevelopmentTeamSection}>
        <div className="container">
          <h3 className="innerHeading">
            Why Choose App Developers at Spineor?
          </h3>
          <p className={`${styles.sub_heading} text-center `}>
            Our app developers have hands-on experience in providing end-to-end
            solutions.
            <br /> Our enthusiastic and solution-oriented team offers the
            following benefits:
          </p>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className={styles.hereing_content_java}>
                <h5 className={styles.content}>Why Choose Us?</h5>
                <ol>
                  <li>A dedicated team of Developers</li>
                  <li>No Hidden Charges</li>
                  <li>Projects delivered on time.</li>
                  <li>100% bug-free Testing.</li>
                  <li>Keeps data secure &amp; IP protected.</li>
                  <li>24/7 Assistance.</li>
                </ol>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className={styles.hereing_content_java}>
                <h5 className={styles.content}>What Sets Spineor Web Services Apart from Others?</h5>
                <ol>
                  <li>Spring Boot Framework</li>
                  <li>Over 8+ years of experience.</li>
                  <li>100+ mobile applications delivered till now.</li>
                  <li>A team of 60+ software developers.</li>
                  <li>
                    Experts use the latest technology and tools while making
                    mobile apps.
                  </li>
                </ol>
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

export default HireDevelopers;

import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"

const HireLotSolution = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Iot Solution`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`IoT(Internet of Things) is the latest technological innovation that has opened many avenues that were hidden in the past. With IoT accessing the device remotely has become an effortless task for many for instance working professionals who are occupied with their schedule often forget to switch the home appliances off.No matter whether you’re at home or at work IOT gives you the chance to lock or unlock the door.`}
      />
      <section className={styles.hireLotSolution}>
        <div className="container">
          <p className="text-center">
            These solutions often require fresh business models, new technology,
            collaborations, and new go-to-market skills. It comprises a complex
            and diverse arrangement that aims to deliver relevant services to
            companies and customers. The IoT has expanded as a wide network
            since the last decade. It primarily focuses on two primary areas one
            is providing technology-enabled solutions which take us to the
            second enhancing the performance of the organization.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            IoT Solutions Offered by Spineor Web Services
          </h3>
          <p className={styles.text_center}>
            Our team of IoT professionals combines hardware, data analytics, and
            software to create a world that works on IoT technology. Our team of
            professionals has hands-on experience in making dynamic and reliable
            applications. We’ve been associated with several international
            organizations and have built several mobile applications for them.
            Our team would work according to your timezone and will gather
            complete requirements before beginning the work. If you have any
            idea in mind our IoT team would propose realistic solutions for the
            same. These experts take a wider view as they are indulged in each
            and every step of the process. These professionals carry years of
            experience in app management, consultancy, automating, and IoT
            solution development. Our team ensures that project costs are
            minimized and a quick IoT solution is proposed to you.
          </p>
        </div>
      </section>
      <section className={`${styles.letOurWork} ${styles.offered}`}>
        <div className="container">
          <h3 className="innerHeading">IoT Services Offered by Us</h3>
          <p className="text-center">
            Our IoT solutions help the business stand out and bring superior
            business solutions to you as follows:
          </p>
          <br />
          <h4>IoT Sensor Development</h4>
          <div className="row">
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Custom IoT Development</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Cloud Solutions & IoT Integrations</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>IoT Wearable Development</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Data Analytics Enabled by IoT</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>IoT Support & Maintenance</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
    </div>
  );
};

export default HireLotSolution;

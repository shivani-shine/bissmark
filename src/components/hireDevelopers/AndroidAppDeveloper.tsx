import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
// import heroBanner from "../../assets.";
import styles from 'Styles/Hire/HireDevelopers.module.css'

const AndroidAppDeveloper:any = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Android App Developer.`}
        imageSrc={heroBanner}
        imageClassName={styles.hireBanner}
        desc={`Several Android app development companies claim that 
        they are the "Best Android App Development Agency," but how 
        many among them have fulfilled the expectations of the business. 
        This question often comes to the mind of businesses who want to 
        devise their applications using Android.`}
      />
      
      <section className={styles.androidAppDeveloper}>
        <div className="container">
          <p>
            Firstly, you require an Android application customized based on your
            business requirements. Also, you need a creative application concept
            that brings enormous profits after the users on their devices have
            downloaded it. Most companies are looking for a centralized
            application to help the employees communicate effectively. The only
            way to achieve these goals is by consulting reputed and reliable
            Android App Developers at Spineor Web Services.
          </p>
          <p>
            Secondly, you should be ready to shoulder the cost of Android
            applications. The android applications would be installed on the
            devices, so everything must be thoroughly planned and well-executed.
            Certain businesses think about planning and execution while
            forgetting about the project's support after a while. Initially,
            your app will be appreciated but would be the biggest turn-off for
            the customers as technical issues or customer support arises. App
            installation is a sizable investment that can put you at risk if the
            application stops working after a while.
          </p>
          <p>
            Lastly, The app you've devised competes with other applications as
            these would work on Iphones and Ipads. In addition, your application
            will compete with big-time apps, so it must be devised using an
            excellent concept, executed properly, and costs less while deploying
            and while it's at the development stage. If you're planning to build
            an application that helps stand ahead of others and turns out to be
            a great business asset, hire developers at Spineor Web Services
            today!
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            Process Adopted by Our Development Team
          </h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Requirement Gathering</h5>
                <p>
                  Before commencing the project, its requirements, research and
                  information are obtained then; the end product is tailored
                  based on the requirements furnished by the clients.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>UI/UX Design</h5>
                <p>
                  Designs curated by our design team are unique and help grab
                  the visitors' attention. Our UI/UX designs aim to leave an
                  everlasting impression on the users.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Prototype</h5>
                <p>
                  After designing, a prototype is built, sent to the development
                  team to make the final product.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Development</h5>
                <p>
                  The development process is carried out using state-of-the-art
                  tools and technologies. As a result, you receive project
                  updates from time to time.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Quality Assurance</h5>
                <p>
                  We strive to build quality projects and develop 100% bug-free
                  applications for you.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Deployment</h5>
                <p>
                  After carrying necessary trails, the app is all set to launch
                  on the app store or play store.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Maintenance & Support</h5>
                <p>
                  Our team will assist you in maintenance and support tasks even
                  after deployment. Also, our professionals would resolve your
                  queries or concerns post-deployment.
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

export default AndroidAppDeveloper;

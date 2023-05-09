
import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"

const ReactJsDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire React Developers.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`We are a highly-experienced team of React developers that have built
        100+ React applications so far. After intensive research, we come up
        with innovative react solutions for our clients and help their
        business thrive.`}
      />
      <section className={styles.reactJsDeveloper}>
        <div className="container">
          <p>
            React is basically software that operates on a Javascript library
            used to form user interfaces. React is a renowned framework that is
            both front end and has an open-source Java library. This technology
            matters the most to web development because it is a single page
            application. It is an excellent choice for those planning to
            introduce interactive and agile elements in their website and mobile
            applications. Many of us fail to distinguish between React and React
            JS as both are similar. Developers can build large web applications
            that aid data modification without reloading the page. Javascript
            libraries like Angular Js have been incorporated to provide
            exhilarating work. The framework doesn't comply with any complex
            architectural principles, so hiring React JS developers has become
            the need of the hour.
          </p>
          <p>
            A React developer, also known as Front end developer, has extensive
            knowledge and years of experience working in React technology. The
            developer tailors web applications using both React and React JS.
            The developer possesses a wide knowledge of Javascript and knows how
            to build user interfaces. Moreover, they also have knowledge of
            Node.JS, MERN stack, MongoDB, and many more. As a result, the
            experts offer exhilarating user experiences and build exceptional
            user interfaces. This is why React developers are considered while
            making optimally performing and engaging web or mobile-based
            applications.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">Services Rendered by React JS</h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Web App Development Using React JS</h5>
                <p>
                  Our team of web developers brings dynamic and secure web
                  solutions to you. The web apps devised by our react JS
                  developers can be modified based on the needs of the
                  enterprise.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Cross-Platform Application Development</h5>
                <p>
                  We offer the best cross-platform application development
                  solutions that are strong and are easily available. It isn't
                  just building, but we implement cross-platform applications in
                  an efficient way.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Migration and Integration Services</h5>
                <p>
                  Integration has always been considered a difficult procedure.
                  However, our team of experts preserve the integrity of the
                  data and makes it easy to move applications from one platform
                  to another.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>UI Development in React JS</h5>
                <p>
                  React development is incomplete without a user interface and
                  our React developers have hands-on experience in delivering
                  it. Our skilled team comes with unique designs both for
                  application and web.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Plugin Development</h5>
                <p>
                  Our React developers build robust plugins and have adequate
                  knowledge in building custom Plugins. This helps to expand the
                  functionality of web applications. In addition, the plugins
                  have been devised in such a way that they perfectly align with
                  third-party applications.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>React JS-Support & Maintenance</h5>
                <p>
                  The work of our React JS developers doesn't end here as our
                  experts maintain the website from time to time. In addition,
                  the experts also render technical support for the smooth
                  working of websites and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.letOurWork}>
        <div className="container">
          <h3 className="innerHeading">
            Why Choose React Developers from Spineor Web Services?
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Upgrade Tools</h5>
                <p>
                  Spineor Web Services has always offered clients top-notch web
                  and app development solutions. Our React developers use
                  Upgrade tools to boost their performance. There are rare
                  companies that bring high-end solutions, and we're proud to be
                  among them.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Robust Solutions</h5>
                <p>
                  Our experts possess knowledge of complete React technology.
                  Our proficient developers deliver innovative, distinct and
                  robust solutions to client issues. Our team is
                  highly-experienced and has detailed information to get
                  feasible and powerful solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Accessible</h5>
                <p>
                  No matter how complex the task is, our react developers have
                  the problem-solving ability that fix the issues in no time.
                  Interacting with us is quite easy, and our experts are ready
                  to assist you 24/7 and 365 days of the year. We always keep
                  our communication lines open, which sets us apart from others.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Extensive & Scalable</h5>
                <p>
                  We are trustworthy partners that bring scalable solutions to
                  you. We have rendered our scalable solutions to various
                  industries, and it is time-consuming so that you can focus on
                  the business goals you've in mind.
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

export default ReactJsDeveloper;

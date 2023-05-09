import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
// import OurProcess from "./Components/OurProcess/OurProcess";
import styles from "Styles/Hire/HireDevelopers.module.css"

const HireFullStackDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Full Stack Developers`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Full-stack development includes both back-end and front-end development. The full-stack developer handles these ends of development. The developers also perform crucial steps like managing the website's database, testing, and performing debugging on it. The developer is liable for keeping the websites and apps well-optimized. Different areas of the software are API, version controlling systems, and database server are integrated, and their working is checked while performing full-stack development on them.`}
      />
      <section className={styles.fullStackDeveloper}>
        <div className="container">
          <p>
            In front-end development, the developer forms an idea of what the
            actual website will look like. The developer has to work on three
            different areas, including CSS, HTML, and Javascript, and these
            applications are thoroughly checked on mobile devices. Designing
            aspects including texts, colors, and layouts are thoroughly checked
            before moving ahead. The front-end developers devise everything that
            is visible to the users. The back-end developers handle the coding
            part of the website. The main focus of these professionals is on
            APIs back-end logic databases and handles other aspects of the
            website very well. Back-end development is incomplete without
            scripting languages, including PHP, Ruby, and Python. A back-end
            developer gives ideas and creates algorithms that are delivered to
            the front-end developer. This data is generally stored as a database
            and can be retrieved later on.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            Take Advantage of the Following Full-Stack Development Services
          </h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Full-Stack Web Development</h5>
                <p>
                  Our web developers build applications using the latest tools &
                  technologies to build reliable and optimally performing
                  websites. In addition, our experts have hands-on experience in
                  handling full-stack web development.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Database Management</h5>
                <p>
                  Our team brings real-time database management solutions to
                  you. The database is delivered according to the rules
                  mentioned in the database diagram. Our team has a lot of
                  experience & expertise in managing & handling the database as
                  well.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Full-Stack Front-End Development</h5>
                <p>
                  Our team integrates HTML, JavaScript, MEAN Stack, and CSS
                  while performing Front-End Development on projects.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Full-Stack Application Development</h5>
                <p>
                  We come up with scalable and high-quality front-end
                  development solutions. Our team of experts has hands-on
                  experience in building cross-platform, native, and hybrid
                  mobile applications. Web applications, including Flutter,
                  Ionic, and React Native, are a part of our full-stack
                  development services.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Full-Stack Javascript Development</h5>
                <p>
                  Our team of developers possesses extensive knowledge of
                  Javascript. They build dynamic and interactive web pages and
                  make mobile with software applications. We tailor versatile
                  applications that run flawlessly.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>API Development & Integration</h5>
                <p>
                  API integration services are an integral aspect of our
                  full-stack development services.API integration services help
                  you connect the website with shipping tracking apps, IoT
                  devices, third-party payment gateways, B2B Integrations, and
                  SaaS platforms. We bring top-notch and measurable API
                  development and integration services to you.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Full-Stack PHP Development</h5>
                <p>
                  Spineor Web Services incorporates PHP while performing
                  front-end development on websites. Full-Stack PHP Development
                  is performed on Linux and gives a seamless experience to the
                  end-users. The third-party API development helps the
                  applications run in a flawless manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <OurProcess /> */}

      <section className="alice-Blue-bg">
        <div className="container">
          <h3 className="innerHeading">
            Why Hire Full-Time Stack Developers at Spineor Web Services?
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Skilled & Experienced Developers</h5>
                <p>
                  Our proficient team carries extensive knowledge of software,
                  coding, technology, and other things. As a result, we come up
                  with out-of-the-box and Unique solutions. Our team is
                  well-versed with the latest trends that have set a benchmark
                  in the industry. We adopt a professional approach and give
                  results tailored to your needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Timely Delivery</h5>
                <p>
                  We understand how valuable your time is. We at Spineor web
                  services aim to deliver the projects on time. Every project
                  update is clearly communicated to the clients.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Flexible Approach</h5>
                <p>
                  Our team has an objective and adopts a flexible approach
                  towards full-stack development. If the customer faces any
                  technical issues, our team is ready to offer a feasible
                  solution to you.
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

export default HireFullStackDeveloper;

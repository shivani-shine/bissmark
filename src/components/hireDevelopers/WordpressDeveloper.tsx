
import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"
import OurProcess from "./Components/OurProcess/OurProcessSection";


const WordPressDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Wordpress Developers.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`The internet has been dominated by WordPress, a leading blog hosting
        and content management application. The best thing is applying it is
        a simple task and leaves a long-lasting impression on the visitors.
        Due to heavy demand, we need WordPress developers that help you make
        the most out of this CMS application.`}
      />
      <section className={styles.wordPressDeveloper}>
        <div className="container">
          <p>
            The best thing about hiring a WordPress developer is that you’ve
            someone who is skilled enough to perform PHP coding on WordPress.
            Also, you need someone who can build sites that can be accessed by
            most servers and operating systems that work on PHP
            language.WordPress developers at Spineor Web Services can perform
            these tasks for you.
          </p>
          <p>
            The valuable assistance offered by our team of experts gives you the
            chance to make the site visible on multiple operating systems. Ask
            the PHP developer the type of operating system that PHP language of
            WordPress can accommodate. This gives you a clear idea of the
            potential of the WordPress developer.The developer renders his
            valuable assistance when the development issues pop up all of a
            sudden and need to be resolved before the deadline set by you.
          </p>
        </div>
      </section>

      <section className={`${styles.letOurWork} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">Why Choose Our Wordpress Developers?</h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Upgrade Tools</h5>
                <p>
                  Spineor Web Services has always offered clients top-notch web
                  and app development solutions. Our WordPress developers use
                  Upgrade tools to boost their performance. There are rare
                  companies that bring high-end solutions, and we're proud to be
                  among them.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Robust Solutions</h5>
                <p>
                  Our experts possess knowledge of complete React technology.
                  Our proficient developers deliver innovative, distinct, and
                  robust solutions to client issues. Our team is
                  highly-experienced and has detailed information to get
                  feasible and powerful solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Accessible</h5>
                <p>
                  No matter how complex the task is, our react developers have
                  the problem-solving ability that fixes the issues in no time.
                  Interacting with us is quite easy, and our experts are ready
                  to assist you 24/7 and 365 days of the year. We always keep
                  our communication lines open, which sets us apart from others.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
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
      <div className={styles.letOurWork}>
        <OurProcess/>
      </div>

      <Process />
    </div>
  );
};

export default WordPressDeveloper;

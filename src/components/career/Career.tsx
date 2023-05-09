import aboutimg1 from "Assets/images/about/office-img-1.png";
import fun from "Assets/images/career/fun_icon.png";
import mentorship from "Assets/images/career/mentorship_icon.png";
import remote from "Assets/images/career/remote_icon.png";
import perks from "Assets/images/career/perks_icon.png";
import rocket from "Assets/images/career/rocket_icon.png";
import relocation from "Assets/images/career/relocation_icon.png";
import styles from "Styles/Career.module.css";
import { sideBarHandlerAction } from "Redux/appActions";
import { useDispatch } from "react-redux";
import Image from "next/image";

const Career = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className={styles.aboutBanner}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-6 text-section">
              <h1>Careers</h1>
              <p id="text-info">
                We bring these values to lives of our employees everyday.
              </p>
              <p>
                A frenzy of new ideas, a stack of exciting release, surrounded
                by colleagues who are driven by passion and not deadlines, and
                an infectious vibe that pushes us to work at a breakneck speed
                day-in- in-day- out to deliver that next aha! moment to our
                customers.
                <br />
                <br />
                <b>Welcome to a regular day at SPINEOR!</b>
              </p>
            </div>
            <div className="col-md-7 col-lg-6 ">
              <div className="row align-items-end">
                <Image  className={styles.careerImg}src={aboutimg1} alt= 'career'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.career_section}>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.heading}>Benefits, we think you’ll like them</h2>
            <p className={styles.sub_heading}>
              Luxuries of a Start-Up begin after 3 months of working with us.
            </p>
          </div>
          <div className={`row ${styles.choose_services}`}>
            <div className={`${styles.career_section} col-lg-4 col-md-6 col-sm-6 `}>
              <div className={styles.detailed_web_sol}>
                <span>
                  <Image src={fun} alt='fun'/>
                </span>
                <h4>Fun - filled retreats</h4>
                <p>
                  Have fun with your co-workers Eating, Celebrating and sharing
                  ahppy moments
                </p>
              </div>
            </div>
            <div className={`${styles.career_section} col-lg-4 col-md-6 col-sm-6 `}>
              <div className={styles.detailed_web_sol}>
                <span>
                  <Image src={mentorship} alt='mentorship'/>
                </span>
                <h4>Mentorship</h4>
                <p>
                  You’ll receive valuable training from the experienced mentors
                  for the challenge you face at work
                </p>
              </div>
            </div>
            <div className={`${styles.career_section} col-lg-4 col-md-6 col-sm-6 `}>
              <div className={styles.detailed_web_sol}>
                <span>
                  <Image src={remote} alt='remote'/>
                </span>
                <h4>Remote Work</h4>
                <p>
                  Get things done - from home or an office. We understand the
                  emergencies to stay at home on time.
                </p>
              </div>
            </div>
            <div className={`${styles.career_section} col-lg-4 col-md-6 col-sm-6 `}>
              <div className={styles.detailed_web_sol}>
                <span>
                  <Image src={perks} alt='perks'/>
                </span>
                <h4>Allowances & Perks</h4>
                <p>
                  Every extra effort you make, you are definitely rewards with
                  allowance added to the salary.
                </p>
              </div>
            </div>
            <div className={`${styles.career_section} col-lg-4 col-md-6 col-sm-6 `}>
              <div className={styles.detailed_web_sol}>
                <span>
                  <Image src={rocket} alt='rocket'/>
                </span>
                <h4>A chance to skyrocket your career</h4>
                <p>
                  In time you can become a team leader, come up with excellent
                  results and take away the next level of designation.
                </p>
              </div>
            </div>
            <div className={`${styles.career_section} col-lg-4 col-md-6 col-sm-6 `}>
              <div className={styles.detailed_web_sol}>
                <span>
                  <Image src={relocation} alt='relocation' />
                </span>
                <h4>Relocation Assistance</h4>
                <p>
                  Want to explore Spineor from another corner of India, come and
                  join us. We will take care of your relocation and
                  accomodation..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center">
            <h2 className={styles.heading}>
              We provide exclusive services for your business
            </h2>
            <p className={styles.sub_heading}>
              Open the path to great business opportunities and grow your
              business with our web designing and development services.
            </p>
          </div>
          <div>
            <div className={styles.content_box}>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-5">
                  <h3 className={styles.sub_title}>Content Writer</h3>
                  <p className={styles.desc}>Required experience – 2 to 3 Years</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <h3 className={styles.sub_title}>Positions</h3>
                  <p className={styles.desc}>1</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 text-right">
                  <div className="slider-left-right-btn d-flex">
                    <div
                      className={`${styles.nxt} text-center`}
                      onClick={() => dispatch(sideBarHandlerAction(true))}
                    >
                      Send CV
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_box}>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-5">
                  <h3 className={styles.sub_title}>Content Writer</h3>
                  <p className={styles.desc}>Required experience – 2 to 3 Years</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <h3 className={styles.sub_title}>Positions</h3>
                  <p className={styles.desc}>1</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 text-right">
                  <div className="slider-left-right-btn d-flex">
                    <div
                      className={`${styles.nxt} text-center`}
                      onClick={() => dispatch(sideBarHandlerAction(true))}
                    >
                      Send CV
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_box}>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-5">
                  <h3 className={styles.sub_title}>Content Writer</h3>
                  <p className={styles.desc}>Required experience – 2 to 3 Years</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <h3 className={styles.sub_title}>Positions</h3>
                  <p className={styles.desc}>1</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 text-right">
                  <div className="slider-left-right-btn d-flex">
                    <div
                      className={`${styles.nxt} text-center`}
                      onClick={() => dispatch(sideBarHandlerAction(true))}
                    >
                      Send CV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

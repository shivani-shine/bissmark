
import styles from 'Styles/Services/services.module.css'
import { sideBarHandlerAction } from "Redux/appActions";
import { useDispatch } from "react-redux";
import { SHOW_SIDEBAR } from "Redux/types";
import java from "Assets/images/services/java01.png";
import python from "Assets/images/services/python.png";
import mongodb from "Assets/images/services/mongodb.png";
import spring from "Assets/images/services/spring.png";
import nodejs from "Assets/images/services/nodejs.png";
import MySQL from "Assets/images/services/MySQL.png";
import php from "Assets/images/services/php.jpg";
import { ourServicesList } from "Common/constants";

// import { Link } from "react-router-dom";
import ServicesCard from "Common/components/ServicesCard";
import Image from 'next/image';
import DevelopmentCycle from "./Components/developmentCycle/DevelopmentCycle";

const BackendDeveloper = () => {
  const dispatch = useDispatch();
 
  return (
    <div>
      <div className={`banner-section ${styles.service_banner}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 col-12">
              <h1 className="font-light">
                <span className="purpleback">Back-End</span> Developers
              </h1>
              <p>
                Maximize the user experience with our highly responsive,
                user-friendly and interactive Front-end interfaces.
              </p>

              <button
                className={`${styles.Get_Quote} toggleButton`}
                onClick={() => dispatch(sideBarHandlerAction(true))}
              >
                Hire Developer Now
              </button>
            </div>
            <div className="col-md-6 col-sm-12 col-12 text-center">
              <ul className={styles.industies_list}>
                <li>
                  <span>
                    {/* <Link to={}> */}
                    <Image className="lazy_a" src={java} alt="java"/>
                    <h4>JAVA</h4>
                    {/* </Link> */}
                  </span>
                </li>
                <li>
                  <span>
                  <Image className="lazy_a" src={python} alt="python"/>
                    <h4>Python</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={php} alt="php"/>
                    <h4>PHP</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={mongodb} alt="mongodb"/>
                    <h4>Mongo DB</h4>
                  </span>
                </li>
                <li>
                  <span>
                  <Image className="lazy_a" src={nodejs} alt="nodejs"/>
                    <h4>Node JS</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={spring} alt="spring"/>
                    <h4>Spring</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={MySQL} alt="mysql"/>
                    <h4>MY SQL</h4>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={`container ${styles.text1}`}>
          <h2>Services we offer</h2>
          <p>
            Technology made human – Taking all worries off your plate.
            <br />
            We offer holistic technological solutions and design, develop and
            deliver customized experiences that gobeyond to meet your goals.
            <br />
            We specialize in Dynamic Web Solutions, Big Data, DevOps and Testing
            along a wide of range IT solutions that are tailor-made and
            strategized to increase organizational flexibility and efficiency
            and keep you ahead of the competition.
            <br />
            We offer Java/Scala programming, Restful API’s, Automated DevOps
            Development, Full/Mean StackDevelopment, Third Party Integrations,
            Cryptocurrency development, Open source implementation, Big-Data
            Analysis, Native Apps Building and whatever you technological
            solutions you can think of We are passionate about decoding your
            success vision and developing it into reality with winning
            strategies for your businesses through latest disruptive
            technologies.
          </p>
        </div>
      </section>
      <section className="w-c-section">
        <div className={`container ${styles.text1}`}>
          <h2>Services we offer</h2>
          <div className="row">
            {ourServicesList.map((item) => (
              <ServicesCard
                id={item.id}
                title={item.title}
                imgSrc={item.imgSrc}
                body={item.body}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="w-c-section">
        <div className={`container ${styles.text1}`}>
          <h2>How do you make it all happen?</h2>
          <DevelopmentCycle />
        </div>
      </section>
    </div>
  );
};

export default BackendDeveloper;

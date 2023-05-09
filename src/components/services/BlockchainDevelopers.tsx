
import styles from 'Styles/Services/services.module.css'
import { sideBarHandlerAction } from "Redux/appActions";
import { useDispatch } from "react-redux";
import { SHOW_SIDEBAR } from "Redux/types";
import ethereum from "public/images/Blockchain/ethereum-logo.jpg";
import etherscan from "public/images/Blockchain/etherscan-logo.jpg";
import hyperledger from "public/images/Blockchain/Hyperledger-logo.jpg";
import mist from "public/images/Blockchain/Mist-logo.jpg";
import remix from "public/images/Blockchain/REMIX-logo.jpg";
import solc from "public/images/Blockchain/SOLC-logo.jpg";
import tierion from "public/images/Blockchain/Tierion-Logo.jpg";
import truffle from "public/images/Blockchain/Truffle-logo.jpg";
import { ourServicesList } from "Common/constants";

// import { Link } from "react-router-dom";
import ServicesCard from "Common/components/ServicesCard";
import Image from 'next/image';
import DevelopmentCycle from "./Components/developmentCycle/DevelopmentCycle";

const BlockchainDevelopers = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={`banner-section ${styles.service_banner}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 col-12">
              <h1 className="font-light">
                <span className="purpleback">Blockchain</span> Developers
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
                    <Image className="lazy_a" src={ethereum} alt="ethereum"/>
                    <h4>ETHEREUM</h4>
                    {/* </Link> */}
                  </span>
                </li>
                <li>
                  <span>
                  <Image className="lazy_a" src={etherscan} alt="etherscan"/>
                    <h4>ETHERSCAN</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={hyperledger} alt="hyperledger"/>
                    <h4>HYPERLEDGER</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={mist} alt="mist"/>
                    <h4>MIST</h4>
                  </span>
                </li>
                <li>
                  <span>
                  <Image className="lazy_a" src={remix} alt="remix"/>
                    <h4>REMIX</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={solc} alt="solc"/>
                    <h4>SOLC</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={tierion} alt="tierion"/>
                    <h4>TIERION</h4>
                  </span>
                  <span>
                  <Image className="lazy_a" src={truffle} alt="truffle"/>
                    <h4>TRUFFLE</h4>
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

export default BlockchainDevelopers;

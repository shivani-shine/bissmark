import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"

const SolidityDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Solidity Developers`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Solidity was introduced in 2014 by a reputed corporation Etherium
        Project. It is a contract-oriented programming language that is used
        to build smart contracts on Blockchain systems. Solidity is a
        standard language with special features, including inheritance
        libraries, and comes with multiple-user-defined types.`}
      />
      <section className={styles.letOurWork}>
        <div className="container">
          <p>
            The smart contracts built in solidity are basically used for voting,
            crowdfunding, blind sales and have become a part of multi-signature
            wallets. Solidity resembles Javascript and is integrated into
            several computer languages. Learning and implementing the principles
            of solidity won't be a hassle for those who are well-aware of the
            Javascript basics. Furthermore, code creation has become easier as
            it is an active combination of numbers and letters.
          </p>
        </div>
      </section>
      <section className={styles.solidityDeveloper}>
        <div className="container">
          <h3 className="innerHeading">
            Well-Establish Solidity App Development Company
          </h3>
          <p>
            Spineor web services is a reputed web, app, and blockchain
            development agency. Our team of experts has hands-on experience in
            making the best solidity and blockchain applications. We have
            catered to several industries that are both big and small. We've
            also assisted various clients in scaling new heights in their
            business.
          </p>
          <p>
            Our team of professionals is experts in making smart contracts for
            crowdfunding, blind auctions, voting, and other blockchain-based
            projects. While building a web or mobile application in solidity,
            extensive knowledge and experience of working in Javascript is
            needed. Our team possesses both these qualities, which is why
            they've been the most preferred choice of clients worldwide.
          </p>
          <p>
            Our team builds unique strategies while devising projects in
            solidity. Our Solidity developers build software and apps to enhance
            the web presence of medical, travel, financial and retail
            industries.
          </p>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            What is Covered Under Our Solidity Development Services?
          </h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Voting</h5>
                <p>
                  Numerous issues have been suspected in the voting trades,
                  including data manipulation, fake voters, change in voting
                  machines, and booth catching. The solidity applications are
                  designed and developed by our professionals to make the voting
                  process smooth and crystal clear.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Blind Public Sales</h5>
                <p>
                  Whenever there is an open sale, people have the opportunity to
                  watch others' bids leading to frauds. By incorporating smart
                  contracts, it's impossible to peep in others' bids till the
                  end.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Crowdfunding</h5>
                <p>
                  Smart contracts built in solidity don't need centralized
                  systems to become reliable, reducing additional costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ourProcessSection}>
        <div className="container">
          <h3 className="innerHeading">
            Why Hire Solidity Developers from Spineor Web Services?
          </h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Technically Competent Professionals</h5>
                <p>
                  Our Solidity developers possess sound technical knowledge of
                  Solidity development.
                </p>


                
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Timely Delivery</h5>
                <p>
                  Quality is never compromised, and the project will be
                  accomplished on time.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Sureshot Success</h5>
                <p>
                  Our solidity developers help you attain great success in your
                  solidity development projects.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Quality Assurance</h5>
                <p>
                  Our team of experts incorporates the best software development
                  methods, thereby producing top-quality and bug-free code for
                  you. If you're searching for reasonable and customized, choose
                  Spineor Web Services' experts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Cost-Effective Services</h5>
                <p>
                  We offer cost-effective services by offering them plans
                  tailored as per their budget. You can compare the cost
                  estimate and decide to associate with us.
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

export default SolidityDeveloper;

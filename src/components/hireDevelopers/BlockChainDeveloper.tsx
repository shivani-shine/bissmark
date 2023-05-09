import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"

const BlockChainDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Block Chain Developer.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Blockchain is a data structure using which a digital 
        transaction ledger is created. The ledger stays with a single 
        provider and can be accessed by distributed networks. This is 
        an amalgamation of data blocks connected and secured via cryptography. 
        Each block is connected to a block ahead of them with a hash pointer. 
        It is an innovative and secure way to store private information .`}
      />
      <section className={styles.offered}>
        <div className="container">
          <p>
            The community is responsible for keeping the data present in the
            blockchain safe. As the data is located at several places, it
            minimizes the cost of saving the data. Businesses have lots of data,
            so blockchain developers are recruited to smooth the business
            process. The experts ensure that all the transactions are performed
            without a hassle and stored at low costs.
          </p>
        </div>
      </section>
      <section className={`${styles.offered} alice-Blue-bg` }>
        <div className="container">
          <h3 className="innerHeading">
            Benefits Offered by Blockchain Technology
          </h3>

          <div className="row">
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className= {styles.our_work_box}>
                <h6>Decentralization</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Reduced transaction cost</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Optimum quality data</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Trust</h6>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-xs-12">
              <div className={styles.our_work_box}>
                <h6>Transparency</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.DevelopmentTeamSection} ${styles.letOurWork}`}>
        <div className="container">
          <h3 className="innerHeading">
            Why Hire Web Developers from Spineor Web Services?
          </h3>
          <div className="row">
            <p>
              Spineor Web Services has a team of highly-skilled blockchain
              developers. They have worked on many projects and offer multiple
              solutions of a single problem. We make products both for startups
              and well-established businesses. Our experts have hands-on
              experience dealing with data storage, data distribution, reading,
              and adding blocks of data to secure it. The transactions of
              products and services are validated by incorporating blockchain
              technology. Experts at Spineor are proficient and experienced
              enough to convert your ideas into reality in an affordable way.
              Below are some of the advantages of consulting and hiring our
              blockchain developers:
            </p>
            <div className={`${styles.offered} mb-3 `}>
              <div className="row">
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Process Automation</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Passionate Team</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Skills</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Trust</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Expertise</h6>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-xs-12">
                  <div className={styles.our_work_box}>
                    <h6>Reliable</h6>
                  </div>
                </div>
              </div>
            </div>
            <p>
              We have hands-on experience in blockchain, smart contracts, and
              Decentralized apps. We offer blockchain development services at
              affordable rates. We offer business solutions that are safe,
              cost-effective, and tailored as per your business needs.
            </p>
          </div>
        </div>
      </section>
      <Process />
    </div>
  );
};

export default BlockChainDeveloper;

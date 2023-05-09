import React from "react";
// import "./OurProcess.css";
import processStyles from "Styles/Hire/OurProcessSection.module.css";


const OurProcess = (props:any) => {
  const { setShowSideBar } = props;
  return (
    <>
      <section className={processStyles.ourProcessSection}>
        <div className="container">
          <h3 className="innerHeading">Our Process</h3>
          <br />
          <div className={processStyles.ProcessWrapper}>
            <div className={`${processStyles.comment} ${processStyles.left}`}>
              <div className={processStyles.commentText}>
                <h3>Prototyping</h3>
                <p>
                  After designing, a prototype is built, which is further given
                  for development.
                </p>
                <div className={processStyles.pointed}></div>
              </div>
            </div>
            <div className={`${processStyles.comment} ${processStyles.right}`}>
              <div className={processStyles.commentText}>
                <h3>Design</h3>
                <p>
                  The design phase is carried out using the latest tools and
                  technologies.
                </p>
                <div className={processStyles.pointed}></div>
              </div>
            </div>
            <div className={`${processStyles.comment} ${processStyles.left}`}>
              <div className={processStyles.commentText}>
                <h3>Application Development</h3>
                <p>
                  Our application development services manage your business so
                  efficiently that you can focus on important work.
                </p>
                <div className={processStyles.pointed}></div>
              </div>
            </div>
            <div className={`${processStyles.comment} ${processStyles.right}`}>
              <div className={processStyles.commentText}>
                <h3>Quality</h3>
                <p>
                  The end product is rigorously tested to be bug-free and of
                  optimum quality.
                </p>
                <div className={processStyles.pointed}></div>
              </div>
            </div>
            <div className={`${processStyles.comment} ${processStyles.left}`}>
              <div className={processStyles.commentText}>
                <h3>Deployment</h3>
                <p>
                  The app is finally ready for a launch on the app or play
                  store.
                </p>
                <div className={processStyles.pointed}></div>
              </div>
            </div>
            <div className={`${processStyles.comment} ${processStyles.right}`}>
              <div className={processStyles.commentText}>
                <h3>Maintenance and Support</h3>
                <p>
                  If you are experiencing any concerns, the team is ready to
                  assist you, and maintenance is carried out from time to time.
                </p>
                <div className={processStyles.pointed}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;

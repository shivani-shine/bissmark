import React from "react";
// import "./Process.css";
import processStyles from "Styles/Hire/Process.module.css"
import Process1 from "Assets/images/hire/Process/Experts.png";
import Process2 from "Assets/images/hire/Process/delegate-Team.png";
import Process3 from "Assets/images/hire/Process/Team-Assistance.png";
import Process4 from "Assets/images/hire/Process/Final-Selection.png";
import Image from "next/image";
const Process = (props: any) => {
  const { setShowSideBar } = props;
  return (
    <>
      <section className={processStyles.ProcessSection}>
        <div className="container">
          <h3 className="innerHeading">Our Step by Step Hiring Process</h3>
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className={`${processStyles.whous_item} ${processStyles.whous_item_wdrs}`}>
                <div className={processStyles.whous_icon}>
                  <Image className={processStyles.img} src={Process1} alt="process" />
                </div>
                <h3>Interaction with the Experts</h3>
                <p>
                  Initially, our professionals will gather requirements and
                  ideas. We will thoroughly explain our work process and method
                  to you based on the inputs.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className={`${processStyles.whous_item} ${processStyles.whous_item_wdrs}`}>
                <div className={processStyles.whous_icon}>
                  <Image className={processStyles.img} src={Process2} alt="process"/>
                </div>
                <h3>Delegates Project to the Team</h3>
                <p>
                  Depending upon your requirements, we would assign a team or a
                  member to you. Our team of experts would put heat and sweat to
                  accomplish your goals.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className={`${processStyles.whous_item} ${processStyles.whous_item_wdrs}`}>
                <div className={processStyles.whous_icon}>
                  <Image className={processStyles.img} src={Process3} alt= "process" />
                </div>
                <h3>Team Assistance</h3>
                <p>
                  Our work doesn't end after project delivery. If you're facing
                  any concerns or unsatisfied with our work, the entire project
                  will be revised until the expectations are met.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className={`${processStyles.whous_item} ${processStyles.whous_item_wdrs}`}>
                <div className={processStyles.whous_icon}>
                  <Image className={processStyles.img} src={Process4}  alt="process"/>
                </div>
                <h3>Final Selection</h3>
                <p>
                  You have the chance to select the team of your choice. The
                  desired team will follow the instructions you give until the
                  final step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={processStyles.BuildWrapper}>
        <div className="container">
          If you have an idea in mind, our team of experts would love to hear
          it. Consult our experts TODAY!
        </div>
      </section>
    </>
  );
};

export default Process;

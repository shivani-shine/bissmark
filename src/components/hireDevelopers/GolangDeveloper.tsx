
import HireBanner from "./Components/HireBanner/HireBanner";
import Process from "./Components/Process/Process";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import styles from "Styles/Hire/HireDevelopers.module.css"

const GolangDeveloper = () => {
  return (
    <div>
      <HireBanner
        heading={`Hire Golang Developers.`}
        imageSrc={heroBanner}
        imageClassName={"hireBanner"}
        desc={`Golang is a famous programming language that has set its benchmark as 
        a pioneer. As Google was emerging and the code was written to manage, the 
        infrastructure grew and expanded in size and complexity. Consequently, apps 
        developed on Google cloud started to run slowly and started running on a tough codebase.`}
      />
      <section className={styles.GolangDeveloper}>
        <div className="container">
          <p>
            Several businesses want to integrate into Golang but don't carry
            sound technical knowledge. Give our team of Golang developers at
            Spineor Web Services the opportunity to turn your dreams into
            reality.
          </p>
          <p>
            Initially, Golang was introduced for networking and
            infrastructure-related applications. The language was devised to
            overpower languages like C++ & Java. It has become a part of several
            languages, including the following:
          </p>
          <ul className={styles.listinghWrapper}>
            <li>
              Golang has become a renowned programming language specifically
              designed for cloud base and server-side applications
            </li>
            <li>
              Go is integrated into DevOps and site reliability automation
            </li>
            <li>
              Used to write several command-line programs
              <li>Included in fields such as AI & Data Science </li>
              <li>
                Integrated into microcontroller programs, including Robotics &
                AI.
              </li>
            </li>
          </ul>
        </div>
      </section>

      <section className={`${styles.DevelopmentTeamSection} ${styles.bgColor}`}>
        <div className="container">
          <h3 className="innerHeading">
            Why Choose Golang for App Development?
          </h3>
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.hereing_content}>
                <h5>Memory Management</h5>
                <p>
                  The Golang memory sets a lot of virtual memory aside as an
                  allocation memory. The Go process generally uses virtual
                  memory, and sharing it with other processes becomes
                  impossible.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Garbage Collection</h5>
                <p>
                  Garbage collection or efficient memory management is one of
                  the significant roles performed by Golang. This language gives
                  you complete control over memory allocation, resulting in
                  fewer updates related to garbage collection.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Cross Compiling Functionality</h5>
                <p>
                  App cross-compiling and its implementation on a single machine
                  have been possible due to Golang. Therefore, there is no need
                  to install Golang; just cross-compile the source code and help
                  it run on different machines.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Simple to Comprehend</h5>
                <p>
                  It's easy to comprehend the code written in Golang. The best
                  part is that the code takes a few pages; reading and writing
                  it won't be a cumbersome task for the coder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourProcessSection}>
        <div className="container">
          <h3 className="innerHeading">
            Well-Established Golang Development Company
          </h3>
          <p className="text-center">
            We have a team of skilled professionals. Our team of experts gathers
            your business requirements before working on your project. Our
            experts keep themselves up to date in the latest technology and
            develop ways to fulfill the clients' unique requirements. We tailor
            projects for both start-ups and well-established businesses. If
            you've been struggling to find reliable Golang developers, end your
            search with our proficient experts at Spineor Web Services.
          </p>
          <p className="text-center">
            Apart from the development and designing, our team ensures that the
            end product is bug-free. Every project module undergoes testing, and
            bugs are eliminated before delivering them to you.
          </p>
        </div>
      </section>
      <section className={`${styles.ourProcessSection} alice-Blue-bg `}>
        <div className="container">
          <h3 className="innerHeading">
            Why Choose Spineor Web Services for Golang Development Services?
          </h3>
          <p className="text-center">
            Our experts have sound knowledge & experience in handling web
            development code. Here is why you should avail of web development
            services from Spineor Web Services:
          </p>
          <br />
          <div className="row ">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>AI App Coders</h5>
                <p>
                  Building impeccable AI applications, deep learning software,
                  and Chatbots. Have our team of developers who will devise
                  Golang applications that will be used for natural language
                  processing, visualization, data analysis, and more.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Cloud App Development</h5>
                <p>
                  Our developers are highly skilled in building huge cloud
                  applications. This is basically an open-source programming
                  language with excellent interoperability with cloud
                  technologies.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>Command Line Tools</h5>
                <p>
                  Golang comes with predefined libraries that simplify the
                  command line tools. Furthermore, our experts introduce you to
                  prompt and lightweight command light solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                {" "}
                <h5>Golang Re-engineering</h5>
                <p>
                  Update your existing application into Golang with the
                  assistance of our team of experts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.textBottom}>
                <h5>App Maintenance</h5>
                <p>
                  When it comes to application maintenance in Golang, our team
                  of professionals leaves no stone unturned.
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

export default GolangDeveloper;

import Image from 'next/image';
import styles from 'Styles/Blog.module.css'
import blogimg2 from "Assets/images/blog/blg9.png";
import { Accordion } from "react-bootstrap";
import blogBg from 'Assets/images/blog/bgBlog.png'

const Blog = () => {
  return (
    <div>
      <section className={styles.BlogBanner}
     style={{
      backgroundImage: `url(${blogBg.src})`,
      backgroundPosition: "right",
       backgroundSize: "cover",
       backgroundRepeat:'no-repeat',
     }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6 text-section">
              <div className="text-section">
                <h1>Blogs, News and Updates</h1>
                <p>
                  Every week we share out expertise on effective strategies and
                  techniques to help you reach customers and prospects across
                  the entire web.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-section"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-lg-8 text-section">
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
              <div className={styles.the_convergence}>
                <a href="#">
                  <div className={styles.blog_img_wrapper}>
                    <Image src={blogimg2} alt="" />
                  </div>
                  <div className={styles.inner_convergence}>
                    <h5>
                      React.js Scope for Freshers{" "}
                      <span>24/12/2013 / by John</span>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent eu nisi ac mi malesuada vestibulum. Phasellus
                      tempor nunc eleifend cursus molestie. Mauris lectus arcu,
                      pellentesque at sodales sit amet, condimentum id nunc.
                      Donec ornare mattis suscipit. Praesent fermentum accumsan
                      vulputate. Sed velit nulla, sagittis non erat id, dictum
                      vestibulum ligula. Phasellus tempor nunc eleifend cursus
                      molestie. Mauris lectus arcu, pellentesque at sodales sit
                      amet, condimentum id nunc. Donec ornare mattis suscipit.
                      Praesent fermentum accumsan vulputate. Sed velit nulla,
                      sagittis non erat id
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 ">
              <div className={styles.filter_wrapper}>
                <div className={`${styles.Blog_filter} mb-5`}>
                  <div className="accordion_wrapper">
                    <h3>CATEGORIES</h3>
                    <div>
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ecommerce</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Magento</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Magento</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Technology</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                  </div>
                </div>

                
                <div className={`${styles.Blog_filter} mb-5`}>
                  <div className={styles.tag_wrapper}>
                    <h3>TAGS</h3>
                    <div className={styles.tag_row}>
                      <span className={styles.active}>Wordpress</span>
                      <span className="">Development</span>
                      <span className="">php</span>
                      <span className="">CCS3</span>
                      <span className="">HTML5</span>
                      <span className="">Bootstrap</span>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div className={styles.Blog_filter}>
                  <div className={styles.tag_wrapper}>
                    <h3>LATEST POSTS</h3>
                    <div className={styles.post_item}>
                      <div className={styles.post_item_row}>
                        <div className={styles.post_images}>
                          <Image src={blogimg2} alt='' />
                        </div>
                        <div className={styles.post_text}>
                          <span>24/11/2022</span>
                          <h6>
                            Duis placerat rhoncus arcu, sit amet aliquam leo
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={styles.post_item}>
                      <div className={styles.post_item_row}>
                        <div className={styles.post_images}>
                          <Image src={blogimg2} alt='' />
                        </div>
                        <div className={styles.post_text}>
                          <span>24/11/2022</span>
                          <h6>
                            Duis placerat rhoncus arcu, sit amet aliquam leo
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={styles.post_item}>
                      <div className={styles.post_item_row}>
                        <div className={styles.post_images}>
                          <Image src={blogimg2} alt='' />
                        </div>
                        <div className={styles.post_text}>
                          <span>24/11/2022</span>
                          <h6>
                            Duis placerat rhoncus arcu, sit amet aliquam leo
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={styles.post_item}>
                      <div className={styles.post_item_row}>
                        <div className={styles.post_images}>
                          <Image src={blogimg2} alt='' />
                        </div>
                        <div className={styles.post_text}>
                          <span>24/11/2022</span>
                          <h6>
                            Duis placerat rhoncus arcu, sit amet aliquam leo
                          </h6>
                        </div>
                      </div>
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

export default Blog;

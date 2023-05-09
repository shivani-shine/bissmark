import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "Styles/Home/Testimonials.module.css";

const Testimonials = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1365,

        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.testimonials_section}>
      <div className='container'>
        <div className='row'>
          <div className={styles.heading_wrapper}>
            <span>TESTIMONIALS</span>
          </div>
          <div className={styles.what_our_client}>
            <h2 className={`${styles.heading} text-center`}>
              What do people praise about <span>BISSMARKS?</span>
            </h2>
          </div>

          <div className={styles.tsmnl_carousel}>
            <Slider  {...settings}>
            <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <img
                        data-src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        className="lazy"
                        src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        alt = "img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3 className={`${styles.reviews_item_name} ${styles.item_heading}`}>
                        Daniel Rose
                      </h3>
                      <div className={styles.reviews_item_position}>
                        Regular client
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                    Spineor is a highly-skilled team offering top-notch
                    designing and development services and focuses on customer
                    requirements. I recommend them to all!
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <img
                        data-src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        className="lazy"
                        src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3 className={`${styles.reviews_item_name} ${styles.item_heading}`}>
                        Neville Christine
                      </h3>
                      <div className={styles.reviews_item_position}>
                        Regular client
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                    I am very thankful to Spineor Webservices for building a
                    fully functional and responsive web app. It is performing
                    exceptionally well.
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <img
                        data-src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        className="lazy"
                        src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3 className={`${styles.reviews_item_name} ${styles.item_heading}`}>
                        Ed Samuel
                      </h3>
                      <div className={styles.reviews_item_position}>
                        Regular client
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                    I am happy to associate with a solution-minded and talented
                    team of experts for my 10-year-old website. They are doing
                    an excellent job.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

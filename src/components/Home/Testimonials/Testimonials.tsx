import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "Styles/Home/Testimonials.module.css";
import Image from 'next/image';
import profile from '../../../assets/images/profile.png'

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
      <div className="container">
        <div className="row">
          <div className={styles.heading_wrapper}>
            <span>TESTIMONIALS</span>
          </div>
          <div className={styles.what_our_client}>
            <h2 className={`${styles.heading} text-center`}>
              What do people praise about <span>BISSMARKS?</span>
            </h2>
          </div>

          <div className={styles.tsmnl_carousel}>
            <Slider {...settings}>
              {/* 1 */}
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <Image
                        // data-src="../assets/images/profile.png"
                        className="lazy"
                        src={profile}
                        width={50}
                        height={50}
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3
                        className={`${styles.reviews_item_name} ${styles.item_heading}`}
                      >
                        TENTREK
                      </h3>
                      <div className={styles.reviews_item_position}>
                        BC, Canada
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                    Bissmarks team was great to talk to, and simplified what
                    seemed like a very complicated process for me to do on my
                    own. I would be a returning customer!
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <Image
                        className="lazy"
                        src={profile}
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3
                        className={`${styles.reviews_item_name} ${styles.item_heading}`}
                      >
                        ELLULAR
                      </h3>
                      <div className={styles.reviews_item_position}>
                      WYOMING, UNITED STATES
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                  Excellent work, communication was great and the work was delivered very quickly!!
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                    <Image
                        className="lazy"
                        src={profile}
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3
                        className={`${styles.reviews_item_name} ${styles.item_heading}`}
                      >
                        NEWHAZON
                      </h3>
                      <div className={styles.reviews_item_position}>
                      SINGAPORE
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                  Amazing! Bissmarks team has been very patient with all the queries, fast to reply as always. The step to step guide on what to do on USPTO is the best I’ve seen!
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                    <Image
                        className="lazy"
                        src={profile}
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3
                        className={`${styles.reviews_item_name} ${styles.item_heading}`}
                      >
                        BRITMILE
                      </h3>
                      <div className={styles.reviews_item_position}>
                      FLORIDA, UNITED STATES
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                  Very helpful and clear with all the information required. Excellent customer service as well.
                  </p>
                </div>
              </div>
              {/* 5 */}
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                    <Image
                        className="lazy"
                        src={profile}
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3
                        className={`${styles.reviews_item_name} ${styles.item_heading}`}
                      >
                        DEEPBATH
                      </h3>
                      <div className={styles.reviews_item_position}>
                      UNITED ARAB EMIRATES
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                  My previous order with another big company took one month and after paying all the government fees, my attorney did not respond to my emails. Its been a nightmare for me and raised red flag as it could be someone want to steal my company name.
                  </p>
                </div>
              </div>
              {/* 6 */}
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                    <Image
                        className="lazy"
                        src={profile}
                        alt="img"
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3
                        className={`${styles.reviews_item_name} ${styles.item_heading}`}
                      >
                        CHOUSSE
                      </h3>
                      <div className={styles.reviews_item_position}>
                      ISRAEL
                      </div>
                    </div>
                  </div>
                  <p className={styles.comment}>
                  The communication with this company was amazing. Very responsive, they did their part very fast. You can see they have a lot of experience and very professional. Will come back!!
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

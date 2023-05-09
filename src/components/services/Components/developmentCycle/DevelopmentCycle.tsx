import React from "react";
import styles from "Styles/DevelopmentCycle.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pagination = [
  {
    id: 1,
    Image: "images/Blockchain/Truffle-logo.jpg",
    value: "planning",
  },
  {
    id: 2,
    Image: "images/Blockchain/Hyperledger-logo.jpg",
    value: "development",
  },
  {
    id: 3,
    Image: "images/Blockchain/Truffle-logo.jpg",
    value: "testing",
  },
  {
    id: 4,
    Image: "",
    value: "devops",
  },
  {
    id: 5,
    Image: "",
    value: "",
  },
  {
    id: 6,
    Image: "",
    value: "",
  },
  {
    id: 7,
    Image: "",
    value: "",
  },
];

const DevelopmentCycle = () => {
  // var settings = {
  //   autoplaySpeed: 2000,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   customPaging: function (i: any) {
  //     return (
  //       <a>
  //         <img src={pagination[i].Image} />
  //         <p>{pagination[i].value}</p>
  //       </a>
  //     );
  //   },

  //   responsive: [
  //     {
  //       breakpoint: 1365,

  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,

  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  
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
          {/* <div className={styles.tsmnl_carousel}>
            <Slider {...settings}>
              <div className={styles.item}>
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <img
                        data-src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        className="lazy"
                        src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        alt
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3 className={`${styles.reviews_item_name} item-heading `}>
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
              <div className="item">
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <img
                        data-src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        className="lazy"
                        src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        alt
                        data-loaded="true"
                      />
                    </div>
                    <div className={styles.reviews_item_info}>
                      <h3 className={`${styles.reviews_item_name} item-heading`}>
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
              <div className="item">
                <div className={styles.carousel_item}>
                  <div className={styles.reviews_item_header}>
                    <div className={styles.reviews_item_img}>
                      <img
                        data-src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        className="lazy"
                        src="https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/05/auth-img-1.jpg"
                        alt
                        data-loaded="true"
                      />
                    </div>
                    <div className="reviews-item-info">
                      <h3 className={`${styles.reviews_item_name} item-heading`}>
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
          </div> */}

          <div className={styles.tsmnl_carousel}>
            <Slider {...settings}>
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
                    requirements. 
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

export default DevelopmentCycle;


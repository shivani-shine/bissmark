import React from "react";
import experience from "Assets/images/Technologies-logo/banner-ldps.png";
import angular from "Assets/images/Technologies-logo/angular.png";
import python from "Assets/images/Technologies-logo/python.png";
import react from "Assets/images/Technologies-logo/react.png";
import wordpress from "Assets/images/Technologies-logo/wordpress.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechStyle from "Styles/Home/Technologies.module.css";
import Image from "next/image";

const Technologies = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className={TechStyle.techno}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className="col-sm-3 col-md-1">
            {/* <div className={TechStyle.Technologies_experience}>
              <div className={TechStyle.experience_Item}>
              <Image src={experience} alt='experience' 
                style={{
                  height:'70px !important',
                  width: '70px !important'
                }}
                />
              </div>
            </div> */}
          </div>
          <div className="col-sm-9 col-md-10">
            <div className={TechStyle.Technologies}>
              <div className={TechStyle.techo_img}>
                <Slider {...settings}>
                  <div className="item">
                    <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                  <div className="item">
                  <p style={{color: 'white', fontSize: 26, fontWeight: "bold"}}>UNITED STATES</p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

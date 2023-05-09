import { useState, useEffect } from "react";
import heroBanner from "Assets/images/herobanner/herobanner-mobile.png";
import bannerBg from "Assets/images/herobanner/banner-bg.png";
import bannerImageOne from "Assets/images/herobanner/images-1.png";
import bannerImageTwo from "Assets/images/herobanner/images-2.png";
import bannerImageThree from "Assets/images/herobanner/images-3.png";
import { useDispatch } from "react-redux";
import { sideBarHandlerAction } from "Redux/appActions";
import SliderStyle from "Styles/Home/Slider.module.css";
import Image from "next/image";

const Slider = () => {
  const [isClient, setIsClient] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleMouseMove = (event: any) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const translateX = (mouseX / window.innerWidth) * 20;
        const translateY = (mouseY / window.innerHeight) * 20;
        setTranslateX(translateX);
        setTranslateY(translateY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isClient]);

  return (
    <section className={`${SliderStyle.home_banner} banner`} id="top">
      <div>
        <div className={SliderStyle.banner_contact}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h1>
                  Add Your Business to the{" "}
                  <span className={SliderStyle.banner_title}>TRADEMARK</span>{" "}
                  protected list today
                </h1>
                <p>
                  Attorney-led filing @ $99 only with a free search First time
                  at this pricing
                </p>
                <button className={SliderStyle.btn_online}>
                  Everything Online!
                </button>
                <button className={SliderStyle.start_btn}>START NOW!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

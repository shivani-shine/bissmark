import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import LetsGetStarted from "Components/Home/LetsGetStarted/LetsGetStarted";
import OurWork from "Components/Home/OurWork/OurWork";
import OurService from "Components/Home/service/OurService";
import Slider from "Components/Home/Slider/Slider";
import Technologies from "Components/Home/Technologies/Technologies";
import Testimonials from "Components/Home/Testimonials/Testimonials";
// import Header from 'Root/components/Header/Header';
//  import Footer from 'Root/components/Footer/Footer';
import VideoSection from 'Root/components/Home/video/video';
import Faqs from 'Root/components/Home/Faqs/Faqs';
import Registeration from 'Root/components/Home/Registration/Registration';

const Home = () => {
  return (
    <>
      <Slider />
      <OurService />
      {/* <Technologies /> */}
     {/* <VideoSection/> */}
     {/* <Registeration /> */}
     <LetsGetStarted />
     <OurWork /> 
      <Faqs />
      <Testimonials />
    </>
  );
};

export default Home;

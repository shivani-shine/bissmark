import React, { useEffect, useRef, useState } from "react";
//import "./video.css";
// import poster from "Assets/video/Bringing_High-poster.png";
import thumbnail from "Assets/video/thumbnail.png";
import VideoStyle from "Styles/Home/video.module.css";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoSection = () => {
  // const videoRef = useRef<any>();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  // const buttonClickHandler = () => {
  //   videoRef.current.play();
  // };

  // const videoClickHandler = () => {
  //   setShowVideo(!showVideo);
  //   if (showVideo) {
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // };

  // const pauseHandler = () => {
  //   setShowVideo(true);
  // };
  // const playHandler = () => {
  //   setShowVideo(false);
  // };

  return (
    <section className={VideoStyle.video_section}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h2>
              Bringing High-End Web Designing Development Business Solutions
            </h2>
            <p>
              The world is moving rapidly, and it's time to make a move that
              sets you apart from others. Our web development agency brings
              engaging, and customer focussed websites to you. Most
              significantly, the website design and navigation incorporated by
              you say a lot about your business. Our experts gather your
              business requirements, thereby bringing an innovative and
              technologically advanced website for better retention and
              conversions. With Over 10+ years of experience, we carry a strong
              market reputation due to the relentless pursuit of our web
              designers and developers.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className={VideoStyle.vider_wrapper}>
              {/* <video
                onClick={() => videoClickHandler()}
                poster={poster}
                ref={videoRef}
                className={VideoStyle.video}
                onPlay={() => playHandler()}
                onPause={() => pauseHandler()}
                id="videoId"
              >
                <source src="assets/video/Bringing_High.mp4" type="video/mp4" />
                <video controls src={"/spineor.mp4"} style={{ width: "400px", height:"400px" }} />
              </video>
              {showVideo && (
                <div
                  className={VideoStyle.playpause}
                  onClick={() => buttonClickHandler()}
                />
              )} */}
              {showVideo && (
                <ReactPlayer
                  url={"/spineor.mp4"}
                  light
                  playIcon={<Image  className="videoimg"src={thumbnail} alt="" />}
                  loop
                  width="100%"
                  controls
                  playing
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

import React from 'react'
import "./serviceBanner.css"
const serviceBanner = () => {
  return (
    
        <section className="service-banner banner serviceInnerBanner serviceBanner" id="top">
      <div id="contaianer">
        <div className="banner-contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h1>{props.heading}</h1>
                <p>{props.desc}</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <div
                  id="wrapper"
                  className={`HerobannerDesktop ${props.imageClassName}`}
                >
                  <div
                    className="p3"
                    data-speed="0.01"
                    style={{ transform: "matrix(1, 0, 0, 1, 5.205, -0.145)" }}
                  />
                </div>
                <div className="Herobannermovile">
                  <img src={props.imageSrc} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default serviceBanner